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
  },
})

const InvoiceCalculationNetPayable = ({ isLastPage }) => (
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
        {isLastPage ? <Text>0</Text> : null}
        {isLastPage ? <Text>0</Text> : null}
        {isLastPage ? <Text>0</Text> : null}
        {isLastPage ? <Text>0</Text> : null}
        {isLastPage ? <Text>0</Text> : null}
      </View>
    </View>
    <View style={styles.totalStyle}>
      <Text>Net Payable </Text>
      {isLastPage ? (
        <Text style={{ paddingLeft: 12, paddingTop: 1 }}>13.00</Text>
      ) : null}
    </View>
  </View>
)

export default InvoiceCalculationNetPayable
