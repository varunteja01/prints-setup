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
    borderWidth: 1,
    borderColor: '#000000',
    height: '88px',
  },
  forDetails: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '8px',
    marginTop: 0,
    paddingTop: '8px',
    textOverflow: true,
    height: '4px',
    fontSize: 8,
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 3,
    height: '8px',
  },
  bottom: {
    width: '60%',
    textAlign: 'left',
    paddingTop: '8px',
    textOverflow: true,
    height: '8px',
    fontSize: 6,
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
}) => {
  // console.log('show qr -> ', qr_code)
  console.log('SHOW TOTAL', show_total)

  return (
    <View style={styles.tableContainer}>
      <InvoiceNote footer={footer} />
      <InvoiceThankYouMsg
        items={items}
        footer={footer}
        gstEnabled={gstEnabled}
      />
      <InvoiceFooterDetails
        invoice={invoice}
        footer={footer}
        items={items}
        products={products}
        gstEnabled={gstEnabled}
        printType={printType}
        message={message}
        qr_code={qr_code}
        show_total={show_total}
      />
      <Text style={styles.forDetails}>For {invoice?.firm_name}</Text>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottom}>{'All Bank Cards are accepted. '}</Text>
        <Text style={styles.powerbottom}>
          www.smartpharma360.in || +91 7337441325 || Powered by Smartpharma360™
        </Text>
      </View>
    </View>
  )
}

export default InvoiceFooter
