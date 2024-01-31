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
    width: '300px',
    height: '50px',
    lineHeight: 1.1,
    paddingLeft: '2px',
  },
  dcConverted: {
    width: '50px',
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
    paddingBottom: 1,
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
  },
  logo: {
    width: 35,
    height: 35,
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
  bankDetails: {
    margin: 0,
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
  },
});

const InvoiceTitle = ({
  title,
  invoice,
  header,
  customer,
  logo_url,
  showCompany = true,
  showCustomer = true,
  page_number,
}) => {
  return (
    <View>
      {showCompany ? (
        <View style={styles.rowContainer}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: borderColor,
              borderRightWidth: 0,
              borderBottomWidth: 0,
              paddingTop: '5px',
              width: '65%',
              height: '50px',
            }}
          >
            <View style={styles.imageContainer}>
              <Image style={styles.logo} src={logo_url} />
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.billTo}>{invoice.firm_name}</Text>
              <Text
                style={{
                  ...styles.address,
                  fontSize: 8,
                  fontStyle: 'bold',
                  fontFamily: 'Helvetica-Bold',
                }}
              >
                PHARMACEUTICAL DISTRIBUTORS
              </Text>
              <Text style={styles.address}>
                {invoice.line_1},{invoice.line_2}
              </Text>
              {/* <Text style={styles.address}>{invoice.line_2}</Text> */}
              <Text style={styles.address}>
                {`${invoice.city} - ${invoice.pincode}.`}
                <Text
                  style={styles.address}
                >{` Phone: ${invoice.landline}`}</Text>
              </Text>
            </View>
            <View style={styles.dcConverted}>
              <Text style={{ ...styles.bankDetails }}>
                {(header?.dc_converted ?? '') == '' ? `` : 'DC Converted'}
              </Text>
            </View>
          </View>
          <View style={styles.grid2}>
            <View style={{ flexDirection: 'row', paddingTop: '2px' }}>
              <View
                style={{
                  width: '100%',
                  height: '70px',
                  fontSize: '8',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    fontSize: 8,
                  }}
                >
                  <Text
                    style={{
                      width: '35%',
                      textAlign: 'left',
                    }}
                  >
                    D.L.NO.
                  </Text>
                  <Text style={{ width: '65%', marginLeft: '3px' }}>
                    : {invoice?.dl1}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    margin: '2px 0 0 0',
                    fontSize: 8,
                  }}
                >
                  <>
                    <Text
                      style={{
                        width: '35%',
                        textAlign: 'left',
                      }}
                    >
                      GSTIN
                    </Text>
                    <Text style={{ width: '65%', marginLeft: '3px' }}>
                      : {invoice?.gstin}
                    </Text>
                  </>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    margin: '2px 0 0 0',
                    fontSize: 8,
                  }}
                >
                  <Text
                    style={{
                      width: '35%',
                      textAlign: 'left',
                      fontSize: 7,
                    }}
                  >
                    FOOD LICENSE No.
                  </Text>
                  <Text style={{ width: '65%', marginLeft: '3px' }}>
                    : {invoice?.fssai}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      {showCustomer ? (
        <View style={styles.grid3}>
          <View
            style={{
              width: '33%',
              borderLeftColor: borderColor,
              padding: '4px 0 0 4px ',
            }}
          >
            <Text style={{ ...styles.billTo, fontSize: 8 }}>
              To: {customer?.name}
            </Text>
            <Text style={{ fontSize: '8' }}>
              {`${customer?.address_1 ?? ''} , ${customer?.address_2 ?? ''}`}
            </Text>
            <Text style={{ fontSize: '8' }}>
              {`${customer?.address_3 ?? ''} ` + `${customer?.city ?? ''}`}
            </Text>
            {/* <Text style={{ fontSize: '8' }}>
              {customer?.city} (P): {customer?.phone}
            </Text> */}
          </View>

          <View
            style={{
              width: '23%',
              borderLeftColor: borderColor,
              borderLeftWidth: 1,
              padding: '4px 0 0 4px ',
            }}
          >
            <View
              style={{ flexDirection: 'row', fontFamily: 'Helvetica-Bold' }}
            >
              <Text style={{ fontSize: '8', width: '50%', textAlign: 'left' }}>
                GST Invoice No.
              </Text>
              <Text style={{ fontSize: '9', width: '50%' }}>
                : {header?.entry_number}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: '8', width: '50%', textAlign: 'left' }}>
                Date
              </Text>
              <Text style={{ fontSize: '8', width: '50%' }}>
                : {Moment(header.entry_date).format('DD-MM-YYYY')}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: '8', width: '50%', textAlign: 'left' }}>
                Code
              </Text>
              <Text style={{ fontSize: '8', width: '50%' }}>
                : {customer?.code}
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: '8', textAlign: 'left', width: '50%' }}>
                Phone
              </Text>
              <Text style={{ fontSize: '8', width: '50%' }}>
                : {customer?.phone || ''}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '43%',
              borderLeftColor: borderColor,
              borderLeftWidth: 1,
              padding: '4px 0 0 4px ',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: '8', width: '25%', textAlign: 'left' }}>
                D.L.NOs
              </Text>
              <Text
                style={{ fontSize: '7', width: '75%' }}
              >{`: ${customer?.dl_1}\n: ${customer?.dl_2}`}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', width: '70%' }}>
                <Text
                  style={{ fontSize: '8', textAlign: 'left', width: '36%' }}
                >
                  GSTIN
                </Text>
                <Text style={{ fontSize: '8', width: '64%' }}>
                  : {header?.gstin ?? customer?.gstin}
                </Text>
              </View>
              <View style={{ width: '30%', textAlign: 'right' }}>
                <Text style={{ fontSize: 9 }}>
                  {showCompany ? 'Customer Copy' : 'Office Copy'}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: '8', textAlign: 'left', width: '25%' }}>
                PAN No.
              </Text>
              <Text style={{ fontSize: '8', width: '75%' }}>
                : {customer?.pan}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', width: '70%' }}>
                <Text
                  style={{ fontSize: '8', width: '36%', textAlign: 'left' }}
                >
                  FOOD LICENSE
                </Text>
                <Text
                  style={{ fontSize: '8', width: '64%' }}
                >{`: ${customer?.food_license}`}</Text>
              </View>
              <View style={{ width: '30%', textAlign: 'right' }}>
                <Text style={{ fontSize: 8 }}>
                  {showCustomer && page_number}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default InvoiceTitle;
