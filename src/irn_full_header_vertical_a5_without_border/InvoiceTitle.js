import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import Moment from 'moment'

const borderColor = '#100c08'

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 0,
    height: '70px',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
    marginTop: 0,
    height: '70px',
  },
  reportTitle: {
    height: '16px',
    width: '100%',
    color: '#000',
    fontSize: 12,
    fontStyle: 'black',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingTop: '1px',
    marginBottom: '2px',
    marginLeft: '4px',
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
    width: '100%',
    height: '80px',
    lineHeight: 1.1,
    paddingLeft: '2px',
  },
  grid2: {
    marginTop: 0,
    width: '36%',
    lineHeight: 1.1,
    borderWidth: 0.5,
    borderColor: borderColor,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    height: '80px',
    paddingTop: '5px',
    paddingLeft: '2px',
  },
  grid2Wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  grid2WrapperObject1: { flex: 1, fontSize: '8' },
  grid2WrapperObject2: { flex: 1, fontSize: '8' },

  grid3: {
    marginTop: 0,
    width: '100%',
    lineHeight: 1.1,
    paddingLeft: '2px',
    paddingTop: '5px',
    borderWidth: 0.5,
    borderColor: borderColor,
    borderBottomWidth: 0,
    flexDirection: 'row',
    height: '50px',
  },
  grid4: {
    marginTop: 0,
    width: '24%',
    lineHeight: 1.1,
    borderWidth: 0.5,
    borderColor: borderColor,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    height: '80px',
    paddingTop: '5px',
  },
  imageContainer: {
    marginTop: 0,
    width: '70px',
    paddingTop: '2px',
    paddingLeft: '5px',
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 1,
    fontFamily: 'Helvetica-Bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  address: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
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
  customer,
  logo_url,
  fetchQRUrl = () => {},
}) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        {/* Header left */}
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: borderColor,
            borderRightWidth: 0.5,
            borderBottomWidth: 0,
            paddingTop: '5px',
            width: '40%',
            height: '80px',
          }}
        >
          {/* <View style={styles.imageContainer}>
            <Image style={styles.logo} src={logo_url} />
          </View> */}
          <View style={styles.headerContainer}>
            <Text
              style={{
                ...styles.billTo,
                // maxWidth: '65%',
                fontFamily: 'Helvetica',
              }}
            >
              {invoice.firm_name}
            </Text>
            <Text style={{ ...styles.address, maxWidth: '100%' }}>
              {(
                invoice.line_1 +
                ', ' +
                invoice.line_2 +
                invoice.city +
                ', ' +
                invoice.pincode
              ).toString()}
            </Text>

            <Text style={styles.address}>{`Cell: ${invoice.landline}`}</Text>
            <Text style={styles.address}>
              {invoice?.dl1.trim() == '' ? '' : `D.L. No.: ${invoice.dl1}`}
            </Text>
            <Text style={styles.address}>{`GSTIN: ${invoice.gstin}`}</Text>
            <Text style={styles.address}>{`${invoice.email}`}</Text>
          </View>
          {/* Header middle */}
        </View>

        <View style={styles.grid4}>
          <View style={styles.rowContainer}>
            <Text style={styles.reportTitle}>{title}</Text>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              height: 20,
              fontSize: 9,
              borderBottomWidth: .5,
              color: '',
            }}
          >
            <Text
              style={{
                width: '40%',
                textAlign: 'right',
                marginRight: '3px',
              }}
            >
              Sale Type
            </Text>
            <Text style={{ width: '60%', marginLeft: '3px' }}>
              : {header?.payment_mode == 0 ? `CASH` : `CREDIT`}
            </Text>
          </View> */}

          <View style={{ flexDirection: 'row', paddingTop: '2px' }}>
            <View
              style={{
                width: '100%',
                height: '70px',
                fontSize: '9',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  margin: '2px 0 0 0',
                  fontSize: 9,
                }}
              >
                <Text
                  style={{
                    width: '30%',
                    textAlign: 'left',
                    marginLeft: '3px',
                  }}
                >
                  Bill No.
                </Text>
                <Text
                  style={{
                    width: '70%',
                    marginRight: '3px',
                    fontFamily: 'Helvetica-Bold',
                    fontSize: 9,
                  }}
                >
                  : {header?.entry_number}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  margin: '2px 0 0 0',
                  fontSize: 9,
                }}
              >
                <Text
                  style={{
                    width: '30%',
                    textAlign: 'left',
                    marginLeft: '3px',
                  }}
                >
                  Date
                </Text>
                <Text
                  style={{
                    width: '70%',
                    marginRight: '3px',
                    fontFamily: 'Helvetica-Bold',
                  }}
                >
                  : {Moment(header.entry_date).format('DD-MM-YYYY')}
                </Text>
              </View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  margin: '2px 0 0 0',
                  fontSize: 9,
                }}
              >
                <Text
                  style={{
                    width: '40%',
                    textAlign: 'left',
                    marginLeft: '3px',
                  }}
                >
                  Due Date
                </Text>
                <Text
                  style={{
                    width: '60%',
                    marginRight: '3px',
                    fontFamily: 'Helvetica-Bold',
                  }}
                >
                  :
                  {header?.due_date
                    ? Moment(header.due_date).format('DD-MM-YYYY')
                    : ''}
                </Text>
              </View> */}
              <View
                style={{
                  flexDirection: 'row',
                  margin: '2px 0 0 0',
                  fontSize: 9,
                }}
              >
                <Text
                  style={{
                    width: '30%',
                    textAlign: 'left',
                    marginLeft: '3px',
                  }}
                >
                  Type
                </Text>
                <Text style={{ width: '70%', marginLeft: '3px' }}>
                  : {header?.payment_mode == 0 ? `CASH` : `CREDIT`}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Header right */}

        <View style={styles.grid2}>
          <Text
            style={{
              fontSize: '8',
              // fontFamily: 'Helvetica-Italic',
            }}
          >
            Party : {customer?.code}
          </Text>
          <Text style={{ ...styles.billTo, fontSize: '8' }}>
            {customer?.name}
          </Text>
          <Text style={{ fontSize: '8' }}>
            {`${customer?.address_1 ?? ''} ` +
              `${customer?.address_2 ?? ''}` +
              `${customer?.address_3 ?? ''} ` +
              `${customer?.city ?? ''}`}
          </Text>
          <Text style={{ fontSize: '8' }}>Phone : {customer?.phone}</Text>
          <Text style={{ fontSize: '8' }}>
            D.L.Nos: {customer?.dl_1}, {customer?.dl_2}
          </Text>
          <Text style={{ fontSize: '8' }}>
            D.L.Validity:&nbsp;
            {Moment(invoice?.dl_1_validity).format('DD-MM-YYYY') ==
            'Invalid date'
              ? ''
              : Moment(invoice?.dl_1_validity).format('DD-MM-YYYY')}
          </Text>
          <Text style={{ fontSize: '8' }}>
            GSTIN: {header?.gstin ?? customer?.gstin}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default InvoiceTitle
