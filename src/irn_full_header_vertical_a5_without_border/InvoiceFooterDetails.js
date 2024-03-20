import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import { numberFormat } from './number'
import { convertNumToWords } from '../components/helpers'

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
    height: 10.5,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer2: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 140,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 10.5,
    fontStyle: 'bold',
    // flexGrow: 1,
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
    height: 10.5,
    paddingRight: '2px',
  },
  gst_border: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10.5,
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
    height: 10.5,
  },
  gst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 10.5,
  },
  gst_value_border: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10.5,
  },
  cgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 10.5,
  },
  sgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 10.5,
  },
  igst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 10.5,
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
    paddingRight: '4px',
  },
  footer_value_border: {
    width: '10%',
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
    height: 14,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  amount_words: {
    width: '73%',
    fontSize: 7,
    height: '100%',
    textAlign: 'left',
    paddingLeft: '5px',
    paddingTop: '2px',
    borderTopWidth: 0.5,
    borderTopColor: borderColor,
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
  },
  footer4: {
    flexDirection: 'row',
    // alignItems: 'center',
    fontStyle: 'bold',
    fontSize: 7,
    width: '100%',
    height: '36px',
  },
  grand_tot_label: {
    width: '27%',
    height: '100%',
    textAlign: 'center',
    borderBottomWidth: 0,
    fontStyle: 'bold',
    fontSize: 9,
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
    fontSize: 9,
    backgroundColor: '#dbdbdb',
  },
  tncDiv: {
    width: '35%',
    fontSize: 5,
    paddingTop: '4px',
    paddingLeft: '2px',
  },
  tncLabel: {
    fontSize: '6',
    textDecoration: 'underline',
    fontStyle: 'bold',
  },
  tncVal: {},

  authsignDiv: {
    width: '35%',
    fontSize: 5,
    textAlign: 'top',
    paddingTop: '2px',
  },
  signatory: {
    fontSize: 8,
    bottom: -16,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontStyle: 'bold',
  },
  for: {
    fontSize: 8,
    fontStyle: 'bold',
    textAlign: 'center',
  },
  gst_last: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10.5,
    paddingRight: '2px',
  },
  gst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10.5,
  },
  cgst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10.5,
  },
  sgst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10.5,
  },
  igst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10.5,
  },
  gst_discount_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 10.5,
  },
  imageContainer: {
    marginTop: 0,
    width: '70px',
    paddingTop: '2px',
    paddingLeft: '5px',
  },
  logo: {
    width: 50,
    height: 50,
  },
  bankDiv: {
    width: '100%',
    fontSize: 7,
    paddingLeft: '8px',
    justifyContent: 'center',
  },
  bankDetails: {
    margin: 0,
    // fontSize: 8,
    fontFamily: 'Helvetica-Bold',
  },
  irn: {
    fontSize: 7,
    textAlign: 'left',
    paddingTop: '2px',
    paddingLeft: '5px',
    borderBottomWidth: 0.5,
    borderBottomColor: borderColor,
  },
})

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  crdb_amount,
  show_total,
  qr_code,
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

        <Text style={styles.col_tot}>Less Discount</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total
            ? `${Number(footer?.total_disc).toFixed(2)} (${
                footer?.overall_disc
              }%)`
            : ''}
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
                  n + sale_quantity + sale_free,
                0
              )
            : ''}
        </Text>

        <Text style={styles.col_tot}>SGST PAYABLE</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total ? footer?.total_gst / 2 : ''}
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

        <Text style={styles.col_tot}>Rounding</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true ? footer?.rounding : ''}
        </Text>

        <Text style={styles.col_tot}>CGST PAYABLE</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total ? footer?.total_gst_value / 2 : ''}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst_last}>18% </Text>
        <Text style={styles.gst_discount_last}>
          {show_total ? parseFloat(footer?.gst_3_value).toFixed(2) : ''}
        </Text>
        <Text style={styles.gst_value_last}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_3 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.cgst_value_last}>
          {show_total
            ? footer?.gst_type == true
              ? (footer?.gst_3 / 2).toFixed(2)
              : (0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.sgst_value_last}>
          {show_total ? parseFloat(footer?.gst_3).toFixed(2) : ''}
        </Text>
        <Text style={styles.igst_value_last}>
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

      {/* <View style={styles.footer3}>
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
      </View> */}

      <View style={styles.footerDiv}>
        <Text style={styles.amount_words}>
          {show_total
            ? `RS. ${convertNumToWords(
                parseFloat(footer?.net_amount || 0) +
                  parseFloat(footer?.debit_note_amount || 0) -
                  parseFloat(footer?.credit_note_amount || 0)
              )}`
            : ''}
        </Text>

        <Text style={styles.grand_tot_label}>
          {show_total ? `GRAND TOTAL` : ''}
        </Text>
      </View>

      <View style={styles.footerDiv}>
        <Text style={styles.amount_words}>
          Message : {show_total ? footer?.comments : ''}
        </Text>

        <Text style={styles.grand_tot_val}>
          {show_total
            ? footer?.net_amount % 1 != 0
              ? `Rs. ${numberFormat(
                  parseFloat(footer?.net_amount || 0) +
                    parseFloat(footer?.debit_note_amount || 0) -
                    parseFloat(footer?.credit_note_amount || 0)
                )}`
              : `Rs. ${numberFormat(
                  parseFloat(footer?.net_amount || 0) +
                    parseFloat(footer?.debit_note_amount || 0) -
                    parseFloat(footer?.credit_note_amount || 0)
                )}.00`
            : 'Continued...'}
        </Text>
      </View>

      <View style={{ flexDirection: 'column', width: '100%' }}>
        <View style={{ width: '100%' }}>
          <Text style={styles.irn}>IRN : {footer?.irn}</Text>
        </View>
        <View style={styles.footer4}>
          <View style={styles.tncDiv}>
            <Text style={styles.tncLabel}>Terms and Conditions</Text>
            <Text style={{}}>{invoice?.terms_and_conditions || ''}</Text>
          </View>

          <View
            style={{
              width: '30%',
              // marginBottom: '10px',
              flexDirection: 'row',
            }}
          >
            <View style={styles.imageContainer}>
              <Image style={styles.logo} src={qr_code} />
            </View>

            <View style={styles.bankDiv}>
              <Text style={styles.bankDetails}>Our Bank Details</Text>
              <Text style={styles.bankDetails}>
                Bank Name : {invoice?.bank_name}
              </Text>
              <Text style={styles.bankDetails}>
                Acc. No : {invoice?.account_number}
              </Text>
              <Text style={styles.bankDetails}>
                IFSC Code : {invoice?.ifsc_code}
              </Text>
            </View>
          </View>
          <View style={styles.authsignDiv}>
            <Text style={styles.for}>FOR {invoice.firm_name}</Text>
            {/* <Text style={styles.signatory}>Authorised Signatory</Text> */}
          </View>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
