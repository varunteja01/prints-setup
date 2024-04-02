import React, { Fragment } from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { borderColor, legalInvoiceStyle } from '../InvoiceStyles'
import Moment from 'moment'

import {
  InvoiceTableHeader,
  InvoiceTableRow,
  InvoiceTableBlankSpace,
} from '../../components/Table'

const InvoiceTable = ({
  invoice,
  products,
  max_items,
  tableColumns,
  tableStyles,
  pageno,
  snoStart,
  blankLinesCount,
}) => {
  return (
    <>
      <InvoiceTableHeader columns={tableColumns} styles={tableStyles} />
      <InvoiceTableRow
        items={products}
        columns={tableColumns}
        styles={tableStyles}
        max_items={max_items}
        pageno={pageno}
        snoStart={snoStart}
      />
      <InvoiceTableBlankSpace rowsCount={blankLinesCount} />
    </>
  )
}

export default InvoiceTable
