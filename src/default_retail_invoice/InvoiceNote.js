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
    height: 10,
    fontStyle: 'bold',
    flexGrow: 1,
  },
  sno: {
    width: '4%',
    paddingLeft: '3px',
    backgroundColor: '#dbdbdb',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    fontSize: 6,
  },
  hsn: {
    width: '96%',
    color: fontColor,
    textAlign: 'left',
    paddingLeft: '2px',
    fontSize: 6,
  },
});

const InvoiceTableHeader = ({ footer }) => (
  <View style={styles.container}>
    <Text style={styles.sno}>Note: </Text>
    <Text style={styles.hsn}>{footer.comments}</Text>
  </View>
);

export default InvoiceTableHeader;
