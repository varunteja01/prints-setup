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
})

const DynamicAddress = ({ address }) => {
  return (
    <View>
      <View style={styles.toAddress}>
        {/* In React and most UI frameworks, styles are applied in a cascading manner. 
        When you apply a style to a child element (in this case, <Text>), 
        it takes precedence over the styles applied to its parent (the <View> with styles.toAddress). */}
        <Text style={{ paddingTop: 6 }}>{address.addLine1}</Text>
        <Text style={{ fontSize: 8 }}>{address.addLine2}</Text>
        <Text>{address.addLine3}</Text>
        <Text>{address.addLine4}</Text>
        <Text>{address.addLine5}</Text>
        <Text style={{ paddingBottom: 6 }}>{address.addLine6}</Text>
      </View>
    </View>
  )
}
const InvoiceTitleTo = () => {
  const sampleAddress = {
    addLine1: 'Party : AB01',
    addLine2: 'SMARTPHARMA MEDICAL AGENCIES',
    addLine3: 'Karmanghat hyderabad',
    addLine4: 'Phone :',
    addLine5: 'D.L.Nos: LKJHGFDSA123456',
    addLine6: 'GSTIN: 29AACCC1596Q000',
  }

  return <DynamicAddress address={sampleAddress} />
}

export default InvoiceTitleTo
