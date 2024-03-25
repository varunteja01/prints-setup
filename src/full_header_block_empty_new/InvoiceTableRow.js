import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import Moment from 'moment'
import { getTableCellHeight } from '../components/helpers'

const borderColor = '#000000'

const InvoiceTableRow = ({
  items,
  printType,
  columns,
  styles,
  snoStart,
  verticalRows = false,
  line_height = 40,
  dynamicPagination = false,
}) => {
  const create_style = StyleSheet.create(styles)
  let sno = 0
  const rows = items.map((item) => {
    let cellHeight = item.product_name?.length > line_height ? 22 : 10.5
    if (dynamicPagination) {
      cellHeight = getTableCellHeight(item.product_name?.length, line_height)
    }
    let is_section_header =
      item.product_name == 'Already Supplied' ||
      item.product_name == 'Fridge' ||
      item.product_name === 'Replacements'
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: borderColor,
          // borderBottomWidth: 1,
          borderBottomWidth: verticalRows ? 0 : 1,
          alignItems: 'center',
          fontStyle: 'bold',
          fontSize: 7,
          color: '#000',
          // height: 11,
          height: cellHeight,
          backgroundColor: is_section_header ? '#dbdbdb' : '',
          // flexGrow: 1,
        }}
        key={item.id?.toString()}
      >
        {columns.map((element, index) => {
          let cell_style = {
            ...create_style[`${element.column}`],
            borderColor: is_section_header ? '#dbdbdb' : '',
            height: cellHeight,
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
                  ? ''
                  : Moment(item[`${element.value}`]).format('MM/YY')}
              </Text>
            )
          }
          if (element.type == 'item_order') {
            return (
              <Text style={cell_style}>{item[`${element.value}`] + 1}</Text>
            )
          }
          if (element.type == 'item_order_seq') {
            !is_section_header && sno++
            let display_index = snoStart + sno
            // let display_index = 0;
            // if (dynamicPagination) {
            //   let start_index = 0;
            //   for (let k = 0; k < pageno; k++) {
            //     start_index += pages?.length;
            //   }
            //   display_index = start_index + sno;
            // }
            return (
              <Text style={cell_style}>
                {is_section_header ? '' : display_index}
              </Text>
            )
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
            )
          }
          return (
            <Text style={cell_style}>{item[`${element.value}`] ?? ''}</Text>
          )
        })}
      </View>
    )
  })
  return <Fragment>{rows}</Fragment>
}

export default InvoiceTableRow
