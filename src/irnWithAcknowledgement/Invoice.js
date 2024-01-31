import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import IrnWithAckInvoiceTitle from './InvoiceTitle'
import IrnWithAckInvoiceItemsTable from './InvoiceItemsTable'
import IrnWithAckInvoiceFooter from './InvoiceFooter'
import IrnWithAckNote from './IrnNote'
import IrnWithAckInvoiceAcknowledgement from './InvoiceAcknowledgement'

const IRNWithAcknowledgementA4Invoice = ({
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
  copyPrintColumns,
  copyPrintTableStyles,
  fetchQRUrl,
  clientInformation,
  settingsInfo,
  print_layout = '',
  invoiceStyles = {},
}) => {
  return pages.map((page, index) => (
    <Page size={pageSize} orientation={orientation} style={styles}>
      <View
        style={{
          flexDirection: 'row',
          fontFamily: 'Helvetica',
          height: '98%',
        }}
      >
        <View style={{ width: '73%' }}>
          <IrnWithAckInvoiceTitle
            title={title}
            invoice={invoice}
            header={entry}
            customer={customer}
            logo_url={`${clientInformation?.client_logo}`}
            invoiceStyles={invoiceStyles}
          />
          <IrnWithAckNote
            footer={entry}
            // qr_code={fetchQRUrl(entry?.irn_qrcode)}
            qr_code={`${
              settingsInfo?.qr_code == ''
                ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
                : settingsInfo?.qr_code
            }`}
          />
          <IrnWithAckInvoiceItemsTable
            invoice={invoice}
            products={page}
            max_items={max_items}
            printColumns={printColumns}
            printTableStyles={printTableStyles}
            pageno={index}
          />
          <IrnWithAckInvoiceFooter
            footer={entry}
            items={items}
            products={products}
            invoice={invoice}
            show_total={index == pages.length - 1 ? true : false}
            // irn_qr_code={fetchQRUrl(entry?.irn_qrcode)}
            irn_qr_code={`${
              settingsInfo?.irn_qrcode == ''
                ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
                : settingsInfo?.irn_qr_code
            }`}
            qr_code={`${
              settingsInfo?.qr_code == ''
                ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
                : settingsInfo?.qr_code
            }`}
          />
        </View>
        <View style={{ width: '27%' }}>
          <IrnWithAckInvoiceAcknowledgement
            title={title}
            invoice={invoice}
            header={entry}
            customer={customer}
            logo_url={`${clientInformation?.client_logo}`}
            max_items={max_items}
            printColumns={copyPrintColumns}
            printTableStyles={copyPrintTableStyles}
            products={page}
            show_total={index == pages.length - 1 ? true : false}
            qr_code={`${
              settingsInfo?.qr_code == ''
                ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
                : settingsInfo?.qr_code
            }`}
            print_layout={print_layout}
          />
        </View>
      </View>
    </Page>
  ))
}

export default IRNWithAcknowledgementA4Invoice
