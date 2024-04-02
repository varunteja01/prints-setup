import { StyleSheet } from '@react-pdf/renderer'

export const fontColor = '#000'
export const borderColor = '#100c08'
export const tableDataBackgroundColor = '#dbdbdb'

export const legalInvoiceStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  vendorContainer: {
    margin: '0 0 0 0',
    width: '33%',
    borderWidth: 1,
    borderColor: borderColor,
    height: '95vh',
  },
  intermediateSpace: {
    width: '2%',
  },
  customerContainer: {
    margin: '0 0 0 0',
    width: '65%',
    borderWidth: 1,
    borderColor: borderColor,
    height: '95vh',
  },
})

export const legalInvoiceStyleHeaderLeft = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 0,
    header: '2rem',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnContainer: {
    flexDirection: 'column',
  },

  vendorHeader: {
    marginTop: 0,
    width: '100%',
    lineHeight: 1.1,
    height: '80px',
    paddingTop: '5px',
    borderColor: borderColor,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  vendorHeaderInfo: {
    width: '80%',
    margin: '5px 0 5px 10px',
  },
  vendorHeaderImage: {
    width: '20%',
    marginTop: '4rem',
  },
  vendorHeaderLogo: {
    marginTop: 0,
    width: '50px',
    height: '50px',
    paddingTop: '2px',
    paddingLeft: '5px',
  },
  vendorHeaderTitle: {
    width: '100%',
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    paddingBottom: '6px',
  },
  vendorHeaderSubTitle: {
    width: '100%',
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    paddingBottom: '6px',
  },
  vendorHeaderTitleAlignRight: {
    width: '100%',
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    paddingBottom: '6px',
    textAlign: 'right',
  },
  vendorHeaderContentTitle: {
    width: '100%',
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
  },
  vendorHeaderContent: {
    width: '100%',
    fontFamily: 'Helvetica',
    fontSize: 9,
  },
  vendorHeaderContentDrugLicence: {
    width: '100%',
    fontFamily: 'Helvetica',
    fontSize: '8',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2px',
  },
  vendorHeaderContentFlex: {
    width: '100%',
    fontFamily: 'Helvetica',
    fontSize: 9,
    display: 'flex',
    flexDirection: 'row',
  },
  vendorHeaderContentFlexContent: {
    width: '50%',
  },
  vendorHeaderMiniContent: {
    width: '100%',
    fontFamily: 'Helvetica',
    fontSize: 9,
    marginBottom: '2px',
  },
  headerCustomerDetailGrid1: {
    width: '3%',
    marginLeft: '10px',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  headerCustomerDetailGrid2: {
    width: '55%',
    marginLeft: '10px',
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  headerCustomerDetailGrid2Minicontainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
  },
  headerCustomerDetailGrid3: {
    width: '35%',
  },
})

export const legalInvoiceStyleTableLeft = StyleSheet.create({
  tableHeader: {
    marginLeft: '1px',
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: '#000',
    borderColor: '#dbdbdb',
    borderLeftColor: '#000',
    borderLeftWidth: 1,
    height: 14.5,
  },
  tableData: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: '#000',
  },
  tableBlankLines: {
    bottomBorder: { borderBottomColor: borderColor, borderBottomWidth: 0.5 },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 14,
      fontFamily: 'Helvetica',
      color: 'white',
    },
    description: {
      width: '60%',
    },
    qty: {
      width: '10%',
    },
    rate: {
      width: '15%',
    },
    amount: {
      width: '15%',
    },
  },
})

export const legalInvoiceStyleFooterLeft = StyleSheet.create({
  footerContainer: {
    margin: '5 0 0 5',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Helvetica',
  },
  footerAmountNames: {
    width: '20%',
    fontSize: 9,
  },
  footerAmountSplitter: {
    width: '1%',
    fontSize: 9,
  },
  footerAmountValues: {
    width: '75%',
    textAlign: 'right',
    fontSize: 9,
  },
  footerAmountValuesDiscAmt: {
    flexDirection: 'row',
    textAlign: 'right',
  },
  footerAmountValuesDiscAmtMargin: {
    marginLeft: '35rem',
  },
  footerAmountValuesNetAmt: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 14,
    marginLeft: '15rem',
  },
  footerAuthorisedAgencySign: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    marginTop: '5rem',
  },
})

export const legalInvoiceStyleHeaderRight = StyleSheet.create({
  customerHeaderFirstLevel: {
    sectionOne: {
      margin: '10 0 10 0',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      fontFamily: 'Helvetica',
      lineHeight: 1.3,
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      height: '70px',
    },
    grid11: {
      width: '10%',
      marginLeft: '5px',
    },
    vendorHeaderLogo: {
      marginTop: 0,
      width: '50px',
      height: '50px',
      paddingTop: '2px',
      paddingLeft: '5px',
    },
    grid12: {
      headerTitle: {
        width: '65%',
        fontFamily: 'Helvetica-Bold',
        fontSize: '14',
      },
      headerContent: {
        marginTop: '1px',
        width: '65%',
        fontFamily: 'Helvetica',
        fontSize: 9,
      },
      headerContentDrugLicenceGrid: {
        width: '65%',
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Helvetica',
      },
      headerContentGstinPhoneGrid: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Helvetica',
      },
    },
    grid13: {
      marginRight: '10px',
      width: '20%',
      fontFamily: 'Helvetica',
      fontSize: '10',
      textAlign: 'right',
    },
  },
  customerHeaderSecondLevel: {
    sectionTwo: {
      // padding: '0 0 0 0',
      height: '70px',
      display: 'flex',
      lineHeight: '1.1',
      flexDirection: 'row',
      fontFamily: 'Helvetica',
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
    },
    alignTextRight: {
      textAlign: 'right',
    },
    grid21: {
      width: '2%',
      marginLeft: '5px',
      fontSize: '10',
    },
    grid22: {
      headerCustomerTitle: {
        width: '49%',
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
      },
      headerCustomerContent: {
        width: '100%',
        fontFamily: 'Helvetica',
        fontSize: 9,
      },
      headerCustomerContentIRN: {
        fontSize: 8,
      },
      headerCustomerDetailGrid2Minicontainer: {
        // width: '40%',
        display: 'flex',
        flexDirection: 'row',
      },
    },
    grid23: {
      width: '13%',
      fontSize: 10,
      fontFamily: 'Helvetica',
    },

    grid24: {
      gridNames: {
        width: '9%',
        fontSize: 10,
        fontFamily: 'Helvetica',
        textAlign: 'right',
      },
      gridSplitter: {
        padding: '0 5 0 5',
        fontSize: 10,
        width: '1%',
        fontFamily: 'Helvetica',
      },
      gridValues: {
        width: '8%',
        fontSize: 10,
        fontFamily: 'Helvetica',
      },
    },
  },
})

export const legalInvoiceStyleTableRight = StyleSheet.create({})

export const legalInvoiceStyleFooterRight = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer2: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 70,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
  },
  footer3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 12,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  footer4: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '100%',
    height: '58px',
  },
  gst: {
    gst: {
      width: '4%',
      textAlign: 'right',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      height: 12,
      paddingRight: '2px',
    },
    gst_border: {
      width: '4%',
      textAlign: 'right',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      height: 12,
      paddingRight: '2px',
    },
    gst_discount: {
      width: '10%',
      textAlign: 'right',
      paddingRight: '2px',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      height: 12,
    },
    gst_value: {
      width: '10%',
      textAlign: 'right',
      paddingRight: '2px',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      height: 12,
    },
    gst_value_border: {
      width: '10%',
      textAlign: 'right',
      paddingRight: '2px',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      height: 12,
    },
    cgst_value: {
      width: '10%',
      textAlign: 'right',
      paddingRight: '2px',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      height: 12,
    },
    sgst_value: {
      width: '10%',
      textAlign: 'right',
      paddingRight: '2px',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      height: 12,
    },
    igst_value: {
      width: '10%',
      textAlign: 'right',
      paddingRight: '2px',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      borderBottomColor: borderColor,
      borderBottomWidth: 1,
      height: 12,
    },
  },

  amount_words: {
    width: '46%',
    textAlign: 'left',
    paddingLeft: '15px',
  },
  footer_heading: {
    width: '8%',
    textAlign: 'left',
    paddingLeft: '15px',
  },
  footer_icon: {
    width: '1%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '2px',
  },
  footer_value_border: {
    width: '6%',
    textAlign: 'right',
    paddingRight: '8px',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: 12,
  },
  blank: {
    width: '0%',
  },
  tnc: {
    width: '35%',
    fontSize: 5,
    borderRightWidth: 1,
    borderRightColor: '#000',
    height: '60px',
  },
  logo: {
    padding: '5px 0 0 5px',
    width: 50,
    height: 50,
  },

  footerAuthorisedAgencySign: {
    textAlign: 'right',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    marginTop: '35rem',
    marginRight: '30rem',
  },
})
export const legalInvoicePromoContentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#dbdbdb',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 14,
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 8,
  },
  sno: {
    width: '15%',
    paddingLeft: '3px',
    backgroundColor: '#dbdbdb',
    color: fontColor,
    height: 14,
  },
  hsn: {
    width: '85%',
    color: fontColor,
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'left',
    paddingRight: '2px',
  },
})
