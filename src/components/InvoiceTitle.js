import React from 'react'
import { View, StyleSheet, Image } from '@react-pdf/renderer'
import smartpharma from '../smartpharma360.jpg' // Import the image
import InvoiceTitleFrom from './InvoiceTitleFrom'
import InvoiceTitleTo from './InvoiceTitleTo'
import InvoiceTitleTaxInvoice from './InvoiceTitleTaxInvoice'

const styles = StyleSheet.create({
  invoiceTitleDirection: {
    flexDirection: 'row',
    borderBottom: 1,
  },
  titleImage: {
    width: 60,
    height: 70,
    border: 1,
  },
})

const InvoiceTitle = () => (
  <View style={styles.invoiceTitleDirection}>
    <Image src={smartpharma} style={styles.titleImage} />
    <InvoiceTitleFrom />
    <InvoiceTitleTo />
    <InvoiceTitleTaxInvoice />
  </View>
)

export default InvoiceTitle
