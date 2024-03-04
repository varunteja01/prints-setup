import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const borderColor = '#000000'
const fontColor = '#000'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#000000',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 10,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 5,
    // border: 1,
  },
  sno: {
    width: '4%',
    paddingLeft: '3px',
    backgroundColor: '#dbdbdb',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
    // border: 1,
  },
  hsn: {
    width: '70%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
    border: 1,
  },
  cust_out: {
    width: '26%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
    border: 1,
  },
})

const InvoiceTableHeader = ({ footer }) => (
  <View style={styles.container}>
    <Text style={styles.sno}>Note: </Text>
    <Text style={styles.hsn}>{footer.comments}</Text>
    <Text style={styles.cust_out}>o/s: {}</Text>
  </View>
)

export default InvoiceTableHeader
