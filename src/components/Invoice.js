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
}) => {
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

  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <Document>
        {pagesData.map((pageData, pageIndex) => (
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
                calculationTableData={calculationTableData}
                isLastPage={pageIndex === pagesData.length - 1}
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
        ))}
      </Document>
    </PDFViewer>
  )
}

export default Invoice
