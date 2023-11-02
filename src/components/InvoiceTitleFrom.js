import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
// import { Font } from '@react-pdf/renderer'
// import MyCustomFont from '../fonts/Roboto-Medium.ttf'

// Font.register({
//   family: 'AntonFamily',
//   src: MyCustomFont,
// })

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
    // fontFamily: 'AntonFamily',
  },
})
const DynamicAddress = ({ address }) => {
  return (
    <View>
      <View style={styles.fromAddress}>
        {/* In React and most UI frameworks, styles are applied in a cascading manner. 
        When you apply a style to a child element (in this case, <Text>), 
        it takes precedence over the styles applied to its parent (the <View> with styles.toAddress). */}
        <Text style={styles.fromName}>{address.name}</Text>
        <Text>{address.addLine1}</Text>
        <Text>{address.addLine2}</Text>
        <Text>{address.addLine3}</Text>
        <Text>{address.addLine4}</Text>
        <Text>{address.addLine5}</Text>
        <Text>{address.addLine6}</Text>
      </View>
    </View>
  )
}
const InvoiceTitleFrom = () => {
  const sampleAddress = {
    name: 'SMART PHARMA AGENCIES',
    addLine1: 'D.NO 1-5-788 PRIYADARSHINI NAGAR,NIRMAL',
    addLine2: '605001',
    addLine3: 'Cell : 9573838598',
    addLine4: 'D.L.No. 20B:TS/NML/2021-85659',
    addLine6: 'snehith@risurgetech.in',
  }

  return <DynamicAddress address={sampleAddress} />
}

export default InvoiceTitleFrom
