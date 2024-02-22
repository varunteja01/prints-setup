import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
// import InvoiceTableHeader from './InvoiceTableHeader';
// import InvoiceTableRow from '../Components/Table/InvoiceTableRow';
// import InvoiceTableBlankSpace from './InvoiceTableBlankSpace';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'

const tableRowsCount = 15

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
      />
      <InvoiceTableBlankSpace rowsCount={max_items - products.length} />
    </View>
  )
}

export default InvoiceItemsTable
