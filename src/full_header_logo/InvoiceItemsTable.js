import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
// import InvoiceTableRow from '../Components/Table/InvoiceTableRow';
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'

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
  pageno,
  moduleSettings,
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
        moduleSettings={moduleSettings}
      />
      <InvoiceTableBlankSpace rowsCount={max_items - products.length} />
    </View>
  )
}

export default InvoiceItemsTable
