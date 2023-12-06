import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import InvoiceTitleFullHeaderLogo from './InvoiceTitle'
import InvoiceItemsTableFullHeaderLogo from './InvoiceItemsTable'
import InvoiceFooterFullHeaderLogo from './InvoiceFooter'
import TempNoteFullHeaderLogo from './TempNote'
import InvoiceNote from './InvoiceNote'

const FullHeaderLogo = ({
  pageDetails: { pageSize, styles, imageContainer },
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
  fetchQRUrl = () => {},
  clientInformation,
  settingsInfo,
  crdb_amount,
  moduleSettings,
}) => {
  return pages.map((page, index, footer) => (
    <Page size={pageSize} style={styles}>
      <View style={imageContainer}>
        <InvoiceTitleFullHeaderLogo
          title={title}
          invoice={invoice}
          header={entry}
          customer={customer}
          logo_url={`${clientInformation?.client_logo}`}
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
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
        <InvoiceItemsTableFullHeaderLogo
          invoice={invoice}
          products={page}
          max_items={max_items}
          printColumns={printColumns}
          printTableStyles={printTableStyles}
          pageno={index}
          moduleSettings={moduleSettings}
        />
        <InvoiceNote footer={footer} />
        <InvoiceFooterFullHeaderLogo
          footer={entry}
          items={items}
          products={products}
          invoice={invoice}
          show_total={index == pages.length - 1 ? true : false}
          qr_code={`${
            settingsInfo?.qr_code == ''
              ? 'https://staticfilessp360.blob.core.windows.net/logos/white.jpg'
              : settingsInfo?.qr_code
          }`}
          crdb_amount={crdb_amount}
        />
        <TempNoteFullHeaderLogo
          footer={entry}
          page_number={`Page ${index + 1} of ${pages.length}`}
        />
      </View>
    </Page>
  ))
}

export default FullHeaderLogo
