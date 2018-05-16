import React, { Component } from 'react'
import logo from './logo.svg'
import CounterPane from './CounterPane'
import { ContextProvider } from './Context'
import './App.css'

class App extends Component {
  render () {
    return (
      // Declare the scope of your context
      // This is useful because you can have multiple contexts
      <ContextProvider>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React</h1>
          </header>

          {/* No prop drilling for you! */}
          {/* Only 1 level for example purposes */}
          <CounterPane />

        </div>
      </ContextProvider>
    )
  }
}

export default App
