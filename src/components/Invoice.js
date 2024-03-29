import React, { Fragment } from 'react'
import {
  Document,
  Image,
  StyleSheet,
  Font,
  PDFViewer,
  pdf,
} from '@react-pdf/renderer'

// import apiRequest from '../../utils/api'
// import axios from 'axios'
// import DotMatrix from 'dot-matrix-print'
// import {
//   ImageHeaderNoIRN,
//   FullHeaderVerticalA5NoLines,
// } from '../invoice/exports'

import moment from 'moment'

// import s from './Invoice.css'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   JSPrintManager,
//   InstalledPrinter,
//   WSStatus,
//   ClientPrintJob,
//   UserSelectedPrinter,
//   DefaultPrinter,
//   PrintRotation,
//   PrintFile,
//   PrintFilePDF,
//   Sizing,
//   FileSourceType,
// } from 'jsprintmanager'
import QRCode from 'qrcode'

// import {
//   FullHeaderInvoice,
//   FullHeaderBlock,
//   FullHeaderBlockEmpty,
//   DetailedHeaderInvoice,
//   DefaultRetailInvoice,
// } from 'smart-print-formats';

// import FullHeaderRetailNew from './full_header_retail_new/Invoice'
import FullHeaderInvoice from '../full_header/Invoice'
import FullHeaderInvoiceAlign from '../full_header_align/Invoice'
import IrnFullHeaderVerticalA5WithoutBorder from '../irn_full_header_vertical_a5_without_border/Invoice'
import FullHeaderBlockEmpty from '../full_header_block_empty/Invoice'
import FullHeaderBlockEmptyNew from '../full_header_block_empty_new/Invoice'
import CompactRetailInvoiceNormalSavedAmount from '../compact_retail_invoice_normal_saved_amount/Invoice'
import IrnWithDueAmount from '../irnWithDueAmount/Invoice'
import { calculateMultiplier, convertNumToWords } from './helpers'
// import FullHeaderBlock from './full_header_block/Invoice'
// import FullHeaderBlockEmpty from './full_header_block_empty/Invoice'
// import DetailedHeaderInvoice from './detailed_header_retail/Invoice'
import DefaultRetailInvoice from '../default_retail_invoice/Invoice'
// import ConsolidatedRetailInvoice from './consolidated_retail_invoice/Invoice'
// import CompactHeaderInvoice from './compact_retail_invoice/Invoice'
// import NewCompactHeaderInvoice from './compact_retail_invoice_new/Invoice'
// import CompactHeaderNormalSavedInvoice from './compact_retail_invoice_normal_saved_amount/Invoice'
// import { calculateMultiplier, convertNumToWords } from '../../utils/helpers'

const pageSize = { A4: 'A4', LEGAL: 'LEGAL' }
const orientation = { PORTRAIT: 'portrait', LANDSCAPE: 'landscape' }

// const styles = StyleSheet.create({
//   page: {
//     fontFamily: 'Helvetica',
//     fontSize: 11,
//     paddingTop: 10,
//     paddingLeft: 10,
//     paddingRight: 10,
//     lineHeight: 1.5,
//     height: '40%',
//     flexDirection: 'column',
//     padding: 20,
//   },
//   landscapePage: {
//     fontFamily: 'Helvetica',
//     fontSize: 11,
//     paddingTop: 10,
//     paddingLeft: 10,
//     paddingRight: 10,
//     lineHeight: 1.5,
//     flexDirection: 'column',
//     padding: 20,
//     size: 'A4 landscape',
//   },
//   logo: {
//     width: 74,
//     height: 66,
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
//   imageContainer: {
//     height: '50%',
//   },
//   imageContainer2: {
//     height: '100%',
//   },
// })
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    flexDirection: 'column',
    size: pageSize.A4 + ' ' + orientation.LANDSCAPE,
    // borderWidth: 1,
    // borderColor: '#000',
  },
  legalPage: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    flexDirection: 'column',
    size: pageSize.LEGAL + ' ' + orientation.LANDSCAPE,
    // size: pageSize.LEGAL + ' ' + orientation.PORTRAIT, // THIS PORTRAIT IS PRINTING AS LANGSCAP
    borderWidth: 1,
    borderColor: '#000',
  },
  halfPage: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    height: '40%',
    flexDirection: 'column',
    padding: 20,
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageContainer: {
    height: '100%',
  },
  imageContainer2: {
    height: '50%',
    // border: 1,
  },
  halfA5: {
    flexDirection: 'row',
    width: '100%',
  },
  halfA5Child: {
    flexDirection: 'column',
    width: '49%',
  },
  halfA5ChildGap: {
    flexDirection: 'column',
    width: '2%',
  },
})

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  )
}

export default function Invoice({
  invoice,
  entry,
  products,
  customer,
  doctor,
  title,
  items,
  gstEnabled = true,
  isPreview,
  isBulkInvoices = false,
  bulkInvoices = [],
  printDetails,
  uploadBlob = false,
  resetState = () => {},
  printColumns = {},
  printTableStyles = {},
  message = '',
  inventoryType = '',
  manualPrintLayout = null,
}) {
  // const clientInformation = useSelector((state) => state.client)
  // const settingsInfo = useSelector((state) => state.settings)
  // const perms = useSelector((state) => state.permissions)
  // const user = useSelector((state) => state.user)

  const clientInformation = {} //logo
  const settingsInfo = {} //qr code
  const perms = {}
  const user = {}
  const fetchQRUrl = {}
  const clientAnalyticStats = {}

  const [pdfRender, setPDFRender] = React.useState(false)
  const [paymentUrl, setPaymentUrl] = React.useState('')

  // const dotMatrixCommandsRef = React.useRef()

  // React.useEffect(() => {
  //   if (Object.keys(invoice).length > 0) {
  //     if (!isPreview) {
  //       try {
  //         if (uploadBlob) {
  //           savePDF()
  //         } else {
  //           // if (invoice?.printer_type == 1) {
  //           //   let commands = dotMatrixCommandsRef.current.createCMD(
  //           //     invoice?.print_layout_b2c_sale_key,
  //           //     products,
  //           //     invoice,
  //           //     entry,
  //           //     items,
  //           //     printColumns,
  //           //     printTableStyles
  //           //   )
  //           //   console.log(commands)
  //           //   JSP_Dot_Matrix(commands)
  //           // } else if (invoice?.printer_type == 2) {
  //           //   ThermalPrinting()
  //           // }
  //           JSP_Laser()
  //           resetState('printOut')
  //         }
  //       } catch (error) {
  //         console.error(error)
  //       }
  //     } else {
  //       setPDFRender(true)
  //     }
  //   }
  // }, [])

  // const pages = [];
  let page_blanks = 0
  // let print_layout =
  //   invoice?.[
  //     `${
  //       perms?.branch_type == 1 || printType == 'b2b'
  //         ? 'print_layout_sale_key'
  //         : 'print_layout_b2c_sale_key'
  //     }`
  //   ];

  // const max_items =
  //   perms?.branch_type === 2
  //     ? invoice?.b2c_max_items_per_page
  //     : invoice?.max_items_per_page;
  //previous value for line height is 40
  // let max_chars = 40;

  // React.useEffect(() => {
  /////// START OF DYNAMIC PAGINATION ////////////////
  // if (invoice?.dynamic_length ?? false) {
  //   const productNameWidth =
  //     printTableStyles?.[
  //       printColumns?.filter((column) => column?.value == 'product_name')?.[0]
  //         ?.column
  //     ]?.width?.split('%')?.[0];
  //   // max_chars =
  //   //   getOrientation() != 0
  //   //     ? parseInt(productNameWidth)
  //   //     : parseInt(productNameWidth * 1.5) + 2;

  //   let currentPage = [];
  //   let currentLength = 0;
  //   let productName = '';
  //   let product_lines = 0;

  //   for (let i = 0; i < products?.length; i++) {
  //     productName = products[i]?.product_name;
  //     product_lines = Math.ceil(productName?.length / max_chars);

  //     if (currentLength + product_lines <= max_items) {
  //       // Add the product to the current page
  //       currentPage.push(products[i]);
  //     } else {
  //       pages.push(currentPage);
  //       // Start a new page
  //       currentPage = [];
  //       currentLength = 0;
  //       currentPage.push(products[i]);
  //     }
  //     currentLength += product_lines;
  //   }
  //   // Add any remaining products to the last page
  //   if (currentPage.length > 0) {
  //     pages.push(currentPage);
  //     page_blanks = max_items - currentLength;
  //   }
  //   ///////// END OF DYNAMIC PAGINATION ////////////////////
  // } else {
  //   const count = parseInt((products.length / max_items).toFixed(0));
  //   const count_equals_max = products.length % max_items == 0;
  //   const iteration_max =
  //     count > products.length / max_items
  //       ? count
  //       : count_equals_max
  //       ? count
  //       : count + 1;
  //   let i = 0;
  //   for (i = 0; i < iteration_max; i++) {
  //     var start = max_items * i;
  //     var end =
  //       products.length >= start + max_items
  //         ? start + max_items
  //         : products.length;
  //     pages[i] = products.slice(start, end);
  //   }
  // }
  // }, [invoice?.dynamic_length]);

  // PAYMENT QR GENERATION
  if ((settingsInfo?.upi_address ?? '') != '') {
    let upi_url = `upi://pay?cu=INR&pa=${settingsInfo?.upi_address}&pn=PAY&tn=${
      entry?.entry_number ?? ''
    }(${entry?.entry_date ?? ''})&am=${parseFloat(
      entry?.due_amount || 0
    ).toFixed(2)}`
    QRCode.toDataURL(upi_url)
      .then((url) => {
        setPaymentUrl(url)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // function getOrientation() {
  //   let print_layout = manualPrintLayout ?? invoice?.print_layout_b2c_sale_key
  //   // Vertical -> 1
  //   // Horizontal -> 0
  //   if (print_layout == 'b2c_image_header_no_irn') return 0
  //   else return 1
  // }

  // function JSP_Laser() {
  //   try {
  //     if (JSPrintManager.websocket_status == WSStatus.Open) {
  //       var cpj = new ClientPrintJob()
  //       cpj.clientPrinter = new InstalledPrinter(printDetails?.printer)
  //       const element = createDoc()
  //       const blob = pdf(element).toBlob()
  //       const no_of_copies = parseInt(printDetails?.copies)
  //       console.log(
  //         'PRINTING %o COPIES OF %o',
  //         no_of_copies,
  //         entry?.entry_number
  //       )
  //       let myPrintFile = new PrintFilePDF(
  //         blob,
  //         FileSourceType.BLOB,
  //         `INVOICE-${entry?.entry_number}`,
  //         no_of_copies
  //       )
  //       if (!getOrientation()) {
  //         myPrintFile.printRotation = PrintRotation['Rot90']
  //         myPrintFile.pageSizing = Sizing['Fit']
  //       }
  //       cpj.files.push(myPrintFile)
  //       cpj.onUpdated = function (data) {
  //         console.log('JSP onUpdated', data)
  //       }
  //       cpj.onFinished = function (data) {
  //         console.log('JSP onFinished', data)
  //       }
  //       cpj.sendToClient()
  //     } else if (JSPrintManager.websocket_status == WSStatus.Closed)
  //       console.log('JSPM is not installed or not running!')
  //     else if (JSPrintManager.websocket_status == WSStatus.Blocked)
  //       console.log('JSPM has blocked this website!')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // async function savePDF() {
  //   try {
  //     const element = createDoc()
  //     const myPdf = pdf([])
  //     myPdf.updateContainer(element)
  //     const blob = await myPdf.toBlob() /*create blob*/
  //     var file = new File([blob], `${entry.entry_number}.pdf`, {
  //       lastModified: new Date().getTime(),
  //     })
  //     let data = new FormData()
  //     data.append('file', file)
  //     data.append('salehead_id', entry.id)
  //     data.append('is_b2c', perms?.branch_type == 1 ? true : false)
  //     const uri = `${axios.defaults.baseURL}${'/upload_invoice_pdf'}`
  //     const token = localStorage.getItem('authorization')

  //     var headers = {}

  //     headers = {
  //       Accept: 'application/json',
  //       'Content-Type': 'multipart/form-data',
  //       ...headers,
  //     }

  //     if (token) {
  //       headers = { ...headers, Authorization: `${token}` }
  //     }

  //     const config = {
  //       headers: headers,
  //     }
  //     await axios.post(uri, data, config).then((response) => {
  //       if (response?.code == 200) resetState('uploadBlob')
  //     })
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  Font.register(
    {
      family: 'Helvetica',
      fonts: [
        {
          src: `./data/Helvetica.ttf`,
        },
      ],
    },
    {
      family: 'Helvetica-Bold',
      fonts: [
        {
          src: `./data/Helvetica-Bold.ttf`,
        },
      ],
    }
  )

  const renderPrintLayout = () => {
    var max_items = 0
    let inv = 0
    let pdf_pages = []

    let print_layout = manualPrintLayout ?? invoice?.print_layout_b2c_sale_key
    console.log('{retail_invoice}\nPRINT LAYOUT ', print_layout)

    do {
      // const pages = [];
      let pages = []
      let products_arr = []
      let invoice_head = {}
      let patient_details = {}
      let doctor_details = {}

      if (isBulkInvoices) {
        invoice_head = { ...bulkInvoices?.[inv]?.head }
        products_arr = [...bulkInvoices?.[inv]?.items]
        patient_details = { ...bulkInvoices?.[inv]?.head?.patient_details }
        doctor_details = { ...bulkInvoices?.[inv]?.head?.doctor_details }
      } else {
        invoice_head = { ...entry }
        products_arr = [...products]
        patient_details = { ...customer }
        doctor_details = { ...entry }
      }

      console.log(patient_details, 'patient')
      console.log(doctor_details, 'doc')
      products_arr = products_arr?.map((x, idx) => {
        return { ...x, sno: idx + 1 }
      })
      // CREATE PAGES
      max_items = print_layout ? invoice?.b2c_max_items_per_page : 14

      // TODO: NEED TO TAKE THE DYNAMIC PRINT CONTENT FROM CHILDREN TO HERE...
      // const count = parseInt((products_arr?.length / max_items).toFixed(0));
      // const count_equals_max = products_arr?.length % max_items == 0;
      // const iteration_max =
      //   count > products_arr?.length / max_items
      //     ? count
      //     : count_equals_max
      //     ? count
      //     : count + 1;
      // let i = 0;
      // for (i = 0; i < iteration_max; i++) {
      //   var start = max_items * i;
      //   var end =
      //     products_arr?.length >= start + max_items
      //       ? start + max_items
      //       : products_arr?.length;
      //   pages[i] = products_arr?.slice(start, end);
      // }

      // products_arr.map((item) => {
      //   console.log(
      //     'SNO [' +
      //       item.sno +
      //       '] PRODUCT_NAME [' +
      //       item.product_name +
      //       '] LENGTH [' +
      //       item.product_name?.length +
      //       ']',
      //   );
      // });
      pages = [...products_arr]

      let updatedPages = []
      const blankLinesCount = []
      const snoStart = [0]
      let previousSum = 0
      let copy = []
      let maxItems = max_items

      const productNameWidth = 25
      // printTableStyles?.[
      //   printColumns?.filter((column) => column?.value == 'product_name')?.[0]
      //     ?.column
      // ]?.width?.split('%')?.[0]
      let max_chars = productNameWidth

      // For RMS
      let line_height = parseFloat(
        parseFloat(max_chars * calculateMultiplier(productNameWidth))?.toFixed(
          2
        )
      )
      // For DMS
      // let line_height = parseFloat(parseFloat(max_chars)?.toFixed(2))

      let i = 0
      let count = 0
      let maxCount = 0
      let pageNo = 0
      let lastPage = 0
      while (i < pages.length) {
        let ceilValue = Math.ceil(
          pages?.[i]?.product_name?.length / line_height
        )
        count = count + ceilValue // should reduce as many rows as product name requires (as its required for RMS currently).
        maxCount = maxCount + ceilValue
        if (count <= maxItems) {
          copy?.push(pages[i])
          i++
        } else {
          let sum = copy.reduce((acc, curr) => {
            return acc + (curr.id ? 1 : 0) // Increment accumulator if 'id' property exists
          }, previousSum)
          previousSum = sum // Update previousSum
          snoStart.push(sum)
          blankLinesCount.push(max_items - count > 0 ? max_items - count : 0)
          console.log(products_arr)
          updatedPages = [...updatedPages, [...copy]]
          count = 0
          maxCount = 0
          copy = []
          pageNo++
        }

        if (i == pages.length) {
          blankLinesCount.push(max_items - count > 0 ? max_items - count : 0)
          pageNo++
          lastPage = pageNo
          updatedPages = [...updatedPages, [...copy]]
          count = 0
          maxCount = 0
          copy = []
        }
      }

      // const headerNoIrnFormatter = (
      //   <ImageHeaderNoIRN
      //     pageDetails={{
      //       pageSize: pageSize.A4,
      //       orientation: orientation.LANDSCAPE,
      //       styles: styles.landscapePage,
      //     }}
      //     pages={updatedPages}
      //     title={title}
      //     invoice={invoice}
      //     entry={entry}
      //     customer={customer}
      //     max_items={max_items}
      //     printColumns={printColumns}
      //     printTableStyles={printTableStyles}
      //     items={items}
      //     products={products}
      //     clientInformation={clientInformation}
      //     settingsInfo={
      //       paymentUrl != ''
      //         ? { ...settingsInfo, qr_code: paymentUrl }
      //         : settingsInfo
      //     }
      //     client={clientInformation}
      //     dynamicPagination={invoice?.dynamic_length ?? false}
      //     maxCharsPerLine={max_chars}
      //     snoStart={snoStart}
      //     blankLinesCount={blankLinesCount}
      //   />
      // )

      if (!print_layout) {
        const rows = (
          <DefaultRetailInvoice
            pageDetails={{
              pageSize: pageSize.A4,
              styles: styles.page,
              imageContainer: styles.imageContainer,
            }}
            pages={updatedPages}
            title={title}
            invoiceDetails={invoice}
            invoice={invoice}
            invoice_head={invoice_head}
            doctor_details={doctor_details}
            patient_details={patient_details}
            max_items={max_items}
            printColumns={printColumns}
            printTableStyles={printTableStyles}
            products_arr={products_arr}
            clientInformation={clientInformation}
            blockImage={
              window.location.origin + '/assets/images/blocks/block.png'
            }
            inventoryType={inventoryType}
            dynamicPagination={invoice?.dynamic_length ?? false}
            maxCharsPerLine={max_chars}
            snoStart={snoStart}
            blankLinesCount={blankLinesCount}
          />
        )
        pdf_pages = pdf_pages?.concat(rows)
      } else {
        switch (print_layout) {
          // DYNAMIC PAGINATION ENABLED
          case 'full_header_disc_retail': {
            const fullHeaderRows = (
              <FullHeaderInvoice
                pageDetails={{
                  pageSize: pageSize.A4,
                  styles: styles.page,
                  imageContainer: styles.imageContainer,
                }}
                pages={updatedPages}
                title={title}
                invoiceDetails={invoice}
                invoice={invoice}
                invoice_head={invoice_head}
                doctor_details={doctor_details}
                patient_details={patient_details}
                max_items={max_items}
                printColumns={printColumns}
                printTableStyles={printTableStyles}
                products_arr={products_arr}
                gstEnabled={gstEnabled}
                message={message}
                print_layout={print_layout}
                settingsInfo={
                  paymentUrl != ''
                    ? { ...settingsInfo, qr_code: paymentUrl }
                    : settingsInfo
                }
                clientInformation={clientInformation}
                inventoryType={inventoryType}
                dynamicPagination={invoice?.dynamic_length ?? false}
                maxCharsPerLine={max_chars}
                snoStart={snoStart}
                blankLinesCount={blankLinesCount}
                customerAddress={false}
              />
            )
            pdf_pages = pdf_pages?.concat(fullHeaderRows)
            break
          }
          case 'full_header_disc_retail_align': {
            const fullHeaderRows = (
              <FullHeaderInvoiceAlign
                pageDetails={{
                  pageSize: pageSize.A4,
                  // styles: styles.page,
                  imageContainer: styles.imageContainer2,
                }}
                pages={updatedPages}
                title={title}
                invoiceDetails={invoice}
                invoice={invoice}
                invoice_head={invoice_head}
                doctor_details={doctor_details}
                patient_details={patient_details}
                max_items={max_items}
                printColumns={printColumns}
                printTableStyles={printTableStyles}
                products_arr={products_arr}
                gstEnabled={gstEnabled}
                message={message}
                print_layout={print_layout}
                settingsInfo={
                  paymentUrl != ''
                    ? { ...settingsInfo, qr_code: paymentUrl }
                    : settingsInfo
                }
                clientInformation={clientInformation}
                inventoryType={inventoryType}
                dynamicPagination={invoice?.dynamic_length ?? false}
                maxCharsPerLine={max_chars}
                snoStart={snoStart}
                blankLinesCount={blankLinesCount}
                customerAddress={false}
              />
            )
            pdf_pages = pdf_pages?.concat(fullHeaderRows)
            break
          }
          case 'irn_full_header_vertical_a5_without_border': {
            const fullHeaderRows = (
              <IrnFullHeaderVerticalA5WithoutBorder
                pageDetails={{
                  pageSize: pageSize.LEGAL,
                  styles: styles.legalPage,
                  imageContainer: styles.imageContainer2,
                }}
                pages={updatedPages}
                title={title}
                invoiceDetails={invoice}
                invoice={invoice}
                invoice_head={invoice_head}
                doctor_details={doctor_details}
                patient_details={patient_details}
                max_items={max_items}
                printColumns={printColumns}
                printTableStyles={printTableStyles}
                products_arr={products_arr}
                gstEnabled={gstEnabled}
                message={message}
                print_layout={print_layout}
                settingsInfo={
                  paymentUrl != ''
                    ? { ...settingsInfo, qr_code: paymentUrl }
                    : settingsInfo
                }
                clientInformation={clientInformation}
                inventoryType={inventoryType}
                dynamicPagination={invoice?.dynamic_length ?? false}
                maxCharsPerLine={max_chars}
                snoStart={snoStart}
                blankLinesCount={blankLinesCount}
                customerAddress={false}
              />
            )
            pdf_pages = pdf_pages?.concat(fullHeaderRows)
            break
          }
          case 'full_header_block_empty': {
            const fullHeaderRows = (
              <FullHeaderBlockEmpty
                pageDetails={{
                  pageSize: pageSize.A4,
                  styles: styles.page,
                  imageContainer: styles.imageContainer,
                }}
                pages={updatedPages}
                title={title}
                invoiceDetails={invoice}
                invoice={invoice}
                invoice_head={invoice_head}
                doctor_details={doctor_details}
                patient_details={patient_details}
                max_items={max_items}
                printColumns={printColumns}
                printTableStyles={printTableStyles}
                products_arr={products_arr}
                gstEnabled={gstEnabled}
                message={message}
                print_layout={print_layout}
                settingsInfo={
                  paymentUrl != ''
                    ? { ...settingsInfo, qr_code: paymentUrl }
                    : settingsInfo
                }
                clientInformation={clientInformation}
                blockImage={
                  window.location.origin + '/assets/images/blocks/block.png'
                }
                inventoryType={inventoryType}
                dynamicPagination={invoice?.dynamic_length ?? false}
                maxCharsPerLine={max_chars}
                snoStart={snoStart}
                blankLinesCount={blankLinesCount}
              />
            )
            pdf_pages = pdf_pages?.concat(fullHeaderRows)
            break
          }
          case 'full_header_block_empty_new': {
            const fullHeaderRows = (
              <FullHeaderBlockEmptyNew
                pageDetails={{
                  pageSize: pageSize.A4,
                  styles: styles.page,
                  imageContainer: styles.imageContainer,
                }}
                pages={updatedPages}
                title={title}
                invoiceDetails={invoice}
                invoice={invoice}
                invoice_head={invoice_head}
                doctor_details={doctor_details}
                patient_details={patient_details}
                max_items={max_items}
                printColumns={printColumns}
                printTableStyles={printTableStyles}
                products_arr={products_arr}
                gstEnabled={gstEnabled}
                message={message}
                print_layout={print_layout}
                settingsInfo={
                  paymentUrl != ''
                    ? { ...settingsInfo, qr_code: paymentUrl }
                    : settingsInfo
                }
                clientInformation={clientInformation}
                blockImage={
                  window.location.origin + '/assets/images/blocks/block.png'
                }
                inventoryType={inventoryType}
                dynamicPagination={invoice?.dynamic_length ?? false}
                maxCharsPerLine={max_chars}
                snoStart={snoStart}
                blankLinesCount={blankLinesCount}
              />
            )
            pdf_pages = pdf_pages?.concat(fullHeaderRows)
            break
          }
          case 'compact_retail_invoice_normal_saved_amount': {
            const fullHeaderRows = (
              <CompactRetailInvoiceNormalSavedAmount
                pageDetails={{
                  pageSize: pageSize.A4,
                  styles: styles.page,
                  imageContainer: styles.imageContainer,
                }}
                pages={updatedPages}
                title={title}
                invoiceDetails={invoice}
                invoice={invoice}
                invoice_head={invoice_head}
                doctor_details={doctor_details}
                patient_details={patient_details}
                max_items={max_items}
                printColumns={printColumns}
                printTableStyles={printTableStyles}
                products_arr={products_arr}
                gstEnabled={gstEnabled}
                message={message}
                print_layout={print_layout}
                settingsInfo={
                  paymentUrl != ''
                    ? { ...settingsInfo, qr_code: paymentUrl }
                    : settingsInfo
                }
                clientInformation={clientInformation}
                blockImage={
                  window.location.origin + '/assets/images/blocks/block.png'
                }
                inventoryType={inventoryType}
                user={user}
                dynamicPagination={invoice?.dynamic_length ?? false}
                maxCharsPerLine={max_chars}
                snoStart={snoStart}
                blankLinesCount={blankLinesCount}
              />
            )
            pdf_pages = pdf_pages?.concat(fullHeaderRows)
            break
          }
          case 'irn_with_due_amount': {
            const fullHeaderRows = (
              <IrnWithDueAmount
                pageDetails={{
                  pageSize: pageSize.A4,
                  orientation: orientation.LANDSCAPE,
                  styles: styles.page,
                }}
                pages={updatedPages}
                title={title}
                invoice={invoice}
                entry={entry}
                customer={customer}
                max_items={max_items}
                printColumns={printColumns}
                printTableStyles={printTableStyles}
                items={items}
                products={products}
                clientInformation={clientInformation}
                settingsInfo={
                  paymentUrl != ''
                    ? { ...settingsInfo, qr_code: paymentUrl }
                    : settingsInfo
                }
                print_layout={print_layout}
                fetchQRUrl={fetchQRUrl}
                clientAnalyticStats={clientAnalyticStats}
                snoStart={snoStart}
                blankLinesCount={blankLinesCount}
              />
            )
            pdf_pages = pdf_pages?.concat(fullHeaderRows)
            break
          }

          default: {
            const rows = (
              <DefaultRetailInvoice
                pageDetails={{
                  pageSize: pageSize.A4,
                  styles: styles.page,
                  imageContainer: styles.imageContainer,
                }}
                pages={updatedPages}
                title={title}
                invoiceDetails={invoice}
                invoice={invoice}
                invoice_head={invoice_head}
                doctor_details={doctor_details}
                patient_details={patient_details}
                max_items={max_items}
                printColumns={printColumns}
                printTableStyles={printTableStyles}
                products_arr={products_arr}
                clientInformation={clientInformation}
                blockImage={
                  window.location.origin + '/assets/images/blocks/block.png'
                }
                inventoryType={inventoryType}
                dynamicPagination={invoice?.dynamic_length ?? false}
                maxCharsPerLine={max_chars}
                snoStart={snoStart}
                blankLinesCount={blankLinesCount}
              />
            )
            pdf_pages = pdf_pages?.concat(rows)
            break
          }
        }
      }
      inv++
    } while (inv < bulkInvoices?.length)

    return pdf_pages
  }

  function createCMDThermal() {
    const printTitle = () => {
      let str =
        '---------------------------------------------------------------'
      const total_chars_per_line = str.length
      let esc = '\x1B'
      let newLine = '\x0A'
      let emptyLine = Array(total_chars_per_line).fill(' ').join('')
      let header = esc + '@'
      let newString
      let hl =
        '----------------------------------------------------------------' +
        newLine

      header += esc + '!' + '\x28'

      header += centerAlign(invoice?.firm_name, 'title')
      header += esc + '!' + '\x00'
      header += newLine
      header += centerAlign(`${invoice?.line_1.slice(0, 48)}`)
      header += newLine
      header += centerAlign(`${invoice?.line_2.slice(0, 48)}`)
      header += newLine
      header += centerAlign(`${invoice?.city}-${invoice?.pincode}`)
      header += newLine
      header += centerAlign(`Mob: ${invoice?.landline}`)
      header += newLine
      header += centerAlign(`GSTIN: ${invoice?.gstin}`)
      header += newLine

      header += esc + '!' + '\x01'
      header += hl

      header += `TO : ${entry?.patient_details?.name}`
      header += newLine
      header += `Mob: ${entry?.patient_details?.mobile}`
      header += newLine
      header += `Invoice : ${entry?.entry_number}`
      header += rightAlign(
        `Date : ${moment(entry?.entry_date).format('DD/MM/YY')}`
      )
      header += newLine
      header += rightAlign(
        `Time : ${moment(entry?.created_at).utc().local().format('HH:MM')}`,
        '',
        16
      )
      return header
    }
    const printTable = () => {
      let str =
        '---------------------------------------------------------------'
      const total_chars_per_line = str.length

      console.log('TOTAL : ', total_chars_per_line)

      let emptyLine = Array(total_chars_per_line).fill(' ').join('')
      let emptySecondLine = Array(total_chars_per_line).fill(' ').join('')

      let cmds = ''
      let newLine = '\x0A'
      let esc = '\x1B'
      let hl =
        newLine +
        '----------------------------------------------------------------' +
        newLine
      cmds += hl

      emptyLine = emptyLine.replaceAt(0, 'S.No.')
      emptyLine = emptyLine.replaceAt(6, 'Product')
      emptyLine = emptyLine.replaceAt(30, 'Qty')
      // emptyLine = emptyLine.replaceAt(35, 'MRP');
      emptyLine = emptyLine.replaceAt(40, 'Our Price')
      emptyLine = emptyLine.replaceAt(58, 'Amount')
      emptySecondLine = emptySecondLine.replaceAt(0, 'MRP')
      emptySecondLine = emptySecondLine.replaceAt(14, 'Gst%')
      cmds += emptyLine + emptySecondLine + hl

      products.map((item, i) => {
        if (i !== 0) {
          cmds += newLine
        }
        let emptyLine_child = Array(total_chars_per_line).fill(' ').join('')
        let emptySecondLine_child = Array(total_chars_per_line)
          .fill(' ')
          .join('')

        let item_order = parseInt(item?.item_order) + 1
        emptyLine_child = emptyLine_child.replaceAt(1, item_order.toString())
        let product_line_1
        let product_line_2
        product_line_1 = item?.product_name.slice(0, 22)
        if (item?.product_name?.length > 22) {
          product_line_2 = item?.product_name.slice(22, 44)
        }
        emptyLine_child = emptyLine_child.replaceAt(6, product_line_1)
        let quantity = (
          item?.return_quantity ? item.return_quantity : item.sale_quantity
        ).toString()
        quantity = Array(5)
          .fill(' ')
          .join('')
          .replaceAt(5 - quantity.length, quantity)
        emptyLine_child = emptyLine_child.replaceAt(28, quantity)

        let our_price = `${item?.selling_price.toFixed(2)}`
        our_price = Array(8)
          .fill(' ')
          .join('')
          .replaceAt(8 - our_price.length, our_price)

        emptyLine_child = emptyLine_child.replaceAt(40, our_price)

        let sale_value = (
          item?.sale_value
            ? item.sale_value.toFixed(2)
            : item.return_value.toFixed(2)
        ).toString()
        sale_value = Array(9)
          .fill(' ')
          .join('')
          .replaceAt(10 - sale_value.length, sale_value)
        emptyLine_child = emptyLine_child.replaceAt(54, sale_value.toString())
        let temp_emptyline
        if (product_line_2?.length >= 1) {
          temp_emptyline = Array(total_chars_per_line).fill(' ').join('')
          temp_emptyline = temp_emptyline.replaceAt(6, product_line_2)
        }
        let mrp = `${parseFloat(item?.mrp).toFixed(2)}`

        emptySecondLine_child = emptySecondLine_child.replaceAt(0, mrp)

        let gst = parseFloat(item?.gst).toFixed(1)

        emptySecondLine_child = emptySecondLine_child.replaceAt(14, gst)
        cmds += emptyLine_child
        if (product_line_2?.length >= 1) {
          cmds += temp_emptyline
          cmds += newLine
        }
        cmds += emptySecondLine_child
      })

      cmds += newLine
      cmds += newLine
      cmds += esc + '!' + '\x08'
      let emptyLine_footer1 = Array(48).fill(' ').join('')
      emptyLine_footer1 = emptyLine_footer1.replaceAt(26, 'Sub Total')
      let sub_total = `${parseFloat(entry?.gross_total || 0).toFixed(2)}`
      sub_total = Array(10)
        .fill(' ')
        .join('')
        .replaceAt(10 - sub_total.length, sub_total)
      emptyLine_footer1 = emptyLine_footer1.replaceAt(38, sub_total.toString())
      emptyLine_footer1 += newLine

      let emptyLine_footer2 = Array(48).fill(' ').join('')
      let total_gst = `${parseFloat(entry?.total_gst_value || 0).toFixed(2)}`
      emptyLine_footer2 = emptyLine_footer2.replaceAt(26, 'Total Gst')
      // let total_taxes = (entry?.total_gst_value).toString();
      emptyLine_footer2 = emptyLine_footer2.replaceAt(
        48 - total_gst.length,
        total_gst
      )
      emptyLine_footer2 += newLine

      let emptyLine_footer3 = Array(48).fill(' ').join('')
      let round_off = `${parseFloat(entry?.rounding || 0).toFixed(2)}`
      emptyLine_footer3 = emptyLine_footer3.replaceAt(26, 'Round off')
      emptyLine_footer3 = emptyLine_footer3.replaceAt(
        48 - round_off.length,
        round_off
      )
      cmds += emptyLine_footer1
      cmds += emptyLine_footer2
      cmds += emptyLine_footer3
      cmds += esc + '!' + '\x00'
      cmds += newLine
      return cmds
    }
    const printFooter = () => {
      let total_chars_per_line = 24
      let esc = '\x1B'
      let newLine = '\x0A'
      let footer = ''
      let emptyLine = Array(total_chars_per_line).fill(' ').join('')
      let emptyLine2 = Array(
        '---------------------------------------------------------------'.length
      )
        .fill(' ')
        .join('')
      let hl =
        newLine +
        '------------------------------------------------------------------------------------------------' +
        newLine
      let newString
      footer += '------------------------------------------------'
      footer += esc + '!' + '\x28'
      emptyLine = emptyLine.replaceAt(0, 'Grand Total')
      let net_amount = parseFloat(entry?.net_amount || 0)
        .toFixed(2)
        .toString()

      net_amount = Array(10)
        .fill(' ')
        .join('')
        .replaceAt(10 - net_amount.length, net_amount)
      emptyLine = emptyLine.replaceAt(14, net_amount)
      footer += emptyLine
      footer += esc + '!' + '\x00'
      footer += '------------------------------------------------'
      footer += newLine
      footer += esc + '!' + '\x08'
      emptyLine2 = emptyLine2.replaceAt(0, 'Amount in Words :')
      let amount_in_words = convertNumToWords(entry.net_amount)
      emptyLine2 = emptyLine2.replaceAt(
        19,
        esc + '!' + '\x00' + amount_in_words.slice(0, 28)
      )
      footer += emptyLine2
      let amount_in_words_line_2 = ''
      let temp_line_2_empty
      if (amount_in_words?.length > 28) {
        temp_line_2_empty = Array(total_chars_per_line).fill(' ').join('')
        amount_in_words_line_2 = amount_in_words.slice(28, 56)
        temp_line_2_empty = temp_line_2_empty.replaceAt(
          7,
          amount_in_words_line_2
        )
        footer += temp_line_2_empty
      }
      let amount_in_words_line_3
      let temp_line_3_empty = ''
      if (amount_in_words?.length > 57) {
        temp_line_3_empty = Array(total_chars_per_line).fill(' ').join('')
        amount_in_words_line_3 = amount_in_words.slice(56, 85)
        temp_line_3_empty = temp_line_3_empty.replaceAt(
          20,
          amount_in_words_line_3
        )
        footer += temp_line_3_empty
      }

      footer += newLine
      footer += newLine
      let emptyline_total_items = Array(total_chars_per_line).fill(' ').join('')
      emptyline_total_items = emptyline_total_items.replaceAt(
        0,
        `Total Items : ${products?.length}`
      )

      emptyline_total_items = emptyline_total_items.replaceAt(
        23,
        'Total Quantity :'
      )
      const total_quantity = products
        .map((item) =>
          item?.return_quantity ? item.return_quantity : item.sale_quantity
        )
        .reduce((prev, curr) => prev + curr, 0)
      let temp_total_quantity = total_quantity.toString()

      temp_total_quantity = Array(7)
        .fill(' ')
        .join('')
        .replaceAt(7 - temp_total_quantity.length, temp_total_quantity)
      emptyline_total_items = emptyline_total_items.replaceAt(
        43,
        temp_total_quantity
      )
      footer += emptyline_total_items
      footer += newLine
      footer += esc + '!' + '\x00'
      footer += '------------------------------------------------'
      footer += newLine
      footer += esc + '!' + '\x28'
      footer += ' THANK YOU VISIT AGAIN'
      footer += esc + '!' + '\x00'
      footer += newLine
      footer += newLine
      footer += `${invoice?.terms_and_conditions}`
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      footer += newLine
      return footer
    }
    const rightAlign = (str, type = 'condensed', offset = 0) => {
      let total_characters = type == 'condensed' ? 46 : 49
      let emptyLine = Array(total_characters).fill(' ').join('')
      let pointer = total_characters - str.length + offset
      return emptyLine?.replaceAt(pointer, str)
    }
    const centerAlign = (str, type = 'condensed') => {
      let total_characters = 40
      if (type == 'condensed') total_characters = 47
      else if (type == 'title') total_characters = 24
      let emptyLine = Array(total_characters).fill(' ').join('')
      let pointer = parseInt(total_characters / 2) - str.length / 2
      console.log('center emptyLine', emptyLine, 'typeof', typeof emptyLine)
      console.log('center pointer', pointer, 'typeof', typeof pointer)
      console.log('center str', str, 'typeof', typeof str)
      return emptyLine?.replaceAt(pointer, str)
    }
    // function convertNumberToWords(amount) {
    //   var words = new Array();
    //   words[0] = '';
    //   words[1] = 'One';
    //   words[2] = 'Two';
    //   words[3] = 'Three';
    //   words[4] = 'Four';
    //   words[5] = 'Five';
    //   words[6] = 'Six';
    //   words[7] = 'Seven';
    //   words[8] = 'Eight';
    //   words[9] = 'Nine';
    //   words[10] = 'Ten';
    //   words[11] = 'Eleven';
    //   words[12] = 'Twelve';
    //   words[13] = 'Thirteen';
    //   words[14] = 'Fourteen';
    //   words[15] = 'Fifteen';
    //   words[16] = 'Sixteen';
    //   words[17] = 'Seventeen';
    //   words[18] = 'Eighteen';
    //   words[19] = 'Nineteen';
    //   words[20] = 'Twenty';
    //   words[30] = 'Thirty';
    //   words[40] = 'Forty';
    //   words[50] = 'Fifty';
    //   words[60] = 'Sixty';
    //   words[70] = 'Seventy';
    //   words[80] = 'Eighty';
    //   words[90] = 'Ninety';
    //   amount = amount.toString();
    //   var atemp = amount.split('.');
    //   var number = atemp[0].split(',').join('');
    //   var n_length = number.length;
    //   var words_string = '';
    //   if (n_length <= 9) {
    //     var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
    //     var received_n_array = new Array();
    //     for (var i = 0; i < n_length; i++) {
    //       received_n_array[i] = number.substr(i, 1);
    //     }
    //     for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
    //       n_array[i] = received_n_array[j];
    //     }
    //     for (var i = 0, j = 1; i < 9; i++, j++) {
    //       if (i == 0 || i == 2 || i == 4 || i == 7) {
    //         if (n_array[i] == 1) {
    //           n_array[j] = 10 + parseInt(n_array[j]);
    //           n_array[i] = 0;
    //         }
    //       }
    //     }
    //     var value = '';
    //     for (var i = 0; i < 9; i++) {
    //       if (i == 0 || i == 2 || i == 4 || i == 7) {
    //         value = n_array[i] * 10;
    //       } else {
    //         value = n_array[i];
    //       }
    //       if (value != 0) {
    //         words_string += words[value] + ' ';
    //       }
    //       if (
    //         (i == 1 && value != 0) ||
    //         (i == 0 && value != 0 && n_array[i + 1] == 0)
    //       ) {
    //         words_string += 'Crores ';
    //       }
    //       if (
    //         (i == 3 && value != 0) ||
    //         (i == 2 && value != 0 && n_array[i + 1] == 0)
    //       ) {
    //         words_string += 'Lakhs ';
    //       }
    //       if (
    //         (i == 5 && value != 0) ||
    //         (i == 4 && value != 0 && n_array[i + 1] == 0)
    //       ) {
    //         words_string += 'Thousand ';
    //       }
    //       if (
    //         i == 6 &&
    //         value != 0 &&
    //         n_array[i + 1] != 0 &&
    //         n_array[i + 2] != 0
    //       ) {
    //         words_string += 'Hundred and ';
    //       } else if (i == 6 && value != 0) {
    //         words_string += 'Hundred ';
    //       }
    //     }
    //     words_string = words_string.split('  ').join(' ');
    //   }
    //   words_string += 'Rupees Only';
    //   return words_string;
    // }
    function paymentInWords(mode) {
      switch (mode) {
        case 1:
          return 'CASH'
        case 2:
          return 'CARD'
        case 3:
          return 'CHEQUE'
        case 4:
          return 'CREDIT'
        case 5:
          return 'INSURANCE'
        case 6:
          return 'AMAZONPAY'
        case 7:
          return 'PHONEPAY'
        case 8:
          return 'GPAY'
        case 9:
          return 'PAYTM'
        default:
          return ''
      }
    }

    const pages = []
    const max_items = 100
    const count = (products.length / max_items).toFixed(0)
    let i = 0
    if (count > products.length / max_items) {
      for (i = 0; i < count; i++) {
        var start = max_items * i
        var end =
          products.length >= start + max_items
            ? start + max_items
            : products.length - start
        pages[i] = products.slice(start, end)
      }
    } else {
      for (i = 0; i < parseInt(count) + 1; i++) {
        var start = max_items * i
        var end =
          products.length >= start + max_items
            ? start + max_items
            : products.length
        pages[i] = products.slice(start, end)
      }
    }

    let cmdStr = ''
    pages.map((page) => {
      cmdStr += printTitle()
      cmdStr += printTable()
      cmdStr += printFooter()
    })
    console.log(cmdStr)
    return cmdStr
  }

  function createDoc() {
    return (
      <Document
        title={
          isBulkInvoices ? 'INVOICES COPY' : `INVOICE-${entry.entry_number}`
        }
        key={entry.entry_number}
      >
        {renderPrintLayout()}
      </Document>
    )
  }

  // if (isPreview) {
  return (
    <Fragment>
      <div style={{ height: '100%', width: isBulkInvoices ? '100%' : '' }}>
        <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
          {createDoc()}
        </PDFViewer>
      </div>
    </Fragment>
  )
  // }
  // return (
  //   <PDFViewer style={{ width: '100%', height: '100%' }}>
  //     <Document>{full_header_retail}</Document>
  //   </PDFViewer>
  // )
}
