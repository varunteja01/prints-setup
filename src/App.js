import React from 'react'
import {
  PDFViewer,
  Page,
  Document,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import InvoiceTitle from './components/InvoiceTitle'
import InvoiceTable from './components/InvoiceTable'
import { tableData } from './components/TableData'
import InvoiceTotalItemsQty from './components/InvoiceTotalItemsQty'
import InvoiceCalculation from './components/InvoiceCalculation'
import { calculationTableData } from './components/CalculationTableData'

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    marginBottom: 55,
    marginLeft: 20,
    marginRight: 20,
    border: 1,
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
          <Page orientation="landscape" size="A5" key={pageIndex}>
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
            </View>
          </Page>
        ))}
      </Document>
    </PDFViewer>
  )
}

export default App
