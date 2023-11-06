import React from 'react'
import Invoice from './components/Invoice'
import { tableData } from './components/TableData'
import { calculationTableData } from './components/CalculationTableData'
import { products } from './components/Constants'
import { printColumns } from './components/Constants'
import { printTableStyles } from './components/Constants'
import { invoice, customer, title, entry } from './components/Constants'
import { max_items } from './components/Constants'

const App = () => {
  return (
    <Invoice
      invoice={invoice}
      customer={customer}
      title={title}
      entry={entry}
      tableData={tableData}
      calculationTableData={calculationTableData}
      products={products}
      printColumns={printColumns}
      printTableStyles={printTableStyles}
      max_items={max_items}
    />
  )
}

export default App
