import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import TempNote from './TempNote'

const FullHeaderVerticalA5 = ({
  pageDetails: { pageSize, styles, imageContainer },
  pages,
  title,
  invoice,
  invoice_head,
  print_layout,
  gstEnabled,
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
  snoStart,
  blankLinesCount,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} style={styles}>
      <View style={imageContainer}>
        {/* <View style */}
        <InvoiceTitle
          title={title}
          invoice={invoice}
          header={invoice_head}
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
          snoStart={snoStart?.[index]}
          blankLinesCount={blankLinesCount?.[index]}
        />
        <InvoiceFooter
          // footer={entry}
          footer={invoice_head}
          // items={items}
          items={page?.length}
          // products={products}
          products={page}
          gstEnabled={gstEnabled}
          printType={print_layout}
          invoice={invoice}
          show_total={index == pages.length - 1 ? true : false}
          qr_code={`${
            settingsInfo?.qr_code ??
            'https://sp360logo.blob.core.windows.net/logo/1704796242270-white-square.jpg'
          }`}
          crdb_amount={crdb_amount}
        />
        <TempNote
          footer={entry}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ))
}

export default FullHeaderVerticalA5
