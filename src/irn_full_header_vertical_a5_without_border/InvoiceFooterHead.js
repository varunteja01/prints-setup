import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { numberFormat } from './number';

const fontColor = '#000';
const borderColor = '#100c08';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
    height: 12.5,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    width: '100%',
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
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
    borderRightWidth: 0.5,
    height: 12.5,
  },
  gst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12.5,
  },
  gst_discount: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12.5,
  },
  cgst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12.5,
  },
  sgst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12.5,
  },
  total: {
    width: '20%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    height: 12.5,
    fontSize: 8,
    fontStyle: 'bold',
  },
});

const InvoiceFooter = ({ footer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gst}>GST</Text>
      <Text style={styles.gst_value}>TOTAL</Text>
      <Text style={styles.sgst_value}>SGST</Text>
      <Text style={styles.cgst_value}>CGST</Text>
      <Text style={styles.gst_discount}>
        {footer?.gst_type == true ? `TOTAL GST` : `TOTAL IGST`}
      </Text>
      <Text style={styles.gst_discount}>DISC.</Text>
      <Text style={styles.total}>TOTAL</Text>
      <Text style={styles.total}>
        :{'  '}
        {footer?.gross_total % 1 != 0
          ? `Rs. ${numberFormat(footer?.gross_total)}`
          : `Rs. ${numberFormat(footer?.gross_total)}.00`}
      </Text>
    </View>
  );
};

const InvoiceFooterBKUP = () => {
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
