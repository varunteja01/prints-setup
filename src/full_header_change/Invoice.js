import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import { customer, entry, products } from '../components/Constants'

const Invoice = ({
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
  dynamicPagination = false,
  maxCharsPerLine,
  entry,
  customer,
  products,
}) => {
  // console.log('1', pageSize);
  // console.log('2', styles);
  // console.log('3', imageContainer);
  console.log('3.1', pages)
  console.log('3.2', maxCharsPerLine)
  // console.log('4', invoice);
  // console.log('5', invoice_head);
  // console.log('6', doctor_details);
  // console.log('7', patient_details);
  // console.log('8', max_items);
  // console.log('9', printColumns);
  // console.log('10', printTableStyles);
  // console.log('11', products_arr);
  // console.log('12', gstEnabled);
  // console.log('13', message);
  // console.log('14', print_layout);
  // console.log('15', settingsInfo);
  // console.log('16', clientInformation);
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

  return pagesCopy.map((page, index) => {
    return (
      <Page key={index} size={pageSize} style={styles}>
        <View style={imageContainer}>
          <InvoiceTitle
            title={title}
            invoice={invoice}
            header={entry}
            customer={customer}
            doctor={entry}
            logo_url={`${clientInformation?.client_logo}`}
            inventoryType={inventoryType}
          />
          <InvoiceItemsTable
            invoice={invoice}
            products={page}
            max_items={maxItems}
            printType={print_layout}
            printColumns={printColumns}
            printTableStyles={printTableStyles}
            pageno={index}
            dynamicPagination={dynamicPagination}
            maxCharsPerLine={maxCharsPerLine}
          />
          <InvoiceFooter
            invoice={invoice}
            footer={entry}
            items={products?.length}
            products={products}
            gstEnabled={gstEnabled}
            printType={print_layout}
            qr_code={`${
              settingsInfo?.qr_code ??
              'https://sp360logo.blob.core.windows.net/logo/1704796242270-white-square.jpg'
            }`}
            message={message}
            show_total={index == pagesCopy.length - 1 ? true : false}
          />
        </View>
      </Page>
    )
  })
}

export default Invoice
