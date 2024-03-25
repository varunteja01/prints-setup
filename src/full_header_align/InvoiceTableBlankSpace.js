import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 11,
    // border: 1,
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
})

const InvoiceTableBlankSpace = ({
  rowsCount,
  columns,
  styles,
  verticalRows = false,
}) => {
  const blankRows = Array(rowsCount).fill(0)
  const rows = blankRows.map((x, i) =>
    verticalRows ? (
      <View style={{ flexDirection: 'row' }} key={`BR${i}`}>
        {columns.map((c) => (
          <View style={styles[`${c.column}`]}>
            <Text></Text>
          </View>
        ))}
      </View>
    ) : (
      <View style={rowStyles.row}>
        <Text style={rowStyles.description}>-</Text>
        <Text style={rowStyles.qty}>-</Text>
        <Text style={rowStyles.rate}>-</Text>
        <Text style={rowStyles.amount}>-</Text>
      </View>
    )
  )
  return <Fragment>{rows}</Fragment>
}

export default InvoiceTableBlankSpace
