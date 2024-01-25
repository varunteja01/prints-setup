import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const fontColor = '#000';
const borderColor = '#808080';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
    height: 10,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 6,
    width: '100%',
  },
  footer2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 10,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 6,
    width: '100%',
  },
  gst: {
    width: '4%',
    color: fontColor,
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
    paddingRight: '2px',
  },
  gst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
  },
  gst_discount: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
  },
  cgst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
  },
  sgst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
  },
  igst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
  },
});

const InvoiceFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.gst}>GST%</Text>
      <Text style={styles.gst_discount}>Disc.</Text>
      <Text style={styles.gst_value}>Taxable Value</Text>
      <Text style={styles.cgst_value}>CGST Amt.</Text>
      <Text style={styles.sgst_value}>SGST Amt.</Text>
      <Text style={styles.igst_value}>IGST Amt.</Text>
    </View>
  );
};

export default InvoiceFooter;
