import React from 'react'
import { Router } from '@reach/router'
import './App.scss'
import Menu from '../components/menu/menu'
import Header from '../components/header/header'
import NewDelivery from '../components/new-delivery/new-delivery'
import MyDeliveries from '../components/my-deliveries/my-deliveries'

function App() {
  return (
    <div className='App'>
      <Menu />
      <div>
        <Header />
        <Router>
          <NewDelivery path='/' />
          <MyDeliveries path='/my-deliveries' />
        </Router>
      </div>
    </div>
  )
}

export default App
