import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { convertNumToWords } from '../components/helpers'

const borderColor = '#dbdbdb'
const fontColor = '#000'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    height: 16,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 8,
    justifyContent: 'space-between',
  },
  sno: {
    width: '100%',
    paddingLeft: '8px',
    color: fontColor,
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  hsn: {
    width: '20%',
    color: fontColor,
    textAlign: 'left',
    paddingRight: '2px',
    paddingLeft: '2px',
  },
})

const InvoiceTableHeader = ({ footer, show_total }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: 'row', width: '70%' }}>
      <Text>
        {show_total ? ` ${convertNumToWords(footer?.net_amount)}` : ''}
      </Text>
    </View>
    <View
      style={{ flexDirection: 'row', backgroundColor: '#dbdbdb', width: '30%' }}
    >
      <Text style={styles.sno}>
        Net Payable :{' '}
        <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
          {show_total ? `Rs. ${parseFloat(footer.net_amount).toFixed(2)}` : ''}
        </Text>
      </Text>
    </View>
  </View>
)

export default InvoiceTableHeader
