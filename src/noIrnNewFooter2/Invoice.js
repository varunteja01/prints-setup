import React from 'react'
import { Page } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import TempNote from './TempNote'

const Invoice = ({
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
  clientAnalyticStats,
  clientInformation,
  settingsInfo,
  client,
  crdb_amount,
  dynamicPagination = false,
  maxCharsPerLine,
  page_blanks = 0,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} orientation={orientation} style={styles}>
      <InvoiceTitle
        title={title}
        invoice={invoice}
        header={entry}
        customer={customer}
        logo_url={`${clientInformation?.client_logo}`}
      />
      <InvoiceItemsTable
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
      <InvoiceFooter
        footer={entry}
        items={items}
        products={products}
        invoice={invoice}
        clientAnalyticStats={clientAnalyticStats}
        crdb_amount={crdb_amount}
        show_total={index == pages.length - 1 ? true : false}
        qr_code={`${
          settingsInfo?.qr_code == ''
            ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
            : settingsInfo?.qr_code
        }`}
      />
      <TempNote
        footer={entry}
        page_number={`Page ${index + 1} of ${pages.length}`}
      />
    </Page>
  ))
}

export default Invoice
