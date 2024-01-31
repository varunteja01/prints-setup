import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Moment from 'moment';

const borderColor = '#000';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 14.5,
    fontStyle: 'bold',
    fontSize: 9,
  },
  sno: {
    width: '3%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
  },
  description: {
    width: '28%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: '2px',
  },

  pack: {
    width: '5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: '2px',
  },
  hsn: {
    width: '7%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
  },
  batch: {
    width: '9%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: '2px',
  },
  expiry: {
    width: '5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
  },
  qty: {
    width: '6%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
  },
  free: {
    width: '5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
  },

  rate: {
    width: '6%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
  },
  disc: {
    width: '4%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
  },
  mrp: {
    width: '6%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
  },
  amount: {
    width: '8%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
  },
  gst: {
    width: '4%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  mfg: {
    width: '4%',
    textAlign: 'center',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
});

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
        fontSize: 8,
        color: '#000',
        height: item.product_name?.length > 40 ? 29 : 12.5,
        backgroundColor:
          item.product_name == 'Already Supplied' ||
          item.product_name == 'Fridge' ||
          item.product_name === 'Replacements'
            ? '#dbdbdb'
            : '',
      }}
      key={item.id?.toString()}
    >
      {columns.map((element, index) => {
        let cell_style = {
          ...create_style[`${element.column}`],
          borderColor:
            item.product_name == 'Already Supplied' ||
            item.product_name == 'Fridge' ||
            item.product_name === 'Replacements'
              ? '#dbdbdb'
              : '',
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
        return <Text style={cell_style}>{item[`${element.value}`] ?? ''}</Text>;
      })}
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
