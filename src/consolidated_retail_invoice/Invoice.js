import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import InvoiceTempNote from './TempNote'

const ConsolidatedHeaderRetail = ({
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
  clientInformation,
  inventoryType,
  settingsInfo,
  dynamicPagination = false,
  maxCharsPerLine,
  entry,
  customer,
  products,
}) => {
  const pagesCopy = []
  let maxItems = max_items
  let new_line_height = maxCharsPerLine

  if (dynamicPagination) {
    pages?.forEach((each) => {
      new_line_height = parseFloat(
        parseFloat(maxCharsPerLine * 1.3)?.toFixed(2)
      )
      console.log('PRODUCT NAME', each?.product_name)
      let newCeilValue = Math.ceil(each?.product_name?.length / new_line_height)
      if (newCeilValue > 1) {
        maxItems = maxItems - newCeilValue + 1
      }
    })
  }

  const count = parseInt((pages?.length / maxItems).toFixed(0))
  const count_equals_max = pages?.length % maxItems == 0
  const iteration_max =
    count > pages?.length / maxItems
      ? count
      : count_equals_max
      ? count
      : count + 1
  let i = 0
  for (i = 0; i < iteration_max; i++) {
    var start = maxItems * i
    var end =
      pages?.length >= start + maxItems ? start + maxItems : pages?.length
    pagesCopy[i] = pages?.slice(start, end)
  }

  console.log('pages copy', pagesCopy)

  return pagesCopy.map((page, i) => (
    <Page size={pageSize} style={styles} key={i}>
      <View style={imageContainer}>
        <InvoiceTitle
          title={title}
          invoice={invoiceDetails}
          header={entry}
          customer={patient_details}
          doctor={doctor_details}
          logo_url={`${clientInformation?.client_logo}`}
          inventoryType={inventoryType}
          qr_code={`${
            settingsInfo?.qr_code == ''
              ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
              : settingsInfo?.qr_code
          }`}
          header_image_url={`${
            settingsInfo?.header_image_url == ''
              ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
              : settingsInfo?.header_image_url
          }`}
        />
        <InvoiceItemsTable
          invoice={invoice}
          products={page}
          max_items={maxItems}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={i}
          dynamicPagination={dynamicPagination}
          maxCharsPerLine={maxCharsPerLine}
        />
        <InvoiceFooter
          invoice={invoice}
          footer={entry}
          items={products_arr?.length}
          show_total={i == pagesCopy.length - 1 ? true : false}
        />
        <InvoiceTempNote
          footer={entry}
          page_number={`Page ${i + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ))
}

export default ConsolidatedHeaderRetail
