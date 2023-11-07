import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'

const styles = StyleSheet.create({
  tableContainer: {},
})

const InvoiceItemsTable = ({
  products,
  max_items,
  printColumns,
  printTableStyles,
}) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader columns={printColumns} styles={printTableStyles} />
    <InvoiceTableRow
      items={products}
      columns={printColumns}
      styles={StyleSheet.create(printTableStyles)}
    />
    <InvoiceTableBlankSpace rowsCount={max_items - products.length} />
  </View>
)

export default InvoiceItemsTable
