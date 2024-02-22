import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const borderColor = '#dbdbdb'
const fontColor = '#000'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
  },
  sno: {
    width: '15%',
    paddingLeft: '3px',
    backgroundColor: '#dbdbdb',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 14,
  },
  middle: {
    width: '25%',
    paddingLeft: '3px',
    color: fontColor,
  },
  hsn: {
    width: '60%',
    color: fontColor,
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
  },
})

const InvoiceTableHeader = ({ footer, page_number }) => (
  <View style={styles.container}>
    <Text style={styles.hsn}>
      Powered by Smartpharma360™ || +91 7337441325 || www.smartpharma360.in
    </Text>
    {/* <Text style={styles.middle}>{page_number}</Text> */}

    {/* <Text style={styles.sno}>{footer.temp_invoice_number}</Text> */}
  </View>
)

export default InvoiceTableHeader
