import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  fromAddress: {
    flexDirection: 'column',
    fontSize: 7,
    gap: 1,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 5,
    borderRight: 1,
  },
  fromName: {
    fontSize: 10,
    paddingTop: 6,
    paddingBottom: 2,
    fontFamily: 'AntonFamily',
  },
})
const DynamicAddress = ({ invoice }) => {
  return (
    <View>
      <View style={styles.fromAddress}>
        {/* In React and most UI frameworks, styles are applied in a cascading manner. 
        When you apply a style to a child element (in this case, <Text>), 
        it takes precedence over the styles applied to its parent (the <View> with styles.toAddress). */}
        <Text style={styles.fromName}>{invoice.firm_name}</Text>
        <Text>
          {invoice.line_1 + ' ' + invoice.line_2 + ' ' + invoice.city}
        </Text>
        <Text>{invoice.pincode}</Text>
        <Text>Cell : {invoice.landline}</Text>
        <Text>D.L.No. {invoice.dl1}</Text>
        <Text>{invoice.email}</Text>
      </View>
    </View>
  )
}
const InvoiceTitleFrom = ({ invoice }) => {
  return <DynamicAddress invoice={invoice} />
}

export default InvoiceTitleFrom
