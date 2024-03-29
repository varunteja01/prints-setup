import React from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import Moment from 'moment'

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
    width: '275px',
    height: '75px',
    lineHeight: 1.1,
    paddingLeft: '2px',
  },
  grid2: {
    marginTop: 0,
    width: '31%',
    lineHeight: 1.1,
    borderWidth: 0.5,
    borderColor: borderColor,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    height: '80px',
    paddingTop: '0px',
  },
  grid3: {
    marginTop: 0,
    width: '100%',
    lineHeight: 1.1,
    fontSize: 8,
    paddingLeft: '2px',
    borderWidth: 0.5,
    borderColor: borderColor,
    borderBottomWidth: 0,
    flexDirection: 'row',
    height: '60px',
  },
  grid4: {
    flexDirection: 'row',
    height: '15px',
    borderWidth: 0.5,
    borderBottomWidth: 0,
    paddingTop: '2px',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: 0,
    width: '70px',
    paddingTop: '2px',
    paddingLeft: '5px',
  },
  billTo: {
    width: '100%',
    marginTop: 0,
    paddingBottom: 4,
    fontFamily: 'Helvetica-Bold',
    fontStyle: 'heavy',
  },
  logo: {
    width: 60,
    height: 60,
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
            paddingTop: '5px',
            width: '69%',
          }}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.logo} src={logo_url} />
          </View>
          <View style={styles.headerContainer}>
            <Text style={{ ...styles.billTo, fontSize: 20 }}>
              {invoice.firm_name}
            </Text>
            <Text style={styles.address}>{invoice.line_1}</Text>
            <Text style={styles.address}>{invoice.line_2}</Text>
            <Text
              style={styles.address}
            >{`${invoice.city} - ${invoice.pincode}`}</Text>
            <Text style={styles.address}>{`Phone: ${invoice.landline}`}</Text>
          </View>
        </View>
        <View style={styles.grid2}>
          <View style={{ flexDirection: 'row', paddingTop: '2px' }}>
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
          </View>
        </View>
      </View>

      <View style={styles.grid3}>
        <View
          style={{ width: '50%', paddingTop: '5px', borderRightWidth: 0.5 }}
        >
          <Text style={{ ...styles.billTo, fontSize: 8.5 }}>
            {`${customer?.name} (${customer?.code})`}
          </Text>
          <Text style={{ fontSize: '8' }}>{customer?.address_1}</Text>
          <Text style={{ fontSize: '8' }}>{customer?.address_2}</Text>
          <Text style={{ fontSize: '8' }}>
            {customer?.address_3},{customer?.city}
          </Text>
          {/* <Text style={{ fontSize: '8' }}>
            {customer?.address_4} - {customer?.city}
          </Text> */}
          {/* <Text style={{ fontSize: '8' }}>{customer?.city}</Text> */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 8 }}>Tel : {customer?.phone}</Text>
            <Text style={{ fontSize: 8, paddingRight: '4px' }}>
              PIN : {customer?.pincode}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '39%',
            paddingTop: '5px',
            paddingLeft: '5px',
            borderRightWidth: 0.5,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: '8', textAlign: 'left', width: '15%' }}>
              Bill No.
            </Text>
            <Text
              style={{
                fontSize: '10',
                width: '85%',
                fontFamily: 'Helvetica-Bold',
              }}
            >
              : {header?.entry_number}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: '8', textAlign: 'left', width: '15%' }}>
              Date
            </Text>
            <Text
              style={{
                fontSize: '10',
                width: '85%',
                fontFamily: 'Helvetica-Bold',
              }}
            >
              : {Moment(header.entry_date).format('DD-MM-YYYY')}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', textAlign: 'left', width: '15%' }}>
              GST No.
            </Text>
            <Text style={{ fontSize: '8', width: '40%' }}>
              : {header?.gstin ?? customer?.gstin}
            </Text>
            <Text style={{ fontSize: '8', textAlign: 'left', width: '10%' }}>
              PAN
            </Text>
            <Text style={{ fontSize: '8', width: '35%' }}>
              : {customer?.pan}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', width: '15%', textAlign: 'left' }}>
              D.L.Nos
            </Text>
            <Text style={{ fontSize: '8', width: '85%' }}>{`: ${
              customer?.dl_1 != null ? customer?.dl_1 : ' '
            }\n: ${customer?.dl_2 != null ? customer?.dl_2 : ' '}`}</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', margin: '2px 0 ' }}>
            <Text style={{ fontSize: '8', width: '15%', textAlign: 'left' }}>
              State
            </Text>
            <Text style={{ fontSize: '8', width: '85%' }}>
              : {customer?.state} - {customer?.state_id}
            </Text>
          </View> */}
        </View>
        <View
          style={{
            width: '11%',
            borderRightColor: borderColor,
          }}
        >
          <Image style={styles.logo} src={irn_qr_code} />
        </View>
      </View>
      <View style={styles.grid4}>
        <Text style={{ paddingLeft: '4px', fontSize: 7 }}>
          IRN NO : {header.irn}
        </Text>
        <Text style={{ paddingLeft: '4px', fontSize: 7, paddingRight: '4px' }}>
          {page_number}
        </Text>
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
        <Text style={{ paddingLeft: '4px', fontSize: 7, paddingRight: '4px' }}>
          PO number :{' '}
          {header.purchase_order_header_id !== null
            ? header.purchase_order_header_id
            : 'N/A'}
        </Text>
      </View>
      <View style={styles.grid4}>
        <Text style={{ paddingLeft: '4px', fontSize: 8, width: '65%' }}>
          Transport : {header.transport_name}
        </Text>
        <Text style={{ paddingLeft: '4px', fontSize: 8, width: '35%' }}>
          Cases
        </Text>
      </View>
    </View>
  )
}

export default InvoiceTitle
