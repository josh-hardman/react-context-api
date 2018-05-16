import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext()

class AppProvider extends Component {

  state = {
    count: 0
  }

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

export const ContextProvider = AppProvider
export const ContextConsumer = Context.Consumer
