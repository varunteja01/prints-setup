import React from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  invoiceFooterStyle: {
    flexDirection: 'row',
    borderTop: 1,
  },
  terms: {
    fontSize: 6,
    borderRight: 1,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    width: '70%',
  },
  underline: {
    textDecoration: 'underline',
    marginBottom: 5,
  },
})

const InvoiceFooter = ({ invoice }) => (
  <View style={styles.invoiceFooterStyle}>
    <View style={styles.terms}>
      <Text style={styles.underline}>Terms and Conditions</Text>
      <Text>{invoice.terms_and_conditions}</Text>
    </View>
    <View style={{ fontSize: 8, gap: 40, paddingLeft: 25 }}>
      <Text style={{ paddingTop: 5 }}>FOR SMART PHARMA AGENCIES</Text>
      <Text style={{ paddingLeft: 23, fontFamily: 'AntonFamily' }}>
        Authorised Signatory
      </Text>
    </View>
  </View>
)

export default InvoiceFooter
