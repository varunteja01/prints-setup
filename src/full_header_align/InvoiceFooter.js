import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import InvoiceFooterDetails from './InvoiceFooterDetails'
import InvoiceNote from './InvoiceNote'

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    // borderRight: 1,
    // borderLeft: 1,
    // borderBottom: 1,
    // borderColor: '#000000',
    height: '70px',
  },
  forDetails: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '8px',
    marginTop: 0,
    paddingTop: '2px',
    textOverflow: true,
    height: '15px',
    fontSize: 8,
  },
})

const InvoiceFooter = ({
  invoice,
  footer,
  items,
  products,
  gstEnabled,
  printType,
  message,
  show_total,
  qr_code,
  header,
}) => (
  <View style={styles.tableContainer}>
    {/* <InvoiceNote footer={footer} /> */}
    {/* <InvoiceThankYouMsg items={items} footer={footer} gstEnabled={gstEnabled} /> */}
    <InvoiceFooterDetails
      invoice={invoice}
      footer={footer}
      items={items}
      header={header}
      products={products}
      gstEnabled={gstEnabled}
      printType={printType}
      message={message}
      show_total={show_total}
      qr_code={qr_code}
    />
    {/* <Text style={styles.forDetails}>For {invoice?.firm_name}</Text> */}
  </View>
)

export default InvoiceFooter
