import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    color: 'white',
  },
  description: {
    width: '100%',
  },
});

const InvoiceTableBlankSpace = ({ rowsCount }) => {
  const blankRows = Array(rowsCount).fill(0);
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} key={`BR${i}`}>
      <Text style={styles.description}>-</Text>
    </View>
  ));
  return (
    <Fragment>
      <View>{rows}</View>
    </Fragment>
  );
};

export default InvoiceTableBlankSpace;
