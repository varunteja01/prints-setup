import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';
import {
  legalInvoiceStyleHeaderLeft,
  legalInvoiceStyleHeaderRight,
} from '../InvoiceStyles';
import moment from 'moment';

// Destructure the imported styles
const { vendorHeaderMiniContent } = legalInvoiceStyleHeaderLeft;
const {
  customerHeaderFirstLevel: {
    sectionOne,
    grid11,
    vendorHeaderLogo,
    grid12: {
      headerTitle,
      headerContent,
      headerContentDrugLicenceGrid,
      headerContentGstinPhoneGrid,
    },
    grid13,
  },
  customerHeaderSecondLevel: {
    sectionTwo,
    grid21,
    grid22: {
      headerCustomerTitle,
      headerCustomerContent,
      headerCustomerContentIRN,
      headerCustomerDetailGrid2Minicontainer,
    },
    grid23,
    grid24: { gridNames, gridSplitter, gridValues },
    alignTextTight,
  },
} = legalInvoiceStyleHeaderRight;

const InvoiceHeader = ({ title, invoice, header, customer, logo_url }) => {
  return (
    <>
      {/* Header - Vendor information */}
      <View style={sectionOne}>
        <View style={grid11}>
          <Image style={vendorHeaderLogo} src={logo_url} />
        </View>
        <View style={headerTitle}>
          <Text>{invoice.firm_name}</Text>
          <View style={headerContent}>
            <Text>
              {(
                invoice.line_1 +
                ', ' +
                invoice.line_2 +
                invoice.city +
                ', ' +
                invoice.pincode
              ).toString()}
            </Text>
            <View style={headerContentDrugLicenceGrid}>
              <Text> {`D.L. No.: ${invoice.dl1}`}</Text>
              <Text>, {`${invoice?.dl2}`}</Text>
            </View>
            <View style={headerContentGstinPhoneGrid}>
              <Text style={{ width: '50%' }}>{`GSTIN: ${invoice.gstin}`}</Text>
              <Text
                style={{ width: '50%', marginLeft: '3px' }}
              >{` Phone:  ${invoice?.landline}`}</Text>
            </View>
          </View>
        </View>
        <View style={grid13}>
          <Text>{title}</Text>
        </View>
      </View>

      {/* Header - Customer information */}
      <View style={sectionTwo}>
        <View style={grid21}>
          <Text>To: </Text>
        </View>
        <View style={headerCustomerTitle}>
          <Text>{customer?.name}</Text>
          <View style={headerCustomerContent}>
            <View style={headerCustomerContent}>
              <Text>
                {' '}
                {`${customer?.address_1 ?? ''} ` +
                  `${customer?.address_2 ?? ''}` +
                  `${customer?.address_3 ?? ''} ` +
                  `${customer?.address_4 ?? ''}`}
              </Text>
              {/* <Text>KARIMNAGAR, KARIMNAGAR, </Text> */}
              <Text>GSTIN :{header?.gstin ?? customer?.gstin}</Text>
              <Text style={headerCustomerContentIRN}>IRN: {header?.irn}</Text>
            </View>
          </View>
        </View>

        <View style={grid23}>
          <Text style={alignTextTight}>CODE: {customer?.code}</Text>
        </View>

        <View style={gridNames}>
          <Text>INV NO</Text>
          <Text>INV DATE</Text>
          <Text>REP NAME</Text>
          <Text>ACK NO</Text>
          <Text>ACK DT</Text>
        </View>
        <View style={gridSplitter}>
          {Array(5)
            .fill(':')
            .map((each) => (
              <Text>{each}</Text>
            ))}
        </View>
        <View style={gridValues}>
          <Text>{header?.invoice_number}</Text>
          <Text>{header?.entry_date}</Text>
          <Text>{header?.rep_name}</Text>
          <Text>{header?.ack_no}</Text>
          <Text>{header?.ack_date}</Text>
        </View>

        <View style={gridNames}>
          <Text></Text>
          <Text>TYPE</Text>
          <Text>TIME</Text>
          <Text></Text>
          <Text></Text>
        </View>

        <View style={gridSplitter}>
          <Text></Text>
          <Text>:</Text>
          <Text>:</Text>
          <Text></Text>
          <Text></Text>
        </View>
        <View style={gridValues}>
          <Text></Text>
          <Text>{header?.payment_mode == 0 ? `CASH` : `CREDIT`}</Text>
          <Text>
            {moment(header?.created_at).utc().local().format('HH:mm')}
          </Text>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    </>
  );
};

export default InvoiceHeader;
