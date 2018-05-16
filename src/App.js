import React, { Component } from 'react'
import logo from './logo.svg'
import CounterPane from './CounterPane'
import { ContextProvider } from './Context'
import './App.css'

class App extends Component {
  render () {
    return (
      <ContextProvider>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React</h1>
          </header>

          <CounterPane />

        </div>
      </ContextProvider>
    )
  }
}

export default App
