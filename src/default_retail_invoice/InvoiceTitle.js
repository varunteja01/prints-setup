import React, { Fragment } from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import Moment from 'moment'

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 0,
    minHeight: '60px',
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    height: 15,
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
    height: '100%',
    paddingTop: '2px',
  },
  headerContainer: {
    marginTop: 0,
    width: '80%',
    lineHeight: 1.1,
    minHeight: '60px',
    paddingLeft: '2px',
  },
  grid2: {
    marginTop: 0,
    lineHeight: 1.1,
    borderWidth: 1,
    borderBottomWidth: 0,
    width: '65%',
    borderColor: '#dbdbdb',
    borderTopColor: '#222',
    borderRightColor: '#222',
    height: '100%',
    paddingTop: '2px',
  },
  grid3: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '50%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '5px',
    borderRightWidth: '1',
    borderRightColor: '#dbdbdb',
  },
  doctor_grid: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '50%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '5px',
  },
  imageContainer: {
    marginTop: 0,
    width: '20%',
    paddingTop: '2px',
    paddingLeft: '5px',
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 3,
    fontSize: 9,
    width: '100%',
    fontFamily: 'Helvetica',
    fontStyle: 'heavy',
  },
  logo: {
    width: 30,
    height: 30,
  },
  address: {
    fontSize: 5,
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
}) => {
  return (
    <View style={styles.titleContainer}>
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 1,
          borderBottomWidth: 0,
          borderLeftWidth: 1,
          borderRightWidth: 0,
          borderColor: '#222',
          paddingTop: '5px',
          minHeight: '60px',
          width: '35%',
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.logo} src={logo_url} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.billTo}>{invoice.firm_name}</Text>
          <Text style={styles.address}>{invoice.line_1}</Text>
          <Text style={styles.address}>{invoice.line_2}</Text>
          <Text
            style={styles.address}
          >{`${invoice.city} - ${invoice.pincode}`}</Text>
          <Text style={styles.address}>{`(L): ${invoice.landline} ${
            invoice.email == null ? '' : `- (@): ${invoice.email}`
          }`}</Text>
          <Text
            style={styles.address}
          >{`D.L.No. ${invoice.dl1}, ${invoice.dl2}`}</Text>
          <Text style={styles.address}>{`GSTIN: ${invoice.gstin}`}</Text>
        </View>
      </View>

      <View style={styles.grid2}>
        <View style={styles.rowContainer}>
          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: '#dbdbdb',
              width: '40%',
            }}
          >
            <Text style={styles.reportTitle}>{title}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '35%',
              paddingTop: '2px',
            }}
          >
            <Text
              style={{
                width: '100%',
                paddingLeft: '4px',
                fontSize: 9,
              }}
            >
              Inv. No. :&nbsp;{header.entry_number}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '35%',
            }}
          >
            <Text
              style={{
                width: '100%',
                padding: '2px 4px 0 0',
                fontSize: 9,
                textAlign: 'right',
              }}
            >
              Date :&nbsp;
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

        <View
          style={{
            flexDirection: 'row',
            flexGrow: 1,
            width: '100%',
          }}
        >
          <View style={styles.grid3}>
            <Text style={styles.billTo}>Patient : {customer.name}</Text>
            <Text style={{ fontSize: '5', marginLeft: '42px' }}>
              {customer.address_1}, {customer.mobile}
            </Text>
            <Text style={{ fontSize: '5', marginLeft: '42px' }}>
              {customer.sex} \ {customer.age}
            </Text>
          </View>

          <View style={styles.doctor_grid}>
            <Text style={styles.billTo}>Doctor : {doctor.name}</Text>
            <Text style={{ fontSize: '5', marginLeft: '42px' }}>
              {doctor.address_1}, {doctor.reg_no}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default InvoiceTitle
