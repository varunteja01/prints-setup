import React from 'react'
import {
  PDFViewer,
  Page,
  Document,
  View,
  StyleSheet,
  Text,
} from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceTotalItemsQty from './InvoiceTotalItemsQty'
import InvoiceCalculation from './InvoiceCalculation'
import InvoiceFooter from './InvoiceFooter'
import NoIrnInvoice from '../noIrn/Invoice'
import NoIrnInvoice2 from '../noIrnNewFooter/Invoice'

const pageSize = { A4: 'A4', LEGAL: 'LEGAL' }
const orientation = { PORTRAIT: 'portrait', LANDSCAPE: 'landscape' }
const items = 20
const dynamicPagination = false
const max_chars = 40
const page_blanks = 40
const clientInformation = {} //logo
const settingsInfo = {} //qr code
const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    marginBottom: 55,
    marginLeft: 20,
    marginRight: 20,
    border: 1,
  },
  pageNumbers: {
    fontSize: 8,
    left: 20,
    position: 'absolute',
    bottom: -15,
    left: '45%',
  },
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    flexDirection: 'column',
    size: pageSize.A4 + ' ' + orientation.LANDSCAPE,
    // borderWidth: 1,
    // borderColor: '#000',
  },
  legalPage: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    flexDirection: 'column',
    size: pageSize.LEGAL + ' ' + orientation.LANDSCAPE,
    // size: pageSize.LEGAL + ' ' + orientation.PORTRAIT, // THIS PORTRAIT IS PRINTING AS LANGSCAP
    borderWidth: 1,
    borderColor: '#000',
  },
  halfPage: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    height: '40%',
    flexDirection: 'column',
    padding: 20,
  },
})

const Invoice = ({
  title,
  invoice,
  entry,
  customer,
  max_items,
  printColumns,
  printTableStyles,
  calculationTableData,
  products,
  crdb_amount,
  qr_code,
  ispreview,
  uploadBlob,
  printDetails,
  resetState,
  timestamp,
  printType,
  clientAnalyticStats,
  moduleSettings,
}) => {
  //should not be more than 10
  const maxRowsPerPage = 10
  const pagesData = []

  for (let i = 0; i < products.length; i += maxRowsPerPage) {
    const pageData = products.slice(i, i + maxRowsPerPage)
    const emptyRowCount = maxRowsPerPage - pageData.length

    if (emptyRowCount > 0) {
      for (let j = 0; j < emptyRowCount; j++) {
        pageData.push({ emptyRow: true })
      }
    }
    pagesData.push(pageData)
  }

  const rows = pagesData.map((pageData, pageIndex) => (
    <Page orientation="potrait" size="A4" key={pageIndex}>
      <View style={styles.section}>
        <InvoiceTitle
          invoice={invoice}
          customer={customer}
          title={title}
          entry={entry}
        />
        <InvoiceItemsTable
          invoice={invoice}
          products={pageData}
          max_items={max_items}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
        />
        <InvoiceTotalItemsQty
          products={products}
          isLastPage={pageIndex === pagesData.length - 1}
        />
        <InvoiceCalculation
          invoice={invoice}
          entry={entry}
          calculationTableData={calculationTableData}
          isLastPage={pageIndex === pagesData.length - 1}
          crdb_amount={crdb_amount}
          qr_code={`${
            invoice?.qr_code == ''
              ? 'https://sp360logo.blob.core.windows.net/logo/1695388232759-image1.jpeg'
              : invoice?.qr_code
          }`}
        />
        <InvoiceFooter invoice={invoice} />
        <Text
          style={styles.pageNumbers}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
        />
      </View>
    </Page>
  ))

  const noIrn = (
    <NoIrnInvoice
      pageDetails={{
        pageSize: pageSize.A4,
        orientation: orientation.LANDSCAPE,
        styles: styles.page,
      }}
      pages={pagesData}
      title={title}
      invoice={invoice}
      entry={entry}
      customer={customer}
      max_items={max_items}
      printColumns={printColumns}
      printTableStyles={printTableStyles}
      items={items}
      products={products}
      clientInformation={clientInformation}
      settingsInfo={settingsInfo}
      crdb_amount={crdb_amount}
      dynamicPagination={dynamicPagination}
      maxCharsPerLine={max_chars}
      page_blanks={page_blanks}
    />
  )
  const noIrnNewFooter = (
    <NoIrnInvoice2
      pageDetails={{
        pageSize: pageSize.A4,
        orientation: orientation.LANDSCAPE,
        styles: styles.page,
      }}
      pages={pagesData}
      title={title}
      invoice={invoice}
      entry={entry}
      customer={customer}
      max_items={max_items}
      printColumns={printColumns}
      printTableStyles={printTableStyles}
      items={items}
      products={products}
      clientInformation={clientInformation}
      settingsInfo={settingsInfo}
      crdb_amount={crdb_amount}
      dynamicPagination={dynamicPagination}
      maxCharsPerLine={max_chars}
      page_blanks={page_blanks}
    />
  )
  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <Document>{noIrnNewFooter}</Document>
    </PDFViewer>
  )
}

export default Invoice
