import React from 'react';
import { Page } from '@react-pdf/renderer';
import InvoiceTitleNoIRNWithDue from './InvoiceTitle';
import InvoiceItemsTableNoIrnWithDue from './InvoiceItemsTable';
import InvoiceFooterNoIrnWithDue from './InvoiceFooter';
import IrnNote from './IrnNote';
import TempNoteNoIrnWithDue from './TempNote';

const NoIRNWithDueAmount = ({
  pageDetails: { pageSize, orientation, styles },
  pages,
  title,
  invoice,
  entry,
  customer,
  max_items,
  printColumns,
  printTableStyles,
  items,
  products,
  clientInformation,
  settingsInfo,
  print_layout,
  fetchQRUrl = () => {},
  clientAnalyticStats,
  snoStart,
  blankLinesCount,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} orientation={orientation} style={styles}>
      <InvoiceTitleNoIRNWithDue
        title={title}
        invoice={invoice}
        header={entry}
        customer={customer}
        logo_url={`${clientInformation?.client_logo}`}
        firmInfo={
          print_layout != 'no_irn_with_due_amount_and_no_firm_info_auth_sign'
            ? true
            : false
        }
      />
      {print_layout == 'irn_with_due' ? (
        <IrnNote footer={entry} qr_code={fetchQRUrl(entry?.irn_qrcode)} />
      ) : (
        <></>
      )}
      <InvoiceItemsTableNoIrnWithDue
        invoice={invoice}
        products={page}
        max_items={max_items}
        printColumns={printColumns}
        printTableStyles={printTableStyles}
        verticalRows={print_layout != 'no_irn_with_due_amount' ? true : false}
        pageno={index}
        snoStart={snoStart?.[index]}
        blankLinesCount={blankLinesCount?.[index]}
      />
      <InvoiceFooterNoIrnWithDue
        footer={entry}
        items={items}
        products={products}
        invoice={invoice}
        show_total={index == pages.length - 1 ? true : false}
        page_number={index + 1}
        qr_code={`${
          settingsInfo?.qr_code ??
          'https://sp360logo.blob.core.windows.net/logo/1704796242270-white-square.jpg'
        }`}
        clientAnalyticStats={clientAnalyticStats}
        firmInfo={
          print_layout != 'no_irn_with_due_amount_and_no_firm_info_auth_sign'
            ? true
            : false
        }
        clientInformation={clientInformation}
      />
      <TempNoteNoIrnWithDue
        footer={entry}
        page_number={`Page ${index + 1} of ${pages.length}`}
      />
    </Page>
  ));
};

export default NoIRNWithDueAmount;
