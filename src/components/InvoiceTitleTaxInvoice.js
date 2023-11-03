import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  taxInvoiceStyle: {
    fontSize: 9,
    gap: 4,
    paddingLeft: 30,
  },
  taxInvoiceHeadingStyle: {
    fontSize: 11,
    paddingTop: 6,
    paddingLeft: 44,
    paddingRight: 55,
  },
  saleTypeStyle: {
    fontSize: 8,
    paddingLeft: 40,
    paddingTop: 3,
    paddingBottom: 2,
    borderBottom: 1,
  },
})

const DynamicTaxInvoice = ({ tax }) => {
  return (
    <View>
      <View>
        <Text style={styles.taxInvoiceHeadingStyle}>TAX INVOICE</Text>
        <Text style={styles.saleTypeStyle}>
          Sale Type :{' '}
          <Text style={{ fontFamily: 'AntonFamily', fontSize: 10 }}>
            {tax.paymentMode}
          </Text>
        </Text>
      </View>
      <View style={styles.taxInvoiceStyle}>
        <Text style={{ paddingTop: 5 }}>
          Bill No &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; {tax.billNo}
        </Text>
        <Text>
          Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;{' '}
          {tax.date}
        </Text>
      </View>
    </View>
  )
}

const InvoiceTitleTaxInvoice = () => {
  const sampleTax = {
    billNo: 'S2300026',
    date: '06-04-2023',
    paymentMode: 'CREDIT',
    po: '',
  }
  return <DynamicTaxInvoice tax={sampleTax} />
}

export default InvoiceTitleTaxInvoice
