import React from 'react'
import {
  PDFViewer,
  Page,
  Document,
  View,
  StyleSheet,
  Text,
} from '@react-pdf/renderer'
import InvoiceTitle from './components/InvoiceTitle'
import InvoiceTable from './components/InvoiceTable'
import { tableData } from './components/TableData'
import InvoiceTotalItemsQty from './components/InvoiceTotalItemsQty'
import InvoiceCalculation from './components/InvoiceCalculation'
import { calculationTableData } from './components/CalculationTableData'
import InvoiceFooter from './components/InvoiceFooter'

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    border: 1,
  },
  pageEnd1: {
    // position: 'absolute',
    bottom: 16,
    left: 20,
    fontSize: 8,
  },
  pageNumbers: {
    bottom: 25,
    left: '60%',
    fontSize: 8,
  },
})

const App = () => {
  const maxRowsPerPage = 10
  const pagesData = []

  // console.log(tableData)
  for (let i = 0; i < tableData.length; i += maxRowsPerPage) {
    const pageData = tableData.slice(i, i + maxRowsPerPage)
    const emptyRowCount = maxRowsPerPage - pageData.length

    if (emptyRowCount > 0) {
      for (let j = 0; j < emptyRowCount; j++) {
        pageData.push({ emptyRow: true }) // You can use a unique key or flag for empty rows
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
              <InvoiceTitle />
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
            <Text style={styles.pageEnd1}>
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

export default App
