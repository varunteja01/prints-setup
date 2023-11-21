import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
// import InvoiceTableRow from '../Components/Table/InvoiceTableRow';
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#000',
  },
})

const InvoiceItemsTable = ({
  products,
  pageno,
  max_items,
  printColumns,
  printTableStyles,
  dynamicPagination,
  maxCharsPerLine,
  pages,
  page_blanks,
}) => {
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader columns={printColumns} styles={printTableStyles} />
      <InvoiceTableRow
        items={products}
        columns={printColumns}
        styles={StyleSheet.create(printTableStyles)}
        pageno={pageno}
        max_items={max_items}
        line_height={maxCharsPerLine}
        dynamicPagination={dynamicPagination}
        pages={pages}
      />
      <InvoiceTableBlankSpace
        rowsCount={
          dynamicPagination
            ? pageno == pages?.length - 1
              ? page_blanks
              : 0
            : max_items - products?.length
        }
      />
    </View>
  )
}

export default InvoiceItemsTable
