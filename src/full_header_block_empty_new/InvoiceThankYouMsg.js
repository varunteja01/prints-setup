import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const fontColor = '#000';
const borderColor = '#000000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
    width: '100%',
    color: fontColor,
    textAlign: 'center',
    height: 10,
  },
  gst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
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

const InvoiceFooter = ({ items, footer, gstEnabled }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gst}>
        *** We Will Pray For Your Good Health & A Speedy Recovery ***
      </Text>
    </View>
  );
};

export default InvoiceFooter;
