import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
// import {
//   InvoiceTableHeader,
//   InvoiceTableRow,
//   InvoiceTableBlankSpace,
// } from '../Components/Table/wrapper';
import {
  InvoiceTableHeader,
  InvoiceTableRow,
  InvoiceTableBlankSpace,
} from '../components/Table'

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
  snoStart,
  blankLinesCount,
}) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader columns={printColumns} styles={printTableStyles} />
    <InvoiceTableRow
      items={products}
      columns={printColumns}
      styles={StyleSheet.create(printTableStyles)}
      pageno={pageno}
      max_items={max_items}
      snoStart={snoStart}
    />
    {/* <InvoiceTableBlankSpace rowsCount={max_items - products.length} /> */}
    <InvoiceTableBlankSpace rowsCount={blankLinesCount} />
  </View>
)

export default InvoiceItemsTable
