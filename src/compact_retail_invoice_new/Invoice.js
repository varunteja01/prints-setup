import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitle from './InvoiceTitle'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceFooter from './InvoiceFooter'
import TempNote from './TempNote'
import { customer, entry } from '../components/Constants'

const Invoice = ({
  pageDetails: { pageSize, styles, imageContainer },
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
  user,
  entry,
  customer,
}) => {
  // console.log('1', pageSize);
  // console.log('2', styles);
  // console.log('3', imageContainer);
  // console.log('3.1', pages);
  // console.log('4', invoice);
  // console.log('5', invoice_head);
  // console.log('6', doctor_details);
  // console.log('7', patient_details);
  // console.log('8', max_items);
  // console.log('9', printColumns);
  // console.log('10', printTableStyles);
  // console.log('11', products_arr);
  // console.log('12', gstEnabled);
  // console.log('13', message);
  // console.log('14', print_layout);
  // console.log('15', settingsInfo);
  // console.log('16', clientInformation);

  return pages.map((page, index) => (
    <Page size={pageSize} style={styles}>
      <View style={imageContainer}>
        <InvoiceTitle
          title={title}
          invoice={invoice}
          header={entry}
          customer={customer}
          doctor={entry}
          logo_url={`${clientInformation?.client_logo}`}
          qr_code={`${
            settingsInfo?.qr_code == ''
              ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
              : settingsInfo?.qr_code
          }`}
          inventoryType={inventoryType}
          user={user}
        />
        <InvoiceItemsTable
          invoice={invoice}
          products={page}
          max_items={max_items}
          printType={print_layout}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
        />
        <InvoiceFooter
          invoice={invoice}
          footer={invoice_head}
          items={products_arr?.length}
          products={products_arr}
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
        <TempNote
          footer={entry}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ))
}

export default Invoice
