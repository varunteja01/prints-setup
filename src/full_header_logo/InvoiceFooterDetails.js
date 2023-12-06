import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import { numberFormat } from '../utils/number'
// import { convertNumToWords } from 'utils/helpers'

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
    height: 170,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    // border: 1,
  },
  footer3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 13,
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
    height: 15,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 9,
    width: '100%',
    // border: 1,
  },
  footerDiv2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '40px',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 9,
    width: '100%',
    // border: 1,
  },
  amount_words: {
    width: '100%',
    height: '100%',
    textAlign: 'left',
    paddingLeft: '15px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    paddingTop: '2px',
    // border: 1,
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    fontSize: 8,
    width: '100%',
    height: '50px',
    // border: 1,
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
    fontSize: 5.5,
    paddingTop: '2px',
    paddingLeft: '2px',
    // border: 1,
    height: '50px',
  },

  tncLabel: {
    fontSize: '8',
    textDecoration: 'underline',
    fontStyle: 'bold',
  },
  tncVal: {},
  authsignDiv: {
    width: '50%',
    fontSize: 5,
    // textAlign: 'center',
    paddingTop: '2px',
    // border: 1,
    height: '50px',
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
    paddingBottom: 2,
    // border: 1,
  },
  forLabel: {
    width: '40%',
    marginTop: '2px',
    fontSize: 8,
    fontStyle: 'bold',
    textAlign: 'left',
  },
  forValue: {
    width: '60%',
    marginTop: '0px',
    fontSize: 8,
    fontStyle: 'bold',
    textAlign: 'right',
    fontFamily: 'Helvetica-Bold',
    paddingRight: '20px',
    // border: 1,
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
  function convertNumberToWords(amount) {
    var words = new Array()
    words[0] = ''
    words[1] = 'One'
    words[2] = 'Two'
    words[3] = 'Three'
    words[4] = 'Four'
    words[5] = 'Five'
    words[6] = 'Six'
    words[7] = 'Seven'
    words[8] = 'Eight'
    words[9] = 'Nine'
    words[10] = 'Ten'
    words[11] = 'Eleven'
    words[12] = 'Twelve'
    words[13] = 'Thirteen'
    words[14] = 'Fourteen'
    words[15] = 'Fifteen'
    words[16] = 'Sixteen'
    words[17] = 'Seventeen'
    words[18] = 'Eighteen'
    words[19] = 'Nineteen'
    words[20] = 'Twenty'
    words[30] = 'Thirty'
    words[40] = 'Forty'
    words[50] = 'Fifty'
    words[60] = 'Sixty'
    words[70] = 'Seventy'
    words[80] = 'Eighty'
    words[90] = 'Ninety'
    var atemp = amount?.toString().split('.')
    var number = atemp[0]?.split(',')?.join('')
    var n_length = number?.length
    var words_string = ''
    if (n_length <= 9) {
      var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0)
      var received_n_array = new Array()
      for (var i = 0; i < n_length; i++) {
        received_n_array[i] = number.substr(i, 1)
      }
      for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j]
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          if (n_array[i] == 1) {
            n_array[j] = 10 + parseInt(n_array[j])
            n_array[i] = 0
          }
        }
      }
      var value = ''
      for (var i = 0; i < 9; i++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          value = n_array[i] * 10
        } else {
          value = n_array[i]
        }
        if (value != 0) {
          words_string += words[value] + ' '
        }
        if (
          (i == 1 && value != 0) ||
          (i == 0 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Crores '
        }
        if (
          (i == 3 && value != 0) ||
          (i == 2 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Lakhs '
        }
        if (
          (i == 5 && value != 0) ||
          (i == 4 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Thousand '
        }
        if (
          i == 6 &&
          value != 0 &&
          n_array[i + 1] != 0 &&
          n_array[i + 2] != 0
        ) {
          words_string += 'Hundred and '
        } else if (i == 6 && value != 0) {
          words_string += 'Hundred '
        }
      }
      words_string = words_string.split('  ').join(' ')
    }
    words_string += 'Rupees Only'
    return words_string
  }

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

      <View style={styles.footerDiv2}>
        <View style={styles?.amount_words}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ ...styles.bankDetails, width: '60%', paddingTop: 3 }}
            >
              Bank Name : {invoice?.bank_name}
            </Text>
            <Text
              style={{ ...styles.bankDetails, width: '40%', paddingTop: 3 }}
            >
              IFSC Code : {invoice?.ifsc_code}
            </Text>
          </View>
          <Text style={styles.bankDetails}>
            Bank A/C : {invoice?.account_number}
          </Text>
          <Text style={styles.bankDetails}>
            Branch : {invoice?.bank_branch_name}
          </Text>
        </View>

        <Text style={styles.grand_tot_label}>
          {show_total && 'NET PAYABLE\n'}
          {show_total && (
            <Text>
              {footer?.net_amount % 1 !== 0
                ? `Rs. ${numberFormat(
                    (footer?.net_amount || 0) + (crdb_amount || 0)
                  )}`
                : `Rs. ${numberFormat(
                    (footer?.net_amount || 0) + (crdb_amount || 0)
                  )}.00`}
            </Text>
          )}
          {!show_total && 'Continued...'}
        </Text>
      </View>

      <View style={styles.footerDiv}>
        <Text style={styles.amount_words}>
          Amt in Words:{' '}
          {show_total == true ? convertNumberToWords(footer?.net_amount) : ''}
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
            height: '40px',
            // border: 1,
            height: '50px',
          }}
        >
          <Image style={styles.logo} src={qr_code} />
        </View>
        <View style={styles.authsignDiv}>
          <View style={{ flexDirection: 'row', paddingTop: '0px' }}>
            <Text style={styles.forLabel}>Billed By :</Text>
            <Text style={styles.forValue}>For {invoice.firm_name} </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.forLabel}>Order By :</Text>
            <Text style={styles.forValue}> </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.forLabel}></Text>
            <Text style={styles.forValue}>Authorised Signatory</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
