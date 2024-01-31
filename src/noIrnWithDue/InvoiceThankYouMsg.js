import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const fontColor = '#000';
const borderColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
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
    height: 14,
  },
  gst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 14,
  },
  gst_discount: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 14,
  },
  cgst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 14,
  },
  sgst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 14,
  },
  igst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 14,
  },
  total: {
    width: '20%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    paddingTop: '1px',
    height: 14,
    fontSize: 8,
    fontStyle: 'bold',
  },
});

const InvoiceFooter = ({ footer, clientAnalyticStats }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gst}>GST%</Text>
      <Text style={styles.gst_discount}>Disc.</Text>
      <Text style={styles.gst_value}>Taxable Value</Text>
      <Text style={styles.cgst_value}>CGST Amt.</Text>
      <Text style={styles.sgst_value}>SGST Amt.</Text>
      <Text style={styles.igst_value}>IGST Amt.</Text>
      <Text style={styles.total}>Total Due Amount</Text>
      <Text style={styles.total}>
        {clientAnalyticStats?.net_outstanding_amount?.slice(1, -3) || ''}
      </Text>
    </View>
  );
};

export default InvoiceFooter;
