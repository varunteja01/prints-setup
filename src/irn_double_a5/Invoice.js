import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitleFullHeaderDoubleA5 from './InvoiceTitle'
import InvoiceItemsTableFullHeaderDoubleA5 from './InvoiceItemsTable'
import InvoiceFooterFullHeaderDoubleA5 from './InvoiceFooter'
import TempNoteFullHeaderDoubleA5 from './TempNote'
import InvoiceNoteFullHeaderDoubleA5 from './InvoiceNote'
import InvoiceAcknowledgementFullHeaderDoubleA5 from './InvoiceAcknowledgement'

const DoubleA5Invoice = ({
  pageDetails: { pageSize, orientation, styles },
  pages,
  title,
  invoice,
  entry,
  customer,
  max_items,
  printColumns,
  printTableStyles,
  items,
  products,
  clientInformation,
  settingsInfo,
  crdb_amount,
  fetchQRURL,
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} orientation={orientation} style={styles}>
      <View style={{ height: '53%' }}>
        <InvoiceTitleFullHeaderDoubleA5
          title={title}
          invoice={invoice}
          header={entry}
          customer={customer}
          logo_url={`${clientInformation?.client_logo}`}
          showCompany={true}
          showCustomer={true}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
        <InvoiceItemsTableFullHeaderDoubleA5
          invoice={invoice}
          products={page}
          max_items={max_items}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
        />
        <InvoiceFooterFullHeaderDoubleA5
          footer={entry}
          items={items}
          products={products}
          invoice={invoice}
          show_total={index == pages.length - 1 ? true : false}
          page_number={index + 1}
          qr_code={`${
            settingsInfo?.qr_code == ''
              ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
              : settingsInfo?.qr_code
          }`}
          crdb_amount={crdb_amount}
          showGSTDetails={true}
          // fetchQRURL={fetchQRURL}
        />
      </View>
      <View style={{ height: '29%' }}>
        <InvoiceTitleFullHeaderDoubleA5
          title={title}
          invoice={invoice}
          header={entry}
          customer={customer}
          logo_url={`${clientInformation?.client_logo}`}
          showCompany={false}
          showCustomer={true}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
        <InvoiceItemsTableFullHeaderDoubleA5
          invoice={invoice}
          products={page}
          max_items={max_items}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
        />
        <InvoiceNoteFullHeaderDoubleA5
          footer={entry}
          page_number={`Page ${index + 1} of ${pages.length}`}
          show_total={index == pages.length - 1 ? true : false}
        />
      </View>
      <View style={{ height: '17%' }}>
        <InvoiceAcknowledgementFullHeaderDoubleA5
          title={title}
          invoice={invoice}
          header={entry}
          customer={customer}
          logo_url={`${clientInformation?.client_logo}`}
          show_total={index == pages.length - 1 ? true : false}
        />
        <TempNoteFullHeaderDoubleA5
          footer={entry}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ))
}

export default DoubleA5Invoice
