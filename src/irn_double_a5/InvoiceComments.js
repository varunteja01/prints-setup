import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#dbdbdb';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 12.5,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
  },
  sno: {
    width: '4%',
    paddingLeft: '3px',
    backgroundColor: '#dbdbdb',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  hsn: {
    width: '66%',
    color: fontColor,
    textAlign: 'left',
    paddingRight: '2px',
  },
});

const InvoiceTableHeader = ({ footer }) => (
  <View style={styles.container}>
    <Text style={styles.sno}>Note: </Text>
    <Text style={styles.hsn}>{footer?.comments ?? ''}</Text>
  </View>
);

export default InvoiceTableHeader;
