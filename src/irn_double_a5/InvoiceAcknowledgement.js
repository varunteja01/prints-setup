import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
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
    height: '15px',
    width: '100%',
    color: '#000',
    fontSize: 12,
    fontStyle: 'black',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingTop: '1px',
    marginBottom: '2px',
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
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },

  headerContainer: {
    marginTop: 0,
    width: '100%',
    textAlign: 'center',
    height: '70px',
    lineHeight: 1.1,
    paddingLeft: '2px',
    paddingRight: '50px',
  },
  grid2: {
    marginTop: 0,
    width: '35%',
    lineHeight: 1.1,
    borderWidth: 1,
    borderColor: borderColor,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    height: '50px',
    paddingTop: '5px',
  },
  grid3: {
    marginTop: 0,
    width: '100%',
    lineHeight: 1.1,
    paddingLeft: '2px',
    borderWidth: 1,
    borderColor: borderColor,
    borderBottomWidth: 0,
    flexDirection: 'row',
    height: '50px',
  },
  imageContainer: {
    marginTop: 0,
    width: '50px',
    paddingTop: '2px',
    paddingLeft: '5px',
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    fontSize: 12,
  },
  logo: {
    width: 35,
    height: 35,
  },
  address: {
    fontFamily: 'Helvetica-Bold',
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
  customer,
  logo_url,
  show_total,
}) => {
  return (
    <View style={{ borderWidth: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: '5px',
          width: '100%%',
          height: '60px',
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.logo} src={logo_url} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.address}>ACKNOWLEDGEMENT CUM MEMO</Text>
          <Text style={styles.billTo}>{invoice.firm_name}</Text>
          <Text style={styles.address}>
            {invoice.line_1},{invoice.line_2}
            {` ${invoice.city} - ${invoice.pincode}.`}
            {` Phone: ${invoice.landline}`}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          borderRightWidth: 0,
          borderBottomWidth: 0,
          width: '100%',
          height: '30px',
        }}
      >
        <View
          style={{
            width: '33%',
            fontSize: 8,
            textAlign: 'left',
            paddingLeft: '16px',
          }}
        >
          <Text>
            GST INVOICE NO. :
            <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
              {show_total ? ` ${header?.entry_number}` : ''}
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: '33%',
            fontSize: 8,
            textAlign: 'left',
            padding: '0 8px',
          }}
        >
          <Text>
            DATE :
            {show_total ? Moment(header.entry_date).format('DD-MM-YYYY') : ''}
          </Text>
        </View>
        <View style={{ width: '33%', fontSize: 8, textAlign: 'left' }}>
          <Text> CODE : {show_total ? customer?.code : ''}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '30px',
        }}
      >
        <View
          style={{
            width: '33%',
            fontSize: 8,
            textAlign: 'left',
            paddingLeft: '16px',
          }}
        >
          <Text style={{ backgroundColor: '#dbdbdb' }}>
            AMOUNT. :
            <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
              {show_total
                ? ` RS. ${parseFloat(header?.net_amount)?.toFixed(2)}`
                : ''}
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: '45%',
            fontSize: 8,
            textAlign: 'left',
            padding: '0 8px',
          }}
        >
          <Text>Cust. Name: {show_total ? customer?.name : ''}</Text>
          {/* <Text>Cust. City: {show_total ? customer?.city : ''}</Text> */}
          <Text>
            cust. city:{' '}
            {show_total ? `${customer?.address_3}, ${customer?.city}` : ''}
          </Text>
        </View>
        <View
          style={{
            width: '22%',
            fontSize: 8,
            textAlign: 'right',
            padding: '0 8px',
          }}
        >
          <Text>
            {show_total ? `ABOVE STOCKS RECEIVED\nSIGNATURE WITH STAMP` : ''}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default InvoiceTitle
