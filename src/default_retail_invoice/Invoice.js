import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import InvoiceTempNote from './TempNote'
import { customer, entry } from '../components/Constants'

const DefaultRetailInvoice = ({
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
  entry,
  customer,
}) => {
  return pages.map((page, i) => (
    <Page size={pageSize} style={styles} key={i}>
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
          max_items={max_items}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={i}
        />
        <InvoiceFooter
          invoice={invoice}
          footer={entry}
          items={products_arr?.length}
        />
        <InvoiceTempNote
          footer={entry}
          page_number={`Page ${i + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ))
}

export default DefaultRetailInvoice
