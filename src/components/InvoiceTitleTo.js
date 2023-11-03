import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  toAddress: {
    flexDirection: 'column',
    fontSize: 7,
    gap: 1,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 5,
    borderRight: 1,
  },
  t1: { paddingTop: 6 },
  t2: { fontSize: 8, fontFamily: 'AntonFamily' },
  tBottom: { paddingBottom: 6 },
})

const DynamicAddress = ({ customer }) => {
  return (
    <View>
      <View style={styles.toAddress}>
        {/* In React and most UI frameworks, styles are applied in a cascading manner. 
        When you apply a style to a child element (in this case, <Text>), 
        it takes precedence over the styles applied to its parent (the <View> with styles.toAddress). */}
        <Text style={styles.t1}>Party : {customer.code}</Text>
        <Text style={styles.t2}>{customer.name}</Text>
        <Text>
          {customer.address_1 +
            ' ' +
            customer.address_2 +
            ' ' +
            customer.address_3}
        </Text>
        <Text>Phone : {customer.phone}</Text>
        <Text>D.L.Nos : {customer.dl1}</Text>
        <Text style={styles.tBottom}>GSTIN : {customer.gst}</Text>
      </View>
    </View>
  )
}
const InvoiceTitleTo = ({ customer }) => {
  return <DynamicAddress customer={customer} />
}
export default InvoiceTitleTo
