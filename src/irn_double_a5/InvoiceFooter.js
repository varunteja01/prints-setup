import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceFooterHead from './InvoiceFooterHead'
import IrnNote from './IrnNote'
import InvoiceFooterDetails from './InvoiceFooterDetails'

const borderColor = '#100c08'
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 1,
    borderColor: borderColor,
    height: '170px',
  },
})

const InvoiceFooter = ({
  invoice,
  footer,
  items,
  products,
  qr_code,
  crdb_amount,
  show_total,
  page_number = '',
  fetchQRURL,
}) => (
  <View style={styles.tableContainer}>
    <IrnNote footer={footer} />
    <InvoiceFooterHead
      footer={footer}
      show_total={show_total}
      page_number={page_number}
    />
    <InvoiceFooterDetails
      footer={footer}
      items={items}
      products={products}
      invoice={invoice}
      qr_code={qr_code}
      crdb_amount={crdb_amount}
      show_total={show_total}
      // fetchQRURL={fetchQRURL}
    />
  </View>
)

export default InvoiceFooter
