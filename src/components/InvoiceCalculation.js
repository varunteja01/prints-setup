import React from 'react'
import { StyleSheet, View, Image, Text } from '@react-pdf/renderer'
import InvoiceCalculationBankDetails from './InvoiceCalculationBankDetails'
import InvoiceCalculationTable from './InvoiceCalculationTable'
import InvoiceCalculationNetPayable from './InvoiceCalculationNetPayable'

const styles = StyleSheet.create({
  imageStyles: {
    width: 60,
    height: 72,
    border: 1,
  },
  invoiceCalculationStyle: {
    flexDirection: 'row',
  },
  textStyles: {
    border: 1,
    borderBottom: 0,
    borderLeft: 0,
    fontSize: 9,
    width: '100%',
    height: 15,
    paddingLeft: 15,
    paddingTop: 2,
  },
})

const InvoiceCalculation = ({
  isLastPage,
  calculationTableData,
  invoice,
  qr_code,
  entry,
  crdb_amount,
}) => {
  console.log(qr_code)
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.invoiceCalculationStyle}>
          <Image style={styles.imageStyles} src={qr_code} />
          <InvoiceCalculationBankDetails invoice={invoice} />
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
        <InvoiceCalculationNetPayable
          isLastPage={isLastPage}
          entry={entry}
          crdb_amount={crdb_amount}
        />
      </View>
    </View>
  )
}

export default InvoiceCalculation
