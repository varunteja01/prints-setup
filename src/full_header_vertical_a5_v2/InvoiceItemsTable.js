import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
// import {
//   InvoiceTableHeader,
//   InvoiceTableRow,
//   InvoiceTableBlankSpace,
// } from '../Components/Table';
import InvoiceTableHeader from '../full_header_vertical_a5_v2/InvoiceTableHeader'
import InvoiceTableRow from '../full_header_vertical_a5_v2/InvoiceTableRow'
import InvoiceTableBlankSpace from '../full_header_vertical_a5_v2/InvoiceTableBlankSpace'

const borderColor = '#100c08'
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 1,
    borderColor: borderColor,
    borderBottomWidth: 0,
  },
})

const InvoiceItemsTable = ({
  invoice,
  products,
  max_items,
  printColumns,
  printTableStyles,
  pageno,
  moduleSettings = {},
}) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader columns={printColumns} styles={printTableStyles} />
    <InvoiceTableRow
      items={products}
      columns={printColumns}
      styles={StyleSheet.create(printTableStyles)}
      pageno={pageno}
      max_items={max_items}
    />
    <InvoiceTableBlankSpace rowsCount={max_items - products.length} />
  </View>
)

export default InvoiceItemsTable
