import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Moment from 'moment';

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
    width: '100%',
    lineHeight: 1.1,
    minHeight: '30px',
    paddingLeft: '6px',
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
    // paddingTop: '2px',
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
    width: '40%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '2px',
  },
  imageContainer: {
    marginTop: 0,
    paddingTop: '2px',
    paddingLeft: '5px',
    alignContent: 'center',
  },
  imageContainer2: {
    marginTop: 0,
    paddingTop: '2px',
    paddingRight: '5px',
    alignContent: 'center',
  },
  billTo: {
    marginTop: 0,
    paddingBottom: 3,
    paddingLeft: 2,
    fontSize: 12,
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Helvetica-Bold',
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
    width: 40,
    height: 40,
  },
  address: {
    fontSize: 7,
    textAlign: 'left',
    lineHeight: 1.5,
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
  doctor,
  logo_url,
  inventoryType,
  qr_code,
  user,
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
        border: 1,
      }}
    >
      <View style={{ flexDirection: 'row', width: '50%' }}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} src={logo_url} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.billTo}>{invoice.firm_name}</Text>
          <Text style={styles.address}>{`${invoice.line_1}`}</Text>
          <Text
            style={styles.address}
          >{`${invoice.line_2} , ${invoice?.city} - ${invoice.pincode}`}</Text>
          <Text style={styles.address}>{`Email : ${invoice?.email}`}</Text>
          <Text
            style={{
              ...styles.address,
              fontSize: 8,
              fontFamily: 'Helvetica-Bold',
            }}
          >{`(Phone): ${invoice?.landline}`}</Text>
        </View>
        {/* <View style={styles.imageContainer}>
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
        </View> */}
      </View>
      <View
        style={{
          flexDirection: 'column',
          // minHeight: '30px',
          width: '50%',
        }}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              marginTop: 0,
              paddingBottom: 0,
              fontSize: 8,
              width: '27%',
              textAlign: 'left',
              fontFamily: 'Helvetica-Bold',
              fontStyle: 'heavy',
            }}
          >
            Customer Name
          </Text>
          <Text
            style={{
              marginTop: 0,
              paddingBottom: 0,
              fontSize: 8,
              width: '2%',
              textAlign: 'center',
              fontFamily: 'Helvetica-Bold',
              fontStyle: 'heavy',
            }}
          >
            :
          </Text>
          <Text
            style={{
              marginTop: 0,
              paddingBottom: 0,
              fontSize: 8,
              width: '71%',
              textAlign: 'left',
              fontFamily: 'Helvetica-Bold',
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
              paddingBottom: 0,
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
              paddingBottom: 0,
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
              paddingBottom: 0,
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
              paddingBottom: 0,
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
              paddingBottom: 0,
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
              paddingBottom: 0,
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
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              marginTop: 0,
              paddingBottom: 0,
              fontSize: 8,
              width: '27%',
              textAlign: 'left',
              fontFamily: 'Helvetica',
              fontStyle: 'heavy',
            }}
          >
            Patient Address.
          </Text>
          <Text
            style={{
              marginTop: 0,
              paddingBottom: 0,
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
              paddingBottom: 0,
              fontSize: 8,
              width: '71%',
              textAlign: 'left',
              fontFamily: 'Helvetica',
              fontStyle: 'heavy',
            }}
          >
            {customer?.address_1}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <Text
            style={{
              marginTop: 0,
              paddingBottom: 0,
              paddingRight: 6,
              fontSize: 8,
              textAlign: 'right',
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer2}>
        <Image style={styles.logo} src={qr_code} />
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
                  width: '17%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                GSTIN
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
                  width: '81%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {invoice?.gstin}
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
                  width: '17%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                D.L. No.
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
                  width: '81%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {invoice?.dl1} , {invoice?.dl2}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '20%',
              borderRightWidth: 0.5,
              borderRightColor: '#000',
              borderLeftWidth: 0.5,
              borderLeftColor: '#000',
            }}
          >
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                fontSize: 9,
                marginTop: '10px',
              }}
            >
              {`${customer?.payment_mode ?? ''} BILL`}
            </Text>
          </View>
          {/* <View style={{ width: '10%' }}></View> */}
          <View style={styles.doctor_grid}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                height: 12,
              }}
            >
              <View
                style={{
                  width: '60%',
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{
                    marginTop: 0,
                    paddingBottom: 3,
                    fontSize: 8,
                    width: '40%',
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
                    fontSize: 8,
                    width: '57%',
                    marginTop: 0,
                    paddingBottom: 3,
                    textAlign: 'left',
                    fontStyle: 'heavy',
                    paddingLeft: '5px',
                    fontFamily: 'Helvetica',
                  }}
                >
                  {header?.entry_number}
                </Text>
              </View>
              <View
                style={{
                  width: '40%',
                  flexDirection: 'row',
                  paddingLeft: 2,
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
                  Date
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
                        .format('DD-MM-YYYY')}
                </Text>
              </View>
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
                  width: '24%%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Billed By
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
                  width: '73%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {header?.added_by ?? user?.username}
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
                  width: '24%%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                Time
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
                  width: '73%',
                  textAlign: 'left',
                  fontFamily: 'Helvetica',
                  fontStyle: 'heavy',
                }}
              >
                {Moment().utc().local().format('HH:mm')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default InvoiceTitle;
