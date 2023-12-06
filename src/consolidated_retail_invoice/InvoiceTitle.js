import React, { Fragment } from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import Moment from 'moment'

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 0,
    height: 150,
    width: '100%',
    border: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
    // height: 15,
    fontSize: 8,
    paddingBottom: '2px',
    fontFamily: 'Helvetica-Bold',
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
    borderWidth: 0.5,
    borderBottomWidth: 0,
    width: '100%',
    borderColor: '#dbdbdb',
    borderTopColor: '#222',
    borderRightColor: '#222',
    height: 80,
    // border: 1,
  },
  grid3: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '50%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '2px',
    borderRightWidth: '1',
    borderRightColor: '#dbdbdb',
  },
  doctor_grid: {
    marginTop: 0,
    lineHeight: 1.1,
    width: '50%',
    height: '100%',
    paddingLeft: '2px',
    paddingTop: '2px',
  },
  imageContainer: {
    marginTop: 0,
    // width: '20%',
    paddingTop: '2px',
    paddingLeft: '5px',
    // border: 1,
  },
  imageContainer2: {
    marginTop: 0,
    // width: '20%',
    paddingTop: '2px',
    paddingRight: '5px',
    // border: 1,
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
    width: 50,
    height: 50,
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
  qr_code,
  header_image_url,
}) => {
  return (
    <View style={styles.titleContainer}>
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 0.5,
          borderBottomWidth: 0,
          borderLeftWidth: 0.5,
          borderRightWidth: 0.5,
          borderColor: '#222',
          paddingTop: '5px',
          minHeight: '60px',
          width: '100%',
          justifyContent: 'space-between',
          // border: 1,
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.logo} src={logo_url} />
        </View>
        <View
          style={{
            ...styles.imageContainer,
            width: '90%',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              ...styles.logo,
              width: 430,
              height: 50,
            }}
            src={header_image_url}
          />
        </View>
        <View style={styles.imageContainer2}>
          <Image style={styles.logo} src={qr_code} />
        </View>
        {/* <View style={styles.headerContainer}>
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
        </View> */}
      </View>

      <View style={styles.grid2}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{ width: '75%', paddingTop: '2px', paddingBottom: '2px' }}
          >
            <View style={styles.rowContainer}>
              {/* <View
            style={{
              borderRightWidth: 0.5,
              borderRightColor: '#dbdbdb',
              width: '40%',
            }}
          >
            <Text style={styles.reportTitle}>{title}</Text>
          </View> */}
              <View
                style={{
                  flexDirection: 'row',
                  width: '30%',
                }}
              >
                <Text
                  style={{
                    width: '100%',
                    paddingLeft: '4px',
                    fontSize: 9,
                  }}
                >
                  Inv. No. {''}
                  {header.entry_number}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '20%',
                }}
              >
                <Text
                  style={{
                    width: '100%',
                    paddingLeft: '4px',
                    fontSize: 9,
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
                        .format('DD-MM-YYYY')}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '25%',
                }}
              >
                <Text
                  style={{
                    width: '100%',
                    paddingLeft: '4px',
                    fontSize: 9,
                  }}
                >
                  Bill :&nbsp;
                  {customer?.payment_mode ?? ''}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '15%',
                }}
              >
                <Text
                  style={{
                    width: '100%',
                    paddingLeft: '4px',
                    fontSize: 9,
                    textAlign: 'right',
                  }}
                >
                  Time :&nbsp;
                  {header.entry_date === ''
                    ? ''
                    : Moment(header?.created_at).utc().local().format('HH:mm')}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: '45px',
              }}
            >
              <View style={styles.grid3}>
                <Text
                  style={{
                    fontSize: 8,
                    paddingLeft: '6px',
                    paddingBottom: '2px',
                  }}
                >
                  Name : {customer?.name}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    paddingLeft: '6px',
                    paddingBottom: '2px',
                  }}
                >
                  Address&nbsp;:&nbsp;{customer?.address_1}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    paddingLeft: '6px',
                    paddingBottom: '2px',
                  }}
                >
                  Gst No&nbsp;:&nbsp;{customer?.gstin ?? ''}
                </Text>
                {/* <Text style={{ fontSize: 8, paddingLeft:'6px' }}>
              {customer.sex} \ {customer.age}
            </Text> */}
              </View>

              <View style={styles.doctor_grid}>
                <Text
                  style={{
                    fontSize: 8,
                    paddingLeft: '6px',
                    paddingBottom: '2px',
                  }}
                >
                  Doctor : {doctor?.name}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    paddingLeft: '6px',
                    paddingBottom: '2px',
                  }}
                >
                  Address&nbsp;:&nbsp;{doctor?.address ?? ''}
                </Text>
                {/* <Text style={{ fontSize: 8, paddingLeft:'6px' }}>
              {doctor.address_1}, {doctor.reg_no}
            </Text> */}
              </View>
            </View>
          </View>
          <View
            style={{
              width: '25%',
              fontSize: 8,
              paddingLeft: '4px',
              flexDirection: 'column',
              borderLeftWidth: 1,
              borderLeftColor: '#dbdbdb',
              paddingTop: '2px',
            }}
          >
            <Text style={{ paddingBottom: '2px' }}>
              A/C No&nbsp;:&nbsp;{invoice?.account_number ?? ''}
            </Text>
            <Text style={{ paddingBottom: '2px' }}>
              IFSC&nbsp;:&nbsp;{invoice?.ifsc_code ?? ''}
            </Text>
            <Text style={{ paddingBottom: '2px' }}>
              Bank&nbsp;:&nbsp;{invoice?.bank_name ?? ''}
            </Text>
            <Text style={{ paddingBottom: '2px' }}>
              Branch&nbsp;:&nbsp;{invoice?.bank_branch_name ?? ''}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default InvoiceTitle
