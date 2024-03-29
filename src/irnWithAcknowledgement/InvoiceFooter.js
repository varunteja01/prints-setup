import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import InvoiceFooterDetails from './InvoiceFooterDetails';
import InvoiceNote from './InvoiceNote';

import InvoiceStatusBar from './InvoiceStatusBar';

const tableRowsCount = 20;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderRightWidth: 1,
    borderRightColor: '#000',
    borderLeftColor: '#000',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: '150px',
  },
});

const InvoiceFooter = ({
  invoice,
  footer,
  items,
  products,
  qr_code,
  show_total,
  timestamp,
  moduleSettings,
}) => (
  <View style={styles.tableContainer}>
    <InvoiceNote footer={footer} />
    <InvoiceThankYouMsg />
    <InvoiceFooterDetails
      footer={footer}
      items={items}
      products={products}
      invoice={invoice}
      qr_code={qr_code}
      show_total={show_total}
      moduleSettings={moduleSettings}
    />
  </View>
);

export default InvoiceFooter;
