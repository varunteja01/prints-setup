import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000';
const fontColor = '#000';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    color: 'white',
  },
  description: {
    width: '60%',
  },
  qty: {
    width: '10%',
  },
  rate: {
    width: '15%',
  },
  amount: {
    width: '15%',
  },
});

const styles5 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 6,
  },
  description: {
    width: '26%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    color: fontColor,
    paddingLeft: '2px',
    height: 12,
    paddingTop: '2px',
  },
  qty: {
    width: '4%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 12,
  },
  saved_amount: {
    width: '6%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    height: 12,
    paddingTop: '2px',
  },
  rate: {
    width: '6%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 12,
  },
  amount: {
    width: '6%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: '2px',
    height: 12,
  },
  net_amount: {
    width: '6%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    height: 12,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: '2px',
  },
  sno: {
    width: '2%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: '2px',
    height: 12,
    paddingTop: '2px',
  },
  mfr: {
    width: '4%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: '2px',
    height: 12,
    paddingTop: '2px',
  },
  pack: {
    width: '6%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingLeft: '2px',
    paddingTop: '2px',
    height: 12,
  },
  hsn: {
    width: '6%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 12,
  },
  batch: {
    width: '10%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: '2px',
    paddingTop: '2px',
    height: 12,
  },
  expiry: {
    width: '4%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 12,
  },
  free: {
    width: '5%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 12,
  },
  disc: {
    width: '4%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 12,
  },
  mrp: {
    width: '6%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: '2px',
    paddingTop: '2px',
    height: 12,
  },
  gst: {
    width: '4%',
    color: fontColor,
    textAlign: 'right',
    paddingRight: '2px',
    height: 12,
    paddingTop: '2px',
  },
});

const InvoiceTableBlankSpace = ({ rowsCount, printType }) => {
  if (printType == 'full_header_disc_retail') {
    const blankRows = Array(rowsCount).fill(0);
    const rows = blankRows.map((x, i) => (
      <View style={styles5.container}>
        <Text style={styles5.sno}></Text>
        <Text style={styles5.mfr}></Text>
        <Text style={styles5.hsn}></Text>
        <Text style={styles5.description}></Text>
        <Text style={styles5.pack}></Text>
        <Text style={styles5.batch}></Text>
        <Text style={styles5.expiry}></Text>
        <Text style={styles5.mfr}></Text>
        <Text style={styles5.qty}></Text>
        <Text style={styles5.mrp}></Text>
        <Text style={styles5.rate}></Text>
        <Text style={styles5.amount}></Text>
        <Text style={styles5.saved_amount}></Text>
        <Text style={styles5.net_amount}></Text>
        <Text style={styles5.gst}></Text>
      </View>
    ));
    return <Fragment>{rows}</Fragment>;
  } else {
    const blankRows = Array(rowsCount).fill(0);
    const rows = blankRows.map((x, i) => (
      <View style={styles.row} key={`BR${i}`}>
        <Text style={styles.description}>-</Text>
        <Text style={styles.qty}>-</Text>
        <Text style={styles.rate}>-</Text>
        <Text style={styles.amount}>-</Text>
      </View>
    ));

    return <Fragment>{rows}</Fragment>;
  }
};

export default InvoiceTableBlankSpace;
