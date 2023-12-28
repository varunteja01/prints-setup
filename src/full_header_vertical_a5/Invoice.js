import React from 'react';
import { Page, View } from '@react-pdf/renderer';
import InvoiceTitleFullHeaderVerticalA5 from './InvoiceTitle';
import InvoiceItemsTableFullHeaderVerticalA5 from './InvoiceItemsTable';
import InvoiceFooterFullHeaderVerticalA5 from './InvoiceFooter';
import TempNoteFullHeaderVerticalA5 from './TempNote';

const FullHeaderVerticalA5 = ({
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
  crdb_amount,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} style={styles}>
      <View style={styles.imageContainer2}>
        {/* <View style */}
        <InvoiceTitleFullHeaderVerticalA5
          title={title}
          invoice={invoice}
          header={entry}
          customer={customer}
          logo_url={`${clientInformation?.client_logo}`}
        />
        <InvoiceItemsTableFullHeaderVerticalA5
          invoice={invoice}
          products={page}
          max_items={max_items}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
        />
        <InvoiceFooterFullHeaderVerticalA5
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
        <TempNoteFullHeaderVerticalA5
          footer={entry}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ));
};

export default FullHeaderVerticalA5;
