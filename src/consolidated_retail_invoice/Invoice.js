import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'

const DefaultRetailInvoice = ({
  pageDetails: { pageSize, styles, imageContainer },
  pages,
  title,
  invoiceDetails,
  invoice,
  entry,
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
}) => {
  return pages.map((page, i) => (
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
          header_image_url="https://sp360logo.blob.core.windows.net/logo/1695381632500-image2.jpeg"
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
          show_total={i == pages.length - 1 ? true : false}
        />
      </View>
    </Page>
  ))
}

export default DefaultRetailInvoice
