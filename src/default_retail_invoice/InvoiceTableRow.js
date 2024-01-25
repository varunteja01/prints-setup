import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Moment from 'moment';

const borderColor = '#000000';

const InvoiceTableRow = ({ items, columns, styles }) => {
  const create_style = StyleSheet.create(styles);
  const rows = items.map((item) => (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        alignItems: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        fontSize: 7,
        color: '#000',
        height: 11,
      }}
      key={item.id?.toString()}
    >
      {columns.map((element, index) => {
        let cell_style = {
          ...create_style[`${element.column}`],
        };
        if (element.type == 'number') {
          return (
            <Text style={cell_style}>
              {item[`${element.value}`] == 0 ? ' ' : item[`${element.value}`]}
            </Text>
          );
        }
        if (element.type == 'amount') {
          return (
            <Text style={cell_style}>
              {parseFloat(item[`${element.value}`] ?? 0) == 0
                ? ' '
                : parseFloat(item[`${element.value}`]).toFixed(2)}
            </Text>
          );
        }
        if (element.type == 'expiry') {
          return (
            <Text style={cell_style}>
              {item[`${element.value}`] == undefined ||
              item[`${element.value}`] === ''
                ? ''
                : Moment(item[`${element.value}`]).format('MM/YY')}
            </Text>
          );
        }
        if (element.type == 'item_order') {
          return <Text style={cell_style}>{item[`${element.value}`] + 1}</Text>;
        }
        if (element.type == 'rate') {
          return (
            <Text style={cell_style}>
              {parseFloat(item[`${element.value}`] ?? 0) == 0
                ? ' '
                : parseFloat(item[`${element.value}`]).toFixed(2)}
              {item?.indicator_flags?.[0]?.net_rate_indicator == true
                ? '*'
                : ''}
              {item?.indicator_flags?.[0]?.selling_price_change_indicator ==
              true
                ? '^'
                : ''}
            </Text>
          );
        }
        if (element.type == 'mrp') {
          return (
            <Text style={cell_style}>
              {parseFloat(item[`${element.value}`] ?? 0) == 0
                ? ' '
                : parseFloat(item[`${element.value}`]).toFixed(2)}
              {item?.indicator_flags?.[0]?.mrp_indicator == true ? '*' : ''}
            </Text>
          );
        }
        if (element.type == 'indicated_product_name') {
          return (
            <Text style={cell_style}>
              {item?.indicator_flags?.[0]?.net_rate_indicator == true
                ? '*'
                : ' '}
              {item?.indicator_flags?.[0]?.selling_price_change_indicator ==
              true
                ? '^'
                : ' '}
              {item?.indicator_flags?.[0]?.mrp_indicator == true ? '#' : ' '}
              &nbsp;
              {item[`${element.value}`] ?? ''}
            </Text>
          );
        }
        return <Text style={cell_style}>{item[`${element.value}`] ?? ''}</Text>;
      })}
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
