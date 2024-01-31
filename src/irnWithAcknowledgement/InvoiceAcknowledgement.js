import React, { Fragment } from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import Moment from 'moment'
import logo from './logo.png'
import qr from './qrcode.png'
// import {
//   InvoiceTableHeader,
//   InvoiceTableRow,
//   InvoiceTableBlankSpace,
// } from '../Components/Table';
import InvoiceTableHeader from '../irnWithAcknowledgement/InvoiceTableHeader'
import InvoiceTableRow from '../irnWithAcknowledgement/InvoiceTableRow'
import InvoiceTableBlankSpace from '../irnWithAcknowledgement/InvoiceTableBlankSpace'

import { numberFormat } from './number'

const borderColor = '#000'

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 0,
    height: '100%',
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: '2%',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
  },
  reportTitle: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'black',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    textTransform: 'uppercase',
    height: '20px',
    width: '100%',
    paddingTop: '2px',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  headerContainer: {
    marginTop: 0,
    width: '100%',
    height: '75px',
    lineHeight: 1.1,
    paddingLeft: '2px',
  },
  grid2: {
    marginTop: 0,
    width: '100%',
    lineHeight: 1.1,
    height: '75px',
    width: '100%',
    fontSize: 8,

    paddingTop: '5px',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  grid3: {
    marginTop: 0,
    width: '100%',
    lineHeight: 1.1,
    paddingLeft: '2px',
    // paddingTop: '5px',
    // height: '80px',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    width: '100%',
  },
  grid4: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    textAlign: 'center',
    justifyContent: 'flex-end',
    height: '88px',
  },
  grid5: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    marginTop: 0,
    width: '100%',
    paddingTop: '2px',
    paddingLeft: '5px',
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Bold',
    fontStyle: 'heavy',
    fontSize: 12,
  },
  logo: {
    width: 40,
    height: 40,
  },
  address: {
    fontSize: 9,
  },
  invoice: {
    textAlign: 'right',
  },
  lr: {
    fontSize: 8,
  },
  ack: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  footer_heading: {
    width: '47%',
    textAlign: 'left',
    paddingLeft: '2px',
  },
  footer_icon: {
    width: '3%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value: {
    width: '50%',
    textAlign: 'right',
    paddingRight: '2px',
  },
})

const InvoiceTitle = ({
  invoice,
  header,
  customer,
  printColumns,
  printTableStyles,
  products,
  max_items,
  show_total,
  qr_code,
  pageno,
  print_layout = '',
}) => {
  return (
    <View style={styles.titleContainer}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: '5px',
          borderBottomWidth: 1,
          borderBottomColor: borderColor,
          textAlign: 'center',
          height: '78px',
          width: '100%',
        }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.ack}>ACKNOWLEDGEMENT</Text>
          <Text style={styles.billTo}>{invoice.firm_name}</Text>
          <Text style={styles.address}>{invoice.line_1},</Text>
          <Text
            style={styles.address}
          >{`${invoice.city} - ${invoice.pincode}`}</Text>
          <Text style={styles.address}>{`(P): ${invoice.landline}`}</Text>
        </View>
      </View>

      <View style={styles.grid2}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}>
            Name
          </Text>
          <Text style={{ width: '82%', marginLeft: '3px' }}>
            : {customer.name === 'undefined' ? '' : customer.name}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', margin: '3px 0 0 0' }}>
          <Text style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}>
            Address
          </Text>
          <Text style={{ width: '82%', marginLeft: '3px' }}>
            : {customer?.city ?? ''}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', margin: '3px 0 0 0' }}>
          <Text style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}>
            Code
          </Text>
          <Text style={{ width: '82%', marginLeft: '3px' }}>
            : {customer?.code === '' ? '' : customer?.code}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', margin: '3px 0 0 0' }}>
          <Text style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}>
            Inv. No.
          </Text>
          <Text style={{ width: '82%', marginLeft: '3px' }}>
            : {header?.entry_number}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', margin: '3px 0 0 0' }}>
          <Text style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}>
            Date
          </Text>
          <Text style={{ width: '82%', marginLeft: '3px' }}>
            :{' '}
            {header?.entry_date === ''
              ? ''
              : Moment(header?.entry_date).format('DD-MM-YYYY')}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', margin: '3px 0 0 0' }}>
          <Text style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}>
            Area
          </Text>
          <Text style={{ width: '82%', marginLeft: '3px' }}>
            : {header?.area_name === '' ? '' : header?.area_name}
          </Text>
        </View>
      </View>

      <View style={styles.grid3}>
        <InvoiceTableHeader columns={printColumns} styles={printTableStyles} />
        <InvoiceTableRow
          items={products}
          columns={printColumns}
          styles={StyleSheet.create(printTableStyles)}
          pageno={pageno}
          max_items={max_items}
          print_layout={print_layout}
        />
        <InvoiceTableBlankSpace rowsCount={max_items - products.length} />
      </View>

      <View style={styles.grid4}>
        <View
          style={{
            flexDirection: 'row',
            height: '70px',
            justifyContent: 'space-between',
            paddingLeft: '4px',
            fontSize: 7,
          }}
        >
          <Image style={styles.logo} src={qr_code} />
          <View
            style={{
              width: '40%',
              borderBottomWidth: 1,
              borderBottomColor: '#000',
              borderLeftWidth: 1,
              borderLeftColor: '#000',
              flexDirection: 'column',
              height: '40px',
              paddingTop: '4px',
              paddingRight: '4px',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.footer_heading}>Subtotal</Text>
              <Text style={styles.footer_icon}>:</Text>
              <Text style={styles.footer_value}>
                {show_total == true
                  ? parseFloat(header?.gross_total || 0).toFixed(2)
                  : ''}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.footer_heading}>Discount</Text>
              <Text style={styles.footer_icon}>:</Text>
              <Text style={styles.footer_value}>
                {show_total == true
                  ? parseFloat(header?.total_disc || 0).toFixed(2)
                  : ''}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.footer_heading}>GST Amt.</Text>
              <Text style={styles.footer_icon}>:</Text>
              <Text style={styles.footer_value}>
                {show_total == true ? header?.total_gst_value : ''}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Signature of Received & Stamp</Text>
        </View>
      </View>
      <View style={styles.grid5}>
        {/* <Text style={{ padding: '8px 0 0 8px' }}>
          Net Payable : RS. {parseFloat(header.net_amount).toFixed(2)}
        </Text> */}
        <Text style={{ margin: '4px 0 0 2px' }}>NET AMOUNT:</Text>
        <Text
          style={{
            margin: '0 2px 0 0',
            fontSize: '24',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            textAlign: 'right',
          }}
        >
          {show_total == true
            ? header?.net_amount % 1 != 0
              ? `Rs. ${numberFormat(
                  parseFloat(header?.net_amount || 0) +
                    parseFloat(header?.debit_note_amount || 0) -
                    parseFloat(header?.credit_note_amount || 0)
                )}`
              : `Rs.${numberFormat(
                  parseFloat(header?.net_amount || 0) +
                    parseFloat(header?.debit_note_amount || 0) -
                    parseFloat(header?.credit_note_amount || 0)
                )}.00`
            : ''}
        </Text>
      </View>
    </View>
  )
}

export default InvoiceTitle
