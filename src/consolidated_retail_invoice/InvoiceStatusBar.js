import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#dbdbdb';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
  },
  sno: {
    width: '4%',
    paddingLeft: '3px',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 14,
  },
  hsn: {
    width: '96%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    textAlign: 'right',
    paddingRight: '2px',
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.sno}> </Text>
    <Text style={styles.hsn}> </Text>
  </View>
);

export default InvoiceTableHeader;
