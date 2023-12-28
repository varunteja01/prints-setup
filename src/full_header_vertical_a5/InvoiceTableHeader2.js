import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#100c08';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#dbdbdb',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
  },
  description: {
    width: '17%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    color: fontColor,
    textAlign: 'center',
    paddingLeft: '2px',
    paddingTop: '2px',
    height: 14,
  },
  qty: {
    width: '6%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    color: fontColor,
    textAlign: 'center',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  rate: {
    width: '6%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    color: fontColor,
    textAlign: 'center',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  amount: {
    width: '8%',
    color: fontColor,
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: 'center',
    // paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  sno: {
    width: '3%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: '2px',
    height: 14,
    textAlign: 'center',
  },
  pack: {
    width: '5%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: '2px',
    paddingTop: '2px',
    height: 14,
  },
  hsn: {
    width: '7%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  batch: {
    width: '9%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: '2px',
    paddingTop: '2px',
    height: 14,
  },
  expiry: {
    width: '5%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  free: {
    width: '5%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  disc: {
    width: '4%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  mrp: {
    width: '6%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  gst: {
    width: '4%',
    color: fontColor,
    textAlign: 'center',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 14,
  },
  mfg: {
    width: '4%',
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: borderColor,
    paddingTop: '2px',
    color: fontColor,
    height: 14,
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.sno}>Sr.</Text>
    <Text style={styles.description}>Product Name</Text>
    <Text style={styles.pack}>Pack</Text>
    <Text style={styles.batch}>Batch No</Text>
    <Text style={styles.mfg}>MFG</Text>
    <Text style={styles.expiry}>Expiry</Text>
    <Text style={styles.hsn}>HSN</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.rate}>Rate</Text>
    <Text style={styles.mrp}>MRP</Text>
    <Text style={styles.disc}>Disc%</Text>
    <Text style={styles.free}>SGST</Text>
    <Text style={styles.free}>Val</Text>
    <Text style={styles.free}>CGST</Text>
    <Text style={styles.free}>Val</Text>
    <Text style={styles.amount}>Amount</Text>
  </View>
);

export default InvoiceTableHeader;
