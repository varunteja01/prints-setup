import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { borderColor, legalInvoiceStyleTableLeft } from '../../InvoiceStyles';

// Destructure the imported styles
const {
  tableBlankLines: { row, description, qty, rate, amount, bottomBorder },
} = legalInvoiceStyleTableLeft;

const InvoiceTableBlankLinesRight = ({ rowsCount }) => {
  const blankRows = Array(rowsCount > 0 ? rowsCount - 1 : 0).fill(0);
  const rows = (
    <View style={bottomBorder}>
      {blankRows.map((x, i) => (
        <View style={row} key={`BR${i}`}>
          <Text style={description}>-</Text>
          <Text style={qty}>-</Text>
          <Text style={rate}>-</Text>
          <Text style={amount}>-</Text>
        </View>
      ))}
    </View>
  );
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableBlankLinesRight;
