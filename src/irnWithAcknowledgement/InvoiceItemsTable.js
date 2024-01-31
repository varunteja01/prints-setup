import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
// import {
//   InvoiceTableHeader,
//   InvoiceTableRow,
//   InvoiceTableBlankSpace,
// } from '../Components/Table';
import InvoiceTableHeader from '../irnWithAcknowledgement/InvoiceTableHeader'
import InvoiceTableRow from '../irnWithAcknowledgement/InvoiceTableRow'
import InvoiceTableBlankSpace from '../irnWithAcknowledgement/InvoiceTableBlankSpace'

import InvoiceFooter from './InvoiceFooter'

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
}) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader columns={printColumns} styles={printTableStyles} />
    <InvoiceTableRow
      items={products}
      columns={printColumns}
      styles={StyleSheet.create(printTableStyles)}
      max_items={max_items}
      pageno={pageno}
    />
    <InvoiceTableBlankSpace rowsCount={max_items - products.length} />
  </View>
)

export default InvoiceItemsTable
