import React from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  netPayableStyles: {
    flexDirection: 'row',
    fontSize: 7,
    gap: 35,
  },
  totalStyle: {
    paddingLeft: 30,
    paddingTop: 5,
    fontSize: 9,
    fontFamily: 'AntonFamily',
    backgroundColor: '#c0c0c0',
  },
})

const InvoiceCalculationNetPayable = ({ isLastPage, entry, crdb_amount }) => (
  <View>
    <View style={styles.netPayableStyles}>
      <View style={{ gap: 4, paddingLeft: 5 }}>
        <Text style={{ paddingTop: 3 }}>SUB TOTAL </Text>
        <Text>DISC AMT </Text>
        <Text>GST PAYABLE</Text>
        <Text>ROUND OFF</Text>
        <Text>CR/DR NOTE</Text>
      </View>
      <View style={{ gap: 4 }}>
        <Text>:</Text>
        <Text>:</Text>
        <Text>:</Text>
        <Text>:</Text>
        <Text>:</Text>
      </View>
      <View style={{ gap: 4, paddingRight: 10 }}>
        {isLastPage ? (
          <Text>{parseFloat(entry.gross_total).toFixed(2)}</Text>
        ) : null}
        {isLastPage ? (
          <Text>{parseFloat(entry.total_disc).toFixed(2)}</Text>
        ) : null}
        {isLastPage ? (
          <Text>{parseFloat(entry.total_gst_value).toFixed(2)}</Text>
        ) : null}
        {isLastPage ? (
          <Text>{parseFloat(entry.rounding).toFixed(2)}</Text>
        ) : null}
        {isLastPage ? <Text>{crdb_amount.toFixed(2)}</Text> : null}
      </View>
    </View>
    <View style={styles.totalStyle}>
      <Text style={{ paddingBottom: 3 }}>Net Payable </Text>
      {isLastPage ? (
        <Text style={{ paddingLeft: 12, paddingTop: 1 }}>13.00</Text>
      ) : (
        <Text style={{ paddingLeft: 5, paddingTop: 1 }}>continued..</Text>
      )}
    </View>
  </View>
)

export default InvoiceCalculationNetPayable
