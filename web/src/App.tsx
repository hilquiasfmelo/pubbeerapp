import './global.css'

import { Header } from './components/Header'
import { Orders } from './components/Orders'
import { Party } from './components/Party'

export function App() {
  return (
    <>
      <Header />
      <Orders />
      <Party />
    </>
  )
}
