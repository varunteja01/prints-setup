import React, { Fragment } from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import Moment from 'moment'

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 0,
    height: '108px',
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  columnContainer: {
    flexDirection: 'column',
  },
  reportTitle: {
    color: '#000',
    fontSize: 9,
    fontStyle: 'black',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    textTransform: 'uppercase',
    height: '15px',
    width: '30%',
    marginLeft: '3px',
    paddingTop: '2px',
    borderRightWidth: '1',
    borderRightColor: '#000000',
  },
  headerContainer: {
    marginTop: 0,
    width: '60%',
    lineHeight: 1.1,
    minHeight: '30px',
    paddingLeft: '2px',
  },
  grid2: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '100%',
    height: '50px',
    // borderRightWidth: '1',
    // borderRightColor: '#000000',
    // borderLeftWidth: '1',
    // borderLeftColor: '#000000',
    paddingTop: '7px',
  },
  grid3: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '45%',
    height: '100%',
    paddingLeft: '10px',
    paddingTop: '1px',
    // border: 1,
  },
  doctor_grid: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '35%',
    height: '100%',
    paddingLeft: '10px',
    paddingTop: '1px',
  },
  imageContainer: {
    marginTop: 0,
    width: '20%',
    paddingTop: '2px',
    paddingLeft: '5px',
    alignContent: 'center',
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 3,
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontStyle: 'heavy',
  },

  leftDetails: {
    marginTop: 0,
    paddingBottom: 3,
    fontSize: 8,
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Helvetica',
    fontStyle: 'heavy',
  },
  logo: {
    width: 30,
    height: 30,
  },
  address: {
    fontSize: 6,
    textAlign: 'center',
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
  doctor,
  logo_url,
  inventoryType,
  customerAddress,
}) => (
  <View style={styles.titleContainer}>
    <View
      style={{
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: '#000000',
        paddingTop: '5px',
        height: '58px',
        width: '100%',
      }}
    >
      <View style={styles.imageContainer}>
        {/* <Image style={styles.logo} src={logo_url} /> */}
      </View>
      <View style={styles.headerContainer}>
        {/* <Text style={styles.billTo}>{invoice.firm_name}</Text>
        <Text
          style={styles.address}
        >{`${invoice.line_1},${invoice.line_2},${invoice.pincode}`}</Text>
        <Text
          style={styles.address}
        >{`DL No: ${invoice?.dl1},${invoice?.dl2}  GSTIN No: ${invoice?.gstin}`}</Text>
        <Text style={styles.address}>{`(Phone): ${invoice?.landline}`}</Text> */}
      </View>
      <View style={styles.imageContainer}>
        {/* <Text
          style={{
            width: '100%',
            textAlign: 'right',
            paddingRight: '4px',
            fontSize: 9,
          }}
        >
          {title}
        </Text> */}
      </View>
    </View>

    <View style={styles.grid2}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <View style={styles.grid3}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                // height: 14,
                margin: '6px 0 0 0',
              }}
            >
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '20%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {/* Cust. Name */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {/* : */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '78%',
                  paddingLeft: '20px',
                  // paddingTop: '2px',
                  // marginTop: '2px',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                  // paddingTop: '7px',
                }}
              >
                {customer?.name}
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '20%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {/* Mobile */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {/* : */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '78%',
                  paddingLeft: '20px',
                  // paddingTop: '3px',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {customer?.phone}
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  // paddingBottom: 3,
                  fontSize: 8,
                  width: '20%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {/* Doctor Name */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  // paddingBottom: 3,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {/* : */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  // paddingBottom: 3,
                  fontSize: 8,
                  paddingLeft: '20px',
                  width: '78%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {doctor?.doctor_name}
              </Text>
            </View>
          </View>
          <View style={{ width: '20%' }}>
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: 9,
                marginTop: '10px',
              }}
            >
              {/* {`${customer?.payment_mode ?? ''} BILL`} */}
            </Text>
          </View>
          {/* <View style={{ width: '15%' }}></View> */}
          <View style={styles.doctor_grid}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                // height: 14,
                margin: '6px 0 0 0',
              }}
            >
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '20%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                &nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                &nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '78%',
                  paddingLeft: '10px',
                  // paddingTop: '2px',
                  // marginTop: '2px',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                  // paddingTop: '7px',
                }}
              >
                &nbsp;
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '25%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {/* Invoice No */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {/* : */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  paddingBottom: 0,
                  fontSize: 8,
                  width: '73%',
                  paddingLeft: '50px',
                  // paddingTop: '3px',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {header?.entry_number}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  // paddingBottom: 3,
                  fontSize: 8,
                  width: '25%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {/* Invoice Date */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  // paddingBottom: 3,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {/* : */}&nbsp;
              </Text>
              <Text
                style={{
                  margin: '1px 0 1px 0',
                  // paddingBottom: 3,
                  fontSize: 8,
                  paddingLeft: '50px',
                  width: '73%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                  // border: 1,
                }}
              >
                {header.entry_date === ''
                  ? ''
                  : inventoryType == 'proforma' && header.entry_date !== ''
                  ? Moment(header?.entry_date)?.format('DD-MM-YYYY')
                  : Moment(header?.created_at)
                      .utc()
                      .local()
                      .format('DD-MM-YYYY HH:mm:ss')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
)

export default InvoiceTitle
