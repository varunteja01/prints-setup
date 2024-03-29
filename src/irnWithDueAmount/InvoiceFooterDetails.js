import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
// import { useDispatch, useSelector } from 'react-redux';
import { numberFormat } from './number'
// import qr from './a_qr.png';
import { convertNumToWords } from '../components/helpers'

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
    borderBottomColor: borderColor,
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    height: '58px',
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
    borderTopWidth: '0.5px',
    height: 12,
    borderTopColor: borderColor,
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
    width: '29%',
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
})

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  qr_code,
  show_total,
  page_number,
  firmInfo = true,
  clientInformation,
}) => {
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
  function uniqueRows(data) {
    if (data) {
      let data_clone = data.filter(
        (item) =>
          item.product_name !== 'Already Supplied' &&
          item.product_name !== 'Fridge' &&
          item.product_name !== 'Replacements'
      )
      const unique = [...new Set(data_clone.map((item) => item?.product_code))]
      return unique.length
    }
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
          {show_total == true ? footer?.overall_disc : ''}
        </Text>
        <Text style={styles.footer_heading}>Subtotal</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true
            ? parseFloat(footer?.gross_total ?? 0).toFixed(2)
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
              ? footer?.gst_1.toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.footer_heading}>CASES</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={{ ...styles.footer_value_border, textAlign: 'center' }}>
          {show_total ? 0 : ''}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>Cr/Dr Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {show_total == true
            ? parseFloat(footer?.debit_note_amount || 0) -
              parseFloat(footer?.credit_note_amount || 0)
            : '0.00'}
        </Text>
        <Text style={styles.footer_heading}>Discount</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true ? parseFloat(footer?.total_disc).toFixed(2) : ''}
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
              ? footer?.gst_2.toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>TOTAL ITEMS</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text
          style={{
            ...styles.footer_value_border,
            fontFamily: 'Helvetica-Bold',
            textAlign: 'center',
          }}
        >
          {show_total == true ? uniqueRows(products) : ''}
        </Text>
        <Text style={styles.footer_heading}>Freight Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value_border}>
          {footer?.freight_amount == null
            ? '0.00'
            : parseFloat(footer?.freight_amount || 0).toFixed(2)}
        </Text>
        <Text style={styles.footer_heading}>GST Amt.</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text style={styles.footer_value}>
          {show_total == true ? footer?.total_gst_value : ''}
        </Text>
      </View>

      <View style={styles.footer3}>
        <Text style={styles.gst}>18.00% </Text>
        <Text style={styles.gst_value_border}>
          {show_total == true ? footer?.gst_3_disc : ''}
        </Text>
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
        <Text style={styles.gst_value_border}>
          {footer?.gst_type == false && footer?.gst_3 != null
            ? show_total == true
              ? footer?.gst_3.toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.footer_heading}>TOTAL QTY</Text>
        <Text style={styles.footer_icon}>:</Text>
        <Text
          style={{
            ...styles.footer_value_border,
            fontFamily: 'Helvetica-Bold',
            textAlign: 'center',
          }}
        >
          {show_total == true ? totalQty(products) : ''}
        </Text>
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
        <Text style={styles.gst_border}>Total :</Text>
        <Text style={styles.gst_value_border}>
          {show_total == true
            ? (
                parseFloat(footer?.gst_0_disc ?? 0) +
                parseFloat(footer?.gst_1_disc ?? 0) +
                parseFloat(footer?.gst_2_disc ?? 0) +
                parseFloat(footer?.gst_3_disc ?? 0)
              ).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.gst_value_border}>
          {show_total == true
            ? (
                parseFloat(footer?.gst_1_value ?? 0) +
                parseFloat(footer?.gst_2_value ?? 0) +
                parseFloat(footer?.gst_3_value ?? 0)
              ).toFixed(2)
            : ''}
        </Text>
        <Text style={styles.gst_value_border}>
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
        <Text style={styles.gst_value_border}>
          {footer?.gst_type == true
            ? show_total == true
              ? ((footer?.gst_1 + footer?.gst_2 + footer?.gst_3) / 2).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.gst_value_border}>
          {footer?.gst_type == false
            ? show_total == true
              ? (footer?.gst_1 + footer?.gst_2 + footer?.gst_3).toFixed(2)
              : ''
            : (0).toFixed(2)}
        </Text>
        <Text style={styles.blank}></Text>
        <Text style={styles.amount_words}>
          Amt in Words:{' '}
          {show_total == true ? convertNumToWords(footer?.net_amount) : ''}
        </Text>
      </View>

      <View style={styles.footer4}>
        <View style={styles.tnc}>
          <Text
            style={{ fontSize: '6', fontStyle: 'bold', padding: '2px 0 0 2px' }}
          >
            Terms and Conditions
          </Text>
          <Text style={{ padding: '2px 0 0 2px' }}>
            {invoice?.terms_and_conditions || ''}
          </Text>
        </View>

        <View style={{ width: '13%', height: '52px' }}>
          <Text
            style={{
              fontSize: '7',
              fontWeight: 'bold',
              padding: '2px 0 0 2px',
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
            A/C:{' '}
            <Text style={{ fontFamily: 'Helvetica-Bold' }}>
              {invoice.account_number}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: '7',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            <Text style={{ fontFamily: 'Helvetica-Bold' }}>
              {invoice?.bank_name}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: '7',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            Branch:
            <Text style={{ fontFamily: 'Helvetica-Bold' }}>
              {invoice.bank_branch_name}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: '7',
              fontWeight: 'bold',
              padding: '0px 0 0 2px',
            }}
          >
            IFSC:
            <Text style={{ fontFamily: 'Helvetica-Bold' }}>
              {invoice.ifsc_code}
            </Text>
          </Text>
        </View>

        <View
          style={{
            width: '7%',
            borderRightWidth: '1',
            borderRightColor: borderColor,
            height: '60px',
          }}
        >
          <Image style={styles.logo} src={qr_code} />
        </View>

        <View
          style={{
            width: '28%',
            borderRightWidth: '1',
            borderRightColor: borderColor,
            height: '60px',
          }}
        >
          {firmInfo && (
            <>
              <Text style={{ padding: '2px 0 0 2px', height: '15px' }}>
                For {invoice.firm_name}
              </Text>
              <Text style={{ margin: '25px 0 0 2px', height: '15px' }}>
                {clientInformation?.client_id == 27
                  ? 'Signature of Competent Person'
                  : 'Authorised Signatory'}
              </Text>
            </>
          )}
        </View>

        <View style={{ width: '23%' }}>
          <Text style={{ margin: '4px 0 0 2px', height: '30%' }}>
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
            {
              show_total == true
                ? footer?.net_amount % 1 != 0
                  ? `Rs. ${numberFormat(
                      parseFloat(
                        parseFloat(footer?.net_amount)?.toFixed(2) || 0
                      ) +
                        parseFloat(footer?.debit_note_amount || 0) -
                        parseFloat(footer?.credit_note_amount || 0)
                    )}`
                  : `Rs. ${numberFormat(
                      parseFloat(
                        parseFloat(footer?.net_amount)?.toFixed(2) || 0
                      ) +
                        parseFloat(footer?.debit_note_amount || 0) -
                        parseFloat(footer?.credit_note_amount || 0)
                    )}.00`
                : `Continued...`
              // Page No:${page_number}
            }
          </Text>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
