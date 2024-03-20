import React, { Fragment, useEffect } from 'react';
import {
  Page,
  Document,
  StyleSheet,
  Font,
  PDFViewer,
  pdf,
} from '@react-pdf/renderer';
import {
  JSPrintManager,
  WSStatus,
  ClientPrintJob,
  PrintRotation,
  PrintFilePDF,
  Sizing,
  FileSourceType,
  InstalledPrinter,
} from 'jsprintmanager';

import InvoiceTitleNoLogo from './InvoiceTitle';
import InvoiceItemsTableNoLogo from './InvoiceItemsTable';
import InvoiceFooterNoLogo from './InvoiceFooter';
import TempNoteNoLogo from './TempNote';
import apiRequest from 'utils/api';
import axios from 'axios';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    flexDirection: 'column',
    size: 'A4 landscape',
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default function Invoice({
  invoice,
  entry,
  products,
  customer,
  title,
  items,
  saveFileBlob = false,
  handlePrintClose,
  isPreview,
  printDetails,
  resetPrintOutState,
  crdb_amount,
}) {
  const [invoiceDetails, setInvoiceDetails] = React.useState({});

  const [pdfRender, setPDFRender] = React.useState(false);
  const clientInformation = useSelector((state) => state.client);
  const settingsInfo = useSelector((state) => state.settings);

  React.useEffect(() => {
    let cancel = false;
    getInvoiceSettings().then(() => {
      if (cancel) return;
      if (saveFileBlob) {
        savePDF(rows);
      }
    });
    return () => {
      cancel = true;
    };
  }, []);

  async function getInvoiceSettings() {
    try {
      const response = await apiRequest('api/invoice_settings', null, 'GET');
      console.log('invoice_settings', response.results[0]);
      console.info('invoice_settings');
      setInvoiceDetails(response.results[0]);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    if (Object.keys(invoiceDetails).length > 0) {
      if (!isPreview) {
        try {
          if (JSPrintManager.websocket_status == WSStatus.Open) {
            var cpj = new ClientPrintJob();
            cpj.clientPrinter = new InstalledPrinter(printDetails?.printer);
            const element = createDoc(rows);
            const blob = pdf(element).toBlob();
            const no_of_copies = parseInt(printDetails?.copies);
            let myPrintFile = new PrintFilePDF(
              blob,
              FileSourceType.BLOB,
              `INVOICE-${entry?.entry_number}`,
              no_of_copies,
            );
            myPrintFile.printRotation = PrintRotation['Rot90'];
            myPrintFile.pageSizing = Sizing['Fit'];
            cpj.files.push(myPrintFile);
            cpj.onUpdated = function (data) {
              console.log('JSP onUpdated', data);
            };
            cpj.onFinished = function (data) {
              console.log('JSP onFinished', data);
            };
            cpj.sendToClient();
          } else if (JSPrintManager.websocket_status == WSStatus.Closed)
            console.log('JSPM is not installed or not running!');
          else if (JSPrintManager.websocket_status == WSStatus.Blocked)
            console.log('JSPM has blocked this website!');
        } catch (error) {
          console.error(error);
        }
        resetPrintOutState();
      } else {
        // setPDFRender(true);
      }
    }
  }, [invoiceDetails]);

  async function savePDF(rows) {
    const element = createDoc(rows);
    const myPdf = pdf([]);
    myPdf.updateContainer(element);
    const blob = await myPdf.toBlob(); /*create blob*/
    var file = new File([blob], `${entry.entry_number}.pdf`, {
      lastModified: new Date().getTime(),
    });
    let data = new FormData();
    data.append('file', file);
    data.append('salehead_id', entry.id);
    const uri = `${axios.defaults.baseURL}${'api/upload_invoice_pdf'.replace(
      'api',
      '',
    )}`;
    const token = localStorage.getItem('authorization');

    var headers = {};

    headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      ...headers,
    };

    if (token) {
      headers = { ...headers, Authorization: `${token}` };
    }

    const config = {
      headers: headers,
    };
    const response = await axios.post(uri, data, config);
  }

  const pages = [];
  const max_items = 20;
  const count = (products.length / max_items).toFixed(0);
  let i = 0;
  if (count > products.length / max_items) {
    for (i = 0; i < count; i++) {
      var start = max_items * i;
      var end =
        products.length >= start + max_items
          ? start + max_items
          : products.length;
      pages[i] = products.slice(start, end);
    }
  } else {
    for (i = 0; i < parseInt(count) + 1; i++) {
      var start = max_items * i;
      var end =
        products.length >= start + max_items
          ? start + max_items
          : products.length;
      pages[i] = products.slice(start, end);
    }
  }

  const rows = pages.map((page) => (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <InvoiceTitleNoLogo
        title={title}
        invoice={invoice}
        header={entry}
        customer={customer}
        logo_url={`${clientInformation?.client_logo}`}
      />
      <InvoiceItemsTableNoLogo
        invoice={invoice}
        products={page}
        max_items={max_items}
      />
      <InvoiceFooterNoLogo
        footer={entry}
        items={items}
        invoice={invoice}
        qr_code={`${
          settingsInfo?.qr_code ??
          'https://sp360logo.blob.core.windows.net/logo/1704796242270-white-square.jpg'
        }`}
        crdb_amount={crdb_amount}
      />
      <TempNoteNoLogo footer={entry} />
    </Page>
  ));

  function createDoc(rows) {
    return (
      <Document
        id="PDFViewer"
        key={entry?.entry_number}
        title={`INVOICE-${entry?.entry_number}`}
      >
        {rows}
      </Document>
    );
  }

  if (isPreview) {
    return (
      <Fragment>
        {pdfRender && (
          <PDFViewer width="100%" height="800">
            {createDoc(rows)}
          </PDFViewer>
        )}
      </Fragment>
    );
  } else {
    return <></>;
  }
}
