import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#dbdbdb';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
  },
  sno: {
    width: '5%',
    paddingLeft: '3px',
    color: fontColor,
    height: 14,
  },
  hsn: {
    width: '20%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
  },
  sno1: {
    width: '5%',
    paddingLeft: '3px',
    color: fontColor,
    height: 14,
  },
  hsn1: {
    width: '45%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
  },
});

const InvoiceTableHeader = ({footer}) => (
  <View style={styles.container}>
    <Text style={styles.sno}>Ack No: </Text>
    <Text style={styles.hsn}>{footer.ack_no}</Text>
    <Text style={styles.sno}>Ack Date: </Text>
    <Text style={styles.hsn}>{footer.ack_date}</Text>
    <Text style={styles.sno1}>IRN: </Text>
    <Text style={styles.hsn1}>{footer.irn}</Text>
  </View>
);

export default InvoiceTableHeader;
