// Package imports
import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer'
import {
  legalInvoiceStyle,
  legalInvoiceStyleHeaderRight,
} from '../InvoiceStyles'
import moment from 'moment'

// Destructure the imported styles
const { container } = legalInvoiceStyle
const {
  titleContainer,
  vendor,
  vendorHeaderImage,
  vendorHeaderLogo,
  vendorHeaderName,
  invoiceDetail,
  invoiceNoAndDate,
  thirdItem,
  fourthItem,
} = legalInvoiceStyleHeaderRight

const InvoiceHeader = ({ title, invoice, header, customer, logo_url }) => {
  return (
    <>
      <View style={titleContainer}>
        <View style={vendor}>
          <View style={vendorHeaderImage}>
            <Image style={vendorHeaderLogo} src={logo_url} />
          </View>
          <View style={vendorHeaderName}>
            <Text>{invoice.firm_name}</Text>
          </View>
        </View>
        <View style={invoiceDetail}>
          <View style={invoiceNoAndDate}>
            <View
              style={{
                width: '100%',
                fontSize: 10,
                fontFamily: 'Helvetica-Bold',
                paddingTop: '2px',
              }}
            >
              <Text> {header.entry_number}</Text>
            </View>
          </View>
          <View style={invoiceNoAndDate}>
            <View style={{ width: '20%' }}>
              <Text>Inv. Dt</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '78%', fontSize: 10 }}>
              <Text> {header.entry_date}</Text>
            </View>
          </View>
        </View>
        <View style={thirdItem}>
          <Text style={{ fontFamily: 'Helvetica-Bold' }}>
            Code {customer.code}
          </Text>
          <Text>{customer.name}</Text>
        </View>
        <View style={fourthItem}>
          <Text style={{ width: '20%', fontSize: 8 }}>Login ID</Text>
          <Text style={{ width: '2%' }}>:</Text>
          <Text style={{ width: '78%' }}></Text>
        </View>
        <View style={fourthItem}>
          <Text style={{ width: '20%', fontSize: 8 }}>Password</Text>
          <Text style={{ width: '2%' }}>:</Text>
          <Text style={{ width: '78%' }}></Text>
        </View>
      </View>
    </>
  )
}

export default InvoiceHeader
