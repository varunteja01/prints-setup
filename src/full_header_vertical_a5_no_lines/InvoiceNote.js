import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000';
const fontColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#000000',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    height: 14.5,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
  },
  sno: {
    width: '15%',
    paddingLeft: '3px',
    marginTop: '4px',
    // borderRightWidth: 1,
    // backgroundColor: '#dbdbdb',
    // borderRightColor: borderColor,
    color: fontColor,
    height: 14.5,
  },
  hsn: {
    width: '10%',
    color: fontColor,
    marginTop: '4px',
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
    fontFamily: 'Helvetica-Bold',
    height: 14.5,
  },
  mrp: {
    width: '10%',
    paddingLeft: '3px',
    marginTop: '4px',
    // borderRightWidth: 1,
    // backgroundColor: '#dbdbdb',
    // borderRightColor: borderColor,
    color: fontColor,
    height: 14.5,
  },
  cpPerc: {
    width: '20%',
    paddingLeft: '3px',
    marginTop: '4px',
    // borderRightWidth: 1,
    // backgroundColor: '#dbdbdb',
    // borderRightColor: borderColor,
    color: fontColor,
    height: 14.5,
  },
});

const InvoiceTableHeader = ({ footer, products }) => {
  const total_mrp = parseFloat(
    products?.reduce(
      (total, { mrp, sale_quantity, sale_free }) =>
        total +
        parseFloat(mrp ?? 0) *
          (parseFloat(sale_quantity ?? 0) + parseFloat(sale_free ?? 0)),
      0,
    ),
  ).toFixed(2);
  const amount_saved = parseFloat(
    parseFloat(total_mrp ?? 0) - parseFloat(footer?.net_amount ?? 0),
  ).toFixed(2);
  // console.log(products, total_mrp);
  return (
    <View style={styles.container}>
      <Text style={styles.mrp}>MRP Total&nbsp;:&nbsp;</Text>
      <Text style={styles.hsn}>{total_mrp ?? 0}</Text>
      <Text style={styles.sno}>You Saved On MRP&nbsp;:&nbsp;</Text>
      <Text style={styles.hsn}>{amount_saved}</Text>
      <Text style={styles.cpPerc}>On CostPrice Percentage&nbsp;:&nbsp;</Text>
      <Text style={styles.hsn}>
        {parseFloat(
          parseFloat(
            parseFloat(amount_saved || 0) / parseFloat(footer?.net_amount || 1),
          ) * 100,
        ).toFixed(2)}
        %
      </Text>
    </View>
  );
};

export default InvoiceTableHeader;
