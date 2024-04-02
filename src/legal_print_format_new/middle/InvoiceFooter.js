import React from 'react'
import { StyleSheet, View, Text, Image } from '@react-pdf/renderer'
import { legalInvoiceStyleFooterMiddle } from '../InvoiceStyles'

import { numberFormat } from '../../components/helpers'

// Destructure the imported styles
const {
  flash,
  rapidNews,
  rapidNews1,
  rapidNews2,
  thirdComponent,
  verifyDistibutor,
  distributorId,
  loginPass,
  loginPassItems,
  preparedBy,
  calc,
  container,
  footer_heading,
  footer_icon,
  footer_value_border,
  footer_heading2,
  footer_heading3,
  footer_heading4,
  grandTotal,
  grandTotalItems,
  grandTotalItems2,
  grandTotalItemsStyle1,
  grandTotalItemsStyle2,
  footer4,
  tnc,
  declaration,
  declaration1,
  tncText,
  qrCode,
  logo,
  bankDetails,
} = legalInvoiceStyleFooterMiddle

const borderColor = '#000'

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  show_total,
  qr_code,
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

  return (
    <View
      style={{
        flexDirection: 'column',
        height: 200,
        borderTopWidth: 0.5,
        borderTopColor: '#100c08',
      }}
    >
      <View style={flash}>
        <Text>
          FLASH *** Please download our Retailer APP -- EASYOL GLOBAL ORDER **
          from -- Google Play Store
        </Text>
      </View>

      <View style={rapidNews}>
        <View style={rapidNews1}>
          <Text>Rapid News</Text>
        </View>
        <View style={rapidNews2}>
          <Text>
            OUR NEW COMPANY - PRIMUS,MODI MUNDI,PRG HEALTH,MSN,BRITISH
            BIOLOGICALS & MORE
          </Text>
        </View>
      </View>

      <View style={thirdComponent}>
        <View style={verifyDistibutor}>
          <View style={distributorId}>
            <Text>VERIFY Distributor ID</Text>
            <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: '10px' }}>
              10298
            </Text>
          </View>
          <View style={loginPass}>
            <Text>**For Online Order**</Text>
            <View style={loginPassItems}>
              <View style={{ width: '35%', border: 1, paddingLeft: '2px' }}>
                <Text>Login ID</Text>
              </View>
              <View style={{ width: '1%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '64%', border: 1, paddingLeft: '3px' }}>
                <Text>{}</Text>
              </View>
            </View>
            <View style={loginPassItems}>
              <View style={{ width: '35%', border: 1, paddingLeft: '2px' }}>
                <Text>Password</Text>
              </View>
              <View style={{ width: '1%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '64%', border: 1, paddingLeft: '3px' }}>
                <Text>{}</Text>
              </View>
            </View>
          </View>
          <View style={preparedBy}>
            <View style={{ width: '35%', border: 1, paddingLeft: '2px' }}>
              <Text>Prep By</Text>
            </View>

            <View style={{ width: '65%', textAlign: 'center' }}>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style={calc}>
          <View style={container}>
            <Text style={footer_heading}>Total Items</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{items}</Text>
            <Text style={footer_heading2}>Taxable Amt</Text>
            <Text style={footer_heading3}>GST%</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>SGST Amt</Text>
            <Text style={footer_heading4}>IGST Amt</Text>
          </View>
          <View style={container}>
            <Text style={footer_heading}>Total Qty</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{totalQty(products)}</Text>
            <Text style={footer_heading2}>Taxable Amt</Text>
            <Text style={footer_heading3}>28%</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
          </View>
          <View style={container}>
            <Text style={footer_heading}>SchDiscGiven</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{totalQty(products)}</Text>
            <Text style={footer_heading2}>Taxable Amt</Text>
            <Text style={footer_heading3}>18%</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>SGST Amt</Text>
            <Text style={footer_heading4}>IGST Amt</Text>
          </View>{' '}
          <View style={container}>
            <Text style={footer_heading}>Sale Value</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{totalQty(products)}</Text>
            <Text style={footer_heading2}>Taxable Amt</Text>
            <Text style={footer_heading3}>5%</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
          </View>{' '}
          <View style={container}>
            <Text style={footer_heading}>Cash Disc</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{totalQty(products)}</Text>
            <Text style={footer_heading2}>Taxable Amt</Text>
            <Text style={footer_heading3}>0%</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
          </View>
          <View style={container}>
            <Text style={footer_heading}>Total GST</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{totalQty(products)}</Text>
            <Text style={footer_heading2}>Taxable Amt</Text>
            <Text style={footer_heading3}>12%</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
          </View>
          <View style={container}>
            <Text style={footer_heading}>Checked By</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{totalQty(products)}</Text>
            <Text style={footer_heading2}>Taxable Amt</Text>
            <Text style={footer_heading3}>12%</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
            <Text style={footer_heading4}>CGST Amt</Text>
          </View>
        </View>
        <View style={grandTotal}>
          <View style={grandTotalItems}>
            <Text style={grandTotalItemsStyle1}>Total</Text>
            <Text style={grandTotalItemsStyle2}>
              {/* {show_total == true
                ? parseFloat(footer?.gross_total ?? 0).toFixed(2)
                : ''} */}
              {parseFloat(footer?.gross_total ?? 0).toFixed(2)}
            </Text>
          </View>
          <View style={grandTotalItems}>
            <Text style={{ width: '50%', border: '1' }}>ADD TCS %</Text>
            <Text style={{ width: '50%', border: '1' }}></Text>
          </View>
          <View style={grandTotalItems}>
            <Text style={grandTotalItemsStyle1}>R.off</Text>
            <Text style={grandTotalItemsStyle2}>{footer?.rounding}</Text>
          </View>
          <View style={grandTotalItems}>
            <Text style={grandTotalItemsStyle1}>Cr No.</Text>
            <Text style={grandTotalItemsStyle2}>
              {parseFloat(footer?.debit_note_amount || 0) -
                parseFloat(footer?.credit_note_amount || 0)}
            </Text>
          </View>
          <View style={grandTotalItems}>
            <Text style={grandTotalItemsStyle1}>Db No.</Text>
            <Text style={grandTotalItemsStyle2}>
              {parseFloat(footer?.debit_note_amount || 0) -
                parseFloat(footer?.credit_note_amount || 0)}
            </Text>
          </View>
          <View style={grandTotalItems}>
            <Text style={grandTotalItemsStyle1}>Handling charges</Text>
            <Text style={grandTotalItemsStyle2}></Text>
          </View>
          <View style={grandTotalItems2}>
            <Text style={grandTotalItemsStyle1}>Grand Total :</Text>
            <Text style={grandTotalItemsStyle2}>
              {`Rs. ${numberFormat(
                parseFloat(footer?.net_amount || 0) +
                  parseFloat(footer?.debit_note_amount || 0) -
                  parseFloat(footer?.credit_note_amount || 0)
              ).slice(0)}`}
            </Text>
          </View>
        </View>
      </View>

      <View style={footer4}>
        <View style={tnc}>
          <View style={declaration}>
            <Text style={declaration1}>Declaration</Text>
            <Text
              style={{
                fontFamily: 'Helvetica-Bold',
              }}
            >
              E.&.O.E.
            </Text>
          </View>
          <Text style={tncText}>{invoice?.terms_and_conditions || ''}</Text>
        </View>
        <View style={qrCode}>
          <Image style={logo} src={qr_code} />
        </View>
        <View style={bankDetails}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '30%', border: 1 }}>Bank Name</Text>
            <Text style={{ width: '1%', border: 1 }}>:</Text>
            <Text style={{ width: '69%', border: 1, paddingLeft: '3px' }}>
              {invoice?.bank_name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '30%', border: 1 }}>A/C No.</Text>
            <Text style={{ width: '1%', border: 1 }}>:</Text>
            <Text style={{ width: '69%', border: 1, paddingLeft: '3px' }}>
              {invoice.account_number}
            </Text>
          </View>{' '}
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '30%', border: 1 }}>Branch</Text>
            <Text style={{ width: '1%', border: 1 }}>:</Text>
            <Text style={{ width: '69%', border: 1, paddingLeft: '3px' }}>
              {invoice?.branch_name}
            </Text>
          </View>{' '}
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '30%', border: 1 }}>IFSC Code</Text>
            <Text style={{ width: '1%', border: 1 }}>:</Text>
            <Text style={{ width: '69%', border: 1, paddingLeft: '3px' }}>
              {invoice?.ifsc_code}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '25%',
            borderRightWidth: '1',
            borderRightColor: borderColor,
            height: '60px',
            borderTopWidth: '1',
          }}
        >
          <Text
            style={{
              padding: '2px 0 0 2px',
              height: '20px',
              fontSize: '9px',
            }}
          >
            For {invoice.firm_name}
          </Text>
          <Text
            style={{
              margin: '20px 0 0 2px',
              height: '15px',
              fontSize: '9px',
            }}
          >
            Authorised Signatory
          </Text>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
