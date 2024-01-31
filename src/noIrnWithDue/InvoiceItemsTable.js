import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
// import {
//   InvoiceTableHeader,
//   InvoiceTableRow,
//   InvoiceTableBlankSpace,
// } from '../Components/Table';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#000',
  },
})

const InvoiceItemsTable = ({
  invoice,
  products,
  max_items,
  printColumns,
  printTableStyles,
  verticalRows,
  pageno,
}) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader columns={printColumns} styles={printTableStyles} />
      <InvoiceTableRow
        items={products}
        columns={printColumns}
        styles={StyleSheet.create(printTableStyles)}
        verticalRows={verticalRows}
        pageno={pageno}
        max_items={max_items}
      />
      <InvoiceTableBlankSpace
        rowsCount={max_items - products.length}
        columns={printColumns}
        styles={StyleSheet.create(printTableStyles)}
        verticalRows={verticalRows}
      />
    </View>
  )
}

export default InvoiceItemsTable
