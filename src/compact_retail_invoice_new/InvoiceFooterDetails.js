import React from 'react';
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { numberFormat } from './number';
// import qr from './a_qr.png';

const fontColor = '#000';
const borderColor = '#000';

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
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer2: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 150,
    fontStyle: 'bold',
    fontSize: 7,
    width: '100%',
  },
  footer3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
    height: 35,
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
  amount_words: {
    width: '46%',
    textAlign: 'left',
    paddingLeft: '15px',
    paddingTop: '1px',
    borderTopWidth: '1px',
    height: 12,
    borderTopColor: borderColor,
  },
  footer_heading: {
    width: '8%',
    textAlign: 'left',
    paddingLeft: '4px',
  },
  footer_icon: {
    width: '1%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value_border: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '8px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12,
  },
  blank: {
    width: '0%',
  },
  tnc: {
    width: '45%',
    fontSize: 5,
    borderRightWidth: 1,
    borderRightColor: '#000',
    height: 35,
  },
  irn_qr: {
    width: '10%',
    fontSize: 5,
    borderRightWidth: 1,
    borderRightColor: '#000',
    height: '60px',
  },
  logo: {
    padding: '5px 0 0 5px',
    width: 50,
    height: 50,
  },
  irn_qr_logo: {
    padding: '5px 0 0 5px',
    width: 60,
    height: 60,
  },
  imageContainer: {
    flexDirection: 'column',
    height: 60,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 8,
    marginTop: '3px',
    width: '50%',
  },
});

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  qr_code,
  show_total,
  moduleSettings,
}) => {
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
    var atemp = amount?.toString().split('.');
    var number = atemp[0]?.split(',')?.join('');
    var n_length = number?.length;
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

  function totalQty(items) {
    let qty = 0;
    for (let i = 0; i < items?.length; i++) {
      qty =
        qty +
        parseFloat(items[i]?.sale_quantity || 0) +
        parseFloat(items[i]?.sale_free || 0);
    }

    return qty;
  }

  return (
    <View style={styles.footer2}>
      <View style={styles.container}>
        <Text style={styles.gst}>0% </Text>
        <Text style={styles.gst_discount}>
          {show_total == true ? footer?.gst_0_disc : ''}
        </Text>
        <Text style={styles.gst_value}>
          {show_total == true ? footer?.gst_exempted_value : ''}
        </Text>
        <Text style={styles.cgst_value}> </Text>
        <Text style={styles.sgst_value}> </Text>
        <Text style={styles.igst_value}> </Text>
        <Text style={styles.footer_heading}></Text>
        <Text style={styles.footer_icon}></Text>
        <Text style={styles.footer_value_border}></Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Disc. Per</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true &&
          (moduleSettings?.head_disc_print ?? true) == true
            ? footer?.overall_disc
            : ''}
        </Text>
        <Text style={styles.footer_heading}>Subtotal</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true
            ? parseFloat(footer?.gross_total || 0).toFixed(2)
            : ''}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst}>5.00% </Text>
        <Text style={styles.gst_discount}>
          {show_total == true ? footer?.gst_1_disc : ''}
        </Text>
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
              ? parseFloat(footer?.gst_1 || 0).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.footer_heading}>Cases</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>0</Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Cr/Dr Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true
            ? parseFloat(footer?.debit_note_amount || 0) -
              parseFloat(footer?.credit_note_amount || 0)
            : ''}
        </Text>
        <Text style={styles.footer_heading}>Discount</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true
            ? parseFloat(footer?.total_disc || 0).toFixed(2)
            : ''}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst}>12.00% </Text>
        <Text style={styles.gst_discount}>
          {show_total == true ? footer?.gst_2_disc : ''}
        </Text>
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
              ? parseFloat(footer?.gst_2 || 0).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Total Items</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true ? items : ''}
        </Text>
        <Text style={styles.footer_heading}>Freight Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {footer?.freight_amount == null
            ? '0.00'
            : show_total == true
            ? parseFloat(footer?.freight_amount || 0).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.footer_heading}>GST Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true ? footer?.total_gst_value : ''}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.gst}>18.00% </Text>
        <Text style={styles.gst_discount}>
          {show_total == true ? footer?.gst_3_disc : ''}
        </Text>
        <Text style={styles.gst_value}>
          {show_total == true ? footer?.gst_3_value : ''}
        </Text>
        <Text style={styles.cgst_value}>
          {footer?.gst_type == true && footer?.gst_3 != null
            ? show_total == true
              ? (footer?.gst_3 / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.sgst_value}>
          {footer?.gst_type == true && footer?.gst_3 != null
            ? show_total == true
              ? (footer?.gst_3 / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.igst_value}>
          {footer?.gst_type == false && footer?.gst_3 != null
            ? show_total == true
              ? parseFloat(footer?.gst_3).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Total Qty</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>{totalQty(products)}</Text>
        <Text style={styles.footer_heading}>Rounding</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true ? footer?.rounding : ''}
        </Text>
        <Text style={styles.footer_heading}>TCS</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true ? footer?.tcs_amount : ''}
        </Text>
      </View>

      <View style={styles.footer3}>
        <Text style={styles.gst}>Total :</Text>
        <Text style={styles.gst_discount}>
          {show_total == true
            ? (
                parseFloat(footer?.gst_0_disc || 0) +
                parseFloat(footer?.gst_1_disc || 0) +
                parseFloat(footer?.gst_2_disc || 0) +
                parseFloat(footer?.gst_3_disc || 0)
              ).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.gst_value}>
          {show_total == true
            ? (
                parseFloat(footer?.gst_1_value || 0) +
                parseFloat(footer?.gst_2_value || 0) +
                parseFloat(footer?.gst_3_value || 0)
              ).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.cgst_value}>
          {footer?.gst_type == true
            ? show_total == true
              ? ((footer?.gst_1 + footer?.gst_2 + footer?.gst_3) / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.sgst_value}>
          {footer?.gst_type == true
            ? show_total == true
              ? ((footer?.gst_1 + footer?.gst_2 + footer?.gst_3) / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.igst_value}>
          {footer?.gst_type == false
            ? show_total == true
              ? (footer?.gst_1 + footer?.gst_2 + footer?.gst_3).toFixed(2)
              : (0).toFixed(2)
            : (0).toFixed(2)}
        </Text>
        {/* <Text style={styles.blank}></Text> */}
        <Text style={styles.amount_words}>
          Amt in Words&nbsp;:&nbsp;
          {show_total == true
            ? convertNumberToWords(
                parseFloat(footer?.net_amount || 0) +
                  parseFloat(footer?.debit_note_amount || 0) -
                  parseFloat(footer?.credit_note_amount || 0),
              )
            : ''}
        </Text>
      </View>

      <View style={styles.footer4}>
        <View style={styles.tnc}>
          <Text style={{ fontSize: '6', fontStyle: 'bold' }}>
            Terms and Conditions
          </Text>
          <Text>{invoice?.terms_and_conditions || ''}</Text>
        </View>

        {/* <View style={{ width: '13%', height: 35 }}>
          <Text
            style={{
              fontSize: '6',
              fontWeight: 'bold',
              padding: '2px 0 0 2px',
            }}
          >
            Bank Details :
          </Text>
          <Text
            style={{
              fontSize: '6',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            A/C: {invoice.account_number}
          </Text>
          <Text
            style={{
              fontSize: '6',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            {invoice?.bank_name}
          </Text>
          <Text
            style={{
              fontSize: '6',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            IFSC: {invoice.ifsc_code}
          </Text>
          <Text
            style={{
              fontSize: '6',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            Branch: {invoice.bank_branch_name}
          </Text>
        </View>

        <View
          style={{
            width: '7%',
            borderRightWidth: '1',
            borderRightColor: borderColor,
            height: 35,
          }}
        >
          <Image style={styles.logo} src={qr_code} />
        </View> */}

        <View
          style={{
            width: '25%',
            borderRightWidth: '1',
            borderRightColor: borderColor,
            height: 35,
            flex: 1,
          }}
        >
          <Text
            style={{
              margin: '2px 0 0 2px',
              height: 35,
              width: '100%',
            }}
          >
            For {invoice.firm_name}
          </Text>
          {/* <Text style={{ margin: '25px 0 0 2px', height: '15px' }}>
            Authorised Signatory
          </Text> */}
        </View>

        <View style={{ width: '30%', height: 40 }}>
          <Text style={{ margin: '4px 0 0 2px', height: '30%' }}>
            NET AMOUNT:
          </Text>
          <Text
            style={{
              margin: '0 2px 0 0',
              fontSize: '18',
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
                      parseFloat(footer?.credit_note_amount || 0),
                  )}`
                : `Rs.${numberFormat(
                    parseFloat(footer?.net_amount || 0) +
                      parseFloat(footer?.debit_note_amount || 0) -
                      parseFloat(footer?.credit_note_amount || 0),
                  )}.00`
              : 'Continued...'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InvoiceFooter;
