import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Moment from 'moment';
import logo from './logo.png';
import qr from './qrcode.png';

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
    width: '120px',
    paddingTop: '2px',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  headerContainer: {
    marginTop: 0,
    width: '220px',
    height: '75px',
    lineHeight: 1.1,
    paddingLeft: '2px',
  },
  grid2: {
    marginTop: 0,
    width: '120px',
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
    lineHeight: 1.1,
    paddingLeft: '2px',
    paddingTop: '5px',
    height: '80px',
    flex: 1,
  },
  imageContainer: {
    marginTop: 0,
    width: '70px',
    paddingTop: '2px',
    paddingLeft: '5px',
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 3,
    fontFamily: 'Helvetica',
    fontStyle: 'heavy',
  },
  logo: {
    width: 60,
    height: 60,
  },
  address: {
    fontSize: 7,
  },
  invoice: {
    textAlign: 'right',
  },
  lr: {
    fontSize: 8,
  },
});

const InvoiceTitle = ({
  title,
  invoice,
  header,
  customer,
  logo_url,
  invoiceStyles,
}) => {
  const renderDate = () => {
    if (invoiceStyles?.entry_date === 'dateTime') {
      return Moment(header.entry_date)
        .format('DD-MM-YYYY')
        .concat(` ${Moment().utc().local().format('HH:mm')}`);
    }
    return Moment(header.entry_date).format('DD-MM-YYYY');
  };

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
          <Text style={styles.billTo}>{invoice.firm_name}</Text>
          <Text style={styles.address}>{invoice.line_1}</Text>
          <Text style={styles.address}>{invoice.line_2}</Text>
          <Text
            style={styles.address}
          >{`${invoice.city} - ${invoice.pincode}`}</Text>
          <Text style={styles.address}>{`(L): ${invoice.landline}`}</Text>
          <Text style={styles.address}>{`${
            invoice.email == null ? '' : `(@): ${invoice.email}`
          }`}</Text>
          <Text
            style={styles.address}
          >{`D.L.No. ${invoice.dl1}, ${invoice.dl2}`}</Text>
          <Text style={styles.address}>
            {invoice.fssai == null || invoice.fssai == ''
              ? `GSTIN: ${invoice.gstin}`
              : `FSSAI: ${invoice.fssai}, GSTIN: ${invoice.gstin}`}
          </Text>
        </View>
      </View>

      <View style={styles.grid2}>
        <View style={styles.rowContainer}>
          <Text style={styles.reportTitle}>{title}</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            height: '60px',
            fontSize: 9,
            paddingTop: '5px',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ width: '30%', textAlign: 'left', marginLeft: '3px' }}
            >
              Inv. No.
            </Text>
            <Text style={{ width: '70%', marginLeft: '3px' }}>
              : {header.entry_number}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', margin: '5px 0 0 0' }}>
            <Text
              style={{ width: '30%', textAlign: 'left', marginLeft: '3px' }}
            >
              Date
            </Text>
            <Text style={{ width: '70%', marginLeft: '3px' }}>
              : {header.entry_date === '' ? '' : renderDate()}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', margin: '5px 0 0 0' }}>
            <Text
              style={{ width: '30%', textAlign: 'left', marginLeft: '3px' }}
            >
              PO #{' '}
            </Text>
            <Text style={{ width: '70%', marginLeft: '3px' }}>
              :{' '}
              {header.invoice_number == 'undefined'
                ? ''
                : header.invoice_number}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.grid3}>
        <Text style={{ ...styles.billTo, width: '100%', fontSize: 10 }}>
          To: {customer?.name}
          <Text>&nbsp;({customer?.code})</Text>
        </Text>
        <Text style={{ fontSize: '7' }}>{customer?.address_1}</Text>
        <Text style={{ fontSize: '7' }}>{customer?.address_2}</Text>
        <Text
          style={{
            fontSize: '7',
          }}
        >
          {customer?.address_3}
        </Text>
        <Text style={{ fontSize: '8', fontFamily: 'Helvetica-Bold' }}>
          {customer?.city}
          {/* (P): {customer?.phone} */}
        </Text>
        <Text style={{ fontSize: '7' }}>
          D.L.Nos: {customer?.dl_1}, {customer?.dl_2}
        </Text>
        <Text style={{ fontSize: '7' }}>
          GSTIN: {header?.gstin ?? customer?.gstin}
        </Text>
      </View>
    </View>
  );
};

export default InvoiceTitle;
