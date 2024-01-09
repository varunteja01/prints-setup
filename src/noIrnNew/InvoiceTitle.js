import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Moment from 'moment';

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
    width: '200px',
    paddingTop: '2px',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  headerContainer: {
    marginTop: 0,
    width: '250px',
    height: '75px',
    lineHeight: 1.1,
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
    lineHeight: 1.1,
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
                style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}
              >
                Inv. No.
              </Text>
              <Text style={{ width: '82%', marginLeft: '3px' }}>
                : {header.entry_number}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', margin: '5px 0 0 0' }}>
              <Text
                style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}
              >
                Date
              </Text>
              <Text style={{ width: '52%', marginLeft: '3px' }}>
                :{' '}
                {header.entry_date === ''
                  ? ''
                  : Moment(header.entry_date).format('DD-MM-YYYY')}
              </Text>
              <Text
                style={{
                  width: '30%',
                  textAlign: 'right',
                  padding: '2px 12px 0 0',
                  fontSize: '10',
                }}
              >
                {header.payment_mode == 0
                  ? 'CASH'
                  : header.payment_mode == 1
                  ? 'CREDIT'
                  : ''}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', margin: '5px 0 0 0' }}>
              <Text
                style={{ width: '18%', textAlign: 'left', marginLeft: '3px' }}
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
        <Text style={styles.billTo}>
          To: {customer?.name}
          <Text>&nbsp;({customer?.code})</Text>
        </Text>
        <Text style={{ fontSize: '7' }}>{customer?.address_1}</Text>
        <Text style={{ fontSize: '7' }}>{customer?.address_2}</Text>
        <Text style={{ fontSize: '7' }}>{customer?.address_4}</Text>
        <Text style={{ fontSize: '7' }}>
          {customer?.city} - {customer?.pincode}
        </Text>
        <Text style={{ fontSize: '7' }}>(P): {customer?.phone}</Text>

        <Text style={{ fontSize: '7' }}>
          D.L.Nos: {customer?.dl_1}, {customer?.dl_2}
        </Text>
        <Text style={{ fontSize: '7' }}>GSTIN: {customer?.gstin}</Text>
      </View>
    </View>
  );
};

export default InvoiceTitle;
