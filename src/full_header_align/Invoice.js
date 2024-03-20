import React from 'react'
import { Page, View, StyleSheet } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import TempNote from './TempNote'
// import { customer, entry, products } from '../components/Constants'

const pageSize = { A4: 'A4', LEGAL: 'LEGAL' }
const orientation = { PORTRAIT: 'portrait', LANDSCAPE: 'landscape' }

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '15px',
    lineHeight: 1.5,
    flexDirection: 'column',
    size: pageSize.A4 + ' ' + orientation.LANDSCAPE,
  },
})

const Invoice = ({
  pageDetails: { pageSize, imageContainer },
  pages,
  title,
  invoiceDetails,
  invoice,
  invoice_head,
  doctor_details,
  patient_details,
  max_items,
  printColumns,
  printTableStyles,
  products_arr,
  gstEnabled,
  message,
  print_layout,
  settingsInfo,
  clientInformation,
  inventoryType,
  dynamicPagination = false,
  maxCharsPerLine,
  entry,
  customer,
  products,
  snoStart,
  blankLinesCount,
  customerAddress,
}) => {
  // let updatedPages = [];
  // let countsPerPage = [];
  // let copy = [];
  // let maxItems = max_items;
  // let new_line_height = maxCharsPerLine;

  // let i = 0;
  // let count = 0;
  // let pageNo = 0;
  // let lastPage = 0;
  // while (i < pages.length) {
  //   let floorValue = Math.floor(
  //     pages?.[i]?.product_name?.length / new_line_height,
  //   );
  //   let ceilValue = Math.ceil(
  //     pages?.[i]?.product_name?.length / new_line_height,
  //   );
  //   count = ceilValue > 1 ? count + floorValue : count + ceilValue;

  //   if (count < maxItems) {
  //     copy?.push(pages[i]);
  //     i++;
  //   } else {
  //     countsPerPage = [...countsPerPage, count];
  //     updatedPages = [...updatedPages, [...copy, pages[i]]];
  //     count = 0;
  //     copy = [];
  //     i++;
  //     pageNo++;
  //   }

  //   if (i == pages.length - 1) {
  //     lastPage = pageNo;
  //     countsPerPage = [...countsPerPage, count];
  //     updatedPages = [...updatedPages, copy];
  //   } else if (pages?.length === 1) {
  //     lastPage = 1;
  //     countsPerPage = [1];
  //     updatedPages = [copy];
  //   }
  // }

  return pages.map((page, index) => {
    return (
      <Page key={index} size={pageSize} style={styles.page}>
        <View style={imageContainer}>
          <InvoiceTitle
            title={title}
            invoice={invoiceDetails}
            // header={entry}
            header={invoice_head}
            // customer={customer}
            customer={patient_details}
            // doctor={entry}
            doctor={doctor_details}
            logo_url={`${clientInformation?.client_logo}`}
            inventoryType={inventoryType}
            customerAddress={customerAddress}
          />
          <InvoiceItemsTable
            invoice={invoice}
            products={page}
            max_items={max_items}
            printType={print_layout}
            printColumns={printColumns}
            printTableStyles={printTableStyles}
            pageno={index}
            dynamicPagination={dynamicPagination}
            maxCharsPerLine={maxCharsPerLine}
            snoStart={snoStart?.[index]}
            blankLinesCount={blankLinesCount?.[index]}
          />
          <InvoiceFooter
            invoice={invoice}
            // footer={entry}
            header={invoice_head}
            footer={invoice_head}
            // items={products?.length}
            items={page?.length}
            // products={products}
            products={page}
            gstEnabled={gstEnabled}
            printType={print_layout}
            qr_code={`${
              settingsInfo?.qr_code == ''
                ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
                : settingsInfo?.qr_code
            }`}
            message={message}
            show_total={index == pages.length - 1 ? true : false}
          />
          {/* <TempNote /> */}
        </View>
      </Page>
    )
  })
}

export default Invoice
