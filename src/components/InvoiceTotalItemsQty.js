import React from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    minHeight: 14,
    borderTop: 1,
    fontSize: 7,
    gap: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
    borderBottom: 1,
  },
})

const InvoiceTotalItemsQty = ({ isLastPage, tableData }) => {
  const numberOfRows = tableData.length
  const { totalQuantity } = tableData.reduce(
    (accumulator, item) => {
      // Parse quantity and free values to numbers (assuming they are strings)
      const quantity = parseFloat(item.qty) || 0
      const freeItems = parseFloat(item.free) || 0
      // Add quantity and free items together
      const combinedQuantity = quantity + freeItems
      // Add to the accumulator. It accumulates or collects values as the reduce function iterates over an array
      accumulator.totalQuantity += combinedQuantity

      return accumulator
    },
    { totalQuantity: 0 }
  )
  return (
    <View style={styles.itemStyle}>
      <Text>
        No of Items : {isLastPage ? <Text>{numberOfRows}</Text> : null}
      </Text>
      <Text>
        Total Quantity : {isLastPage ? <Text>{totalQuantity}</Text> : null}
      </Text>
    </View>
  )
}

export default InvoiceTotalItemsQty
