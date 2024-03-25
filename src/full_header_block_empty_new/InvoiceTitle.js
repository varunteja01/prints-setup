import React, { Fragment } from 'react'
import { Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'
import Moment from 'moment'

//https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 0,
    minHeight: '90px',
    width: '100%',
    borderRightWidth: '1',
    borderRightColor: '#000000',
    borderLeftWidth: '1',
    borderLeftColor: '#000000',
    borderTopWidth: '1',
    borderTopColor: '#000000',
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
    minHeight: '20px',
    paddingTop: '2px',
  },
  grid3: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '40%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '5px',
  },
  doctor_grid: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '25%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '5px',
  },
  imageContainer: {
    marginTop: 0,
    width: '20%',
    paddingLeft: '5px',
    alignContent: 'center',
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 3,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    // display: 'flex',
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
    width: 45,
    height: 45,
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
        paddingTop: '5px',
        minHeight: '40px',
        width: '100%',
        borderBottomWidth: '1',
        borderBottomColor: '#000000',
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
        <Text style={styles.address}>{`(M): ${invoice?.landline}`}</Text>
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
                  width: '26%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Cust. Name
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
                height: 12,
              }}
            >
              <Text
                style={{
                  marginTop: 0,
                  paddingBottom: 3,
                  fontSize: 8,
                  width: '26%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Mobile
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
                  width: '26%',
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
          <View style={{ width: '20%' }}>
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: 9,
                marginTop: '10px',
              }}
            >
              {`${customer?.payment_mode ?? 'CASH'} BILL`}
            </Text>
          </View>
          <View style={{ width: '15%' }}></View>
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
