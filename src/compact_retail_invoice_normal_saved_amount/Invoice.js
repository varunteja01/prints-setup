import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import TempNote from './TempNote'

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
  user,
  dynamicPagination,
  maxCharsPerLine,
  snoStart,
  blankLinesCount,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} style={styles}>
      <View style={imageContainer}>
        <InvoiceTitle
          title={title}
          invoice={invoiceDetails}
          header={invoice_head}
          customer={patient_details}
          doctor={doctor_details}
          logo_url={`${clientInformation?.client_logo}`}
          inventoryType={inventoryType}
          user={user}
        />
        <InvoiceItemsTable
          invoice={invoice}
          products={page}
          max_items={max_items}
          printType={print_layout}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
          dynamicPagination={dynamicPagination}
          maxCharsPerLine={maxCharsPerLine}
          snoStart={snoStart?.[index]}
          blankLinesCount={blankLinesCount?.[index]}
        />
        <InvoiceFooter
          invoice={invoice}
          footer={invoice_head}
          items={products_arr?.length}
          products={products_arr}
          gstEnabled={gstEnabled}
          printType={print_layout}
          qr_code={`${
            settingsInfo?.qr_code ??
            'https://sp360logo.blob.core.windows.net/logo/1704796242270-white-square.jpg'
          }`}
          message={message}
          show_total={index == pages.length - 1 ? true : false}
        />
        <TempNote
          footer={invoice_head}
          page_number={`Page ${index + 1} of ${pages?.length}`}
        />
      </View>
    </Page>
  ))
}

export default Invoice
