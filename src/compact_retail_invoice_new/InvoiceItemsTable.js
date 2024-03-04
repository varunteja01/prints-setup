import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'

// import {
//   InvoiceTableHeader,
//   InvoiceTableRow,
//   InvoiceTableBlankSpace,
// } from '../Components/Table';

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
  printType,
  printColumns,
  printTableStyles,
  pageno,
  dynamicPagination = false,
  maxCharsPerLine,
}) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader
        printType={printType}
        columns={printColumns}
        styles={printTableStyles}
      />
      <InvoiceTableRow
        items={products}
        printType={printType}
        columns={printColumns}
        styles={StyleSheet.create(printTableStyles)}
        max_items={max_items}
        pageno={pageno}
        dynamicPagination={dynamicPagination}
        line_height={maxCharsPerLine}
      />
      <InvoiceTableBlankSpace
        rowsCount={
          max_items - products.length > 0 ? max_items - products.length : 0
        }
      />
    </View>
  )
}

export default InvoiceItemsTable
