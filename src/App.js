import React, { Component } from 'react'
import logo from './logo.svg'
import CounterPane from './CounterPane'
import AppProvider from './Context'
import './App.css'

class App extends Component {
  render () {
    return (
      // Declare the scope of your context
      // This is useful because you can have multiple contexts
      <AppProvider>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>React Context API</h1>
          </header>

          {/* No prop drilling for you! */}
          {/* Only 1 level for example purposes */}
          <CounterPane />

        </div>
      </AppProvider>
    )
  }
}

export default App
