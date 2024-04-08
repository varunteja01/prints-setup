import React from 'react'
import { Page, View, Text } from '@react-pdf/renderer'
import {
  InvoiceHeaderMiddle,
  InvoiceTableMiddle,
  InvoiceFooterMiddle,
} from './middle'

import { InvoiceHeaderLeft, InvoiceTableLeft, InvoiceFooterLeft } from './left'

import {
  InvoiceHeaderRight,
  InvoiceTableRight,
  InvoiceFooterRight,
} from './right'

import { legalInvoiceStyle } from './InvoiceStyles'

const Invoice = ({
  pageDetails: { pageSize, orientation, styles },
  pages,
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
  qr_code = {},
  promoContent,
  page_number,
  pageno,
  snoStart,
  blankLinesCount,
  inventoryType,
}) => {
  const {
    container,
    leftContainer,
    middleContainer,
    rightContainer,
    leftSpace,
    rightSpace,
  } = legalInvoiceStyle
  return (
    <Page size={pageSize} orientation={orientation} style={styles}>
      <View style={container}>
        <View style={leftContainer}>
          <InvoiceHeaderLeft
            title={title}
            invoice={invoice}
            header={header}
            customer={customer}
            logo_url={logo_url}
            inventoryType={inventoryType}
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
            show_total={show_total}
          />
        </View>
        <View style={leftSpace}></View>

        <View style={middleContainer}>
          <InvoiceHeaderMiddle
            title={title}
            invoice={invoice}
            header={header}
            customer={customer}
            logo_url={logo_url}
            inventoryType={inventoryType}
          />
          <InvoiceTableMiddle
            invoice={invoice}
            products={products}
            max_items={max_items}
            tableColumns={customerTableColumns}
            tableStyles={customerTableStyles}
            pageno={pageno}
            snoStart={snoStart}
            blankLinesCount={blankLinesCount}
          />
          <InvoiceFooterMiddle
            footer={footer}
            items={items}
            products={products}
            invoice={invoice}
            qr_code={qr_code}
            show_total={show_total}
          />
        </View>
        <View style={rightSpace}></View>
        <View style={rightContainer}>
          <InvoiceHeaderRight
            title={title}
            invoice={invoice}
            header={header}
            customer={customer}
            logo_url={logo_url}
            inventoryType={inventoryType}
          />
          <InvoiceTableRight
            invoice={invoice}
            products={products}
            max_items={max_items}
            // tableColumns={tableColumns}
            // tableStyles={tableStyles}
            tableColumns={vendorTableColumns}
            tableStyles={vendorTableStyles}
            pageno={pageno}
            snoStart={snoStart}
            blankLinesCount={blankLinesCount}
          />
          <InvoiceFooterRight
            footer={footer}
            items={items}
            products={products}
            invoice={invoice}
            qr_code={qr_code}
            show_total={show_total}
          />
        </View>
      </View>
    </Page>
  )
}

export default Invoice
