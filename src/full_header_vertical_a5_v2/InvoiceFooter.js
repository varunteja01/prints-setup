import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceFooterHead from './InvoiceFooterHead';
import InvoiceFooterDetails from './InvoiceFooterDetails';

const borderColor = '#100c08';
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 1,
    borderColor: borderColor,
    height: '145px',
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
    <InvoiceFooterHead footer={footer} items={items} products={products} />
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
