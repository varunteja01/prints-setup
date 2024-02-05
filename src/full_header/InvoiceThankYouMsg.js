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
  gst: {
    width: '15%',
    color: fontColor,
    textAlign: 'left',
    height: 10,
  },
  gst_value: {
    width: '10%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    height: 10,
  },
});

const InvoiceFooter = ({ items, footer, gstEnabled }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gst}>Total Items : {items}</Text>
      <Text style={styles.gst_value}></Text>
      <Text style={styles.gst}>
        {gstEnabled == true ? `Total Tax : ${footer?.total_gst_value}` : ``}
      </Text>
    </View>
  );
};

export default InvoiceFooter;
