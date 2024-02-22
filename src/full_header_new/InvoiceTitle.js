import React, { Fragment } from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import Moment from 'moment'

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 0,
    minHeight: '60px',
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
    minHeight: '30px',
    borderRightWidth: '1',
    borderRightColor: '#000000',
    borderLeftWidth: '1',
    borderLeftColor: '#000000',
    paddingTop: '2px',
  },
  grid3: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '38%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '5px',
  },
  grid4: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '35%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '5px',
  },
  doctor_grid: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '27%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '5px',
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
}) => (
  <View style={styles.titleContainer}>
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000000',
        paddingTop: '5px',
        minHeight: '30px',
        width: '100%',
      }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.logo} src={logo_url} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.billTo}>{invoice.firm_name}</Text>
        <Text
          style={styles.address}
        >{`${invoice.line_1},${invoice.line_2},${invoice.pincode}`}</Text>
        <Text
          style={styles.address}
        >{`DL No: ${invoice?.dl1},${invoice?.dl2}  GSTIN No: ${invoice?.gstin}`}</Text>
        <Text style={styles.address}>{`(Phone): ${invoice?.landline}`}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Text
          style={{
            width: '100%',
            textAlign: 'right',
            paddingRight: '4px',
            fontSize: 9,
          }}
        >
          {title}
        </Text>
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
                height: 12,
              }}
            >
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '27%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Customer Name
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                :
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '71%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
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
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '27%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Customer No.
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                :
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '71%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {customer?.mobile}
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
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '27%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Doctor Name
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                :
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '71%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {doctor?.name}
              </Text>
            </View>
          </View>
          <View style={styles.grid4}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                height: 12,
              }}
            >
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '27%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                IP Number
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                :
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '71%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {customer?.ip_number}
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
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '27%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Insurance
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '2%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                :
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '71%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {customer?.insurance_name}
              </Text>
            </View>
          </View>

          {/* <View style={{ width: '15%' }}></View> */}
          <View style={styles.doctor_grid}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                height: 12,
              }}
            >
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  // width: '32%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {header?.payment_mode == 0
                  ? 'CASH BILL'
                  : header?.payment_mode == 1
                  ? 'CREDIT BILL'
                  : 'BILL'}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                height: 12,
              }}
            >
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '32%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Invoice No
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '3%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                :
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '65%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
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
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '32%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Invoice Date
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '3%',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                :
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '65%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
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
