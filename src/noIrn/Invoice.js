import React from 'react'
import { Page } from '@react-pdf/renderer'
import InvoiceTitleNoIRN from './InvoiceTitle'
import InvoiceItemsTableNoIrn from './InvoiceItemsTable'
import InvoiceFooterNoIrn from './InvoiceFooter'
import TempNoteNoIrn from './TempNote'

const ImageHeaderNoIRN = ({
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
  client,
  dynamicPagination = false,
  maxCharsPerLine,
  page_blanks = 0,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} orientation={orientation} style={styles}>
      <InvoiceTitleNoIRN
        title={title}
        invoice={invoice}
        header={entry}
        customer={customer}
        logo_url={`${clientInformation?.client_logo}`}
      />
      <InvoiceItemsTableNoIrn
        products={page}
        pageno={index}
        max_items={
          pages?.length - 1 == index ? max_items : pages[index]?.length
        }
        printColumns={printColumns}
        printTableStyles={printTableStyles}
        dynamicPagination={dynamicPagination}
        maxCharsPerLine={maxCharsPerLine}
        pages={pages}
        page_blanks={page_blanks}
      />
      <InvoiceFooterNoIrn
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
      />
      <TempNoteNoIrn
        footer={entry}
        page_number={`Page ${index + 1} of ${pages.length}`}
      />
    </Page>
  ))
}

export default ImageHeaderNoIRN
