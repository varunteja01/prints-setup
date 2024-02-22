import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
// import { numberFormat } from 'constants/number';

const borderColor = '#000000'

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
    flexDirection: 'column',
    alignItems: 'left',
    fontStyle: 'bold',
    fontSize: 7,
    width: '40%',
    height: '100%',
    // border: 1,
  },
  middle_container: {
    flexDirection: 'column',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '20%',
    // border: 1,
  },
  qr_styles: {
    paddingTop: '2px',
    paddingLeft: '5px',
    width: '15%',
    // border: 1,
  },
  logo: {
    width: 50,
    height: 50,
    // border: 1,
  },
  right_head_container: {
    flexDirection: 'column',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '15%',
    // border: 1,
  },
  right_value_container: {
    flexDirection: 'column',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '10%',
    // border: 1,
  },
  footer2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
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
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    height: '50px',
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
  total: {
    width: '100%',
    textAlign: 'left',
    flexGrow: 1,
    fontSize: 6,
    paddingRight: '2px',
  },
  tnc_details: {
    width: '100%',
    textAlign: 'left',
    lineHeight: 1.0,
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

  amount_words: {
    width: '56%',
    textAlign: 'left',
    paddingLeft: '15px',
    height: 10,
    fontSize: 5,
  },
  footer_heading: {
    width: '100%',
    textAlign: 'right',
    paddingLeft: '15px',
    height: 10,
    fontSize: 6,
  },
  net_amount: {
    width: '100%',
    textAlign: 'right',
    height: 20,
    fontSize: 10,
  },
  forDetails: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '15px',
    paddingTop: '12px',
    textOverflow: true,
    height: '5px',
    fontSize: 8,
  },
  footer_icon: {
    width: '1%',
    textAlign: 'right',
    paddingRight: '2px',
    height: 10,
    fontSize: 5,
  },
  footer_value: {
    width: '100%',
    textAlign: 'right',
    paddingRight: '2px',
    height: 10,
    fontSize: 5,
  },
  footer_value_border: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '8px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10,
    fontSize: 5,
  },
  blank: {
    width: '100%',
    textAlign: 'center',
  },
  tnc: {
    width: '40%',
    fontSize: 5,
    borderRightWidth: 1,
    borderRightColor: '#000000',
    height: '45px',
    paddingTop: '2px',
  },
})

const InvoiceFooter = ({
  invoice,
  footer,
  items,
  products,
  qr_code,
  gstEnabled,
  printType,
  message,
  show_total = false,
}) => {
  // console.log('SHOW QR ' + qr_code)
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
    amount = amount?.toString()
    var atemp = amount?.split('.')
    var number = atemp?.[0]?.split(',').join('')
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

  function calcTotal(data, type) {
    if (type === 'mrp') {
      var total = 0.0
      for (var i = 0; i < products.length; i++) {
        total =
          total +
          parseFloat(products[i]?.sale_quantity) *
            parseFloat(products[i]?.unit_mrp)
      }

      return total.toFixed(2)
    } else if (type === 'saved') {
      // if (printType == 2) {
      if (printType == 'full_header_retail') {
        var mrp_total = 0.0
        var net_total = 0.0
        for (var i = 0; i < products.length; i++) {
          mrp_total =
            mrp_total +
            parseFloat(products[i]?.sale_quantity || 0) *
              parseFloat(products[i]?.unit_mrp || 0)
          let sale_disc =
            (parseFloat(products[i]?.sale_value || 0) *
              parseFloat(products[i]?.discount || 0)) /
            100
          net_total =
            net_total + parseFloat(products[i]?.sale_value - sale_disc || 0)
        }

        return (mrp_total - net_total).toFixed(2)
        // } else if (printType == 3) {
      } else if (printType == 'full_header_disc_retail') {
        // var disc_total = 0.0;
        // for (var i = 0; i < products.length; i++) {
        //   let sale_disc =
        //     (parseFloat(products[i]?.sale_value) *
        //       parseFloat(products[i]?.discount)) /
        //     100;
        //   disc_total = disc_total + sale_disc;
        // }

        return parseFloat(footer?.total_disc || 0).toFixed(2)
        // } else if (printType == 4) {
      } else if (printType == 'full_header_no_disc') {
        return ''
      } else {
        var mrp_total = 0.0
        var net_total = 0.0
        for (var i = 0; i < products.length; i++) {
          mrp_total =
            mrp_total +
            parseFloat(products[i]?.sale_quantity) *
              parseFloat(products[i]?.unit_mrp)
          let sale_disc =
            (parseFloat(products[i]?.sale_value) *
              parseFloat(products[i]?.discount)) /
            100
          net_total =
            net_total + parseFloat(products[i]?.sale_value - sale_disc)
        }

        return (mrp_total - net_total).toFixed(2)
      }
    } else {
      return (0).toFixed(2)
    }
  }

  function labelGenerate(printType) {
    if (printType == 'full_header_retail') {
      return 'Saved Amount :'
    } else if (printType == 'full_header_disc_retail') {
      return 'Discount Amount :'
    } else if (printType == 'full_header_no_disc') {
      return ''
    } else {
      return 'Saved Amount :'
    }
    // if (printType == 2) {
    //   return 'Saved Amount :';
    // } else if (printType == 3) {
    //   return 'Discount Amount :';
    // } else if (printType == 4) {
    //   return '';
    // } else {
    //   return 'Saved Amount :';
    // }
  }

  return (
    <View style={styles.footer2}>
      <View style={styles.container}>
        <Text style={styles.total}>
          Rs.{' '}
          {convertNumberToWords(
            parseFloat(
              parseFloat(footer?.net_amount || 0) +
                parseFloat(footer?.debit_note_amount || 0) -
                parseFloat(footer?.credit_note_amount || 0)
            ).toFixed(2)
          )}
        </Text>
        {gstEnabled == true ? (
          <Text style={styles.total}>
            CGST 2.50%{' '}
            {footer.gst_type == true
              ? (footer.gst_1 / 2).toFixed(2)
              : (0).toFixed(2)}{' '}
            6.00%{' '}
            {footer.gst_type == true
              ? (footer.gst_2 / 2).toFixed(2)
              : (0).toFixed(2)}{' '}
            9.00%{' '}
            {footer.gst_type == true
              ? (footer.gst_3 / 2).toFixed(2)
              : (0).toFixed(2)}
          </Text>
        ) : (
          <Text />
        )}
        {gstEnabled == true ? (
          <Text style={styles.total}>
            SGST 2.50%{' '}
            {footer.gst_type == true
              ? (footer.gst_1 / 2).toFixed(2)
              : (0).toFixed(2)}{' '}
            6.00%{' '}
            {footer.gst_type == true
              ? (footer.gst_2 / 2).toFixed(2)
              : (0).toFixed(2)}{' '}
            9.00%{' '}
            {footer.gst_type == true
              ? (footer.gst_3 / 2).toFixed(2)
              : (0).toFixed(2)}
          </Text>
        ) : (
          <Text />
        )}
        {/* <Text style={styles.total}>BILLED BY :</Text> */}
        <Text style={styles.tnc_details}>
          {invoice?.terms_and_conditions || ''}
        </Text>
      </View>

      <View style={styles.middle_container}>
        {/* <Text style={styles.blank}>WISH YOU A SPEEDY</Text>
        <Text style={styles.blank}>RECOVERY</Text> */}
        <Text style={styles.blank}>{message}</Text>
      </View>

      <View style={styles.qr_styles}>
        <Image style={styles.logo} src={qr_code} />
      </View>

      <View style={styles.right_head_container}>
        <Text style={styles.footer_heading}>Total MRP Value :</Text>
        <Text style={styles.footer_heading}>{labelGenerate(printType)}</Text>
        <Text style={styles.footer_heading}>Rounding Amount :</Text>
        <Text style={styles.net_amount}>Net Amount :</Text>
      </View>

      <View style={styles.right_value_container}>
        <Text style={styles.footer_value}>
          {show_total ? calcTotal(products, 'mrp') : ''}
        </Text>
        <Text style={styles.footer_value}>
          {show_total ? calcTotal(products, 'saved') : ''}
        </Text>
        <Text style={styles.footer_value}>
          {show_total ? footer.rounding : ''}
        </Text>
        <Text style={styles.net_amount}>
          {/* {show_total ? parseFloat(footer?.net_amount || 0).toFixed(2) : ''} */}
          {show_total
            ? parseFloat(
                parseFloat(footer?.net_amount || 0) +
                  parseFloat(footer?.debit_note_amount || 0) -
                  parseFloat(footer?.credit_note_amount || 0)
              )?.toFixed(2)
            : 'Continued..'}
        </Text>
        {/* {!show_total && <Text style={styles.net_amount}>Continued...</Text>} */}
      </View>
    </View>
  )
}

export default InvoiceFooter
