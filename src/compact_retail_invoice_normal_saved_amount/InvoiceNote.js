import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#000000',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 14.5,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
  },
  sno: {
    width: '4%',
    paddingLeft: '3px',
    backgroundColor: '#dbdbdb',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 14.5,
  },
  hsn: {
    width: '76%',
    color: fontColor,
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
    fontFamily: 'Helvetica-Bold',
  },
  saved_amt: {
    width: '20%',
    color: fontColor,
    textAlign: 'left',
    paddingRight: '2px',
    fontFamily: 'Helvetica',
  },
});

const InvoiceTableHeader = ({ footer, products }) => {
  function calcTotal() {
    var mrp_total = 0.0;
    var net_total = 0.0;
    for (var i = 0; i < products.length; i++) {
      mrp_total =
        mrp_total +
        parseFloat(products[i]?.sale_quantity) *
          parseFloat(products[i]?.unit_mrp);
      let sale_disc =
        (parseFloat(products[i]?.sale_value) *
          parseFloat(products[i]?.discount)) /
        100;
      net_total = net_total + parseFloat(products[i]?.sale_value - sale_disc);
    }

    return (mrp_total - net_total).toFixed(2);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.sno}>Note: </Text>
      <Text style={styles.hsn}>{footer.comments}</Text>
      <Text style={styles.saved_amt}>
        YOU SAVED&nbsp;:&nbsp;
        {calcTotal()}
      </Text>
    </View>
  );
};

export default InvoiceTableHeader;
