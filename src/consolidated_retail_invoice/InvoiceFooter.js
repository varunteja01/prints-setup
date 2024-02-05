import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import InvoiceFooterDetails from './InvoiceFooterDetails';
import InvoiceNote from './InvoiceNote';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 0.5,
    borderColor: '#222',
    height: 110,
    borderTopWidth: 0,
  },
});

const InvoiceFooter = ({ invoice, footer, items, show_total }) => (
  <View style={styles.tableContainer}>
    <InvoiceNote footer={footer} />
    <InvoiceThankYouMsg footer={footer} show_total={show_total} />
    <InvoiceFooterDetails
      invoice={invoice}
      footer={footer}
      items={items}
      show_total={show_total}
    />
  </View>
);

export default InvoiceFooter;
