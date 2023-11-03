import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  table: {
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    minHeight: 10,
  },
  tableCol: {
    borderRight: 1,
    // borderBottom: 1,
  },
  tableCell: {
    marginBottom: 3,
    fontSize: 7,
    paddingRight: 3,
  },
})

const InvoiceTable = ({ tableData }) => {
  return (
    <View>
      <View style={styles.table}>
        <View style={{ ...styles.tableRow, backgroundColor: '#c0c0c0' }}>
          <View style={{ ...styles.tableCol, width: '4%' }}>
            <Text style={styles.tableCell}>S.No</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '8%' }}>
            <Text style={styles.tableCell}>HSN</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '4%' }}>
            <Text style={styles.tableCell}>MFG</Text>
          </View>
          <View
            style={{
              ...styles.tableCol,
              width: '28%',
              textAlign: 'left',
              paddingLeft: 3,
            }}
          >
            <Text style={styles.tableCell}>Product Name</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '4%' }}>
            <Text style={styles.tableCell}>Pack</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '8%' }}>
            <Text style={styles.tableCell}>Batch No</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '6%' }}>
            <Text style={styles.tableCell}>Expiry</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '4%' }}>
            <Text style={styles.tableCell}>Qty</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '6%' }}>
            <Text style={styles.tableCell}>Free</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '5%' }}>
            <Text style={styles.tableCell}>Rate</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '5%' }}>
            <Text style={styles.tableCell}>Amount</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '4%' }}>
            <Text style={styles.tableCell}>MRP</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '7%' }}>
            <Text style={styles.tableCell}>Disc%</Text>
          </View>
          <View style={{ ...styles.tableCol, width: '7%', borderRight: 0 }}>
            <Text style={styles.tableCell}>GST%</Text>
          </View>
        </View>
        {tableData.map((data, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={{ ...styles.tableCol, width: '4%' }}>
              <Text style={styles.tableCell}>{data.sno}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '8%' }}>
              <Text style={styles.tableCell}>{data.hsn}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '4%' }}>
              <Text style={styles.tableCell}>{data.mfg}</Text>
            </View>
            <View
              style={{
                ...styles.tableCol,
                width: '28%',
                textAlign: 'left',
                paddingLeft: 3,
              }}
            >
              <Text style={styles.tableCell}>{data.productName}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '4%' }}>
              <Text style={styles.tableCell}>{data.pack}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '8%' }}>
              <Text style={styles.tableCell}>{data.batchNo}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '6%' }}>
              <Text style={styles.tableCell}>{data.expiry}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '4%' }}>
              <Text style={styles.tableCell}>{data.qty}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '6%' }}>
              <Text style={styles.tableCell}>{data.free}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '5%' }}>
              <Text style={styles.tableCell}>{data.rate}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '5%' }}>
              <Text style={styles.tableCell}>{data.amount}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '4%' }}>
              <Text style={styles.tableCell}>{data.mrp}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '7%' }}>
              <Text style={styles.tableCell}>{data.disc}</Text>
            </View>
            <View style={{ ...styles.tableCol, width: '7%', borderRight: 0 }}>
              <Text style={styles.tableCell}>{data.gst}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default InvoiceTable
