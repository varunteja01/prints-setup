import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
// import { numberFormat } from 'constants/number';
import block from './block.png'
import english from './english.png'

const fontColor = '#000'
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

Font.registerHyphenationCallback((word) => [word])

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'left',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '40%',
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
  right_head_container: {
    flexDirection: 'column',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '27%',
    marginTop: 6,
    // border: 1,
  },
  right_value_container: {
    flexDirection: 'column',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '13%',
    marginTop: 7,
    // border: 1,
  },
  footer2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
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
    height: 10,
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
    height: 10,
    fontSize: 6,
  },
  net_amount: {
    width: '100%',
    textAlign: 'right',
    paddingLeft: '15px',
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
    height: 11,
    fontSize: 7,
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
  gstEnabled,
  printType,
  length,
  number,
  invoice_notes,
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
        var disc_total = 0.0
        for (var i = 0; i < products.length; i++) {
          let sale_disc =
            (parseFloat(products[i]?.sale_value) *
              parseFloat(products[i]?.discount)) /
            100
          disc_total = disc_total + sale_disc
        }

        return disc_total.toFixed(2)
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
        <Image style={{ height: '40px', width: '200px' }} src={invoice_notes} />
        {/* <Image style={{ height: '40px', width: '200px' }} src={english} /> */}
        {/* <Image style={{ height: '40px', width: '200px' }} src={block} /> */}
      </View>

      <View style={styles.middle_container}>
        {gstEnabled == true && length == number ? (
          <Text style={styles.total}>{`CGST  :   ${
            (footer.gst_1 + footer.gst_2 + footer.gst_3) / 2
          }`}</Text>
        ) : (
          <Text style={styles.total}></Text>
        )}
        {gstEnabled == true && length == number ? (
          <Text style={styles.total}>{`SGST  :   ${
            (footer.gst_1 + footer.gst_2 + footer.gst_3) / 2
          }`}</Text>
        ) : (
          <Text style={styles.total}></Text>
        )}
      </View>

      <View style={styles.right_head_container}>
        <Text style={styles.footer_heading}>Total MRP Value :</Text>
        <Text style={styles.footer_heading}>{labelGenerate(printType)}</Text>
        <Text style={styles.footer_heading}>Rounding Amount :</Text>
        <Text style={styles.net_amount}>Net Amount :</Text>
      </View>

      <View style={styles.right_value_container}>
        <Text style={styles.footer_value}>
          {length == number ? calcTotal(products, 'mrp') : ''}
        </Text>
        <Text style={styles.footer_value}>
          {length == number ? calcTotal(products, 'saved') : ''}
        </Text>
        <Text style={styles.footer_value}>
          {length == number ? footer.rounding : ''}
        </Text>
        <Text style={styles.net_amount}>
          {length == number
            ? parseFloat(footer?.net_amount || 0).toFixed(2)
            : 'Continued..'}
        </Text>
      </View>
    </View>
  )
}

export default InvoiceFooter
