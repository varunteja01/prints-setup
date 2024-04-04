import { StyleSheet } from '@react-pdf/renderer'

export const fontColor = '#000'
export const borderColor = '#100c08'
export const tableDataBackgroundColor = '#dbdbdb'

export const legalInvoiceStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContainer: {
    margin: '0 0 0 0',
    width: '30%',
    borderWidth: 1,
    borderColor: borderColor,
    height: '95vh',
  },
  middleContainer: {
    margin: '0 0 0 0',
    width: '53%',
    borderWidth: 1,
    borderColor: borderColor,
    // height: '95vh',
    height: '100%',
  },
  rightContainer: {
    margin: '0 0 0 0',
    width: '15.8%',
    borderWidth: 1,
    borderColor: borderColor,
    height: '95vh',
  },
  leftSpace: {
    width: '1%',
  },
  rightSpace: {
    width: '0.2%',
  },
})

export const legalInvoiceStyleHeaderLeft = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    // height: '25vh',
    height: '28%',
  },

  firstItem: {
    flexDirection: 'column',
    width: '45%',
    borderRight: 1,
    borderBottom: 1,
  },
  vendor: {
    flexDirection: 'row',
    height: '30px',
  },
  vendorHeaderImage: {
    width: '25%',
    // border: 1,
    paddingLeft: '2px',
  },
  vendorHeaderLogo: {
    width: '30px',
    height: '30px',
    border: 1,
  },
  officeCopy: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
  },
  officeCopyText: {
    fontFamily: 'Helvetica-Bold',
    fontSize: '10px',
    // border: 1,
  },
  vendorName: {
    height: '24px',
    width: '100%',
    borderBottom: '1px',
  },
  vendorNameText: {
    width: '70%',
    height: '100%',
    fontFamily: 'Helvetica-Bold',
    fontSize: '7px',
    // border: 1,
    padding: '2px 0px 0px 2px',
  },
  invoiceDetail: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    height: '30px',
    paddingTop: '2px',
    borderBottom: '1px solid #000',
  },
  invoiceNoAndDate: {
    flexDirection: 'row',
    paddingLeft: '4px',
    // border: 1,
  },
  invoiceDetails2: {
    flexDirection: 'column',
    // border: '1',
    height: '64px',
    gap: '1px',
  },
  invoiceDetails2Direction: {
    flexDirection: 'row',
    height: '13px',
    // border: '1',
    fontSize: '7px',
  },
  paymentType: {
    display: 'flex',
    alignItems: 'flex-end',
    fontSize: '8',
    paddingRight: '2px',
    fontFamily: 'Helvetica-Bold',
  },
  secondItem: {
    flexDirection: 'column',
    padding: '2px 0px 2px 2px',
    fontSize: '7px',
    width: '55%',
    gap: '3px',
    borderBottom: 1,
  },
  secondItemFlex: {
    flexDirection: 'row',
  },
})

export const legalInvoiceStyleFooterLeft = StyleSheet.create({
  blank: {
    height: '12px',
    borderBottom: '1px solid #000',
  },
  totalItemsQty: {
    display: 'flex',
    flexDirection: 'row',
    height: '12px',
    fontSize: '7px',
    borderBottom: '1px solid #000',
    padding: '0px 0px 0px 3px',
  },
  thirdComponent: {
    flexDirection: 'row',
    height: '100px',
    // borderBottom: '1px solid #000',
  },
  calc: {
    flexDirection: 'column',
    alignItems: 'center',
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '60%',
    // border: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 13,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  footer_heading: {
    width: '25%',
    textAlign: 'left',
    paddingLeft: '1px',
    fontSize: 7,
    height: 13,
    paddingTop: '2px',
    // border: 1,
  },
  footer_icon: {
    width: '1%',
    textAlign: 'right',
    paddingRight: '2px',
    // border: 1,
  },
  footer_value_border: {
    width: '30%',
    textAlign: 'left',
    // paddingRight: '3px',
    paddingLeft: '2px',
    fontSize: 7,
    height: 13,
    borderRight: 1,
    // border: 1,
    paddingTop: '2px',
  },
  footer_heading2: {
    width: '16%',
    textAlign: 'center',
    fontSize: 7,
    height: 13,
    borderRight: 1,
    paddingTop: '2px',
  },
  footer_heading3: {
    width: '28%',
    textAlign: 'right',
    fontSize: 7,
    height: 13,
    borderRight: 1,
    paddingRight: '2px',
    paddingTop: '2px',
  },
  grandTotal: {
    width: '40%',
    // border: 1,
    flexDirection: 'column',
  },
  grandTotalItems: {
    flexDirection: 'row',
    height: 12,
    fontSize: 7,
    // border: 1,
  },
  grandTotalItemsStyle1: {
    width: '50%',
    // border: '1',
    padding: '1px 0px 0px 2px',
    display: 'flex',
  },
  grandTotalItemsStyle2: {
    width: '50%',
    // border: '1',
    textAlign: 'right',
    padding: '1px 2px 0px 2px',
  },
  fourthComponent: {
    width: '100%',
    height: '70px',
    // border: '1',
    flexDirection: 'row',
  },
})

export const legalInvoiceStyleHeaderMiddle = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',

    height: '28%',
  },
  firstItem: {
    height: '100%',
    flexDirection: 'column',
    width: '39%',
    borderRight: 1,
    borderBottom: '1',
  },
  vendor: {
    flexDirection: 'row',
    borderBottom: 1,
    height: '34px',

    width: '100%',
  },
  vendorHeaderImage: {
    width: '20%',
    // border: 1,
    paddingTop: '2px',
    paddingLeft: '2px',
  },
  vendorHeaderLogo: {
    width: '28px',
    height: '28px',
    border: 1,
  },
  vendorHeaderNameView: {
    // borderRight: 1,
    width: '80%',
    padding: '0px 0px 0px 2px',
  },
  vendorHeaderName: {
    width: '100%',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    padding: '2px 0px 0px 5px',
    // border: 1,
    width: '80%',
  },
  vendorInfo: {
    height: '125px',
    flexDirection: 'column',
    fontSize: '7px',
    // border: 1,
    padding: '2px 1px 0px 2px',
    gap: '2px',
  },
  address1: {
    fontSize: '7px',
    fontFamily: 'Helvetica-Bold',

    // border: 1,
    height: '23px',
  },
  address2: {
    fontFamily: 'Helvetica',
    fontSize: '7px',
    fontFamily: 'Helvetica-Bold',
    // border: '1',
  },
  vendorOtherInfo: {
    flexDirection: 'row',
    fontSize: '7px',

    // border: '1',
  },
  secondItem: {
    flexDirection: 'column',
    width: '29%',
    borderRight: 1,
    borderBottom: 1,
  },
  taxInvoice: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    borderBottom: 1,
    height: '22px',
    paddingTop: '3px',
  },
  invoiceDetail: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    height: '40px',
    borderBottom: '1px',
  },
  invoiceNoAndDate: {
    flexDirection: 'row',
    height: '20px',
    paddingLeft: '5px',
    // border: 1,
  },
  invoiceDetail2: {
    flexDirection: 'column',
    // border: '1',
    height: '60px',
    gap: '2px',
  },
  invoiceDetail2Items: {
    flexDirection: 'row',
    height: '15px',
    paddingLeft: '5px',
    // border: 1,
    fontSize: 7,
  },
  barcode: {
    alignContent: 'center',
    border: 1,
    height: '40px',
    margin: '4px 4px 4px 4px',
  },
  // barcodeImage: {},
  thirdItem: {
    flexDirection: 'column',
    padding: '2px 0px 2px 2px',
    fontSize: '7px',
    width: '32%',
    gap: '1.5px',
    borderBottom: 1,
  },
  thirdItemFlex: {
    flexDirection: 'row',
  },
  paymentMode: {
    width: '33%',
    // border: 1,
    alignItems: 'flex-end',
    paddingRight: '5px',
    fontFamily: 'Helvetica-Bold',
  },
})

export const legalInvoiceStyleFooterMiddle = StyleSheet.create({
  flash: {
    height: '12px',
    fontSize: '7px',
    borderBottom: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 0px 0px 3px',
  },
  rapidNews: {
    display: 'flex',
    flexDirection: 'row',
    height: '12px',
    fontSize: '7px',
    borderBottom: '1px solid #000',
    // padding: '0px 0px 0px 3px',
  },
  rapidNews1: {
    width: '10%',
    borderRight: '1px solid #000',
    fontFamily: 'Helvetica-Bold',
    padding: '0px 0px 0px 3px',
    backgroundColor: '#dbdbdb',
  },
  rapidNews2: {
    width: '90%',
    fontFamily: 'Helvetica-Bold',
    paddingLeft: '3px',
  },
  thirdComponent: {
    flexDirection: 'row',
    height: '90px',
    borderBottom: '1px solid #000',
  },
  verifyDistibutor: {
    flexDirection: 'column',
    borderRight: '1px solid #000',
    width: '20%',
  },
  distributorId: {
    height: '30px',
    borderBottom: '1px solid #000',
    fontSize: '7px',
    display: 'flex',
    justifyContent: 'center',
    gap: '3px',
    alignItems: 'center',
    padding: '2px 0px 0px 0px',
  },
  loginPass: {
    flexDirection: 'column',
    height: '40px',
    borderBottom: '1px solid #000',
    fontSize: '7px',
    padding: '2px 0px 0px 0px',
    alignItems: 'center',
  },
  loginPassItems: {
    flexDirection: 'row',
  },
  preparedBy: {
    marginTop: '3px',
    flexDirection: 'row',
    fontSize: '7px',
    display: 'flex',
    height: '13px',
  },
  calc: {
    flexDirection: 'column',
    alignItems: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: 7,
    width: '50%',
    // border: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 13,
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  footer_heading: {
    width: '17%',
    textAlign: 'left',
    padding: '2px 0px 0px 1px',
    fontSize: 7,
    height: 13,
    // border: 1,
  },
  footer_icon: { width: '1%', textAlign: 'right', paddingRight: '2px' },
  footer_value_border: {
    width: '13%',
    textAlign: 'right',
    padding: '2px 3px 0px 0px',
    fontSize: 7,
    height: 13,
    borderRight: 1,
    // border: 1,
  },
  footer_heading2: {
    width: '16%',
    textAlign: 'right',
    fontSize: 7,
    height: 13,
    borderRight: 1,
    padding: '2px 2px 0px 0px',
  },
  footer_heading3: {
    width: '9%',
    textAlign: 'center',
    fontSize: 7,
    height: 13,
    borderRight: 1,
    padding: '2px 0px 0px 0px',
    fontFamily: 'Helvetica-Bold',
  },
  footer_heading4: {
    width: '15%',
    textAlign: 'right',
    fontSize: 7,
    height: 13,
    borderRight: 1,
    padding: '2px 2px 0px 0px',
  },
  grandTotal: {
    width: '30%',
    // border: 1,
    flexDirection: 'column',
  },
  grandTotalItems: {
    flexDirection: 'row',
    height: 12,
    fontSize: 7,
  },
  grandTotalItems2: {
    flexDirection: 'row',
    height: 14,
    fontSize: 7,
  },
  grandTotalItemsStyle1: {
    width: '50%',
    // border: '1',
    paddingLeft: '2px',
    display: 'flex',
    paddingTop: '1px',
  },
  grandTotalItemsStyle2: {
    width: '50%',
    // border: '1',
    paddingRight: '2px',
    textAlign: 'right',
    paddingTop: '1px',
  },

  //
  footer4: {
    height: '75px',
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'bold',
    // flexGrow: 1,
    fontSize: 7,
    width: '100%',
    // border: 1,
  },
  tnc: {
    width: '27%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    height: '75px',
  },
  declaration: {
    flexDirection: 'row',
    height: '20px',
    borderBottom: '1px',
    paddingTop: '5px',
    gap: '30px',
  },
  declaration1: {
    textDecoration: 'underline',
    fontFamily: 'Helvetica-Bold',
    paddingLeft: '2px',
  },
  tncText: { padding: '2px 4px 0 2px', fontSize: 7, lineHeight: 1.2 },
  qrCode: {
    width: '12%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    height: '75px',
    // padding: '4px 0 0 4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50px',
    height: '50px',
    border: 1,
  },
  bankDetails: {
    flexDirection: 'column',
    width: '29%',
    height: '75px',
    borderRight: 1,
    fontSize: '7px',
    padding: '5px 0p 0px 4px',
    gap: '4px',
  },
  signatory: {
    width: '25%',
  },
})

export const legalInvoiceStyleHeaderRight = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    // height: '25vh',
    height: '28%',
  },
  vendor: {
    flexDirection: 'row',
    borderBottom: 1,
    height: '35px',
    width: '100%',
  },
  vendorHeaderImage: {
    width: '24%',
    // border: 1,
    paddingTop: '2px',
    paddingLeft: '2px',
  },

  vendorHeaderLogo: {
    width: '28px',
    height: '28px',
    border: 1,
  },

  vendorHeaderNameView: {
    // border: 1,
    width: '76%',
    padding: '0px 0px 0px 2px',
    display: 'flex',
    justifyContent: 'center',
  },

  vendorHeaderName: {
    width: '100%',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    padding: '2px 0px 0px 5px',
    // border: 1,
  },
  invoiceDetail: {
    fontSize: 9,
    // fontFamily: 'Helvetica-Bold',
    height: '45px',
    // border: '1px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '1px',
  },
  invoiceNoAndDate: {
    flexDirection: 'row',
    height: '20px',
    paddingLeft: '5px',
    // border: 1,
  },
  thirdItem: {
    flexDirection: 'column',
    padding: '2px 0px 2px 2px',
    fontSize: '7px',
    width: '100%',
    gap: '1px',
    // border: 1,
    marginBottom: '8px',
    height: 'auto',
  },
  fourthItem: {
    flexDirection: 'row',
    fontSize: 7,
    padding: '2px 0px 2px 2px',
    // border: 1,
    height: '18px',
  },
})

export const legalInvoiceStyleFooterRight = StyleSheet.create({
  qrSection: {
    height: '120px',
    borderBottom: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: '100px',
    border: 1,
  },
  totalSection: {
    flexDirection: 'column',
    padding: '2px 2px 2px 2px',
    fontSize: '8',
    height: '80px',
    justifyContent: 'space-between',
    // border: '1',
  },
})

export const legalInvoiceStyleTableRight = StyleSheet.create({
  tableHeight: {
    height: '229px',
  },
  tableHeaderStyles: {
    height: '35px',
    borderBottom: '1',
    borderTop: '1',
    flexDirection: 'column',
  },
  due: {
    height: '50%',
    marginLeft: '10px',
    marginRight: '10px',
    // borderBottom: 1
  },
  dueText: {
    textDecoration: 'underline',
    fontSize: '8',
    textAlign: 'center',
    paddingTop: '3px',
  },
  columns: {
    height: '50%',
    flexDirection: 'row',
    fontFamily: 'Helvetica-Bold',
    justifyContent: 'space-around',
    fontSize: '7',
  },
})
