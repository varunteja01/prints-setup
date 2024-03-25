import React from 'react'
import { Page, View, StyleSheet, Text } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import TempNote from './TempNote'
// import { customer, entry, products } from '../components/Constants'

const pageSize = { A4: 'A4', LEGAL: 'LEGAL' }
const orientation = { PORTRAIT: 'portrait', LANDSCAPE: 'landscape' }

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '15px',
    lineHeight: 1.5,
    flexDirection: 'column',
    size: pageSize.A4 + ' ' + orientation.LANDSCAPE,
  },
  poweredBy: {
    height: '14px',
    paddingTop: '1px',
    paddingLeft: '2px',
    marginTop: -28,
  },
})

const Invoice = ({
  pageDetails: { pageSize, imageContainer },
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
  snoStart,
  blankLinesCount,
}) => {
  return pages.map((page, index) => {
    return (
      <Page key={index} size={pageSize} style={styles.page}>
        <View style={imageContainer}>
          <InvoiceTitle
            title={title}
            invoice={invoiceDetails}
            // header={entry}
            header={invoice_head}
            // customer={customer}
            customer={patient_details}
            // doctor={entry}
            doctor={doctor_details}
            logo_url={`${clientInformation?.client_logo}`}
            inventoryType={inventoryType}
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
            // footer={entry}
            header={invoice_head}
            footer={invoice_head}
            // items={products?.length}
            items={page?.length}
            // products={products}
            products={page}
            gstEnabled={gstEnabled}
            printType={print_layout}
            qr_code={`${
              settingsInfo?.qr_code == ''
                ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
                : settingsInfo?.qr_code
            }`}
            message={message}
            show_total={index == pages.length - 1 ? true : false}
          />
          {/* <TempNote /> */}
        </View>
        <View style={styles.poweredBy}>
          <Text style={{ fontSize: '7px' }}>
            www.smartpharma360.in || +91 7337441325 || Powered by
            Smartpharma360™
          </Text>
        </View>
      </Page>
    )
  })
}

export default Invoice
