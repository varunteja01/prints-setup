import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import InvoiceFooterDetails from './InvoiceFooterDetails'
import InvoiceNote from './InvoiceNote'

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#222',
    height: '150px',
    borderTopWidth: 0,
  },
})

const InvoiceFooter = ({ invoice, footer, items }) => (
  <View style={styles.tableContainer}>
    <InvoiceNote footer={footer} />
    <InvoiceThankYouMsg />
    <InvoiceFooterDetails invoice={invoice} footer={footer} items={items} />
  </View>
)

export default InvoiceFooter
