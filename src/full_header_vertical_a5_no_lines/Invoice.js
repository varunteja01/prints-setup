import React from 'react';
import { Page, View } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceFooter from './InvoiceFooter';
import TempNote from './TempNote';

const FullHeaderVerticalA5NoLines = ({
  pageDetails: { pageSize, orientation, styles, pageStyle, imageContainer },
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
  crdb_amount,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} style={pageStyle}>
      <View style={imageContainer}>
        {/* <View style */}
        <InvoiceTitle
          title={title}
          invoice={invoice}
          header={entry}
          customer={customer}
          logo_url={`${clientInformation?.client_logo}`}
        />
        <InvoiceItemsTable
          invoice={invoice}
          products={page}
          max_items={max_items}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
        />
        <InvoiceFooter
          footer={entry}
          items={items}
          products={products}
          invoice={invoice}
          show_total={index == pages.length - 1 ? true : false}
          qr_code={`${
            settingsInfo?.qr_code == ''
              ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
              : settingsInfo?.qr_code
          }`}
          crdb_amount={crdb_amount}
        />
        <TempNote
          footer={entry}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ));
};

export default FullHeaderVerticalA5NoLines;
