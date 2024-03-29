import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import { numberFormat } from './number'
// import { convertNumToWords } from 'utils/helpers';

const borderColor = '#100c08'

Font.register({
  family: 'Helvetica',
  fonts: [
    {
      src: `./data/Helvetica.ttf`,
    },
    {
      src: `./data/Helvetica-Bold.ttf`,
      fontWeight: 'bold',
    },
  ],
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer2: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 140,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 15,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: borderColor,
  },
  gst: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 12,
    paddingRight: '2px',
  },
  gst_border: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
    paddingRight: '2px',
  },
  gst_discount: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 12,
  },
  gst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 12,
  },
  gst_value_border: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
  },
  cgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 12,
  },
  sgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 12,
  },
  igst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 12,
  },
  footer_heading: {
    width: '8%',
    textAlign: 'left',
    paddingLeft: '15px',
  },
  footer_icon: {
    width: '1%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value_border: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '8px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
  },
  blank: {
    width: '0%',
  },
  col_tot: {
    width: '12%',
    textAlign: 'left',
    paddingLeft: '15px',
  },
  footerDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 9,
    width: '100%',
  },
  footerDiv2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '30px',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 9,
    width: '100%',
  },
  amount_words: {
    width: '73%',
    height: '100%',
    textAlign: 'left',
    paddingLeft: '15px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    fontSize: 7,
    width: '100%',
    height: '30px',
  },
  grand_tot_label: {
    width: '27%',
    height: '100%',
    textAlign: 'center',
    borderBottomWidth: 0,
    fontStyle: 'bold',
    fontSize: 10,
    backgroundColor: '#dbdbdb',
  },
  grand_tot_val: {
    width: '27%',
    height: '100%',
    textAlign: 'center',
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    fontFamily: 'Helvetica-Bold',
    fontStyle: 'bold',
    fontSize: 12,
    backgroundColor: '#dbdbdb',
  },
  tncDiv: {
    width: '40%',
    fontSize: 5,
    paddingTop: '2px',
    paddingLeft: '2px',
  },

  tncLabel: {
    fontSize: '6',
    textDecoration: 'underline',
    fontStyle: 'bold',
  },
  tncVal: {},
  authsignDiv: {
    width: '50%',
    fontSize: 5,
    // textAlign: 'center',
    paddingTop: '2px',
  },
  signatory: {
    fontSize: 8,
    bottom: -35,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontStyle: 'bold',
  },
  for: {
    marginTop: '2px',
    fontSize: 8,
    fontStyle: 'bold',
  },
  gst_last: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
    paddingRight: '2px',
  },
  gst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
  },
  cgst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
  },
  sgst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
  },
  igst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
  },
  gst_discount_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 12,
  },
  bankDetails: {
    margin: 0,
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
  },
  forLabel: {
    width: '25%',
    marginTop: '2px',
    fontSize: 8,
    fontStyle: 'bold',
    textAlign: 'left',
  },
  forValue: {
    width: '75%',
    marginTop: '2px',
    fontSize: 8,
    fontStyle: 'bold',
    textAlign: 'right',
    fontFamily: 'Helvetica-Bold',
  },
  logo: {
    margin: '15px 0 0 0px',
    width: 50,
    height: 50,
  },
})

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  qr_code,
  crdb_amount,
  show_total = false,
}) => {
  return (
    <View style={styles.footer2}>
      <View style={styles.container}>
        <Text style={styles.gst}>0% </Text>
        <Text style={styles.gst_discount}>
          {show_total == true
            ? parseFloat(footer?.gst_exempted_value).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.gst_value}>{show_total ? '0.00' : ''}</Text>
        <Text style={styles.cgst_value}>{show_total ? '0.00' : ''}</Text>
        <Text style={styles.sgst_value}>{show_total ? '0.00' : ''}</Text>
        <Text style={styles.igst_value}></Text>

        <Text style={styles.col_tot}>TOTAL ITEMS</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total ? items : ''}
        </Text>

        <Text style={styles.col_tot}>Gross Amount</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {`${
            show_total
              ? footer?.gross_total % 1 != 0
                ? `${footer?.gross_total}`
                : `${footer?.gross_total}.00`
              : ''
          }`}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst}>5% </Text>
        <Text style={styles.gst_discount}>
          {show_total ? parseFloat(footer?.gst_1_value).toFixed(2) : ''}
        </Text>
        <Text style={styles.gst_value}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_1 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.cgst_value}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_1 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.sgst_value}>
          {show_total ? parseFloat(footer?.gst_1).toFixed(2) : ''}
        </Text>
        <Text style={styles.igst_value}>
          {show_total ? Number(footer?.gst_1_disc).toFixed(2) : ''}
        </Text>

        <Text style={styles.col_tot}>TOTAL QTY.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total
            ? products.reduce(
                (n, { sale_quantity, sale_free }) =>
                  n + (sale_quantity || 0) + (sale_free || 0),
                0
              )
            : ''}
        </Text>

        <Text style={styles.col_tot}>Less Discount</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total ? Number(footer?.total_disc).toFixed(2) : ''}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst}>12% </Text>
        <Text style={styles.gst_discount}>
          {show_total ? parseFloat(footer?.gst_2_value).toFixed(2) : ''}
        </Text>
        <Text style={styles.gst_value}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_2 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.cgst_value}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_2 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.sgst_value}>
          {show_total ? parseFloat(footer?.gst_2).toFixed(2) : ''}
        </Text>
        <Text style={styles.igst_value}>
          {show_total ? Number(footer?.gst_2_disc).toFixed(2) : ''}
        </Text>

        <Text style={styles.col_tot}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>

        <Text style={styles.col_tot}>Add GST</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total ? footer?.total_gst : ''}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst}>18% </Text>
        <Text style={styles.gst_discount}>
          {show_total ? parseFloat(footer?.gst_3_value).toFixed(2) : ''}
        </Text>
        <Text style={styles.gst_value}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_3 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.cgst_value}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_3 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.sgst_value}>
          {show_total ? parseFloat(footer?.gst_3).toFixed(2) : ''}
        </Text>
        <Text style={styles.igst_value}>
          {show_total ? Number(footer?.gst_3_disc).toFixed(2) : ''}
        </Text>

        <Text style={styles.col_tot}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>

        <Text style={styles.col_tot}>CR/DR NOTE</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total ? Number(crdb_amount).toFixed(2) : ''}
        </Text>
      </View>

      <View style={styles.footer3}>
        <Text style={styles.gst_last}>28% </Text>
        <Text style={styles.gst_discount_last}>
          {show_total ? parseFloat(footer?.gst_4_value).toFixed(2) : ''}
        </Text>
        <Text style={styles.gst_value_last}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_4 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.cgst_value_last}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_4 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.sgst_value_last}>
          {show_total ? parseFloat(footer?.gst_4).toFixed(2) : ''}
        </Text>
        <Text style={styles.igst_value_last}>
          {show_total ? Number(footer?.gst_4_disc).toFixed(2) : ''}
        </Text>

        <Text style={styles.col_tot}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>

        <Text style={styles.col_tot}>Round Off</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total ? footer?.rounding : ''}
        </Text>
      </View>

      <View style={styles.footerDiv}>
        <Text style={styles.amount_words}>
          {show_total
            ? `RS. ${numberFormat(
                (footer?.net_amount || 0) + (crdb_amount || 0)
              )}`
            : ''}
        </Text>

        <Text style={styles.grand_tot_label}>
          {show_total ? `NET PAYABLE` : ''}
        </Text>
      </View>

      <View style={styles.footerDiv2}>
        <View style={styles?.amount_words}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ ...styles.bankDetails, width: '60%' }}>
              Bank Name : {show_total ? invoice?.bank_name : ''}
            </Text>
            <Text style={{ ...styles.bankDetails, width: '60%' }}>
              IFSC Code : {show_total ? invoice?.ifsc_code : ''}
            </Text>
          </View>
          <Text style={styles.bankDetails}>
            Bank A/C : {show_total ? invoice?.account_number : ''}
          </Text>
          <Text style={styles.bankDetails}>
            Branch : {show_total ? invoice?.bank_branch_name : ''}
          </Text>
        </View>

        <Text style={styles.grand_tot_val}>
          {show_total
            ? footer?.net_amount % 1 != 0
              ? `Rs. ${numberFormat(
                  (footer?.net_amount || 0) + (crdb_amount || 0)
                )}`
              : `Rs. ${numberFormat(
                  (footer?.net_amount || 0) + (crdb_amount || 0)
                )}.00`
            : 'Continued...'}
        </Text>
      </View>

      <View style={styles.footer4}>
        <View style={styles.tncDiv}>
          <Text style={styles.tncLabel}>Terms and Conditions</Text>
          <Text>{invoice?.terms_and_conditions || ''}</Text>
        </View>

        <View
          style={{
            width: '10%',
            height: '60px',
          }}
        >
          <Image style={styles.logo} src={qr_code} />
        </View>
        <View style={styles.authsignDiv}>
          <View style={{ flexDirection: 'row', paddingTop: '2px' }}>
            <Text style={styles.forLabel}>Checked By :</Text>
            <Text style={styles.forValue}>For {invoice.firm_name} </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.forLabel}>Delivered By :</Text>
            <Text style={styles.forValue}> </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
