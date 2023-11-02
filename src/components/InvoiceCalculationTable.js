import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  table: {
    width: '59%',
  },
  tableRow: {
    flexDirection: 'row',
    height: 12,
  },
  tableColumn: {
    borderRight: 1,
    borderBottom: 1,
  },
  tableCell: {
    fontSize: 8,
    textAlign: 'center',
    paddingBottom: 1.1,
    paddingRight: 1,
  },
})

const InvoiceCalculationTable = ({ isLastPage, calculationTableData }) => {
  return (
    <View style={styles.table}>
      <View style={{ ...styles.tableRow, backgroundColor: '#c0c0c0' }}>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>CLASS</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>TOTAL</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>DISC</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>CGST</Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>SGST </Text>
        </View>
        <View style={{ ...styles.tableColumn, width: '16.67%' }}>
          <Text style={styles.tableCell}>Total GST</Text>
        </View>
      </View>
      {calculationTableData.map((data, index) => (
        <View style={styles.tableRow} key={index}>
          <View style={{ ...styles.tableColumn, width: '16.67%' }}>
            {isLastPage ? (
              <Text style={styles.tableCell}>{data.class}</Text>
            ) : null}
          </View>
          <View style={{ ...styles.tableColumn, width: '16.67%' }}>
            {isLastPage ? (
              <Text style={styles.tableCell}>{data.total}</Text>
            ) : null}
          </View>
          <View style={{ ...styles.tableColumn, width: '16.67%' }}>
            {isLastPage ? (
              <Text style={styles.tableCell}>{data.disc}</Text>
            ) : null}
          </View>
          <View style={{ ...styles.tableColumn, width: '16.67%' }}>
            {isLastPage ? (
              <Text style={styles.tableCell}>{data.cgst}</Text>
            ) : null}
          </View>
          <View style={{ ...styles.tableColumn, width: '16.67%' }}>
            {isLastPage ? (
              <Text style={styles.tableCell}>{data.sgst}</Text>
            ) : null}
          </View>
          <View style={{ ...styles.tableColumn, width: '16.67%' }}>
            {isLastPage ? (
              <Text style={styles.tableCell}>{data.totalGST}</Text>
            ) : null}
          </View>
        </View>
      ))}
    </View>
  )
}
export default InvoiceCalculationTable
