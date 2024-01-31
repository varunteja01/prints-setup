import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    color: 'white',
  },
  description: {
    width: '60%',
  },
  qty: {
    width: '10%',
  },
  rate: {
    width: '15%',
  },
  amount: {
    width: '15%',
  },
});

const InvoiceTableBlankSpace = ({ rowsCount, columns, styles }) => {
  const blankRows = Array(rowsCount).fill(0);
  const rows = blankRows.map((x, i) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        fontStyle: 'bold',
        fontSize: 9,
        color: '#000',
        height: 14.5,
      }}
    >
      {columns?.map((c, index) => {
        return (
          <View style={{ ...styles[`${c.column}`] }} key={`BR${index}`}></View>
        );
      })}
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableBlankSpace;
