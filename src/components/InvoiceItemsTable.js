import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceFooter from './InvoiceFooter'

const styles = StyleSheet.create({
  tableContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // marginTop: 0,
    // borderWidth: 1,
    // borderColor: '#000',
  },
})

const InvoiceItemsTable = ({
  invoice,
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
