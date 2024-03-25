import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import InvoiceFooterDetails from './InvoiceFooterDetails';
import InvoiceNote from './InvoiceNote';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#000000',
    borderTopWidth: 0,
    height: '98px',
  },
  forDetails: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '8px',
    marginTop: 0,
    paddingTop: '8px',
    textOverflow: true,
    height: '8px',
    fontSize: 8,
  },
});

const InvoiceFooter = ({
  invoice,
  footer,
  items,
  products,
  gstEnabled,
  printType,
  message,
  show_total,
  qr_code,
}) => (
  <View style={styles.tableContainer}>
    <InvoiceNote footer={footer} products={products} />
    <InvoiceThankYouMsg items={items} footer={footer} gstEnabled={gstEnabled} />
    <InvoiceFooterDetails
      invoice={invoice}
      footer={footer}
      items={items}
      products={products}
      gstEnabled={gstEnabled}
      printType={printType}
      message={message}
      show_total={show_total}
      qr_code={qr_code}
    />
  </View>
);

export default InvoiceFooter;
