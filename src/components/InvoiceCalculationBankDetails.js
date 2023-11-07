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

const DynamicDetails = ({ invoice }) => {
  return (
    <>
      <View style={styles.bankDetailsColumn}>
        <Text>Our Bank Details:</Text>
        <Text>
          Bank Name :<Text style={styles.Bold}>{invoice.bank_name}</Text>
        </Text>
        <Text>
          Acc. No : <Text style={styles.Bold}>{invoice.account_number}</Text>
        </Text>
        <Text>
          IFSC Code: <Text style={styles.Bold}> {invoice.ifsc_code}</Text>
        </Text>
      </View>
    </>
  )
}
const InvoiceCalculationBankDetails = ({ invoice }) => {
  return <DynamicDetails invoice={invoice} />
}

export default InvoiceCalculationBankDetails
