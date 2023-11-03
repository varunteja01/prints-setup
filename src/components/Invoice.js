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
import InvoiceTable from './InvoiceTable'
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
    position: 'absolute',
    fontSize: 8,
    top: 380,
    left: 320,
  },
  poweredBy: {
    position: 'absolute',
    fontSize: 8,
    top: 380,
    left: 20,
  },
})

const Invoice = ({
  invoice,
  customer,
  title,
  entry,
  tableData,
  calculationTableData,
}) => {
  const maxRowsPerPage = 10
  const pagesData = []

  for (let i = 0; i < tableData.length; i += maxRowsPerPage) {
    const pageData = tableData.slice(i, i + maxRowsPerPage)
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
              <InvoiceTable tableData={pageData} />
              <InvoiceTotalItemsQty
                tableData={tableData}
                isLastPage={pageIndex === pagesData.length - 1}
              />
              <InvoiceCalculation
                calculationTableData={calculationTableData}
                isLastPage={pageIndex === pagesData.length - 1}
              />
              <InvoiceFooter />
            </View>
            <Text style={styles.poweredBy}>
              Powered by Smartpharma360 || +91 7337441325 ||
              www.smartpharma360.in
            </Text>
            <Text
              style={styles.pageNumbers}
              render={({ pageNumber, totalPages }) =>
                `Page ${pageNumber} of ${totalPages}`
              }
              fixed
            />
          </Page>
        ))}
      </Document>
    </PDFViewer>
  )
}

export default Invoice
