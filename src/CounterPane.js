import React from 'react'
import { ContextConsumer } from './Context'

const CounterPane = () =>
  <div>
    <ContextConsumer>
      {({state, actions}) =>
        <div>
          <h1>Count: {state.count}</h1>
          <button onClick={actions.increment}>▲</button>
          <button onClick={actions.decrement}>▼</button>
          <button onClick={actions.setTo(10)}>10</button>
        </div>
      }
    </ContextConsumer>
  </div>

export default CounterPane
