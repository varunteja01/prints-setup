import React from 'react'
import { StyleSheet, View, Image, Text } from '@react-pdf/renderer'
import phonepe from '../phonepe.jpg'
import InvoiceCalculationBankDetails from './InvoiceCalculationBankDetails'
import InvoiceCalculationTable from './InvoiceCalculationTable'
import InvoiceCalculationNetPayable from './InvoiceCalculationNetPayable'

const styles = StyleSheet.create({
  imageStyles: {
    width: 60,
    height: 72,
  },
  invoiceCalculationStyle: {
    flexDirection: 'row',
  },
  textStyles: {
    border: 1,
    fontSize: 9,
    width: '100%',
    height: 15,
    paddingLeft: 15,
    paddingTop: 2,
  },
})

const InvoiceCalculation = ({ isLastPage, calculationTableData }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.invoiceCalculationStyle}>
          <Image src={phonepe} style={styles.imageStyles} />
          <InvoiceCalculationBankDetails />
          <InvoiceCalculationTable
            isLastPage={isLastPage}
            calculationTableData={calculationTableData}
          />
        </View>
        <View>
          <Text style={styles.textStyles}>Thirteen Rupees Only</Text>
        </View>
      </View>
      <View>
        <InvoiceCalculationNetPayable isLastPage={isLastPage} />
      </View>
    </View>
  )
}

export default InvoiceCalculation
