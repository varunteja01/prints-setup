import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import Moment from 'moment';
import {
  borderColor,
  legalInvoiceStyle,
  legalInvoiceStyleTableLeft,
} from '../../InvoiceStyles';

// Destructure the imported styles
const { tableData } = legalInvoiceStyleTableLeft;

const InvoiceTableDataRight = ({ products, tableColumns, tableStyles }) => {
  const create_style = StyleSheet.create(tableStyles);
  const rows = products?.map((item, index) => (
    <View
      style={{
        ...tableData,
        height: item.product_name?.length > 40 ? 29 : 12.5,
        backgroundColor:
          item.product_name == 'Already Supplied' ? '#dbdbdb' : '',
      }}
      key={item.id?.toString()}
    >
      {tableColumns?.map((element, index) => {
        let cell_style = {
          ...create_style[`${element.column}`],
          borderColor: item.product_name == 'Already Supplied' ? '#dbdbdb' : '',
          height: item.product_name?.length > 40 ? 29 : 12,
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
                : Moment(item[`${element.value}`]).format('MM/YYYY')}
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
        if (element.type == 'all_indicated_product_name') {
          return (
            <Text style={cell_style}>
              {item?.indicator_flags?.[0]?.net_rate_indicator == true
                ? '*'
                : ''}
              {item?.indicator_flags?.[0]?.selling_price_change_indicator ==
              true
                ? '^'
                : ''}
              {item?.indicator_flags?.[0]?.mrp_indicator == true ? '#' : ''}
              &nbsp;
              {item[`${element.value}`] ?? ''}
              &nbsp;
              {item?.indicator_flags?.[0]?.gift_item == true ? '[G]' : ''}
              {item?.indicator_flags?.[0]?.narcotic_item == true ? '[N]' : ''}
              {item?.indicator_flags?.[0]?.packing_reminder_item == true
                ? '[P]'
                : ''}
            </Text>
          );
        }
        if (element.type == 'indicated_product_name') {
          return (
            <Text style={cell_style}>
              {item[`${element.value}`] ?? ''}
              &nbsp;
              {item?.indicator_flags?.[0]?.gift_item == true ? '[G]' : ''}
              {item?.indicator_flags?.[0]?.narcotic_item == true ? '[N]' : ''}
              {item?.indicator_flags?.[0]?.packing_reminder_item == true
                ? '[P]'
                : ''}
            </Text>
          );
        }
        return <Text style={cell_style}>{item[`${element.value}`] ?? ''}</Text>;
      })}
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableDataRight;
