import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import InvoiceFooterValues from './InvoiceFooterValues';
import InvoiceFooterDetails from './InvoiceFooterDetails';
import InvoiceThankYouMsg from './InvoiceThankYouMsg';
import InvoiceNote from './InvoiceNote';

import InvoiceStatusBar from './InvoiceStatusBar';

const tableRowsCount = 20;
const borderColor = '#000000';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: '96px',
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -12,
    height: '8px',
  },
  bottom: {
    width: '60%',
    textAlign: 'left',
    paddingTop: '8px',
    textOverflow: true,
    height: '8px',
    fontSize: 6,
  },
  powerbottom: {
    width: '40%',
    textAlign: 'right',
    paddingTop: '8px',
    textOverflow: true,
    height: '8px',
    fontSize: 6,
  },
});

const InvoiceFooter = ({
  invoice,
  footer,
  items,
  products,
  gstEnabled,
  printType,
  length,
  number,
  qr_code,
  settings,
  message,
}) => (
  <View style={styles.tableContainer}>
    <InvoiceFooterValues
      invoice={invoice}
      footer={footer}
      items={items}
      products={products}
      gstEnabled={gstEnabled}
      printType={printType}
      length={length}
      number={number}
    />
    <InvoiceThankYouMsg items={items} footer={footer} gstEnabled={gstEnabled} />
    <InvoiceFooterDetails
      invoice={invoice}
      footer={footer}
      items={items}
      products={products}
      gstEnabled={gstEnabled}
      printType={printType}
      length={length}
      number={number}
      qr_code={qr_code}
      message={message}
    />
    <View style={styles.bottomContainer}>
      <Text style={styles.bottom}>{'All Bank Cards are accepted. '}</Text>
      <Text style={styles.powerbottom}>
        www.smartpharma360.in || +91 7337441325 || Powered by Smartpharma360™
      </Text>
    </View>
  </View>
);

export default InvoiceFooter;
