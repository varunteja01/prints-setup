// Package imports
import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer'
import {
  legalInvoiceStyle,
  legalInvoiceStyleHeaderLeft,
} from '../InvoiceStyles'
import moment from 'moment'

const { container } = legalInvoiceStyle
const {
  titleContainer,
  firstItem,
  vendor,
  vendorHeaderImage,
  vendorHeaderLogo,
  officeCopy,
  officeCopyText,
  vendorName,
  vendorNameText,
  invoiceDetail,
  invoiceNoAndDate,
  invoiceDetails2,
  invoiceDetails2Direction,
  paymentType,
  secondItem,
  secondItemFlex,
} = legalInvoiceStyleHeaderLeft

const InvoiceHeader = ({ title, invoice, header, customer, logo_url }) => {
  return (
    <>
      <View style={titleContainer}>
        <View style={firstItem}>
          <View style={vendor}>
            <View style={vendorHeaderImage}>
              <Image style={vendorHeaderLogo} src={logo_url} />
            </View>
            <View style={officeCopy}>
              <Text style={officeCopyText}>OFFICE COPY</Text>
            </View>
          </View>
          <View style={vendorName}>
            <Text style={vendorNameText}>{invoice.firm_name}</Text>
          </View>
          <View style={invoiceDetail}>
            <View style={invoiceNoAndDate}>
              <View style={{ width: '20%' }}>
                <Text>Inv. No</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '78%' }}>
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
              <View style={{ width: '78%' }}>
                <Text> {header.entry_date}</Text>
              </View>
            </View>
          </View>
          <View style={invoiceDetails2}>
            <View style={invoiceDetails2Direction}>
              <Text style={{ width: '30%', fontSize: '7px' }}>GST NO.</Text>
              <Text style={{ width: '2%' }}>:</Text>
              <Text style={{ width: '68%' }}>{customer.gstin}</Text>
            </View>
            <View style={{ ...invoiceDetails2Direction, height: '22px' }}>
              <Text style={{ width: '30%', fontSize: '7px' }}>DL NO.</Text>
              <Text style={{ width: '2%' }}>:</Text>
              <Text style={{ width: '68%' }}>
                {`${invoice.dl1}, ${invoice.dl2}`}
              </Text>
            </View>
            <View style={invoiceDetails2Direction}>
              <Text style={{ width: '30%', fontSize: '7px' }}>Food Lic</Text>
              <Text style={{ width: '2%' }}>:</Text>
              <Text style={{ width: '68%' }}>{customer.gstin}</Text>
            </View>{' '}
            <View style={invoiceDetails2Direction}>
              <Text style={{ width: '30%', fontSize: '7px' }}>pan</Text>
              <Text style={{ width: '2%' }}>:</Text>
              <Text style={{ width: '68%' }}>{customer.pan}</Text>
            </View>
          </View>
          <View style={paymentType}>
            <Text>
              {header.payment_mode == 0
                ? 'CASH'
                : header.payment_mode == 1
                ? 'CREDIT'
                : ''}
            </Text>
          </View>
        </View>
        <View style={secondItem}>
          <Text style={{ fontFamily: 'Helvetica-Bold' }}>
            Code {customer.code}
          </Text>
          <Text style={{ fontFamily: 'Helvetica-Bold' }}>{customer.name}</Text>
          <Text>{customer.address_1}</Text>
          <Text>{customer.address_2}</Text>
          <Text>{customer.city}</Text>
          <View style={secondItemFlex}>
            <View style={{ width: '25%' }}>
              <Text>Phone</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '73%', paddingLeft: '3px' }}>
              <Text>{customer.phone}</Text>
            </View>
          </View>
          <View style={secondItemFlex}>
            <View style={{ width: '25%' }}>
              <Text>D.L. No</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '73%', paddingLeft: '3px' }}>
              <Text>
                {customer.dl_1},{customer.dl_2}
              </Text>
            </View>
          </View>
          <View style={secondItemFlex}>
            <View style={{ width: '25%' }}>
              <Text>GST No</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '73%', paddingLeft: '3px' }}>
              <Text>{customer.gstin}</Text>
            </View>
          </View>
          <View style={secondItemFlex}>
            <View style={{ width: '25%' }}>
              <Text>Pan</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '73%', paddingLeft: '3px' }}>
              <Text>{customer.pan}</Text>
            </View>
          </View>
          <View style={secondItemFlex}>
            <View style={{ width: '25%' }}>
              <Text>Food Lic.</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '73%', paddingLeft: '3px' }}>
              <Text>{header.food_license}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default InvoiceHeader
