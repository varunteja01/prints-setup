import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#000000',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 10,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 5,
  },
  sno: {
    width: '4%',
    paddingLeft: '3px',
    backgroundColor: '#dbdbdb',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
  },
  hsn: {
    width: '96%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
  },
});

const InvoiceTableHeader = ({ footer }) => (
  <View style={styles.container}>
    <Text style={styles.sno}>Note: </Text>
    <Text style={styles.hsn}>{footer.comments}</Text>
  </View>
);

export default InvoiceTableHeader;
