import React, { Fragment } from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import Moment from 'moment'

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 0,
    height: '80px',
    borderWidth: 1,
    borderColor: '#000',
  },
  rowContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  columnContainer: {
    flexDirection: 'column',
  },
  reportTitle: {
    color: '#000',
    fontSize: 12,
    fontStyle: 'black',
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    height: '20px',
    width: '100%',
    textAlign: 'center',
    paddingTop: '2px',
    borderBottomColor: '#000',
  },
  headerContainer: {
    marginTop: 0,
    width: '250px',
    height: '75px',
    lineHeight: 1.2,
    paddingLeft: '2px',
  },
  grid2: {
    marginTop: 0,
    width: '200px',
    lineHeight: 1.1,
    borderLeftWidth: 1,
    borderLeftColor: '#000',
    borderRightWidth: 1,
    borderRightColor: '#000',
    height: '80px',
    paddingTop: '5px',
  },
  grid3: {
    marginTop: 0,
    width: '300px',
    lineHeight: 1.2,
    paddingLeft: '2px',
    paddingTop: '5px',
    height: '80px',
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
    fontStyle: 'heavy',
  },
  logo: {
    width: 60,
    height: 60,
  },
  address: {
    fontSize: 8.5,
  },
  address2: {
    fontSize: 9,
  },
  address3: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
  },
  invoice: {
    textAlign: 'right',
  },
  lr: {
    fontSize: 8,
  },
  heading: {
    fontFamily: 'Helvetica-Bold',
  },
})

const InvoiceTitle = ({ title, invoice, header, customer, logo_url }) => {
  return (
    <View style={styles.titleContainer}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: '5px',
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.logo} src={logo_url} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={{ ...styles.billTo, fontSize: 12 }}>
            {invoice.firm_name}
          </Text>
          <Text style={styles.address}>{invoice.line_1},</Text>
          <Text style={styles.address}>
            {invoice.line_2}, {`${invoice.city} - ${invoice.pincode}`}
          </Text>

          <Text style={styles.address2}>{`(P): ${invoice.landline} ${
            invoice.email == null ? '' : `- (@): ${invoice.email}`
          }`}</Text>

          <Text style={styles.address}>
            <Text>
              <Text style={styles.address3}>D.L.No. </Text>
              {`${invoice.dl1}, ${invoice.dl2}`}
            </Text>
          </Text>

          <Text style={styles.address}>
            {invoice.fssai == null || invoice.fssai == '' ? (
              <>
                <Text style={styles.address3}>GSTIN: </Text>
                <Text>{invoice.gstin}</Text>
              </>
            ) : (
              <>
                <Text style={styles.address3}>GSTIN: </Text>
                <Text>{invoice.gstin}</Text>&nbsp;&nbsp;&nbsp;
                <Text style={styles.address3}>FSSAI: </Text>
                <Text>{invoice.fssai}</Text>
              </>
            )}
          </Text>
        </View>
      </View>

      <View style={styles.grid2}>
        <View style={styles.rowContainer}>
          <Text style={styles.reportTitle}>
            {title} -{' '}
            {header.payment_mode == 0
              ? 'CASH'
              : header.payment_mode == 1
              ? 'CREDIT'
              : ''}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: '100%',
              height: '60px',
              fontSize: 10,
            }}
          >
            <View style={{ flexDirection: 'row', paddingTop: '2px' }}>
              <Text
                style={{
                  width: '18%',
                  textAlign: 'left',
                  marginLeft: '3px',
                  fontFamily: 'Helvetica-Bold',
                }}
              >
                Inv. No.
              </Text>
              <Text style={{ width: '82%', marginLeft: '3px' }}>
                : {header.entry_number}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', margin: '5px 0 0 0' }}>
              <Text
                style={{
                  width: '18%',
                  textAlign: 'left',
                  marginLeft: '3px',
                  fontFamily: 'Helvetica-Bold',
                }}
              >
                Date
              </Text>
              <Text style={{ width: '52%', marginLeft: '3px' }}>
                :
                {header.entry_date === ''
                  ? ''
                  : Moment(header.entry_date).format('DD-MM-YYYY')}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', margin: '5px 0 0 0' }}>
              <Text
                style={{
                  width: '18%',
                  textAlign: 'left',
                  marginLeft: '3px',
                  fontFamily: 'Helvetica-Bold',
                }}
              >
                PO #{' '}
              </Text>
              <Text style={{ width: '82%', marginLeft: '3px' }}>
                :{' '}
                {header.invoice_number === 'undefined'
                  ? ''
                  : header.invoice_number}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.grid3}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.billTo}>To: {customer?.name}</Text>
          <Text style={{ paddingRight: 5 }}>&nbsp;({customer?.code})</Text>
        </View>

        <Text style={{ fontSize: '8.5' }}>
          {customer?.address_1},{customer?.address_2}
        </Text>
        <Text style={{ fontSize: '8.5' }}>
          {customer?.address_3}, {customer?.city} - {customer?.pincode}{' '}
        </Text>
        {/* <Text style={{ fontSize: '8.5' }}>{customer?.address_4}</Text> */}

        <Text style={{ fontSize: '9.5' }}>(P): {customer?.phone}</Text>

        <Text style={{ fontSize: '8.5' }}>
          <Text style={styles.heading}>D.L.Nos:</Text> {customer?.dl_1},{' '}
          {customer?.dl_2}
        </Text>
        <Text style={{ fontSize: '8.5' }}>
          <Text style={styles.heading}>GSTIN:</Text> {customer?.gstin}
        </Text>
      </View>
    </View>
  )
}

export default InvoiceTitle
