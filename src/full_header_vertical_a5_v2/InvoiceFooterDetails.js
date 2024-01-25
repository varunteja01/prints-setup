import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import { numberFormat } from './number'
// import { convertNumToWords } from 'utils/helpers';

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
    height: 10.5,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer2: {
    flexDirection: 'column',
    alignItems: 'center',
    fontStyle: 'bold',
    fontSize: 7,
    width: '100%',
  },
  footer3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 10.5,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
    // borderBottomWidth: 1,
    // borderBottomColor: borderColor,
  },
  footer5: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 14.5,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  gst_sch: {
    width: '5%',
    textAlign: 'right',
    fontStyle: 'bold',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10.5,
    paddingRight: '2px',
  },
  gst: {
    width: '14%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
    height: 10.5,
    paddingLeft: '2px',
  },
  gst_border: {
    width: '4%',
    textAlign: 'right',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
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
    height: 10.5,
  },
  gst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10.5,
  },
  gst_value_border: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  cgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10.5,
  },
  sgst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10.5,
  },
  igst_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 10.5,
  },
  footer_heading: {
    width: '8%',
    textAlign: 'left',
    paddingLeft: '15px',
  },
  footer_value: {
    width: '10%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  grid2Wrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '30%',
    textAlign: 'left',
    paddingLeft: '5px',
    height: 12,
    borderTopColor: borderColor,
    borderTopWidth: 1,
  },
  grid2WrapperFooter: {
    display: 'flex',
    flexDirection: 'row',
    width: '18%',
    fontSize: 8,
    textAlign: 'left',
    paddingLeft: '5px',
    height: 12,
    // backgroundColor: '#dbdbdb',
    // borderBottomWidth: 1,
    // borderBottomColor: borderColor,
  },
  grid2WrapperObject1: { flex: 1 },
  grid2WrapperObject2: {
    flex: 1,
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  grid2WrapperObject2Right: {
    flex: 1,
    textAlign: 'right',
    paddingRight: '1px',
  },

  blank: {
    width: '0%',
  },
  qr_code: {
    width: '24%',
    height: 10.5,
    padding: '10px',
  },
  col_tot_left: {
    width: '17%',
    textAlign: 'left',
    paddingLeft: '10px',
  },
  col_tot_right: {
    width: '24%',
    textAlign: 'left',
    paddingLeft: '3px',
  },
  footer_icon: {
    width: '2%',
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
  footerDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  amount_words: {
    width: '75%',
    fontSize: 7,
    height: '100%',
    textAlign: 'left',
    paddingLeft: '15px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderTopColor: borderColor,
    borderTopWidth: 1,
  },
  footer4: {
    flexDirection: 'row',
    fontStyle: 'bold',
    fontSize: 7,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#000',
    height: '100%',
  },
  grand_tot_label: {
    width: '36%',
    height: '100%',
    textAlign: 'center',
    borderBottomWidth: 0,
    fontStyle: 'bold',
    fontFamily: 'Helvetica-Bold',
    fontSize: 7,
    backgroundColor: '#dbdbdb',
  },
  grand_tot_val: {
    width: '25%',
    height: '100%',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    fontStyle: 'bold',
    fontSize: 9,
    backgroundColor: '#dbdbdb',
  },
  tncDiv: {
    width: '66%',
    height: '50px',
    fontSize: 5,
    paddingTop: '2px',
    paddingLeft: '2px',
    borderRightWidth: 1,
  },
  tncLabel: {
    fontSize: '6',
    textDecoration: 'underline',
    fontStyle: 'bold',
  },
  tncVal: {},
  authsignDiv: {
    width: '33%',
    fontSize: 5,
    textAlign: 'center',
    paddingTop: '0',
  },
  bankDiv: {
    width: '100%',
    fontSize: 7,
    paddingLeft: '8px',
    justifyContent: 'center',
  },
  bankDetails: {
    margin: 0,
    // fontSize: 8,
    fontFamily: 'Helvetica-Bold',
  },
  signatory: {
    fontSize: 8,
    bottom: -22,
    left: 0,
    right: 0,
    textAlign: 'right',
    fontFamily: 'Helvetica-Bold',
  },
  for: {
    marginTop: '2px',
    fontSize: 8,
    fontStyle: 'bold',
    textAlign: 'right',
    marginLeft: '2px',
  },
  gst_last: {
    width: '7%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
    height: 10.5,
    paddingRight: '2px',
  },
  gst_sch_last: {
    width: '5%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  gst_value_last: {
    width: '5%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  cgst_value_last: {
    width: '5%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  sgst_value_last: {
    width: '5%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  igst_value_last: {
    width: '5%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },
  gst_discount_last: {
    width: '5%',
    textAlign: 'right',
    paddingRight: '2px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 10.5,
  },

  imageContainer: {
    marginTop: 0,
    width: '60px',
    // paddingTop: '2px',
    // paddingLeft: '5px',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
})

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  qr_code,
  crdb_amount,
  show_total,
}) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View
          style={{
            width: '44%',
            // marginBottom: '10px',
            flexDirection: 'row',
          }}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.logo} src={qr_code} />
          </View>
          <View style={styles.bankDiv}>
            <Text style={styles.bankDetails}>Our Bank Details</Text>
            <Text style={styles.bankDetails}>
              Bank Name : {invoice?.bank_name}
            </Text>
            <Text style={styles.bankDetails}>
              Acc. No : {invoice?.account_number}
            </Text>
            <Text style={styles.bankDetails}>
              IFSC Code : {invoice?.ifsc_code}
            </Text>
          </View>
        </View>
        <View style={styles.footer2}>
          <View style={styles.container}>
            <Text style={styles.gst}>CLASS</Text>
            <Text style={styles.gst_discount}>TOTAL</Text>
            <Text style={styles.gst_value}>DIS</Text>
            <Text style={styles.cgst_value}>CGST</Text>
            <Text style={styles.sgst_value}>SGST</Text>
            <Text style={styles.igst_value}>Total GST</Text>

            <Text style={styles.col_tot_right}>SUB TOTAL</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value}>
              {show_total ? parseFloat(footer?.gross_total).toFixed(2) : ''}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.gst}> Exempted</Text>
            <Text style={styles.gst_discount}>
              {footer?.gst_exempted_value}
            </Text>
            <Text style={styles.gst_value}>0.00</Text>
            <Text style={styles.cgst_value}>0.00</Text>
            <Text style={styles.sgst_value}>0.00</Text>
            <Text style={styles.igst_value}>0.00</Text>

            <Text style={styles.col_tot_right}>DISC AMT</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value}>
              {show_total ? Number(footer?.total_disc).toFixed(2) : ''}
            </Text>
          </View>

          <View style={styles.container}>
            {/* <Text style={styles.col_tot_left}></Text>
                            <Text style={styles.footer_icon}></Text>
                            <Text style={styles.footer_value_border}></Text> */}

            <Text style={styles.gst}>GST 5% </Text>
            <Text style={styles.gst_discount}>{footer?.gst_1_value}</Text>
            <Text style={styles.igst_value}>
              {Number(footer?.gst_1_disc).toFixed(2)}
            </Text>
            <Text style={styles.gst_value}>
              {footer?.gst_type == true
                ? (footer?.gst_1 / 2).toFixed(2)
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.cgst_value}>
              {footer?.gst_type == true
                ? (footer?.gst_1 / 2).toFixed(2)
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.sgst_value}>{footer?.gst_1}</Text>

            <Text style={styles.col_tot_right}>GST PAYABLE</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value}>
              {show_total
                ? parseFloat(footer?.total_gst_value || 0).toFixed(2)
                : ''}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.gst}>GST 12% </Text>
            <Text style={styles.gst_discount}>{footer?.gst_2_value}</Text>
            <Text style={styles.igst_value}>
              {Number(footer?.gst_2_disc).toFixed(2)}
            </Text>
            <Text style={styles.gst_value}>
              {footer?.gst_type == true
                ? (footer?.gst_2 / 2).toFixed(2)
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.cgst_value}>
              {footer?.gst_type == true
                ? (footer?.gst_2 / 2).toFixed(2)
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.sgst_value}>{footer?.gst_2}</Text>

            <Text style={styles.col_tot_right}>Round Off</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value}>
              {show_total ? footer?.rounding : ''}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.gst}>GST 18% </Text>
            <Text style={styles.gst_discount}>{footer?.gst_3_value}</Text>
            <Text style={styles.igst_value}>
              {Number(footer?.gst_3_disc).toFixed(2)}
            </Text>
            <Text style={styles.gst_value}>
              {footer?.gst_type == true
                ? (footer?.gst_3 / 2).toFixed(2)
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.cgst_value}>
              {footer?.gst_type == true
                ? (footer?.gst_3 / 2).toFixed(2)
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.sgst_value}>{footer?.gst_3}</Text>

            <Text style={styles.col_tot_right}>CR/DR NOTE</Text>
            <Text style={styles.footer_icon}>:</Text>
            <Text style={styles.footer_value}>
              {show_total ? Number(crdb_amount || 0).toFixed(2) : ''}
            </Text>
          </View>

          <View style={styles.footer3}>
            <Text style={styles.gst}>TOTAL</Text>
            <Text style={styles.gst_discount}>
              {parseFloat(
                parseFloat(footer?.gst_1_value || 0) +
                  parseFloat(footer?.gst_2_value || 0) +
                  parseFloat(footer?.gst_3_value || 0)
              )?.toFixed(2)}
            </Text>
            <Text style={styles.gst_value}>
              {parseFloat(footer?.total_disc).toFixed(2)}
            </Text>
            <Text style={styles.cgst_value}>
              {parseFloat(footer?.total_gst / 2).toFixed(2)}
            </Text>
            <Text style={styles.sgst_value}>
              {parseFloat(footer?.total_gst / 2).toFixed(2)}
            </Text>
            <Text style={styles.igst_value}>
              {parseFloat(footer?.total_gst).toFixed(2)}
            </Text>

            <Text style={styles.grand_tot_label}>Net Payable</Text>
          </View>

          {/* <View style={styles.container}>
            <Text style={styles.gst}>GST 28% </Text>
            <Text style={styles.gst_discount}>{footer?.gst_4_value}</Text>
            <Text style={styles.gst_value}>
              {footer?.gst_type == true
                ? (footer?.gst_4 / 2).toFixed(2)
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.cgst_value}>
              {footer?.gst_type == true
                ? (footer?.gst_4 / 2).toFixed(2)
                : (0).toFixed(2)}
            </Text>
            <Text style={styles.sgst_value}>{footer?.gst_4}</Text>
            <Text style={styles.igst_value}>
              {Number(footer?.gst_4_disc).toFixed(2)}
            </Text>
          </View> */}
        </View>
      </View>

      <View style={styles.footer2}>
        <View style={styles.footer5}>
          <View style={styles.amount_words}>
            <Text>
              {numberFormat(
                (footer?.net_amount || 0) + Number(crdb_amount || 0)
              )}
            </Text>
          </View>
          <View style={styles.grand_tot_val}>
            <Text>
              {show_total
                ? parseFloat(
                    parseFloat(footer?.net_amount || 0) +
                      parseFloat(crdb_amount || 0)
                  ).toFixed(2)
                : ''}
            </Text>
          </View>
        </View>
        <View style={styles.footer4}>
          <View style={styles.tncDiv}>
            <Text style={styles.tncLabel}>Terms and Conditions</Text>
            <Text>{invoice?.terms_and_conditions || ''}</Text>
          </View>

          <View style={styles.authsignDiv}>
            <Text style={styles.for}>FOR {invoice.firm_name}</Text>
            <Text style={styles.signatory}>Authorised Signatory</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
