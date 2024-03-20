import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
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
    borderWidth: 0.5,
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
  moduleSettings = {},
  pageno,
  countsPerPage,
  maxCountsPerPage,
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
        verticalRows={true}
        fontSize={8}
        snoStart={snoStart}
      />
      <InvoiceTableBlankSpace
        rowsCount={blankLinesCount}
        // rowsCount={max_items - products.length}
        columns={printColumns}
        styles={printTableStyles}
        verticalRows={true}
      />
    </View>
  )
}

export default InvoiceItemsTable
