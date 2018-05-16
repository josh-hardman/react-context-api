import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Expose Context so you can use the Consumer in the render props pattern
export const Context = React.createContext()

class AppProvider extends Component {

  state = {
    count: 0
  }

  // Actions 
  increment = () => this.setState({ count: this.state.count + 1})
  decrement = () => this.setState({ count: this.state.count - 1})
  setTo = val => () => this.setState({ count: val})

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            increment: this.increment,
            decrement: this.decrement,
            setTo: this.setTo
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

AppProvider.propTypes = {
  children: PropTypes.node
}

// Wrap your app in the ContextProvider
export default AppProvider

// If you prefer wrapping your component in an HOC
export const withContext = Component => props => 
  <Context.Consumer>
    {context => <Component {...props} context={context} />}
  </Context.Consumer>
