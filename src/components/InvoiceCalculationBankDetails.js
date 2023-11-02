import React from 'react'
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import MyCustomFont from '../fonts/Roboto-Medium.ttf'

Font.register({
  family: 'AntonFamily',
  src: MyCustomFont,
})

const styles = StyleSheet.create({
  bankDetailsColumn: {
    flexDirection: 'column',
    fontSize: 8,
    gap: 3,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 3,
    borderRight: 1,
  },
  Bold: {
    fontFamily: 'AntonFamily',
  },
})

const DynamicDetails = ({ details }) => {
  return (
    <View style={styles.bankDetailsColumn}>
      <Text>Our Bank Details:</Text>
      <Text>
        Bank Name :<Text style={styles.Bold}> {details.detail1}</Text>
      </Text>
      <Text>
        Acc. No :<Text style={styles.Bold}>{details.detail2}</Text>
      </Text>
      <Text>
        IFSC Code: <Text style={styles.Bold}> {details.detail3}</Text>
      </Text>
    </View>
  )
}
const InvoiceCalculationBankDetails = () => {
  const sampleDetails = {
    detail1: 'BANK OF BARODA',
    detail2: ' 29930200000505',
    detail3: ' BARB0NIRMAL',
  }

  return <DynamicDetails details={sampleDetails} />
}

export default InvoiceCalculationBankDetails
