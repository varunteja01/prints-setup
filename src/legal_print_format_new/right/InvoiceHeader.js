// Package imports
import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer'
import {
  legalInvoiceStyle,
  legalInvoiceStyleHeaderRight,
} from '../InvoiceStyles'
import Moment from 'moment'

// Destructure the imported styles
const { container } = legalInvoiceStyle
const {
  titleContainer,
  vendor,
  vendorHeaderImage,
  vendorHeaderLogo,
  vendorHeaderNameView,
  vendorHeaderName,
  invoiceDetail,
  invoiceNoAndDate,
  thirdItem,
  fourthItem,
} = legalInvoiceStyleHeaderRight

const InvoiceHeader = ({
  title,
  invoice,
  header,
  customer,
  logo_url,
  inventoryType,
}) => {
  return (
    <>
      <View style={titleContainer}>
        <View style={vendor}>
          <View style={vendorHeaderImage}>
            <Image style={vendorHeaderLogo} src={logo_url} />
          </View>
          <View style={vendorHeaderNameView}>
            <Text style={vendorHeaderName}>{invoice.firm_name}</Text>
          </View>
        </View>
        <View style={invoiceDetail}>
          <View style={invoiceNoAndDate}>
            <View style={{ width: '20%' }}>
              <Text>Inv. Dt</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View
              style={{
                width: '78%',
                fontSize: 10,
                fontFamily: 'Helvetica-Bold',
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
            <View
              style={{
                width: '78%',
                fontSize: 10,
                fontFamily: 'Helvetica-Bold',
              }}
            >
              <Text>
                {' '}
                {header.entry_date === ''
                  ? ''
                  : inventoryType == 'proforma' && header.entry_date !== ''
                  ? Moment(header?.entry_date)?.format('DD/MM/YYYY')
                  : Moment(header?.created_at)
                      .utc()
                      .local()
                      .format('DD/MM/YYYY')}
              </Text>
            </View>
          </View>
        </View>
        <View style={thirdItem}>
          <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: '9px' }}>
            C. Code {customer.code}
          </Text>
          <Text style={{ fontFamily: 'Helvetica-Bold' }}>{customer.name}</Text>
        </View>
        <View style={fourthItem}>
          <Text style={{ width: '25%', fontSize: 8 }}>Login ID</Text>
          <Text style={{ width: '2%' }}>:</Text>
          <Text style={{ width: '73%' }}></Text>
        </View>
        <View style={fourthItem}>
          <Text style={{ width: '25%', fontSize: 8 }}>Password</Text>
          <Text style={{ width: '2%' }}>:</Text>
          <Text style={{ width: '73%' }}></Text>
        </View>
      </View>
    </>
  )
}

export default InvoiceHeader
