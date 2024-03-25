import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'

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
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'left',
    fontStyle: 'bold',
    fontSize: 7,
    width: '38%',
    height: '100%',
    paddingTop: '2px',
    // border: 1,
    // borderBottom: 1,
  },
  middle_container: {
    flexDirection: 'column',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    justifyContent: 'flex-end',
    height: '100%',
    width: '22%',
    // border: 1,
    paddingTop: '5px',
    // borderBottom: 1,
  },
  qr_styles: {
    paddingTop: '2px',
    paddingLeft: '5px',
    width: '15%',
    height: '100%',
    // border: 1,

    // borderBottom: 1,
  },
  logo: {
    width: 50,
    height: 50,
  },
  right_head_container: {
    flexDirection: 'column',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '13%',
    height: '100%',
    // borderBottom: 1,
    paddingTop: 5,
    // border: 1,
  },
  right_value_container: {
    flexDirection: 'column',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '12%',
    height: '100%',
    // borderBottom: 1,
    paddingTop: 5,
    // border: 1,
  },
  footer2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    // border: 1,
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
    // border: 1,
  },
  net_amount: {
    width: '100%',
    textAlign: 'right',
    // height: 20,
    fontSize: 10,
    // border: 1,
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
    paddingRight: '5px',
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
  row: {
    flexDirection: 'row',
    // border: 1,
    paddingTop: '3px',
  },
  column: {
    fontSize: '6px',
    flexDirection: 'column',
    paddingLeft: '20px',
    paddingBottom: '10px',
    // border: 1,
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
  header,
}) => {
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
      } else if (printType == 'full_header_disc_retail') {
        return parseFloat(footer?.total_disc || 0).toFixed(2)
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
  }

  return (
    <View style={styles.footer2}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View
            style={{
              width: '20%',
              fontSize: '6px',
              paddingBottom: '3px',
              paddingLeft: '2px',
            }}
          >
            <Text>&nbsp;</Text>
          </View>
          <View
            style={{
              width: '30%',
              fontSize: '6px',
              paddingBottom: '5px',
              paddingLeft: '7px',
            }}
          >
            <Text>{header?.added_by}</Text>
          </View>
          <View style={{ width: '50%', fontSize: '6px' }}>
            <Text>&nbsp;</Text>
          </View>
        </View>
      </View>

      <View style={styles.middle_container}>
        <View style={styles.column}>
          <View style={{ flexDirection: 'row' }}>
            <Text>&nbsp;</Text>
            <Text style={{ paddingLeft: '25px' }}>
              {footer?.gst_type == true && footer?.gst_1 != null
                ? show_total == true
                  ? (footer?.gst_1 / 2).toFixed(2)
                  : ''
                : (0).toFixed(2)}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>&nbsp;</Text>
            <Text style={{ paddingLeft: '25px' }}>
              {footer?.gst_type == true && footer?.gst_1 != null
                ? show_total == true
                  ? (footer?.gst_1 / 2).toFixed(2)
                  : ''
                : (0).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.right_head_container}>
        <Text style={styles.footer_heading}>&nbsp;</Text>
        <Text style={styles.footer_heading}>&nbsp;</Text>
        <Text style={styles.footer_heading}>&nbsp;</Text>
        <Text style={styles.net_amount}>&nbsp;</Text>
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
        <Text style={{ ...styles.net_amount, paddingRight: '3px' }}>
          {show_total
            ? parseFloat(
                parseFloat(footer?.net_amount || 0) +
                  parseFloat(footer?.debit_note_amount || 0) -
                  parseFloat(footer?.credit_note_amount || 0)
              )?.toFixed(2)
            : 'Continued...'}
        </Text>
      </View>
    </View>
  )
}

export default InvoiceFooter
