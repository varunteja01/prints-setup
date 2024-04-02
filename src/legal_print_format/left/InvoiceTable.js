import React from 'react'
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
      <InvoiceTableBlankSpace
        // rowsCount={max_items - products.length}
        rowsCount={blankLinesCount}
        olumns={tableColumns}
        styles={tableStyles}
      />
    </>
  )
}

export default InvoiceTable
