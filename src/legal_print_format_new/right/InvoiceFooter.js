import React from 'react'
import { StyleSheet, View, Text, Image } from '@react-pdf/renderer'
import { legalInvoiceStyleFooterRight } from '../InvoiceStyles'

import { numberFormat } from '../../components/helpers'

// Destructure the imported styles
const { qrSection, logo, totalSection } = legalInvoiceStyleFooterRight

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
    <View>
      <View
        style={{
          flexDirection: 'column',
          height: 188,
          borderTopWidth: 0.5,
          borderTopColor: '#100c08',
        }}
      >
        <View style={qrSection}>
          <Image style={logo} src={qr_code} />
        </View>
        <View style={totalSection}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '50%', textAlign: 'left' }}>Total</Text>
            <Text style={{ width: '50%', textAlign: 'right' }}>
              {parseFloat(footer?.gross_total ?? 0).toFixed(2)}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ width: '50%', textAlign: 'left' }}>Disc@</Text>
            <Text style={{ width: '50%', textAlign: 'right' }}>
              {parseFloat(footer?.gross_total ?? 0).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              fontSize: '9px',
              fontFamily: 'Helvetica-Bold',
            }}
          >
            <Text style={{ width: '50%', textAlign: 'left' }}>Net Amt</Text>
            <Text style={{ width: '50%', textAlign: 'right' }}>
              {`Rs. ${numberFormat(
                parseFloat(footer?.net_amount || 0) +
                  parseFloat(footer?.debit_note_amount || 0) -
                  parseFloat(footer?.credit_note_amount || 0)
              ).slice(0)}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default InvoiceFooter
