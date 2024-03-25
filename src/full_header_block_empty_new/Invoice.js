import React from 'react';
import { Page, View } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceFooter from './InvoiceFooter';

const FullHeaderBlockEmpty = ({
  pageDetails: { pageSize, styles, imageContainer },
  pages,
  title,
  invoiceDetails,
  invoice,
  invoice_head,
  doctor_details,
  patient_details,
  max_items,
  printColumns,
  printTableStyles,
  products_arr,
  gstEnabled,
  message,
  print_layout,
  settingsInfo,
  clientInformation,
  inventoryType,
  snoStart,
  blankLinesCount,
  maxCharsPerLine,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} style={styles}>
      <View style={imageContainer}>
        <InvoiceTitle
          title={title}
          invoice={invoice}
          header={invoice_head}
          customer={patient_details}
          doctor={doctor_details}
          logo_url={`${clientInformation?.client_logo}`}
          length={pages?.length}
          number={index + 1}
          inventoryType={inventoryType}
        />
        <InvoiceItemsTable
          invoice={invoice}
          products={page}
          max_items={max_items}
          printType={print_layout}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
          snoStart={snoStart?.[index]}
          maxCharsPerLine={maxCharsPerLine}
          blankLinesCount={blankLinesCount?.[index]}
        />
        <InvoiceFooter
          invoice={invoice}
          footer={invoice_head}
          items={products_arr?.length}
          products={products_arr}
          gstEnabled={gstEnabled}
          printType={print_layout}
          length={pages?.length}
          number={index + 1}
          qr_code={`${
            settingsInfo?.qr_code ??
            'https://sp360logo.blob.core.windows.net/logo/1704796242270-white-square.jpg'
          }`}
          settings={invoiceDetails}
          message={message}
        />
      </View>
    </Page>
  ));
};

export default FullHeaderBlockEmpty;
