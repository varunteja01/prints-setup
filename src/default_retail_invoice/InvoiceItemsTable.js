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
  printColumns,
  printTableStyles,
  pageno,
  dynamicPagination = false,
  maxCharsPerLine,
  snoStart,
  blankLinesCount,
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
        dynamicPagination={dynamicPagination}
        line_height={maxCharsPerLine}
        snoStart={snoStart}
      />
      <InvoiceTableBlankSpace rowsCount={blankLinesCount} />
    </View>
  )
}

export default InvoiceItemsTable
