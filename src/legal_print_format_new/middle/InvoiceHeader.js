// Package imports
import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer'
import {
  legalInvoiceStyle,
  legalInvoiceStyleHeaderMiddle,
} from '../InvoiceStyles'
import moment from 'moment'

// Destructure the imported styles
const { container } = legalInvoiceStyle
const {
  titleContainer,
  firstItem,
  vendor,
  vendorHeaderImage,
  vendorHeaderLogo,
  vendorHeaderNameView,
  vendorHeaderName,
  vendorInfo,
  address1,
  address2,
  vendorOtherInfo,
  secondItem,
  taxInvoice,
  invoiceDetail,
  invoiceNoAndDate,
  invoiceDetail2,
  invoiceDetail2Items,
  barcode,
  barcodeImage,
  thirdItem,
  thirdItemFlex,
  paymentMode,
} = legalInvoiceStyleHeaderMiddle

const InvoiceHeader = ({ title, invoice, header, customer, logo_url }) => {
  return (
    <>
      <View style={titleContainer}>
        <View style={firstItem}>
          <View style={vendor}>
            <View style={vendorHeaderImage}>
              <Image style={vendorHeaderLogo} src={logo_url} />
            </View>
            <View style={vendorHeaderNameView}>
              <Text style={vendorHeaderName}>{invoice.firm_name}</Text>
            </View>
          </View>
          <View style={vendorInfo}>
            <View style={address1}>
              <Text>{invoice.line_1}</Text>
            </View>
            <View style={address2}>
              <Text>
                {(
                  invoice.line_2 +
                  ', ' +
                  invoice.city +
                  ', ' +
                  invoice.pincode
                ).toString()}
              </Text>
            </View>
            <View style={vendorOtherInfo}>
              <View style={{ width: '18%' }}>
                <Text>Mobile</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '80%' }}>
                <Text>{invoice.landline}</Text>
              </View>
            </View>
            <View style={vendorOtherInfo}>
              <View style={{ width: '18%' }}>
                <Text>Food lic</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '80%' }}>
                <Text></Text>
              </View>
            </View>{' '}
            <View style={vendorOtherInfo}>
              <View style={{ width: '18%' }}>
                <Text>GST No</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '80%' }}>
                <Text>{invoice.gstin}</Text>
              </View>
            </View>{' '}
            <View style={vendorOtherInfo}>
              <View style={{ width: '18%' }}>
                <Text>DL No</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '80%' }}>
                <Text>
                  <Text>{`${invoice.dl1}, ${invoice.dl2}`}</Text>
                </Text>
              </View>
            </View>{' '}
            <View style={vendorOtherInfo}>
              <View style={{ width: '18%' }}>
                <Text>Pan</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '80%' }}>
                <Text>{invoice.pan}</Text>
              </View>
            </View>
            <View style={vendorOtherInfo}>
              <View style={{ width: '18%' }}>
                <Text>Mail id</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '80%' }}>
                <Text>{invoice.email}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={secondItem}>
          <View style={taxInvoice}>
            <Text>TAX INVOICE</Text>
          </View>
          <View style={invoiceDetail}>
            <View style={invoiceNoAndDate}>
              <View style={{ width: '20%' }}>
                <Text>Inv. No</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '78%', fontSize: 10 }}>
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
          <View style={invoiceDetail2}>
            <View style={{ ...invoiceDetail2Items, height: '20px' }}>
              <View style={{ width: '30%', border: 1 }}>
                <Text>Sales Rep</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View
                style={{
                  width: '68%',
                  border: 1,
                  fontFamily: 'Helvetica-Bold',
                  paddingLeft: '2px',
                }}
              >
                <Text>{header.rep_name}</Text>
              </View>
            </View>
            <View style={invoiceDetail2Items}>
              <View style={{ width: '30%', border: 1 }}>
                <Text>Mobile</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View
                style={{
                  width: '68%',
                  border: 1,
                  fontFamily: 'Helvetica-Bold',
                  paddingLeft: '2px',
                }}
              >
                <Text>{header.mobile}</Text>
              </View>
            </View>{' '}
            <View style={invoiceDetail2Items}>
              <View style={{ width: '30%', border: 1 }}>
                <Text>Route</Text>
              </View>
              <View style={{ width: '2%' }}>
                <Text>:</Text>
              </View>
              <View style={{ width: '68%', border: 1 }}>
                <Text></Text>
              </View>
            </View>
          </View>
          <View style={barcode}>
            {/* <Image style={barcodeImage}></Image> */}
          </View>
        </View>
        <View style={thirdItem}>
          <Text style={{ fontFamily: 'Helvetica-Bold' }}>
            Code {customer.code}
          </Text>
          <Text>{customer.name}</Text>
          <Text>{customer.address_1}</Text>
          <Text>{customer.address_2}</Text>
          <Text>{customer.city}</Text>
          <View style={thirdItemFlex}>
            <View style={{ width: '25%', border: 1 }}>
              <Text>Phone</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '73%', border: 1, paddingLeft: '3px' }}>
              <Text>{customer.phone}</Text>
            </View>
          </View>
          <View style={thirdItemFlex}>
            <View style={{ width: '25%', border: 1 }}>
              <Text>D.L. No</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '73%', border: 1, paddingLeft: '3px' }}>
              <Text>{`${customer.dl_1}, ${customer.dl_2}`}</Text>
            </View>
          </View>
          <View style={thirdItemFlex}>
            <View style={{ width: '25%', border: 1 }}>
              <Text>GST No</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '73%', border: 1, paddingLeft: '3px' }}>
              <Text>{customer.gstin}</Text>
            </View>
          </View>
          <View style={thirdItemFlex}>
            <View style={{ width: '25%', border: 1 }}>
              <Text>Pan</Text>
            </View>
            <View style={{ width: '2%' }}>
              <Text>:</Text>
            </View>
            <View style={{ width: '40%', border: 1, paddingLeft: '3px' }}>
              <Text>{customer.pan}</Text>
            </View>
            <View style={paymentMode}>
              <Text>
                {header.payment_mode == 0
                  ? 'CASH'
                  : header.payment_mode == 1
                  ? 'CREDIT'
                  : ''}
              </Text>
            </View>
          </View>
          <View
            style={{ borderTop: 1, paddingTop: '3px', flexDirection: 'row' }}
          >
            <Text style={{ width: '10%', border: '1' }}>IRN </Text>
            <Text style={{ width: '2%', border: '1' }}>: </Text>
            {/* <Text style={{ width: '88%', border: '1' }}>{`${
              header?.irn || ''
            }`}</Text> */}
            <Text style={{ width: '88%', border: '1' }}></Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default InvoiceHeader
