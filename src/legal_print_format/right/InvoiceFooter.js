import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import {
  borderColor,
  legalInvoiceStyleFooterRight,
  tableDataBackgroundColor,
} from '../InvoiceStyles'
import { convertNumToWords } from '../../components/helpers'

// Destructure the imported styles
const {
  container,
  footer2,
  footer3,
  footer4,
  gst: {
    gst,
    gst_border,
    gst_discount,
    gst_value,
    gst_value_border,
    cgst_value,
    sgst_value,
    igst_value,
  },
  amount_words,
  footer_heading,
  footer_icon,
  footer_value,
  footer_value_border,
  blank,
  tnc,
  logo,
  footerAuthorisedAgencySign,
} = legalInvoiceStyleFooterRight

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  show_total,
  qr_code,
}) => {
  // Calculate total quantity of selling items
  const totalQty = (items) => {
    let qty = 0
    for (let i = 0; i < items?.length; i++) {
      qty =
        qty +
        parseFloat(items[i]?.sale_quantity || 0) +
        parseFloat(items[i]?.sale_free || 0)
    }

    return qty
  }

  // Convert the total price amount to words
  // const convertNumberToWords = (amount) => {
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
  //   var atemp = amount?.toString().split('.');
  //   var number = atemp[0]?.split(',')?.join('');
  //   var n_length = number?.length;
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
  // };

  return (
    <View style={{ flexDirection: 'column', height: 130 }}>
      <View style={footer2}>
        <View
          style={{
            ...footer3,
            borderTopWidth: 1,
            backgroundColor: tableDataBackgroundColor,
          }}
        >
          <Text style={gst}>GST% </Text>
          <Text style={gst_value_border}>GST Dis Amt</Text>
          <Text style={gst_value_border}>GST Amt</Text>
          <Text style={gst_value_border}>CGST Amt</Text>
          <Text style={gst_value_border}>SGST Amt</Text>
          <Text style={gst_value_border}></Text>
          <Text style={blank}></Text>
          <Text style={footer_heading}></Text>
          <Text style={footer_icon}></Text>
          <Text style={footer_value_border}></Text>
          <Text style={footer_heading}></Text>
          <Text style={footer_icon}></Text>
          <Text style={footer_value_border}></Text>
          <Text style={footer_heading}></Text>
          <Text style={footer_icon}></Text>
          <Text style={footer_value}></Text>
        </View>

        <View style={container}>
          <Text style={gst}>0% </Text>
          <Text style={gst_discount}>
            {show_total == true ? footer?.gst_0_disc : ''}
          </Text>
          <Text style={gst_value}>
            {show_total == true ? footer?.gst_exempted_value : ''}
          </Text>
          <Text style={cgst_value}> </Text>
          <Text style={sgst_value}> </Text>
          <Text style={igst_value}> </Text>
          <Text style={footer_heading}></Text>
          <Text style={footer_icon}></Text>
          <Text style={footer_value_border}></Text>
          <Text style={blank}></Text>
          <Text style={footer_heading}>Disc. Per</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value_border}>
            {show_total == true ? footer?.overall_disc : ''}
          </Text>
          <Text style={footer_heading}>Subtotal</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value}>
            {show_total == true
              ? parseFloat(footer?.gross_total ?? 0).toFixed(2)
              : ''}
          </Text>
        </View>

        <View style={container}>
          <Text style={gst}>5.00% </Text>
          <Text style={gst_discount}>
            {show_total == true ? footer?.gst_1_disc : ''}
          </Text>
          <Text style={gst_value}>
            {show_total == true ? footer?.gst_1_value : ''}
          </Text>
          <Text style={cgst_value}>
            {footer?.gst_type == true && footer?.gst_1 != null
              ? show_total == true
                ? (footer?.gst_1 / 2).toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={sgst_value}>
            {footer?.gst_type == true && footer?.gst_1 != null
              ? show_total == true
                ? (footer?.gst_1 / 2).toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={igst_value}>
            {footer?.gst_type == false && footer?.gst_1 != null
              ? show_total == true
                ? footer?.gst_1.toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={footer_heading}>Cases</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value_border}>0</Text>
          <Text style={blank}></Text>
          <Text style={footer_heading}>Cr/Dr Amt.</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value_border}>
            {show_total == true
              ? parseFloat(footer?.debit_note_amount || 0) -
                parseFloat(footer?.credit_note_amount || 0)
              : '0.00'}
          </Text>
          <Text style={footer_heading}>Discount</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value}>
            {show_total == true ? footer?.total_disc : ''}
          </Text>
        </View>

        <View style={container}>
          <Text style={gst}>12.00% </Text>
          <Text style={gst_discount}>
            {show_total == true ? footer?.gst_2_disc : ''}
          </Text>
          <Text style={gst_value}>
            {show_total == true ? footer?.gst_2_value : ''}
          </Text>
          <Text style={cgst_value}>
            {footer?.gst_type == true && footer?.gst_2 != null
              ? show_total == true
                ? (footer?.gst_2 / 2).toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={sgst_value}>
            {footer?.gst_type == true && footer?.gst_2 != null
              ? show_total == true
                ? (footer?.gst_2 / 2).toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={igst_value}>
            {footer?.gst_type == false && footer?.gst_2 != null
              ? show_total == true
                ? footer?.gst_2.toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={blank}></Text>
          <Text style={footer_heading}>Total Items</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value_border}>
            {show_total == true ? items : ''}
          </Text>
          <Text style={footer_heading}>Freight Amt.</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value_border}>
            {footer?.freight_amount == null
              ? '0.00'
              : parseFloat(footer?.freight_amount || 0).toFixed(2)}
          </Text>
          <Text style={footer_heading}>GST Amt.</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value}>
            {show_total == true ? footer?.total_gst_value : ''}
          </Text>
        </View>

        <View style={footer3}>
          <Text style={gst}>18.00% </Text>
          <Text style={gst_value_border}>
            {show_total == true ? footer?.gst_3_disc : ''}
          </Text>
          <Text style={gst_value_border}>
            {show_total == true ? footer?.gst_3_value : ''}
          </Text>
          <Text style={gst_value_border}>
            {footer?.gst_type == true && footer?.gst_3 != null
              ? show_total == true
                ? (footer?.gst_3 / 2).toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={gst_value_border}>
            {footer?.gst_type == true && footer?.gst_3 != null
              ? show_total == true
                ? (footer?.gst_3 / 2).toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={gst_value_border}>
            {footer?.gst_type == false && footer?.gst_3 != null
              ? show_total == true
                ? footer?.gst_3.toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={blank}></Text>
          <Text style={footer_heading}>Total Qty</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value_border}> {totalQty(products)}</Text>
          <Text style={footer_heading}>Rounding</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value_border}>
            {show_total == true ? footer?.rounding : ''}
          </Text>
          <Text style={footer_heading}>TCS</Text>
          <Text style={footer_icon}>:</Text>
          <Text style={footer_value}>
            {show_total == true ? footer?.tcs_amount : ''}
          </Text>
        </View>

        <View style={footer3}>
          <Text style={gst_border}>Total :</Text>
          <Text style={gst_value_border}>
            {show_total == true
              ? (
                  parseFloat(footer?.gst_0_disc ?? 0) +
                  parseFloat(footer?.gst_1_disc ?? 0) +
                  parseFloat(footer?.gst_2_disc ?? 0) +
                  parseFloat(footer?.gst_3_disc ?? 0)
                ).toFixed(2)
              : ''}
          </Text>
          <Text style={gst_value_border}>
            {show_total == true
              ? (
                  parseFloat(footer?.gst_1_value ?? 0) +
                  parseFloat(footer?.gst_2_value ?? 0) +
                  parseFloat(footer?.gst_3_value ?? 0)
                ).toFixed(2)
              : ''}
          </Text>
          <Text style={gst_value_border}>
            {footer?.gst_type == true
              ? show_total == true
                ? (
                    (parseFloat(footer?.gst_1 ?? 0) +
                      parseFloat(footer?.gst_2 ?? 0) +
                      parseFloat(footer?.gst_3 ?? 0)) /
                    2
                  ).toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={gst_value_border}>
            {footer?.gst_type == true
              ? show_total == true
                ? ((footer?.gst_1 + footer?.gst_2 + footer?.gst_3) / 2).toFixed(
                    2
                  )
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={gst_value_border}>
            {footer?.gst_type == false
              ? show_total == true
                ? (footer?.gst_1 + footer?.gst_2 + footer?.gst_3).toFixed(2)
                : ''
              : (0).toFixed(2)}
          </Text>
          <Text style={blank}></Text>
          <Text style={amount_words}>
            Amt in Words:{' '}
            {show_total == true ? convertNumToWords(footer?.net_amount) : ''}
          </Text>
        </View>
      </View>
      <View style={footerAuthorisedAgencySign}>
        <Text>For {invoice?.firm_name}</Text>
      </View>
    </View>
  )
}

export default InvoiceFooter
