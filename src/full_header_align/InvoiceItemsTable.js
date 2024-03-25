import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
// import InvoiceTableHeader from '../full_header/InvoiceTableHeader'
// import InvoiceTableRow from '../full_header/InvoiceTableRow'
// import InvoiceTableBlankSpace from '../full_header/InvoiceTableBlankSpace'
import InvoiceTableHeader from '../full_header_align/InvoiceTableHeader'
import InvoiceTableRow from '../full_header_align/InvoiceTableRow'
import InvoiceTableBlankSpace from '../full_header_align/InvoiceTableBlankSpace'
const tableRowsCount = 15

const styles = StyleSheet.create({
  tableContainer: {
    paddingTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    // border: 1,
    height: '200px',
    // borderWidth: 1,
    // borderColor: '#000',
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
  snoStart,
  blankLinesCount,
}) => {
  return (
    <View style={styles.tableContainer}>
      {/* <InvoiceTableHeader
        printType={printType}
        columns={printColumns}
        styles={printTableStyles}
      /> */}
      <InvoiceTableRow
        items={products}
        printType={printType}
        columns={printColumns}
        styles={StyleSheet.create(printTableStyles)}
        max_items={max_items}
        pageno={pageno}
        dynamicPagination={dynamicPagination}
        line_height={maxCharsPerLine}
        snoStart={snoStart}
      />
      <InvoiceTableBlankSpace
        rowsCount={blankLinesCount}
        // rowsCount={
        //   pageno == pageEnd
        //     ? max_items - products.length > 0
        //       ? max_items - products.length - 1
        //       : 1
        //     : countsPerPage - max_items >= 0
        //     ? countsPerPage - max_items
        //     : max_items
        // }
      />
    </View>
  )
}

export default InvoiceItemsTable
