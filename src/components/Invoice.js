import React from 'react'
import {
  PDFViewer,
  Page,
  Document,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceTable from './InvoiceTable'
import { tableData } from './TableData'
import InvoiceTotalItemsQty from './InvoiceTotalItemsQty'
import InvoiceCalculation from './InvoiceCalculation'
import { calculationTableData } from './CalculationTableData'

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    marginBottom: 55,
    marginLeft: 20,
    marginRight: 20,
    border: 1,
  },
})

const Invoice = ({ invoice, customer, title, entry }) => {
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
          <Page orientation="landscape" size="A5" key={pageIndex}>
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
              <InvoiceCalculation calculationTableData={calculationTableData} />
            </View>
          </Page>
        ))}
      </Document>
    </PDFViewer>
  )
}

export default Invoice
