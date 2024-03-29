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
import InvoiceTitle from './InvoiceTitle';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceFooter from './InvoiceFooter';
import IrnNote from './IrnNote';
import TempNote from './TempNote';

import InvoiceTitleNoLogo from './noLogoInv/InvoiceTitle';
import InvoiceItemsTableNoLogo from './noLogoInv/InvoiceItemsTable';
import InvoiceFooterNoLogo from './noLogoInv/InvoiceFooter';
import TempNoteNoLogo from './noLogoInv/TempNote';

import apiRequest from '../../utils/api';
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
    borderWidth: 1,
    borderColor: '#000',
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
  isPreview,
  printDetails,
  resetPrintOutState,
}) {
  Font.register({
    family: 'Helvetica',
    fonts: [
      {
        src: `./data/Helvetica.ttf`,
      },
      {
        src: `./data/Helvetica-Bold.ttf`,
        fontWeight: 'bold',
      },
    ],
  });

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
    return () => (cancel = true);
  }, []);

  React.useEffect(() => {
    if (Object.keys(invoiceDetails).length > 0) {
      if (!isPreview) {
        try {
          JSPWork();
          resetPrintOutState();
        } catch (error) {
          console.error(error);
        }
      } else {
        setPDFRender(true);
      }
    }
  }, [invoiceDetails]);

  async function getInvoiceSettings() {
    try {
      const response = await apiRequest('api/invoice_settings', null, 'GET');
      setInvoiceDetails(response.results[0]);
    } catch (error) {
      console.error(error);
    }
  }

  function JSPWork() {
    if (JSPrintManager.websocket_status == WSStatus.Open) {
      var cpj = new ClientPrintJob();
      cpj.clientPrinter = new InstalledPrinter(printDetails?.printer);
      const element = createDoc();
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
  }

  async function savePDF(rows) {
    const element = createDoc();
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

  const rows = pages.map((page, index) => (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <InvoiceTitle
        title={title}
        invoice={invoiceDetails}
        header={entry}
        customer={customer}
        logo_url={`${clientInformation?.client_logo}`}
      />
      <IrnNote footer={entry} />
      <InvoiceItemsTable
        invoice={invoiceDetails}
        products={page}
        max_items={max_items}
      />
      <InvoiceFooter
        footer={entry}
        items={items}
        invoice={invoiceDetails}
        products={products}
        show_total={index == pages.length - 1 ? true : false}
        qr_code={`${
          settingsInfo?.qr_code ??
          'https://sp360logo.blob.core.windows.net/logo/1704796242270-white-square.jpg'
        }`}
      />
      <TempNote
        footer={entry}
        page_number={`Page ${index + 1} of ${pages.length}`}
      />
    </Page>
  ));

  const headerNoLogoInvoice = pages.map((page) => (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <InvoiceTitleNoLogo
        title={title}
        invoice={invoiceDetails}
        header={entry}
        customer={customer}
        logo_url={`${clientInformation?.client_logo}`}
      />
      <InvoiceItemsTableNoLogo
        invoice={invoiceDetails}
        products={page}
        max_items={max_items}
      />
      <InvoiceFooterNoLogo
        footer={entry}
        items={items}
        invoice={invoiceDetails}
        products={products}
        qr_code={`${
          settingsInfo?.qr_code ??
          'https://sp360logo.blob.core.windows.net/logo/1704796242270-white-square.jpg'
        }`}
      />
      <TempNoteNoLogo footer={entry} />
    </Page>
  ));

  const renderprintLayout = () => {
    switch (invoiceDetails?.print_layout_sale_id) {
      case 1:
        return rows;
      // case 2:
      // case 3:
      // case 4:
      //   return fullHeaderRows;
      // case 5:
      //   return fullHeaderBlockRows;
      case 6:
        return rows;
      case 7:
        return headerNoLogoInvoice;
      default:
        return rows;
    }
  };

  function createDoc() {
    return (
      <Document
        id="PDFViewer"
        title={`INVOICE-${entry.entry_number}`}
        key={entry.entry_number}
      >
        {renderprintLayout()}
      </Document>
    );
  }

  if (isPreview) {
    return (
      <Fragment>
        {pdfRender && (
          <div style={{ height: '100%' }}>
            <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
              {createDoc()}
            </PDFViewer>
          </div>
        )}
      </Fragment>
    );
  } else {
    return <></>;
  }
}
