
// RENDER PROPS
import React from 'react'
import { Context } from './Context'

// Render Props
const CounterPane = () =>
  <Context.Consumer>
    {({state, actions}) =>
      <div>
        <h1>Count: {state.count}</h1>
        <button onClick={actions.increment}>▲</button>
        <button onClick={actions.decrement}>▼</button>
        <button onClick={actions.setTo(10)}>10</button>
      </div>
    }
  </Context.Consumer>

export default CounterPane

// HOC
// import React from 'react'
// import { withContext } from './Context'

// const CounterPane = ({ context: {state, actions} }) =>
//   <div>
//     <h1>Count: {state.count}</h1>
//     <button onClick={actions.increment}>▲</button>
//     <button onClick={actions.decrement}>▼</button>
//     <button onClick={actions.setTo(10)}>10</button>
//   </div>

// export default withContext(CounterPane)
