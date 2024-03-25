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
    // border: 1,
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
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -12,
    height: '8px',
  },
  powerbottom: {
    width: '40%',
    textAlign: 'right',
    paddingTop: '8px',
    textOverflow: true,
    height: '8px',
    fontSize: 6,
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
    {/* <View style={styles.bottomContainer}>
      <Text style={styles.bottom}>{'All Bank Cards are accepted. '}</Text>
      <Text style={styles.powerbottom}>
        www.smartpharma360.in || +91 7337441325 || Powered by Smartpharma360™
      </Text>
    </View> */}
  </View>
)

export default InvoiceFooter
