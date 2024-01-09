import React from 'react';
import { Page, View } from '@react-pdf/renderer';
import InvoiceTitleVerticalA5V2 from './InvoiceTitle';
import InvoiceItemsTableVerticalA5V2 from './InvoiceItemsTable';
import InvoiceFooterVerticalA5V2 from './InvoiceFooter';
import TempNoteVerticalA5V2 from './TempNote';

const FullHeaderA4A5V2 = ({
  pageDetails: { pageSize, halfPage, imageContainer, imageContainer2 },
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
  crdb_amount,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} style={halfPage}>
      <View
        style={
          print_layout == 'full_header_vertical_a5_v2'
            ? imageContainer2
            : imageContainer
        }
      >
        <InvoiceTitleVerticalA5V2
          title={title}
          invoice={invoice}
          header={entry}
          customer={customer}
          logo_url={`${clientInformation?.client_logo}`}
        />
        <InvoiceItemsTableVerticalA5V2
          invoice={invoice}
          products={page}
          max_items={max_items}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
        />
        <InvoiceFooterVerticalA5V2
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
        <TempNoteVerticalA5V2
          footer={entry}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ));
};

export default FullHeaderA4A5V2;
