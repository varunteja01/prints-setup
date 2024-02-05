import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { numberFormat } from './number';

const fontColor = '#000';
const borderColor = '#dbdbdb';

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
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    fontSize: 7,
    width: '100%',
  },
  footer2: {
    flexDirection: 'column',
    // alignItems: 'center',
    height: 80,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    // border: 1,
  },
  footer3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
    // border: 1,
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
    // height: '100px',
    // marginTop: '8px',
    // marginBottom: '0px',
  },
  gst: {
    width: '10%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 9,
    fontSize: 5,
    paddingRight: '2px',
  },
  gst_border: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    height: 11,
    fontSize: 5,
    paddingRight: '2px',
  },
  // gst_discount: {
  //   width: '10%',
  //   textAlign: 'right',
  //   paddingRight: '2px',
  //   borderRightColor: borderColor,
  //   borderRightWidth: 0.5,
  //   borderBottomColor: borderColor,
  //   borderBottomWidth: 0.5,
  //   height: 11,
  //   fontSize: 5,
  // },
  gst_value: {
    width: '17%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 9,
    fontSize: 5,
  },
  gst_value_border: {
    width: '17%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 9,
    fontSize: 5,
  },
  cgst_value: {
    width: '17%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 9,
    fontSize: 5,
  },
  sgst_value: {
    width: '17%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 9,
    fontSize: 5,
  },
  igst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 0.5,
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    height: 11,
    fontSize: 5,
  },
  amount_words: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: '5px',
    height: 11,
    fontSize: 7,
    marginTop: '2px',
    borderBottomWidth: 0.5,
    borderBottomColor: borderColor,
    fontFamily: 'Helvetica-Bold',
  },
  footer_heading: {
    width: '11%',
    textAlign: 'left',
    paddingLeft: '5px',
    height: 9,
    fontSize: 6,
  },
  footer_icon: {
    width: '1%',
    textAlign: 'left',
    paddingRight: '2px',
    height: 11,
    fontSize: 5,
  },
  footer_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '4px',
    height: 11,
    fontSize: 6,
  },
  footer_value_border: {
    width: '15%',
    textAlign: 'right',
    paddingRight: '4px',
    // borderRightColor: borderColor,
    // borderRightWidth: 0.5,
    height: 11,
    fontSize: 6,
  },
  blank: {
    width: '0%',
  },
  tnc: {
    width: '40%',
    fontSize: 5,
    borderRightWidth: 0.5,
    borderRightColor: '#dbdbdb',
    height: '35px',
    paddingTop: '5px',
    paddingLeft: '3px',
    paddingRight: '2px',
    marginTop: 5,
    // border: 1,
  },
  tnc_details: {
    width: '100%',
    textAlign: 'left',
    lineHeight: 1.3,
    fontSize: 6,
    paddingRight: '2px',
  },
  amount: {
    width: '31%',
    textAlign: 'center',
    height: 11,
    fontSize: 6,
  },
});

const InvoiceFooter = ({ invoice, footer, items, show_total }) => {
  function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split('.');
    var number = atemp[0].split(',').join('');
    var n_length = number.length;
    var words_string = '';
    if (n_length <= 9) {
      var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var received_n_array = new Array();
      for (var i = 0; i < n_length; i++) {
        received_n_array[i] = number.substr(i, 1);
      }
      for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j];
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          if (n_array[i] == 1) {
            n_array[j] = 10 + parseInt(n_array[j]);
            n_array[i] = 0;
          }
        }
      }
      var value = '';
      for (var i = 0; i < 9; i++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value != 0) {
          words_string += words[value] + ' ';
        }
        if (
          (i == 1 && value != 0) ||
          (i == 0 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Crores ';
        }
        if (
          (i == 3 && value != 0) ||
          (i == 2 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Lakhs ';
        }
        if (
          (i == 5 && value != 0) ||
          (i == 4 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Thousand ';
        }
        if (
          i == 6 &&
          value != 0 &&
          n_array[i + 1] != 0 &&
          n_array[i + 2] != 0
        ) {
          words_string += 'Hundred and ';
        } else if (i == 6 && value != 0) {
          words_string += 'Hundred ';
        }
      }
      words_string = words_string.split('  ').join(' ');
    }
    words_string += 'Rupees Only';
    return words_string;
  }

  return (
    <View style={styles.footer2}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', width: '75%' }}>
          <View style={styles.container}>
            <Text style={styles.gst}>0%</Text>
            {/* <Text style={styles.gst_discount}>{footer?.gst_0_disc}</Text> */}
            <Text style={styles.gst_value}>
              {show_total == true ? footer?.gst_exempted_value : ''}
            </Text>
            <Text style={styles.cgst_value}> </Text>
            <Text style={styles.sgst_value}> </Text>

            <Text style={styles.footer_heading}>Less Disc</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value_border}>
              {show_total == true ? footer?.total_disc : ''}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.gst}>5.00% </Text>
            {/* <Text style={styles.gst_discount}>{footer?.gst_1_disc}</Text> */}
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

            <Text style={styles.footer_heading}>GST Amount</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value_border}>
              {show_total == true ? footer?.total_gst_value : ''}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.gst}>12.00% </Text>
            {/* <Text style={styles.gst_discount}>{footer?.gst_2_disc}</Text> */}

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

            <Text style={styles.footer_heading}>Cr/Dr Amt.</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value_border}>
              {show_total == true
                ? parseFloat(footer?.debit_note_amount || 0) -
                  parseFloat(footer?.credit_note_amount || 0)
                : ''}
            </Text>
          </View>

          <View style={styles.footer3}>
            <Text style={styles.gst}>18.00% </Text>
            {/* <Text style={styles.gst_discount}>{footer?.gst_3_disc}</Text> */}
            <Text style={styles.gst_value_border}>
              {show_total == true ? footer?.gst_3_value : ''}
            </Text>
            <Text style={styles.gst_value_border}>
              {footer?.gst_type == true && footer?.gst_3 != null
                ? show_total == true
                  ? (footer?.gst_3 / 2).toFixed(2)
                  : ''
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.gst_value_border}>
              {footer?.gst_type == true && footer?.gst_3 != null
                ? show_total == true
                  ? (footer?.gst_3 / 2).toFixed(2)
                  : ''
                : (0).toFixed(2)}
            </Text>
            {/* <Text style={styles.gst_value_border}>
          {footer?.gst_type == false ? footer?.gst_3.toFixed(2) : (0).toFixed(2)}
        </Text> */}
            {/* <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text> */}
            <Text style={styles.footer_heading}>Rounding</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value_border}>
              {show_total == true ? footer?.rounding : ''}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '25%',
            fontSize: 10,
            textAlign: 'center',
            borderLeftWidth: 0.5,
            borderLeftColor: borderColor,
            borderBottomWidth: 0.5,
            borderBottomColor: borderColor,
          }}
        >
          <Text
            style={{
              paddingBottom: '8px',
              fontSize: 8,
            }}
          >
            NET PAYABLE
          </Text>
          <Text style={{ fontFamily: 'Helvetica-Bold' }}>
            {/* {parseFloat(
              parseFloat(footer?.net_amount || 0) +
                parseFloat(footer?.debit_note_amount || 0) -
                parseFloat(footer?.credit_note_amount || 0)
            )?.toFixed(2)} */}

            {show_total == true
              ? footer?.net_amount % 1 != 0
                ? `Rs. ${numberFormat(
                    parseFloat(footer?.net_amount || 0) +
                      parseFloat(footer?.debit_note_amount || 0) -
                      parseFloat(footer?.credit_note_amount || 0),
                  )}`
                : `Rs. ${numberFormat(
                    parseFloat(footer?.net_amount || 0) +
                      parseFloat(footer?.debit_note_amount || 0) -
                      parseFloat(footer?.credit_note_amount || 0),
                  )}.00`
              : 'Continued...'}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.amount_words}>
          In words&nbsp;:&nbsp;
          {convertNumberToWords(
            parseFloat(
              parseFloat(footer?.net_amount || 0) +
                parseFloat(footer?.debit_note_amount || 0) -
                parseFloat(footer?.credit_note_amount || 0),
            ).toFixed(2),
          )}
        </Text>
      </View>
      <View style={styles.footer4}>
        <View style={styles.tnc}>
          <Text style={{ fontSize: '6', fontStyle: 'bold' }}>
            Terms and Conditions
          </Text>
          <Text style={styles.tnc_details}>
            {invoice?.terms_and_conditions || ''}
          </Text>
        </View>

        <View
          style={{
            width: '25%',
            height: '35px',
            textAlign: 'center',
            paddingTop: '5px',
            borderRightWidth: 0.5,
            borderRightColor: '#dbdbdb',
            marginTop: 5,
          }}
        >
          <Text
            style={{ paddingTop: '5px', fontSize: 6 }}
            render={({ pageNumber, totalPages }) => `Page ${pageNumber} `}
          />
        </View>
        <View
          style={{
            width: '35%',
            borderRightWidth: '1',
            borderRightColor: '#dbdbdb',
          }}
        >
          <Text
            style={{
              padding: '5px 0 0 3px',
              height: '35px',
              fontSize: 7,
              marginTop: 5,
            }}
          >
            For {invoice?.firm_name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InvoiceFooter;
