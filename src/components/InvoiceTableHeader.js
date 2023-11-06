import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const InvoiceTableHeader = ({ columns, styles }) => (
  <View
    style={{
      flexDirection: 'row',
      borderBottomColor: '#000',
      backgroundColor: '#dbdbdb',
      borderBottomWidth: 1,
      alignItems: 'center',
      height: 14.5,
      fontStyle: 'bold',
      flexGrow: 1,
      fontSize: 8,
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

export default InvoiceTableHeader
