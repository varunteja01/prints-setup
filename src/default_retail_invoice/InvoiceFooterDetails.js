import React from 'react'
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import { convertNumToWords } from '../components/helpers'
import { numberFormat } from '../components/helpers'

const fontColor = '#000'
const borderColor = '#dbdbdb'

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
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    height: 70,
    marginTop: '8px',
    marginBottom: '4px',
  },
  gst: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10,
    fontSize: 5,
    paddingRight: '2px',
  },
  gst_border: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
    fontSize: 5,
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
    height: 10,
    fontSize: 5,
  },
  gst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10,
    fontSize: 5,
  },
  gst_value_border: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
    fontSize: 5,
  },
  cgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10,
    fontSize: 5,
  },
  sgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10,
    fontSize: 5,
  },
  igst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10,
    fontSize: 5,
  },
  amount_words: {
    width: '46%',
    textAlign: 'left',
    paddingLeft: '5px',
    height: 10,
    fontSize: 5,
    paddingTop: '2px',
  },
  footer_heading: {
    width: '8%',
    textAlign: 'left',
    paddingLeft: '5px',
    height: 10,
    fontSize: 6,
  },
  footer_icon: {
    width: '1%',
    textAlign: 'left',
    paddingRight: '2px',
    height: 10,
    fontSize: 5,
  },
  footer_value: {
    width: '7%',
    textAlign: 'right',
    paddingRight: '4px',
    height: 10,
    fontSize: 6,
  },
  footer_value_border: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '4px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
    fontSize: 6,
  },
  blank: {
    width: '0%',
  },
  tnc: {
    width: '40%',
    fontSize: 5,
    borderRightWidth: 1,
    borderRightColor: '#dbdbdb',
    height: '70px',
    paddingTop: '2px',
    paddingLeft: '2px',
  },
})

const InvoiceFooter = ({ invoice, footer, items }) => {
  // function convertNumberToWords(amount) {
  //   var words = new Array();
  //   words[0] = '';
  //   words[1] = 'One';
  //   words[2] = 'Two';
  //   words[3] = 'Three';
  //   words[4] = 'Four';
  //   words[5] = 'Five';
  //   words[6] = 'Six';
  //   words[7] = 'Seven';
  //   words[8] = 'Eight';
  //   words[9] = 'Nine';
  //   words[10] = 'Ten';
  //   words[11] = 'Eleven';
  //   words[12] = 'Twelve';
  //   words[13] = 'Thirteen';
  //   words[14] = 'Fourteen';
  //   words[15] = 'Fifteen';
  //   words[16] = 'Sixteen';
  //   words[17] = 'Seventeen';
  //   words[18] = 'Eighteen';
  //   words[19] = 'Nineteen';
  //   words[20] = 'Twenty';
  //   words[30] = 'Thirty';
  //   words[40] = 'Forty';
  //   words[50] = 'Fifty';
  //   words[60] = 'Sixty';
  //   words[70] = 'Seventy';
  //   words[80] = 'Eighty';
  //   words[90] = 'Ninety';
  //   amount = amount.toString();
  //   var atemp = amount.split('.');
  //   var number = atemp[0].split(',').join('');
  //   var n_length = number.length;
  //   var words_string = '';
  //   if (n_length <= 9) {
  //     var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
  //     var received_n_array = new Array();
  //     for (var i = 0; i < n_length; i++) {
  //       received_n_array[i] = number.substr(i, 1);
  //     }
  //     for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
  //       n_array[i] = received_n_array[j];
  //     }
  //     for (var i = 0, j = 1; i < 9; i++, j++) {
  //       if (i == 0 || i == 2 || i == 4 || i == 7) {
  //         if (n_array[i] == 1) {
  //           n_array[j] = 10 + parseInt(n_array[j]);
  //           n_array[i] = 0;
  //         }
  //       }
  //     }
  //     var value = '';
  //     for (var i = 0; i < 9; i++) {
  //       if (i == 0 || i == 2 || i == 4 || i == 7) {
  //         value = n_array[i] * 10;
  //       } else {
  //         value = n_array[i];
  //       }
  //       if (value != 0) {
  //         words_string += words[value] + ' ';
  //       }
  //       if (
  //         (i == 1 && value != 0) ||
  //         (i == 0 && value != 0 && n_array[i + 1] == 0)
  //       ) {
  //         words_string += 'Crores ';
  //       }
  //       if (
  //         (i == 3 && value != 0) ||
  //         (i == 2 && value != 0 && n_array[i + 1] == 0)
  //       ) {
  //         words_string += 'Lakhs ';
  //       }
  //       if (
  //         (i == 5 && value != 0) ||
  //         (i == 4 && value != 0 && n_array[i + 1] == 0)
  //       ) {
  //         words_string += 'Thousand ';
  //       }
  //       if (
  //         i == 6 &&
  //         value != 0 &&
  //         n_array[i + 1] != 0 &&
  //         n_array[i + 2] != 0
  //       ) {
  //         words_string += 'Hundred and ';
  //       } else if (i == 6 && value != 0) {
  //         words_string += 'Hundred ';
  //       }
  //     }
  //     words_string = words_string.split('  ').join(' ');
  //   }
  //   words_string += 'Rupees Only';
  //   return words_string;
  // }

  return (
    <View style={styles.footer2}>
      <View style={styles.container}>
        <Text style={styles.gst}>0% </Text>
        <Text style={styles.gst_discount}>{footer.gst_0_disc}</Text>
        <Text style={styles.gst_value}>{footer.gst_exempted_value}</Text>
        <Text style={styles.cgst_value}> </Text>
        <Text style={styles.sgst_value}> </Text>
        <Text style={styles.igst_value}> </Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Disc. Per</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>{footer.overall_disc}</Text>
        <Text style={styles.footer_heading}>Subtotal</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {parseFloat(footer.gross_total ?? 0).toFixed(2)}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst}>5.00% </Text>
        <Text style={styles.gst_discount}>{footer.gst_1_disc}</Text>
        <Text style={styles.gst_value}>{footer.gst_1_value}</Text>
        <Text style={styles.cgst_value}>
          {footer.gst_type == true
            ? (footer.gst_1 / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.sgst_value}>
          {footer.gst_type == true
            ? (footer.gst_1 / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.igst_value}>
          {footer.gst_type == false ? footer.gst_1.toFixed(2) : (0).toFixed(2)}
        </Text>
        <Text style={styles.footer_heading}>Total Items</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>{items}</Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Rounding</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>{footer.rounding}</Text>
        <Text style={styles.footer_heading}>Discount</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>{footer.total_disc}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst}>12.00% </Text>
        <Text style={styles.gst_discount}>{footer.gst_2_disc}</Text>
        <Text style={styles.gst_value}>{footer.gst_2_value}</Text>
        <Text style={styles.cgst_value}>
          {footer.gst_type == true
            ? (footer.gst_2 / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.sgst_value}>
          {footer.gst_type == true
            ? (footer.gst_2 / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.igst_value}>
          {footer.gst_type == false ? footer.gst_2.toFixed(2) : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Total Qty</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}></Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>
        <Text style={styles.footer_heading}>GST Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>{footer.total_gst_value}</Text>
      </View>

      <View style={styles.footer3}>
        <Text style={styles.gst}>18.00% </Text>
        <Text style={styles.gst_value_border}>{footer.gst_3_disc}</Text>
        <Text style={styles.gst_value_border}>{footer.gst_3_value}</Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == true
            ? (footer.gst_3 / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == true
            ? (footer.gst_3 / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == false ? footer.gst_3.toFixed(2) : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value}></Text>
      </View>

      <View style={styles.footer3}>
        <Text style={styles.gst_border}>28.00% </Text>
        <Text style={styles.gst_value_border}>{footer.gst_4_disc}</Text>
        <Text style={styles.gst_value_border}>{footer.gst_4_value}</Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == true
            ? (footer.gst_4 / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == true
            ? (footer.gst_4 / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == false ? footer.gst_4 : (0).toFixed(2)}
        </Text>
      </View>

      <View style={styles.footer3}>
        <Text style={styles.gst_border}>Total :</Text>
        <Text style={styles.gst_value_border}>
          {(
            parseFloat(footer.gst_0_disc ?? 0) +
            parseFloat(footer.gst_1_disc ?? 0) +
            parseFloat(footer.gst_2_disc ?? 0) +
            parseFloat(footer.gst_3_disc ?? 0)
          ).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {(
            parseFloat(footer.gst_1_value ?? 0) +
            parseFloat(footer.gst_2_value ?? 0) +
            parseFloat(footer.gst_3_value ?? 0)
          ).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == true
            ? ((footer.gst_1 + footer.gst_2 + footer.gst_3) / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == true
            ? ((footer.gst_1 + footer.gst_2 + footer.gst_3) / 2).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {footer.gst_type == false
            ? (footer.gst_1 + footer.gst_2 + footer.gst_3).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.amount_words}>
          Amt in Words: {convertNumToWords(footer.net_amount)}
        </Text>
      </View>

      <View style={styles.footer4}>
        <View style={styles.tnc}>
          <Text style={{ fontSize: '5', fontStyle: 'bold' }}>
            Terms and Conditions
          </Text>
          <Text>
            Goods once sold will not be taken back we here by given the warranty
            that the goods describe as sold by us this invoice do not contravene
            in any way the provision of section 18 drugs and cosmetics Act,
            1940.
          </Text>
          <Text>
            Please address all correspondence realted to adjustment or claims on
            this invoice to the firm & not to the attention of any individual.
          </Text>
          <Text>Subject to {invoice?.city} Jurisdiction only.</Text>
          <Text> </Text>
          <Text>E. &.O.E.</Text>
        </View>

        <View
          style={{
            width: '15%',
            borderRightWidth: '1',
            borderRightColor: '#dbdbdb',
            height: '70px',
          }}
        >
          <Text
            style={{
              fontSize: '5',
              fontWeight: 'bold',
              padding: '2px 0 0 2px',
            }}
          >
            Bank Details :
          </Text>
        </View>

        <View
          style={{
            width: '15%',
            borderRightWidth: '1',
            borderRightColor: '#dbdbdb',
            height: '70px',
          }}
        >
          <Text style={{ margin: '2px 0 0 2px', height: '15px', fontSize: 5 }}>
            For {invoice.firm_name}
          </Text>
          <Text style={{ margin: '25px 0 0 2px', height: '15px', fontSize: 5 }}>
            Authorised Signatory
          </Text>
        </View>

        <View style={{ width: '30%', height: '70px' }}>
          <Text style={{ margin: '4px 0 0 2px', height: '30%', fontSize: 5 }}>
            NET AMOUNT:
          </Text>
          <Text
            style={{
              margin: '0 2px 0 0',
              fontSize: '20',
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
              textAlign: 'right',
            }}
          >
            {footer.net_amount % 1 != 0
              ? `Rs. ${numberFormat(footer.net_amount)}`
              : `Rs. ${numberFormat(footer.net_amount)}.00`}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
