import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const borderColor = '#000';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 71,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    borderLeftWidth: 1,
    borderLeftColor: borderColor,
    borderRightWidth: 1,
    borderRightColor: borderColor,
    borderTopWidth: 1,
    borderTopColor: borderColor,
  },
  left: {
    flexDirection: 'row',
    flexGrow: 1,
    height: 71,
    width: '70%',
  },
  middle: {
    flexDirection: 'row',
    height: 71,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    width: '20%',
  },
  right: {
    flexDirection: 'row',
    height: 71,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    width: '10%',
  },
  leftText: {
    flexDirection: 'column',
    height: 71,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    width: '25%',
    marginTop: '10px',
  },
  rightText: {
    flexDirection: 'column',
    height: 71,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    marginTop: '10px',
    width: '90%',
  },
  imageContainer: {
    flexDirection: 'column',
    height: 71,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
    marginTop: '3px',
    width: '50%',
  },
  sno: {
    width: '100%',
    paddingLeft: '3px',
    color: fontColor,
    height: 14,
  },
  hsn: {
    width: '20%',
    color: fontColor,
    textAlign: 'left',
    paddingRight: '2px',
  },
  sno1: {
    width: '100%',
    paddingLeft: '3px',
    color: fontColor,
    height: 14,
  },
  hsn1: {
    width: '45%',
    color: fontColor,
    textAlign: 'left',
    paddingRight: '2px',
  },
  logo: {
    width: 65,
    height: 65,
    borderWidth: '1px',
    borderColor: '#222222',
  },
  type: {
    width: '100%',
    textAlign: 'right',
    paddingTop: '3px',
    paddingRight: '5px',
    color: fontColor,
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontStyle: 'heavy',
  },
});

const InvoiceTableHeader = ({ footer, qr_code }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <View
        style={{
          flexDirection: 'row',
          fontStyle: 'bold',
          fontSize: 8,
          width: '65%',
          height: '100%',
        }}
      >
        <View style={{ ...styles.leftText, width: '10%' }}>
          <Text style={styles.sno}>Ack No</Text>
          <Text style={styles.sno}>Ack Date</Text>
          <Text style={styles.sno}>IRN</Text>
        </View>
        <View style={{ ...styles.rightText, width: '90%' }}>
          <Text style={styles.sno}>{`: ${footer?.ack_no || ''}`}</Text>
          <Text style={styles.sno}>{`: ${footer?.ack_date || ''}`}</Text>
          <Text style={styles.sno}>{`: ${footer?.irn || ''}`}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          fontStyle: 'bold',
          fontSize: 8,
          width: '35%',
          height: '100%',
        }}
      >
        <View style={{ ...styles.leftText, width: '22%' }}>
          <Text style={styles.sno}>Eway No.</Text>
          <Text style={styles.sno}>Valid Upto</Text>
        </View>
        <View style={{ ...styles.rightText, width: '78%' }}>
          <Text style={styles.sno}>{`: ${footer?.e_way_bill_no || ''}`}</Text>
          <Text style={styles.sno}>{`: ${footer?.valid_upto || ''}`}</Text>
        </View>
      </View>
    </View>

    <View style={styles.middle}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} src={qr_code} />
      </View>
    </View>
    <View style={styles.right}>
      <Text style={styles.type}></Text>
    </View>
  </View>
);

export default InvoiceTableHeader;
