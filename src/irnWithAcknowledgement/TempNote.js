import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#dbdbdb';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
  },
  right: {
    width: '30%',
    paddingLeft: '3px',
    backgroundColor: '#dbdbdb',
    color: fontColor,
    height: 14,
  },
  left: {
    width: '50%',
    color: fontColor,
    textAlign: 'left',
    paddingRight: '2px',
  },
  middle: {
    width: '20%',
    color: fontColor,
    textAlign: 'left',
    paddingRight: '2px',
  },
});

const InvoiceTableHeader = ({ footer, page_number, timestamp }) => (
  <View style={styles.container}>
    <Text style={styles.left}>
      Powered by Smartpharma360™ || +91 7337441325 || www.smartpharma360.in
    </Text>
    <Text style={styles.middle}>{page_number}</Text>
    <Text style={styles.right}>
      Billed By: {footer?.added_by} || {footer.temp_invoice_number} || Taken at:{' '}
      {timestamp}
    </Text>
  </View>
);

export default InvoiceTableHeader;
