import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const InvoiceTableHeader = ({ columns, styles }) => {
  const create_style = StyleSheet.create(styles);
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#000',
        backgroundColor: '#dbdbdb',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 14.5,
        fontStyle: 'bold',
        fontWeight: 500,
        flexGrow: 1,
        fontSize: 8,
      }}
    >
      {columns.map((element, index) => {
        let cell_style = {
          ...create_style[`${element.column}`],
          height: 14.5,
        };
        return <Text style={cell_style}>{columns[index].heading}</Text>;
      })}
    </View>
  );
};

export default InvoiceTableHeader;
