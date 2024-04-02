// Package imports
import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer'
import {
  legalInvoiceStyle,
  legalInvoiceStyleHeaderLeft,
} from '../InvoiceStyles'
import moment from 'moment'

// Destructure the imported styles
const { container } = legalInvoiceStyle
const {
  titleContainer,
  vendorHeader,
  vendorHeaderInfo,
  vendorHeaderTitle,
  vendorHeaderSubTitle,
  vendorHeaderContentTitle,
  vendorHeaderContent,
  vendorHeaderContentDrugLicence,
  vendorHeaderContentFlex,
  vendorHeaderContentFlexContent,
  vendorHeaderMiniContent,
  vendorHeaderImage,
  vendorHeaderLogo,
  vendorHeaderTitleAlignRight,
  headerCustomerDetailGrid1,
  headerCustomerDetailGrid2,
  headerCustomerDetailGrid3,
  headerCustomerDetailGrid2Minicontainer,
} = legalInvoiceStyleHeaderLeft

const InvoiceHeader = ({ title, invoice, header, customer, logo_url }) => {
  return (
    <>
      {/* Header - Vendor information */}
      <View style={titleContainer}>
        <View style={vendorHeader}>
          <View style={vendorHeaderInfo}>
            <Text style={vendorHeaderTitle}>{invoice.firm_name}</Text>
            <Text style={vendorHeaderContent}>
              {(
                invoice.line_1 +
                ', ' +
                invoice.line_2 +
                invoice.city +
                ', ' +
                invoice.pincode
              ).toString()}
            </Text>
            <View style={vendorHeaderContentDrugLicence}>
              <Text style={{ width: '50%' }}>{`DL Nos: ${invoice.dl1}`}</Text>
              <Text style={{ width: '50%' }}>{`${invoice?.dl2}`}</Text>
            </View>
            <Text style={vendorHeaderContent}>{`GSTIN: ${invoice.gstin}`}</Text>
          </View>
          <View style={vendorHeaderImage}>
            <Image style={vendorHeaderLogo} src={logo_url} />
          </View>
        </View>
      </View>

      {/* Header - Customer information */}
      <View style={titleContainer}>
        <View style={vendorHeader}>
          <View style={container}>
            <View style={headerCustomerDetailGrid1}>
              <Text>To:</Text>
            </View>
            <View style={headerCustomerDetailGrid2}>
              <Text style={vendorHeaderContentTitle}>{customer?.name}</Text>
              <Text style={vendorHeaderContent}>
                {`${customer?.address_1 ?? ''} ` +
                  `${customer?.address_2 ?? ''}`}
              </Text>
              <Text style={vendorHeaderContent}>
                {`${customer?.address_3 ?? ''} ` +
                  `${customer?.address_4 ?? ''}`}
              </Text>

              <Text style={vendorHeaderMiniContent}>
                D.L.Nos: {customer?.dl_1}, {customer?.dl_2}
              </Text>
              <View style={vendorHeaderContentFlex}>
                <Text style={{ width: '70%' }}>
                  GSTIN: {header?.gstin ?? customer?.gstin}
                </Text>
                <Text style={{ width: '50%', marginLeft: '3px' }}>
                  Phone: {customer?.phone}
                </Text>
              </View>
              <View style={headerCustomerDetailGrid2Minicontainer}>
                <Text style={{ width: '70%' }}>
                  INV NO: {header?.entry_number}
                </Text>
                <Text style={{ width: '70%', marginLeft: '3px' }}>
                  INV DT: {moment(header.entry_date).format('DD-MM-YYYY')}
                </Text>
              </View>
            </View>
            <View style={headerCustomerDetailGrid3}>
              <Text style={vendorHeaderTitleAlignRight}>
                CODE: {customer?.code}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default InvoiceHeader
