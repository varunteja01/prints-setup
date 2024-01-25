import React from 'react';
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import Moment from 'moment';

const borderColor = '#100c08';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 0,
    height: '90px',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
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
    textTransform: 'uppercase',
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
    lineHeight: 1.1,
    paddingLeft: '2px 8px 0 5px',
  },
  grid2: {
    marginTop: 0,
    width: '36%',
    lineHeight: 1,
    borderWidth: 1,
    borderColor: borderColor,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    height: '69px',
    padding: '5px 0 0 5px',
  },
  grid3: {
    marginTop: 0,
    width: '100%',
    lineHeight: 1,
    paddingLeft: '2px',
    paddingTop: '2px',
    borderWidth: 1,
    borderColor: borderColor,
    borderBottomWidth: 0,
    flexDirection: 'row',
    height: '54px',
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
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    width: '100%',
  },
  logo: {
    width: 60,
    height: 60,
  },
  address: {
    fontSize: 8,
  },
  invoice: {
    textAlign: 'right',
  },
  lr: {
    fontSize: 8,
  },
});

const InvoiceTitle = ({ title, invoice, header, customer }) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: borderColor,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            width: '64%',
            height: '69px',
          }}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.billTo}>{invoice.firm_name}</Text>
            <Text style={styles.address}>{invoice.line_1}</Text>
            <Text style={styles.address}>{invoice.line_2}</Text>
            <Text
              style={styles.address}
            >{`${invoice.city} - ${invoice.pincode}`}</Text>
            <Text style={styles.address}>{`Phone: ${invoice.landline}`}</Text>
          </View>
        </View>
        <View style={styles.grid2}>
          <View style={styles.rowContainer}>
            <Text style={styles.reportTitle}>
              {title} - {header?.payment_mode == 0 ? `CASH` : `CREDIT`}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: '100%',
              }}
            >
              {invoice.fssai == null || invoice.fssai == '' ? (
                <View
                  style={{
                    flexDirection: 'row',
                    fontSize: 8,
                  }}
                >
                  <Text
                    style={{
                      width: '35%',
                      marginRight: '3px',
                    }}
                  >
                    GSTIN
                  </Text>
                  <Text style={{ width: '65%', marginLeft: '3px' }}>
                    : {invoice?.gstin}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    fontSize: 8,
                  }}
                >
                  <Text
                    style={{
                      width: '35%',
                      marginRight: '3px',
                    }}
                  >
                    {`GSTIN\nFSSAI`}
                  </Text>
                  <Text style={{ width: '65%', marginLeft: '3px' }}>
                    {`: ${invoice?.gstin}\n: ${invoice?.fssai}`}
                  </Text>
                </View>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  margin: '4px 0 0 0',
                  fontSize: 8,
                }}
              >
                <Text
                  style={{
                    width: '35%',
                    marginRight: '3px',
                  }}
                >
                  DL No20B
                </Text>
                <Text style={{ width: '65%', marginLeft: '3px' }}>
                  : {invoice?.dl1}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  margin: '4px 0 0 0',
                  fontSize: 8,
                }}
              >
                <Text
                  style={{
                    width: '35%',
                    marginRight: '3px',
                  }}
                >
                  DL No21B
                </Text>
                <Text style={{ width: '65%', marginLeft: '3px' }}>
                  : {invoice?.dl2}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.grid3}>
        <View style={{ width: '46%' }}>
          <Text style={styles.billTo}>To: {customer?.name}</Text>
          <Text style={{ fontSize: '8' }}>
            {`${customer?.address_1 ?? ''} ` + `${customer?.address_2 ?? ''}`}
          </Text>
          <Text style={{ fontSize: '8' }}>
            {`${customer?.address_3 ?? ''} ` + `${customer?.address_4 ?? ''}`}
          </Text>
          <Text style={{ fontSize: '8' }}>
            {customer?.city} (P): {customer?.phone}
          </Text>
        </View>

        <View style={{ width: '33%', paddingLeft: '8px', lineHeight: 1.5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', width: '20%', textAlign: 'left' }}>
              Code
            </Text>
            <Text style={{ fontSize: '8', width: '80%' }}>
              :&nbsp;{customer?.code}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', width: '20%', textAlign: 'left' }}>
              D.L.Nos
            </Text>
            <Text
              style={{ fontSize: '8', width: '80%' }}
            >{`: ${customer?.dl_1}\n: ${customer?.dl_2}`}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', textAlign: 'left', width: '20%' }}>
              GSTIN
            </Text>
            <Text style={{ fontSize: '8', width: '80%' }}>
              :&nbsp;{header?.gstin ?? customer?.gstin}
            </Text>
          </View>
        </View>

        <View style={{ width: '21%', lineHeight: 1.5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', width: '35%', textAlign: 'left' }}>
              Inv. No.
            </Text>
            <Text style={{ fontSize: '8', width: '65%' }}>
              :&nbsp;{header?.entry_number}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', width: '35%', textAlign: 'left' }}>
              Inv. Date
            </Text>
            <Text style={{ fontSize: '8', width: '65%' }}>
              :&nbsp;{Moment(header.entry_date).format('DD-MM-YYYY')}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: '8', width: '35%', textAlign: 'left' }}>
              Type
            </Text>
            <Text style={{ fontSize: '8', width: '65%' }}>
              :&nbsp;{header?.payment_mode == 0 ? `CASH` : `CREDIT`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvoiceTitle;
