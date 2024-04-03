import React, { Fragment } from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { borderColor, legalInvoiceStyle } from '../InvoiceStyles'
import Moment from 'moment'

import {
  InvoiceTableHeader,
  InvoiceTableRow,
  InvoiceTableBlankSpace,
} from '../../components/Table'

import { legalInvoiceStyleTableRight } from '../InvoiceStyles'

const { tableHeight, tableHeaderStyles, due, dueText, columns } =
  legalInvoiceStyleTableRight

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
      {/* <InvoiceTableHeader columns={tableColumns} styles={tableStyles} />
      <InvoiceTableRow
        items={products}
        columns={tableColumns}
        styles={tableStyles}
        max_items={max_items}
        pageno={pageno}
        snoStart={snoStart}
      />
      <InvoiceTableBlankSpace
        rowsCount={blankLinesCount}
        olumns={tableColumns}
        styles={tableStyles}
      /> */}

      <View style={tableHeight}>
        <View style={tableHeaderStyles}>
          <View style={due}>
            <Text style={dueText}>***** Due Bills Details *****</Text>
          </View>
          <View style={columns}>
            <Text>Date</Text>
            <Text>B.No</Text>
            <Text>Amt</Text>
            <Text>Days</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default InvoiceTable
