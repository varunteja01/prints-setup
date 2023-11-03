import React from 'react'
// import App from './invoice'
import Invoice from './components/Invoice'
import { invoice, customer, title, entry } from './components/Constants'

const App = () => {
  return (
    <Invoice
      invoice={invoice}
      customer={customer}
      title={title}
      entry={entry}
    />
  )
}

export default App
