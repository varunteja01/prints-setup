import React from 'react'
import { StyleSheet, View, Text, Image } from '@react-pdf/renderer'
import { legalInvoiceStyleFooterLeft } from '../InvoiceStyles'

import { numberFormat } from '../../components/helpers'

// Destructure the imported styles
const {
  blank,
  totalItemsQty,
  thirdComponent,
  calc,
  container,
  footer_heading,
  footer_icon,
  footer_value_border,
  footer_heading2,
  footer_heading3,
  grandTotal,
  grandTotalItems,
  grandTotalItemsStyle1,
  grandTotalItemsStyle2,
  fourthComponent,
} = legalInvoiceStyleFooterLeft
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
        height: 188,
        borderTopWidth: 0.5,
        borderTopColor: '#100c08',
      }}
    >
      <View style={blank}></View>
      <View style={totalItemsQty}>
        <Text style={{ width: '15%' }}>Total Items</Text>
        <Text style={{ width: '2%' }}>:</Text>
        <Text style={{ width: '20%' }}>{items}</Text>
        <Text style={{ width: '15%' }}>Total Qty</Text>
        <Text style={{ width: '2%' }}>:</Text>
        <Text style={{ width: '20%' }}>{totalQty(products)}</Text>
      </View>
      <View style={thirdComponent}>
        <View style={calc}>
          <View style={container}>
            <Text style={footer_heading}>Prep By</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{footer?.added_by}</Text>
            <Text style={footer_heading2}>GST%</Text>=
            <Text style={{ ...footer_heading3, textAlign: 'center' }}>
              Taxable Amt
            </Text>
          </View>
          <View style={container}>
            <Text style={footer_heading}>No of Cs.</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}></Text>
            <Text style={{ ...footer_heading2, fontFamily: 'Helvetica-Bold' }}>
              28%
            </Text>

            <Text style={footer_heading3}>
              {show_total == true ? footer?.gst_4_value : ''}
            </Text>
          </View>{' '}
          <View style={container}>
            <Text style={footer_heading}>Sort By</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{items}</Text>
            <Text style={{ ...footer_heading2, fontFamily: 'Helvetica-Bold' }}>
              18%
            </Text>
            =
            <Text style={footer_heading3}>
              {show_total == true ? footer?.gst_3_value : ''}
            </Text>
          </View>
          <View style={container}>
            <Text style={footer_heading}>Checked By</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{items}</Text>
            <Text style={{ ...footer_heading2, fontFamily: 'Helvetica-Bold' }}>
              12%
            </Text>
            =
            <Text style={footer_heading3}>
              {show_total == true ? footer?.gst_2_value : ''}
            </Text>
          </View>
          <View style={container}>
            <Text style={footer_heading}>Route</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{items}</Text>
            <Text style={{ ...footer_heading2, fontFamily: 'Helvetica-Bold' }}>
              5%
            </Text>
            =
            <Text style={footer_heading3}>
              {show_total == true ? footer?.gst_1_value : ''}
            </Text>
          </View>
          <View style={container}>
            <Text style={footer_heading}>Print Time</Text>
            <Text style={footer_icon}>:</Text>
            <Text style={footer_value_border}>{items}</Text>
            <Text style={{ ...footer_heading2, fontFamily: 'Helvetica-Bold' }}>
              0%
            </Text>
            =
            <Text style={footer_heading3}>
              {show_total == true ? footer?.gst_exempted_value : ''}
            </Text>
          </View>
        </View>
        <View style={grandTotal}>
          <View style={grandTotalItems}>
            <Text style={grandTotalItemsStyle1}>Total</Text>
            <Text style={grandTotalItemsStyle2}>
              {show_total == true
                ? parseFloat(footer?.gross_total || 0).toFixed(2)
                : ''}
            </Text>
          </View>
          <View style={grandTotalItems}>
            <Text
              style={{
                width: '50%',
                // border: '1',
                padding: '1px 0px 0px 2px',
              }}
            >
              ADD TCS %
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '50%',
                paddingTop: '1px',
                fontSize: 7,
              }}
            >
              <Text>0.00</Text>
              <Text>0.00</Text>
            </View>
          </View>
          <View style={grandTotalItems}>
            <Text style={grandTotalItemsStyle1}>R.off</Text>
            <Text style={grandTotalItemsStyle2}>
              {show_total ? footer?.rounding : ''}
            </Text>
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
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                width: '30%',
                // border: 1,
                fontSize: 7,
                textAlign: 'center',
              }}
            >
              Grand Total:
            </Text>
            <Text
              style={{
                width: '70%',
                border: 1,
                fontSize: 8,
                fontFamily: 'Helvetica-Bold',
                textAlign: 'center',
                margin: '1px 1px 1px 1px',
                padding: '2px',
                backgroundColor: '#dbdbdb',
              }}
            >
              {show_total
                ? `Rs. ${parseFloat(
                    parseFloat(footer?.net_amount || 0) +
                      parseFloat(footer?.debit_note_amount || 0) -
                      parseFloat(footer?.credit_note_amount || 0)
                  ).toFixed(2)}`
                : 'Continued...'}
            </Text>
          </View>
        </View>
      </View>
      <View style={fourthComponent}>
        <View
          style={{
            width: '100%',
            // borderRightWidth: '1',
            // borderRightColor: borderColor,
            height: '60px',
            // borderTopWidth: '1',
          }}
        >
          <Text
            style={{
              padding: '2px 3px 0 2px',
              height: '20px',
              fontSize: '8px',
              // border: '1',
              fontFamily: 'Helvetica-Bold',
              textAlign: 'right',
            }}
          >
            For {invoice.firm_name}
          </Text>
          <Text
            style={{
              margin: '30px 0 0 2px',
              paddingRight: '3px',
              height: '15px',
              fontSize: '8px',
              // border: '1',
              fontFamily: 'Helvetica-Bold',
              textAlign: 'right',
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
