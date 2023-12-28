import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceFooterHead from './InvoiceFooterHead';
import InvoiceFooterDetails from './InvoiceFooterDetails';
import InvoiceNote from './InvoiceNote';

const borderColor = '#100c08';
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 0.5,
    borderColor: borderColor,
    borderBottomWidth: 0.5,
    height: '170px',
  },
});

const InvoiceFooter = ({
  invoice,
  footer,
  items,
  products,
  qr_code,
  crdb_amount,
  show_total,
}) => (
  <View style={styles.tableContainer}>
    <InvoiceNote footer={footer} products={products} />
    <InvoiceFooterHead footer={footer} />
    <InvoiceFooterDetails
      footer={footer}
      items={items}
      products={products}
      invoice={invoice}
      qr_code={qr_code}
      crdb_amount={crdb_amount}
      show_total={show_total}
    />
  </View>
);

export default InvoiceFooter;
