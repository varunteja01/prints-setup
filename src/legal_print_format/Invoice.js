import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import { InvoiceHeaderLeft, InvoiceTableLeft, InvoiceFooterLeft } from './left'
import {
  InvoiceHeaderRight,
  InvoiceTableRight,
  InvoiceFooterRight,
} from './right'
import { legalInvoiceStyle } from './InvoiceStyles'
import './InvoiceStyles.css'
import Promo from './left/Promo'

const Invoice = ({
  pageDetails: { pageSize, orientation, styles },
  title,
  invoice,
  header,
  customer,
  logo_url,
  products,
  max_items,
  footer,
  items,
  customerTableColumns,
  customerTableStyles,
  vendorTableColumns,
  vendorTableStyles,
  show_total,
  crdb_amount,
  qr_code,
  promoContent,
  page_number,
  pageno,
  snoStart,
  blankLinesCount,
}) => {
  const { container, vendorContainer, customerContainer, intermediateSpace } =
    legalInvoiceStyle
  return (
    <Page size={pageSize} orientation={orientation} style={styles}>
      <View style={container}>
        <View style={vendorContainer}>
          <InvoiceHeaderLeft
            title={title}
            invoice={invoice}
            header={header}
            customer={customer}
            logo_url={logo_url}
          />
          <InvoiceTableLeft
            invoice={invoice}
            products={products}
            max_items={max_items}
            tableColumns={vendorTableColumns}
            tableStyles={vendorTableStyles}
            pageno={pageno}
            snoStart={snoStart}
            blankLinesCount={blankLinesCount}
          />
          <InvoiceFooterLeft
            footer={footer}
            items={items}
            products={products}
            invoice={invoice}
            qr_code={qr_code}
          />
          <Promo promoContent={promoContent} side="left" />
        </View>
        <View style={intermediateSpace}></View>
        <View style={customerContainer}>
          <InvoiceHeaderRight
            title={title}
            invoice={invoice}
            header={header}
            customer={customer}
            logo_url={logo_url}
          />
          <InvoiceTableRight
            invoice={invoice}
            products={products}
            max_items={max_items}
            tableColumns={customerTableColumns}
            tableStyles={customerTableStyles}
            pageno={pageno}
            snoStart={snoStart}
            blankLinesCount={blankLinesCount}
          />
          <InvoiceFooterRight
            footer={footer}
            items={items}
            products={products}
            invoice={invoice}
            show_total={show_total}
            qr_code={qr_code}
          />
          <Promo promoContent={promoContent} side="right" />
        </View>
      </View>
    </Page>
  )
}

export default Invoice
