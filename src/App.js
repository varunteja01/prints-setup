import React from 'react'
import Invoice from './components/Invoice'
import { tableData } from './components/TableData'
import { calculationTableData } from './components/CalculationTableData'
import {
  products,
  sendEmail,
  printColumns,
  printTableStyles,
  invoice,
  customer,
  title,
  entry,
  max_items,
  crdb_amount,
  isPreview,
  uploadBlob,
  printDetails,
  resetState,
  timestamp,
  printType,
  clientAnalyticStats,
  moduleSettings,
} from './components/Constants'

const App = () => {
  return (
    <Invoice
      pageDetails={{ pageSize: 'A4', orientation: 'landscape', styles: {} }}
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
      crdb_amount={crdb_amount}
      isPreview={isPreview}
      sendEmail={sendEmail}
      uploadBlob={uploadBlob}
      printDetails={printDetails}
      resetState={resetState}
      timestamp={timestamp}
      printType={printType}
      clientAnalyticStats={clientAnalyticStats}
      moduleSettings={moduleSettings}
    />
  )
}

export default App
