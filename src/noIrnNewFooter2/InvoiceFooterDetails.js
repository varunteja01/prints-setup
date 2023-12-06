import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import { numberFormat } from '../utils/number'
//import { numberFormat } from 'constants/number';
import moment from 'moment'

const fontColor = '#000'
const borderColor = '#000'

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
    height: 120,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    // borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    height: '59px',
  },
  verify: {
    width: '10%',
    textAlign: 'left',
    paddingLeft: 4,
    paddingTop: 1,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderBottomColor: borderColor,
    // borderBottomWidth: 1,
    height: 12,
    paddingRight: '2px',
    lineHeight: 1.5,
  },
  gst: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 12,
    paddingRight: '2px',
  },
  gst_border: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12,
    paddingRight: '2px',
  },
  gst_discount: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 12,
  },
  gst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 12,
  },
  gst_value_border: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: 12,
  },
  cgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 12,
  },
  sgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 12,
  },
  igst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 12,
  },
  gst_last: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
    paddingRight: '2px',
    borderBottomWidth: 1,
  },
  gst_last2: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12,
    paddingRight: '2px',
    fontFamily: 'Helvetica-Bold',
  },
  gst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: 11.5,
  },
  gst_value_last2: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    fontFamily: 'Helvetica-Bold',
    height: 11.5,
  },
  cgst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  sgst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  igst_value_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  gst_discount_last: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  amount_words: {
    width: '46%',
    textAlign: 'left',
    paddingLeft: '15px',
    borderTopWidth: 0,
    height: 12,
  },
  footer_heading: {
    width: '8%',
    textAlign: 'left',
    paddingLeft: '4px',
    fontFamily: 'Helvetica-Bold',
  },
  footer_heading3: {
    width: '6%',
    textAlign: 'left',
    paddingLeft: '4px',
    fontFamily: 'Helvetica-Bold',
  },
  // footer_heading1: {
  //   width: '5%',
  //   textAlign: 'left',
  //   paddingLeft: '4px',
  //   fontFamily: 'Helvetica-Bold',
  // },
  footer_heading2: {
    width: '6%',
    textAlign: 'left',
    paddingLeft: '4px',
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    // border: 1,
  },
  footer_icon: {
    width: '1%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  // footer_icon1: {
  //   width: '0%',
  //   textAlign: 'center',
  //   padding: '0px',
  //   // border: 1,
  // },
  footer_value: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value2: {
    width: '8%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value_border: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '4px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12,
  },
  footer_value_border3: {
    width: '8%',
    textAlign: 'right',
    paddingRight: '4px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12,
  },
  // footer_value_border1: {
  //   width: '4.5%',
  //   textAlign: 'right',
  //   paddingRight: '2px',
  //   borderRightColor: borderColor,
  //   borderRightWidth: 1,
  //   height: 12,
  //   border: 1,
  // },
  blank: {
    width: '0%',
  },
  tnc: {
    width: '44%',
    fontSize: 5,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRightColor: '#000',
    height: '60px',
  },
  logo: {
    width: 55,
    height: 55,
  },
})

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  qr_code,
  show_total,
  crdb_amount,
  clientAnalyticStats,
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
  function totalQty(items) {
    let qty = 0
    for (let i = 0; i < items?.length; i++) {
      qty =
        qty +
        parseFloat(items[i]?.sale_quantity || 0) +
        parseFloat(items[i]?.sale_free || 0)
    }

    return qty
  }

  return (
    <View style={styles.footer2}>
      <View style={styles.container}>
        <Text style={styles.verify}>
          Billed at :{' '}
          {footer?.created_at
            ? moment(footer?.created_at).utc().local().format('hh:mm A')
            : ''}
        </Text>
        <Text style={styles.gst}>0% </Text>
        {/* <Text style={styles.gst_discount}>
          {show_total == true ? footer?.gst_0_disc : ''}
        </Text> */}
        <Text style={styles.gst_value}>
          {show_total == true ? footer?.gst_exempted_value : ''}
        </Text>
        <Text style={styles.cgst_value}></Text>
        <Text style={styles.sgst_value}></Text>
        <Text style={styles.igst_value}></Text>
        <Text style={styles.footer_heading}>Outstanding Amt</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true
            ? clientAnalyticStats?.net_outstanding_amount?.slice(1, -3) || ''
            : ''}
        </Text>
        <Text style={styles.footer_heading3}>Sub Total</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border3}>
          {show_total == true
            ? parseFloat(footer?.gross_total ?? 0).toFixed(2)
            : ''}
        </Text>

        <Text style={styles.footer_heading2}>Billed Amt</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value2}>
          {show_total == true
            ? parseFloat(footer?.gross_total ?? 0).toFixed(2)
            : ''}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.verify}></Text>
        <Text style={styles.gst}>5.00% </Text>
        {/* <Text style={styles.gst_discount}>
          {show_total == true ? footer?.gst_1_disc : ''}
        </Text> */}
        <Text style={styles.gst_value}>
          {show_total == true ? footer?.gst_1_value : ''}
        </Text>
        <Text style={styles.cgst_value}>
          {footer?.gst_type == true && footer?.gst_1 != null
            ? show_total == true
              ? (footer?.gst_1 / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.sgst_value}>
          {footer?.gst_type == true && footer?.gst_1 != null
            ? show_total == true
              ? (footer?.gst_1 / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.igst_value}>
          {footer?.gst_type == false && footer?.gst_1 != null
            ? show_total == true
              ? footer?.gst_1.toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        {/* <Text style={{ ...styles.footer_heading1, width: '2.5%' }}>Bills</Text>
        <Text style={styles.footer_icon1}>:</Text>
        <Text
          style={{
            ...styles.footer_value_border1,
            borderRightWidth: 0,
            width: '1%',
          }}
        >
          {clientAnalyticStats?.no_of_outstanding || 0}
        </Text>
        <text style={{ width: '1%' }}></text>
        <Text style={{ ...styles.footer_heading1, paddingLeft: 0 }}>
          Last Receipt
        </Text>
        <Text style={styles.footer_icon1}>:</Text>
        <Text style={{ ...styles.footer_value_border, width: '5.5%' }}>
          {clientAnalyticStats?.latest_receipt
            ? moment(clientAnalyticStats?.latest_receipt).format('DD-MM-YYYY')
            : ''}
        </Text> */}
        <Text style={{ ...styles.footer_heading, width: '2.5%' }}>bills</Text>
        <Text style={{ ...styles.footer_icon, width: '0.5%' }}>:</Text>
        <Text
          style={{
            ...styles.footer_value_border,
            width: '2%',
            borderRightWidth: 0,
          }}
        >
          {clientAnalyticStats?.no_of_outstanding || 0}
        </Text>
        <Text
          style={{ ...styles.footer_heading, width: '5%', paddingLeft: '0px' }}
        >
          Last receipt
        </Text>
        <Text style={{ ...styles.footer_icon, width: '0.5%' }}>:</Text>
        <Text style={{ ...styles.footer_value_border, width: '4.5%' }}>
          {clientAnalyticStats?.latest_receipt
            ? moment(clientAnalyticStats?.latest_receipt).format('DD-MM-YYYY')
            : ''}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading3}>DiscAmt(-)</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border3}>
          {show_total == true
            ? parseFloat(footer?.total_disc || 0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.footer_heading2}>Cr/Db Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value2}>
          {show_total == true
            ? parseFloat(footer?.debit_note_amount || 0) -
              parseFloat(footer?.credit_note_amount || 0)
            : ''}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.verify}>Stock Out : </Text>

        <Text style={styles.gst}>12.00% </Text>
        {/* <Text style={styles.gst_discount}>
          {show_total == true ? footer?.gst_2_disc : ''}
        </Text> */}
        <Text style={styles.gst_value}>
          {show_total == true ? footer?.gst_2_value : ''}
        </Text>
        <Text style={styles.cgst_value}>
          {footer?.gst_type == true && footer?.gst_2 != null
            ? show_total == true
              ? (footer?.gst_2 / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.sgst_value}>
          {footer?.gst_type == true && footer?.gst_2 != null
            ? show_total == true
              ? (footer?.gst_2 / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.igst_value}>
          {footer?.gst_type == false && footer?.gst_2 != null
            ? show_total == true
              ? footer?.gst_2.toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>
        <Text style={styles.footer_heading3}>GST Amt(+)</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border3}>
          {show_total == true ? footer?.total_gst_value : ''}
        </Text>
        {/* <Text style={styles.footer_heading}>GST Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true ? footer?.total_gst_value : ''}
        </Text> */}
        <Text style={styles.footer_heading2}>TCS</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value2}>
          {show_total == true ? footer?.tcs_amount : ''}
        </Text>
      </View>

      <View style={styles.footer3}>
        <Text style={styles.verify}></Text>
        <Text style={styles.gst_last}>18.00% </Text>
        {/* <Text style={styles.gst_value_border}>
          {show_total == true ? footer?.gst_3_disc : ''}
        </Text> */}
        <Text style={styles.gst_value_last}>
          {show_total == true ? footer?.gst_3_value : ''}
        </Text>
        <Text style={styles.gst_value_last}>
          {footer?.gst_type == true && footer?.gst_3 != null
            ? show_total == true
              ? (footer?.gst_3 / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_last}>
          {footer?.gst_type == true && footer?.gst_3 != null
            ? show_total == true
              ? (footer?.gst_3 / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_last}>
          {footer?.gst_type == false && footer?.gst_3 != null
            ? show_total == true
              ? footer?.gst_3.toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Total Items</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true ? items : ''}
        </Text>
        {/* <Text style={styles.footer_heading}>Total Qty</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true ? totalQty(products) : ''}
        </Text> */}
        <Text style={styles.footer_heading3}>Freight Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border3}>
          {show_total &&
            (footer?.freight_amount == null
              ? '0.00'
              : parseFloat(footer?.freight_amount || 0).toFixed(2))}
        </Text>

        {/* <Text style={styles.footer_heading}>TCS</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true ? footer?.tcs_amount : ''}
        </Text> */}
      </View>

      <View style={styles.footer3}>
        <Text style={styles.verify}>Checked :</Text>
        <Text style={styles.gst_last2}>Total :</Text>
        {/* <Text style={styles.gst_value_border}>
          {show_total == true
            ? (
                parseFloat(footer?.gst_0_disc ?? 0) +
                parseFloat(footer?.gst_1_disc ?? 0) +
                parseFloat(footer?.gst_2_disc ?? 0) +
                parseFloat(footer?.gst_3_disc ?? 0)
              ).toFixed(2)
            : ''}
        </Text> */}
        <Text style={styles.gst_value_last2}>
          {show_total == true
            ? (
                parseFloat(footer?.gst_1_value ?? 0) +
                parseFloat(footer?.gst_2_value ?? 0) +
                parseFloat(footer?.gst_3_value ?? 0)
              ).toFixed(2)
            : '0.0000'}
        </Text>
        <Text style={styles.gst_value_last2}>
          {footer?.gst_type == true
            ? show_total == true
              ? (
                  (parseFloat(footer?.gst_1 ?? 0) +
                    parseFloat(footer?.gst_2 ?? 0) +
                    parseFloat(footer?.gst_3 ?? 0)) /
                  2
                ).toFixed(2)
              : '0.0000'
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_last2}>
          {footer?.gst_type == true
            ? show_total == true
              ? ((footer?.gst_1 + footer?.gst_2 + footer?.gst_3) / 2).toFixed(2)
              : '0.0000'
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_last2}>
          {footer?.gst_type == false
            ? show_total == true
              ? (footer?.gst_1 + footer?.gst_2 + footer?.gst_3).toFixed(2)
              : '0.0000 '
            : (0).toFixed(2)}
        </Text>
        {/* <Text style={styles.amount_words}>
          Amt in Words:{' '}
          {show_total == true ? convertNumberToWords(footer?.net_amount) : ''}
        </Text> */}
        <Text style={styles.footer_heading}>Total Qty</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true ? totalQty(products) : ''}
        </Text>
        <Text style={styles.footer_heading3}>Rounding</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border3}>
          {show_total == true ? footer?.rounding : ''}
        </Text>
      </View>

      <View style={styles.footer4}>
        <View style={styles.tnc}>
          <Text
            style={{
              fontSize: 6,
              fontStyle: 'bold',
              padding: '2px 0 0 2px',
              textDecoration: 'underline',
            }}
          >
            Terms and Conditions :
          </Text>
          <Text style={{ padding: '2px 4px 0 2px', fontSize: 8 }}>
            {invoice?.terms_and_conditions || ''}
          </Text>
        </View>
        <View
          style={{
            width: '17%',
            height: '60px',
            borderTopWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: '7.5',
              padding: '2px 0 1px 2px',
              textDecoration: 'underline',
              fontFamily: 'Helvetica-Bold',
            }}
          >
            Bank Details :
          </Text>

          <Text
            style={{
              fontSize: '7',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            A/C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
            {invoice.account_number}
          </Text>
          <Text
            style={{
              fontSize: '7',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            IFSC &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{invoice.ifsc_code}
          </Text>
          <Text
            style={{
              fontSize: '7',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            Bank &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{invoice?.bank_name}
          </Text>
          <Text
            style={{
              fontSize: '7',

              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            Branch &nbsp;:&nbsp;&nbsp;{invoice.bank_branch_name}
          </Text>
          <Text
            style={{
              fontSize: '7',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            UPI ID &nbsp;&nbsp;:&nbsp;&nbsp;{invoice.upi_address}
          </Text>
        </View>
        <View
          style={{
            width: '8%',
            borderRightWidth: '1',
            borderRightColor: borderColor,
            borderTopWidth: 1,
            height: '60px',
            padding: '2px 0 0 2px',
          }}
        >
          <Image style={styles.logo} src={qr_code} />
        </View>
        <View
          style={{
            width: '15%',
            borderRightWidth: '1',
            borderRightColor: borderColor,
            height: '60px',
            borderTopWidth: '1',
          }}
        >
          <Text style={{ padding: '2px 0 0 2px', height: '15px' }}>
            For {invoice.firm_name}
          </Text>
          <Text style={{ margin: '25px 0 0 2px', height: '15px' }}>
            Authorised Signatory
          </Text>
        </View>
        <View
          style={{
            width: '16%',
            // borderRightWidth: '1',
            // borderRightColor: borderColor,
            height: '60px',
            borderTopWidth: '1',
          }}
        >
          <Text style={{ padding: '2px 0 0 2px', height: '15px' }}>
            NET AMOUNT:
          </Text>
          <Text
            style={{
              margin: '17px 0 2px 0px',
              height: '23px',
              fontSize: '15',
              fontFamily: 'Helvetica-Bold',
              fontWeight: 'bold',
              textAlign: 'right',
            }}
          >
            {show_total == true
              ? footer?.net_amount % 1 != 0
                ? `Rs. ${numberFormat(
                    parseFloat(footer?.net_amount || 0) +
                      parseFloat(footer?.debit_note_amount || 0) -
                      parseFloat(footer?.credit_note_amount || 0)
                  ).slice(1)}`
                : `Rs. ${numberFormat(
                    parseFloat(footer?.net_amount || 0) +
                      parseFloat(footer?.debit_note_amount || 0) -
                      parseFloat(footer?.credit_note_amount || 0)
                  ).slice(1)}`
              : 'Continued...'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
