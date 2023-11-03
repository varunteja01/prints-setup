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
  typeStyle: {
    fontFamily: 'AntonFamily',
    fontSize: 10,
  },
  billNoStyle: {
    paddingTop: 5,
  },
})

const DynamicTaxInvoice = ({ title, entry }) => {
  return (
    <View>
      <View>
        <Text style={styles.taxInvoiceHeadingStyle}>{title}</Text>
        <Text style={styles.saleTypeStyle}>
          Sale Type : <Text style={styles.typeStyle}>{entry.sale_type}</Text>
        </Text>
      </View>
      <View style={styles.taxInvoiceStyle}>
        <Text style={styles.billNoStyle}>
          Bill No &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; {entry.invoice_number}
        </Text>
        <Text>
          Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
          {entry.invoice_date}
        </Text>
      </View>
    </View>
  )
}

const InvoiceTitleTaxInvoice = ({ title, entry }) => {
  return <DynamicTaxInvoice title={title} entry={entry} />
}

export default InvoiceTitleTaxInvoice
