import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const InvoiceTableHeader = ({ columns, styles }) => {
  console.log('cols', columns)
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#000',
        backgroundColor: '#dbdbdb',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 11,
        fontStyle: 'bold',
        flexGrow: 1,
        fontSize: 7,
      }}
    >
      {columns.map((element, index) => {
        return (
          <Text style={styles[`${columns[index].column}`]}>
            {columns[index].heading}
          </Text>
        )
      })}
    </View>
  )
}

export default InvoiceTableHeader
