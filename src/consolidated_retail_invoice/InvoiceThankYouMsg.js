import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const fontColor = '#000'
const borderColor = '#808080'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 10,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 6,
    width: '100%',
    // border: 1,
  },
  // footer2: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   height: 10,
  //   fontStyle: 'bold',
  //   flexGrow: 1,
  //   fontSize: 6,
  //   width: '100%',
  // },
  gst: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10,
    paddingRight: '2px',
    backgroundColor: '#dbdbdb',
  },
  // gst_discount: {
  //   width: '10%',
  //   color: fontColor,
  //   textAlign: 'right',
  //   paddingRight: '2px',
  //   borderRightColor: borderColor,
  //   borderRightWidth: 0.5,
  //   height: 10,
  //   backgroundColor: '#dbdbdb',
  // },
  gst_value: {
    width: '17%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10,
    backgroundColor: '#dbdbdb',
  },
  cgst_value: {
    width: '17%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10,
    backgroundColor: '#dbdbdb',
  },
  sgst_value: {
    width: '17%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10,
    backgroundColor: '#dbdbdb',
  },
  // igst_value: {
  //   width: '10%',
  //   color: fontColor,
  //   textAlign: 'right',
  //   paddingRight: '2px',
  //   borderRightColor: borderColor,
  //   borderRightWidth: 0.5,
  //   height: 10,
  //   backgroundColor: '#dbdbdb',
  // },
  footer_heading: {
    width: '11%',
    textAlign: 'left',
    paddingLeft: '5px',
    height: 10,
    fontSize: 6,
  },
  footer_icon: {
    width: '1%',
    textAlign: 'left',
    paddingRight: '2px',
    height: 10,
    fontSize: 5,
  },
  footer_value_border: {
    width: '15%',
    textAlign: 'right',
    paddingRight: '4px',
    // borderRightColor: borderColor,
    // borderRightWidth: 0.5,
    height: 10,
    fontSize: 6,
  },
  footer_value: {
    width: '8%',
    textAlign: 'right',
    paddingRight: '4px',
    height: 10,
    fontSize: 6,
  },
})

const InvoiceFooter = ({ footer, show_total }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '75%',
          flexDirection: 'row',
          borderRightWidth: 0.5,
          borderRightColor: '#dbdbdb',
        }}
      >
        <Text style={styles.gst}>GST%</Text>
        {/* <Text style={styles.gst_discount}>Discount</Text>*/}
        <Text style={styles.gst_value}>Taxable Value</Text>
        <Text style={styles.cgst_value}>CGST Amt.</Text>
        <Text style={styles.sgst_value}>SGST Amt.</Text>

        <Text style={styles.footer_heading}>Subtotal</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true
            ? parseFloat(footer?.gross_total ?? 0).toFixed(2)
            : ''}
        </Text>
        <Text style={{ width: '9%' }}></Text>
      </View>
      <View style={{ width: '25%' }}>
        <Text></Text>
      </View>
    </View>
  )
}

export default InvoiceFooter
