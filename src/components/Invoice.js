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
import NoIrnInvoiceNew from '../noIrnNew/Invoice'
import NoIrnInvoice1 from '../noIrnNewFooter1/Invoice'
import Consolidated_retail_invoice1 from '../consolidated_retail_invoice/Invoice'
import NoIrnInvoice2 from '../noIrnNewFooter2/Invoice'
import FullHeaderLogo from '../full_header_logo/Invoice'
import FullHeaderVertialA5 from '../full_header_vertical_a5/Invoice'
import FullHeaderA4A5V2 from '../full_header_vertical_a5_v2/Invoice'
import FullHeaderVerticalA5NoLines from '../full_header_vertical_a5_no_lines/Invoice'
import FullHeaderBlockEmpty from '../full_header_block_empty/Invoice'
import CompactRetailInvoiceNew from '../compact_retail_invoice_new/Invoice'
import FullHeader from '../full_header/Invoice'

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
const retailStyles = StyleSheet.create({
  page: {
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
  landscapePage: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    flexDirection: 'column',
    padding: 20,
    size: 'A4 landscape',
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageContainer: {
    height: '50%',
  },
  imageContainer2: {
    height: '100%',
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
  const maxRowsPerPage = 24
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
  const noIrnNew = (
    <NoIrnInvoiceNew
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
  const noIrnNewFooter1 = (
    <NoIrnInvoice1
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
  const noIrnNewFooter2 = (
    <NoIrnInvoice2
      pageDetails={{
        pageSize: pageSize.A4,
        orientation: orientation.LANDSCAPE,
        styles: { ...styles.page, paddingTop: 45 },
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
  const consolidated_retail_invoice = (
    <Consolidated_retail_invoice1
      pageDetails={{
        pageSize: pageSize.A5,
        orientation: orientation.LANDSCAPE,
        styles: retailStyles.page,
        imageContainer: retailStyles.imageContainer,
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
  const full_header_logo = (
    <FullHeaderLogo
      pageDetails={{
        pageSize: pageSize.A4,
        orientation: orientation.LANDSCAPE,
        styles: styles.halfPage,
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
  const full_header_vertical_a5 = (
    <FullHeaderVertialA5
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
  const full_header_vertical_a5_v2 = (
    <FullHeaderA4A5V2
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
  const full_header_vertical_a5_no_lines = (
    <FullHeaderVerticalA5NoLines
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
  const full_header_block_empty = (
    <FullHeaderBlockEmpty
      pageDetails={{
        pageSize: pageSize.A4,
        orientation: orientation.LANDSCAPE,
        styles: styles.page,
      }}
      pages={pagesData}
      title={title}
      invoice={invoice}
      // entry={entry}
      invoice_head={entry}
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
  const compact_retail_invoice_new = (
    <CompactRetailInvoiceNew
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
  const full_header = (
    <FullHeader
      pageDetails={{
        pageSize: pageSize.A4,
        orientation: orientation.LANDSCAPE,
        styles: styles.page,
      }}
      pages={pagesData}
      title={title}
      invoice={invoice}
      // entry={entry}
      invoice_head={entry}
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
      <Document>{full_header_block_empty}</Document>
    </PDFViewer>
  )
}

export default Invoice
