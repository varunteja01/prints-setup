import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
// import { numberFormat } from './number'
// import { convertNumToWords } from 'utils/helpers'

const fontColor = '#000'
const borderColor = '#100c08'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#dbdbdb',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    height: 12.5,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    width: '100%',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    paddingTop: '1px',
  },
  footer2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 18,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 9,
    width: '100%',
  },
  gst: {
    width: '4%',
    color: fontColor,
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12.5,
  },
  totalAmount: {
    flexDirection: 'row',
    width: '59%',
    color: fontColor,
    textAlign: 'left',
    borderRightColor: borderColor,
    // borderRightWidth: 1,
    height: 12.5,
    marginLeft: 4,
  },
  gst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12.5,
  },
  gst_discount: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12.5,
  },
  cgst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12.5,
  },
  sgst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12.5,
  },
  total: {
    width: '15%',
    color: fontColor,
    textAlign: 'left',
    paddingLeft: '2px',
    height: 12.5,
    fontSize: 8,
    fontStyle: 'bold',
  },
  comments: {
    width: '70%',
    color: fontColor,
    textAlign: 'left',
    paddingLeft: '2px',
    height: 12.5,
    fontSize: 7,
    fontStyle: 'bold',
  },
})

const InvoiceFooter = ({ footer, items, products }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.comments}>{footer?.comments}</Text>
      <Text style={styles.total}>No of Items: {items}</Text>
      <Text style={styles.total}>
        Total Quantity:{' '}
        {products.reduce(
          (n, { sale_quantity, sale_free }) => n + sale_quantity + sale_free,
          0
        )}
      </Text>
    </View>
  )
}

const InvoiceFooterBKUP = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.gst}>GST</Text>
      <Text style={styles.gst_value}>TOTAL</Text>
      <Text style={styles.sgst_value}>SGST</Text>
      <Text style={styles.cgst_value}>CGST</Text>
      <Text style={styles.gst_discount}>TOTAL GST</Text>
      <Text style={styles.gst_discount}>DISC.</Text>
    </View>
  )
}

export default InvoiceFooter
