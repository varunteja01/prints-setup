import React from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import Moment from 'moment'
import { entry } from '../components/Constants'

const borderColor = '#100c08'
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 0,
    height: '90px',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
    marginTop: 0,
    height: '90px',
  },
  reportTitle: {
    // height: '20px',
    width: '100%',
    color: '#000',
    fontSize: 12,
    fontStyle: 'black',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    paddingTop: '1px',
    marginBottom: '1px',
    borderBottomWidth: 0,
    borderBottomColor: borderColor,
    // border: 1,
  },
  crdr: {
    height: '15px',
    width: '100%',
    color: '#000',
    fontSize: 10,
    fontStyle: 'black',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingTop: '1px',
    borderBottomWidth: 0.5,
    borderBottomColor: borderColor,
  },

  headerContainer: {
    marginTop: 0,
    width: '70%',
    height: '100px',
    lineHeight: 1.3,
    paddingLeft: '4px',
    // border: 1,
  },
  grid2: {
    marginTop: 0,
    width: '25%',
    lineHeight: 1.1,
    borderWidth: 0.5,
    borderColor: borderColor,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    height: '100px',
    paddingTop: '5px',
    paddingLeft: '10px',
    // border: 1,
  },
  grid3: {
    marginTop: 0,
    width: '100%',
    lineHeight: 1.4,
    fontSize: 8,
    paddingLeft: '4px',
    borderWidth: 0.5,
    borderColor: borderColor,
    borderBottomWidth: 0,
    flexDirection: 'row',
    height: '100px',

    // border: 1,
  },
  grid4: {
    flexDirection: 'row',
    height: '15px',
    borderWidth: 0.5,
    borderBottomWidth: 0,
    paddingTop: '2px',
    justifyContent: 'space-between',
    // border: 1,
  },
  imageContainer: {
    marginTop: 0,
    width: '30%',
    paddingTop: '9px',
    paddingLeft: '1px',
    // border: 1,
    height: '100px',
  },
  billTo: {
    width: '100%',
    marginTop: 0,
    paddingBottom: 2,
    paddingTop: 2,
    fontFamily: 'Helvetica-Bold',
    fontStyle: 'heavy',
  },
  buyer: {
    width: '100%',
    fontFamily: 'Helvetica-Bold',
    fontStyle: 'heavy',
  },
  qr: {
    width: 80,
    height: 80,
    border: 1,
  },
  logo: {
    width: 90,
    height: 90,
    border: 1,
  },

  address: {
    fontSize: 8,
  },
  invoice: {
    textAlign: 'right',
  },
  lr: {
    fontSize: 8,
  },
})

const InvoiceTitle = ({
  title,
  invoice,
  header,
  logo_url,
  customer,
  irn_qr_code,
  qr_code,
  page_number,
  entry,
  inventoryType,
}) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
      </View>

      <View style={styles.rowContainer}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: borderColor,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            // paddingTop: '5px',
            width: '75%',
          }}
        >
          <View style={styles.headerContainer}>
            <Text style={{ ...styles.billTo, fontSize: 14 }}>
              {invoice.firm_name}
            </Text>
            <Text style={styles.address}>{invoice.line_1}</Text>
            <Text style={styles.address}>{invoice.line_2}</Text>
            <Text
              style={styles.address}
            >{`${invoice.city} - ${invoice.pincode}`}</Text>
            <Text style={styles.address}>{`Phone : ${invoice?.landline}`}</Text>
            <Text style={styles.address}>{`GST NO : ${invoice?.gstin}`}</Text>
            <Text style={styles.address}>{`Email : ${invoice?.email}`}</Text>
            <Text
              style={{
                fontSize: 7.4,
                paddingTop: '3px',
                fontFamily: 'Helvetica-Bold',
              }}
            >{`IRN No : ${header?.irn}`}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.qr} src={irn_qr_code} />
          </View>
        </View>
        <View style={styles.grid2}>
          {/* <View style={{ flexDirection: 'row', paddingTop: '2px' }}>
            <View
              style={{
                width: '100%',
                height: '75px',
                fontSize: 8,
              }}
            >
              <View style={{ flexDirection: 'row', margin: '2px 0 ' }}>
                <Text
                  style={{
                    width: '26%',
                    textAlign: 'left',
                    marginLeft: '12px',
                  }}
                >
                  PAN
                </Text>
                <Text style={{ width: '74%', marginLeft: '3px' }}>
                  : {invoice?.pan}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', margin: '2px 0 ' }}>
                <Text
                  style={{
                    width: '26%',
                    textAlign: 'left',
                    marginLeft: '12px',
                  }}
                >
                  GSTIN
                </Text>
                <Text style={{ width: '74%', marginLeft: '3px' }}>
                  : {invoice?.gstin}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', margin: '2px 0 ' }}>
                <Text
                  style={{
                    width: '26%',
                    textAlign: 'left',
                    marginLeft: '12px',
                  }}
                >
                  DL No. 20B
                </Text>
                <Text style={{ width: '74%', marginLeft: '3px' }}>
                  : {invoice?.dl1}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', margin: '2px 0 ' }}>
                <Text
                  style={{
                    width: '26%',
                    textAlign: 'left',
                    marginLeft: '12px',
                  }}
                >
                  DL No. 21B
                </Text>
                <Text style={{ width: '74%', marginLeft: '3px' }}>
                  : {invoice?.dl2}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', margin: '2px 0 ' }}>
                <Text
                  style={{
                    width: '26%',
                    textAlign: 'left',
                    marginLeft: '12px',
                  }}
                >
                  Email:
                </Text>
                <Text style={{ width: '74%', marginLeft: '3px' }}>
                  : {invoice?.email}
                </Text>
              </View>
            </View>
          </View> */}
          <Image style={styles.logo} src={logo_url} />
        </View>
      </View>

      <View style={styles.grid3}>
        <View
          style={{ width: '50%', paddingTop: '5px', borderRightWidth: 0.5 }}
        >
          <Text
            style={{
              textDecoration: 'underline',
              paddingBottom: '2px',
              fontSize: '10px',
            }}
          >
            customer's Details :-
          </Text>
          <Text style={{ ...styles.buyer, fontSize: 8.5 }}>
            {`${customer?.name} (${customer?.code})`}
          </Text>
          <Text>{customer?.address_1}</Text>
          <Text>
            {customer?.address_2},{customer?.address_3}
          </Text>
          <Text>
            {customer?.city}-{customer?.pincode}
          </Text>
          {/* <Text style={{ fontSize: '8' }}>
            {customer?.address_4} - {customer?.city}
          </Text> */}
          {/* <Text style={{ fontSize: '8' }}>{customer?.city}</Text> */}
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ paddingRight: '15px' }}>
              City : {customer?.city}
            </Text>
            <Text style={{ paddingRight: '4px' }}>Area : {customer?.city}</Text>
          </View>
          <Text>GST NO : {customer?.gstin}</Text>
          <Text style={{ fontFamily: 'Helvetica-Bold' }}>
            Phone : {customer?.phone}
          </Text>
          {/* <Text style={{ fontSize: '8' }}>
            D.L.Nos: {customer?.dl_1}, {customer?.dl_2}
          </Text>
          <Text style={{ fontSize: '8' }}>GSTIN: {customer?.gstin}</Text> */}
        </View>
        <View
          style={{
            width: '50%',
            paddingTop: '5px',
            paddingLeft: '4px',
            borderRightWidth: 0.5,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ textAlign: 'left', width: '15%' }}>Bill No.</Text>
            <Text
              style={{
                width: '85%',
                fontFamily: 'Helvetica-Bold',
              }}
            >
              : {header?.entry_number}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ textAlign: 'left', width: '15%' }}>Date</Text>
            <Text
              style={{
                width: '85%',
                fontFamily: 'Helvetica-Bold',
              }}
            >
              : {Moment(header.entry_date).format('DD-MM-YYYY')}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ textAlign: 'left', width: '15%' }}>Time.</Text>
            <Text
              style={{
                width: '85%',
              }}
            >
              :{' '}
              {customer.created_at === ''
                ? ''
                : inventoryType === 'proforma' && header.entry_date !== ''
                ? Moment(header?.entry_date)?.format('DD-MM-YYYY')
                : Moment(header?.created_at).utc().local().format('hh:mm A ')}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ textAlign: 'left', width: '15%' }}>L.R.No</Text>
            <Text style={{ width: '30%' }}>:{header?.lr_number} </Text>
            <Text style={{ textAlign: 'left', width: '15%' }}>L.R.Date</Text>
            <Text style={{ width: '30%' }}>
              :{' '}
              {header?.lr_date
                ? Moment(header.lr_date).format('DD/MM/YYYY')
                : ''}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ textAlign: 'left', width: '15%' }}>Order No.</Text>
            <Text style={{ width: '30%' }}>: </Text>
            <Text style={{ textAlign: 'left', width: '15%' }}>Pack</Text>
            <Text style={{ width: '30%' }}>: {customer?.pan}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ textAlign: 'left', width: '15%' }}>Tpt.</Text>
            <Text
              style={{
                width: '85%',
              }}
            >
              : {header?.transport_name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                textAlign: 'left',
                width: '15%',
                fontFamily: 'Helvetica-Bold',
              }}
            >
              Eway Bill
            </Text>
            <Text
              style={{
                width: '30%',
                fontFamily: 'Helvetica-Bold',
              }}
            >
              : {header.e_way_bill_no}
            </Text>
            <Text style={{ textAlign: 'left', width: '15%' }}>S.Man</Text>
            <Text style={{ width: '30%' }}>: {entry?.rep_name}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              fontFamily: 'Helvetica-Bold',
            }}
          >
            <Text style={{ textAlign: 'left', width: '15%' }}>E-Invoice</Text>
            <Text
              style={{
                fontSize: '8',
                width: '85%',
              }}
            >
              :
            </Text>
          </View>
          {/* <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', width: '15%', textAlign: 'left' }}>
              D.L.Nos
            </Text>
            <Text
              style={{ fontSize: '8', width: '85%' }}
            >{`: ${customer?.dl_1}\n: ${customer?.dl_2}`}</Text>
          </View> */}
          {/* <View style={{ flexDirection: 'row', margin: '2px 0 ' }}>
            <Text style={{ fontSize: '8', width: '15%', textAlign: 'left' }}>
              State
            </Text>
            <Text style={{ fontSize: '8', width: '85%' }}>
              : {customer?.state} - {customer?.state_id}
            </Text>
          </View> */}
        </View>
      </View>
      {/* <View style={styles.grid4}>
        <Text style={{ paddingLeft: '4px', fontSize: 7 }}>
          IRN NO : {header.irn}
        </Text>
        <Text style={{ paddingLeft: '4px', fontSize: 7 }}>{page_number}</Text>
      </View>
      <View style={styles.grid4}>
        <Text style={{ paddingLeft: '4px', fontSize: 7 }}>
          E-Way Bill No. : {header.e_way_bill_no}&nbsp;
          {header?.valid_upto !== ''
            ? `(${Moment(header?.valid_upto, 'DD/MM/YYYY hh:mm:ss a')?.format(
                'DD-MM-YYYY'
              )})`
            : ''}
        </Text>
      </View>
      <View style={styles.grid4}>
        <Text style={{ paddingLeft: '4px', fontSize: 8, width: '65%' }}>
          Transport : {header.transport_name}
        </Text>
        <Text style={{ paddingLeft: '4px', fontSize: 8, width: '35%' }}>
          Cases
        </Text>
      </View> */}
    </View>
  )
}

export default InvoiceTitle
