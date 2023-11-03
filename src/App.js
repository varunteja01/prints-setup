import React from 'react'
import Invoice from './components/Invoice'
import { tableData } from './components/TableData'
import { calculationTableData } from './components/CalculationTableData'
import { invoice, customer, title, entry } from './components/Constants'

const App = () => {
  return (
    <Invoice
      invoice={invoice}
      customer={customer}
      title={title}
      entry={entry}
      tableData={tableData}
      calculationTableData={calculationTableData}
    />
  )
}

export default App
