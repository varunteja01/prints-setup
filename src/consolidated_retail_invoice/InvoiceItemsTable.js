import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
// import {
//   InvoiceTableHeader,
//   InvoiceTableRow,
//   InvoiceTableBlankSpace,
// } from '../Components/Table'

// const tableRowsCount = 15;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 0.5,
    borderColor: '#000',
  },
})

const InvoiceItemsTable = ({
  invoice,
  products,
  max_items,
  printColumns,
  printTableStyles,
  pageno,
}) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader columns={printColumns} styles={printTableStyles} />
      <InvoiceTableRow
        items={products}
        columns={printColumns}
        styles={StyleSheet.create(printTableStyles)}
        max_items={max_items}
        pageno={pageno}
        verticalRows={true}
      />
      <InvoiceTableBlankSpace
        rowsCount={max_items - products.length}
        columns={printColumns}
        styles={StyleSheet.create(printTableStyles)}
        verticalRows={true}
      />
    </View>
  )
}

export default InvoiceItemsTable
