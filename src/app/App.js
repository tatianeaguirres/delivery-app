import React from 'react'
import './App.scss'
import Menu from '../components/menu/menu'
import Header from '../components/header/header'
import NewDelivery from '../components/new-delivery/new-delivery'

function App() {
  return (
    <div className='App'>
      <Menu />
      <div>
        <Header />
        <NewDelivery />
      </div>
    </div>
  )
}

export default App
