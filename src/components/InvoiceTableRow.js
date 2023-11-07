import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import Moment from 'moment'

const borderColor = '#000'

const InvoiceTableRow = ({ items, columns, styles }) => {
  const create_style = StyleSheet.create(styles)
  const rows = items.map((item) => (
    <View
      style={{
        flexDirection: 'row',
        // borderBottomColor: borderColor,
        // borderBottomWidth: 0.5,
        alignItems: 'center',
        fontStyle: 'bold',
        fontSize: 8,
        color: '#000',
        height: item.product_name?.length > 40 ? 29 : 13.5,
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
          height: item.product_name?.length > 40 ? 29 : 14.5,
        }
        if (element.type == 'number') {
          return (
            <Text style={cell_style}>
              {item[`${element.value}`] == 0 ? ' ' : item[`${element.value}`]}
            </Text>
          )
        }
        if (element.type == 'amount') {
          return (
            <Text style={cell_style}>
              {parseFloat(item[`${element.value}`] ?? 0) == 0
                ? ' '
                : parseFloat(item[`${element.value}`]).toFixed(2)}
            </Text>
          )
        }
        if (element.type == 'expiry') {
          return (
            <Text style={cell_style}>
              {item[`${element.value}`] == undefined ||
              item[`${element.value}`] === ''
                ? ' '
                : Moment(item[`${element.value}`]).format('MM/YYYY')}
            </Text>
          )
        }
        if (element.type == 'item_order') {
          return <Text style={cell_style}>{item[`${element.value}`] + 1}</Text>
        }
        if (element.type == 'rate') {
          return (
            <Text style={cell_style}>
              {parseFloat(item[`${element.value}`] ?? 0) == 0
                ? '0.00'
                : parseFloat(item[`${element.value}`]).toFixed(2)}
              {item?.indicator_flags?.[0]?.net_rate_indicator == true
                ? '*'
                : ''}
              {item?.indicator_flags?.[0]?.selling_price_change_indicator ==
              true
                ? '^'
                : ''}
            </Text>
          )
        }
        if (element.type == 'mrp') {
          return (
            <Text style={cell_style}>
              {parseFloat(item[`${element.value}`] ?? 0) == 0
                ? ' '
                : parseFloat(item[`${element.value}`]).toFixed(2)}
              {item?.indicator_flags?.[0]?.mrp_indicator == true ? '*' : ''}
            </Text>
          )
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
          )
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
          )
        }
        return <Text style={cell_style}>{item[`${element.value}`] ?? ''}</Text>
      })}
    </View>
  ))
  return <Fragment>{rows}</Fragment>
}

export default InvoiceTableRow
