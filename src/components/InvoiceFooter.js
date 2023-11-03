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
    paddingLeft: 5,
    paddingRight: 5,
    width: '70%',
  },
  underline: {
    textDecoration: 'underline',
    marginBottom: 5,
  },
})

const InvoiceFooter = () => (
  <View style={styles.invoiceFooterStyle}>
    <View style={styles.terms}>
      <Text style={styles.underline}>Terms and Conditions</Text>
      <Text>
        Goods once sold will not be taken back we here by given the warranty
        that the goods describe as sold by us this invoice do not contravene in
        any way the provision of section 18 drugs and cosmetics Act, 1940.
      </Text>
      <Text>
        Goods once sold will not be taken back we here by given the warranty
        that the goods describe as sold by us this invoice do not contravene in
        any way the provision of section 18 drugs and cosmetics Act, 1940
      </Text>
      <Text style={{ paddingTop: 10, paddingBottom: 5 }}>
        Please address all correspondence related to adjustment or claims on
        this invoice to the firm & not to the attention of any individual
      </Text>
    </View>
    <View style={{ fontSize: 8, gap: 20, paddingLeft: 25 }}>
      <Text style={{ paddingTop: 5 }}>FOR SMART PHARMA AGENCIES</Text>
      <Text style={{ paddingLeft: 23, fontFamily: 'AntonFamily' }}>
        Authorised Signatory
      </Text>
    </View>
  </View>
)

export default InvoiceFooter
