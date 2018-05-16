import React from 'react'
// import { ContextConsumer } from './Context'
import { withContext } from './Context'

// Render Props
// const CounterPane = () =>
//   <ContextConsumer>
//     {({state, actions}) =>
//       state.cards.map((card, i) =>
//         <div key={i}>
//           <h1>Count: {state.count}</h1>
//           <button onClick={actions.increment}>▲</button>
//           <button onClick={actions.decrement}>▼</button>
//           <button onClick={actions.setTo(10)}>10</button>
//         </div>)
//     }
//   </ContextConsumer>

// HOC
const CounterPane = ({ context: {state, actions} }) =>
  <div>
    <h1>Count: {state.count}</h1>
    <button onClick={actions.increment}>▲</button>
    <button onClick={actions.decrement}>▼</button>
    <button onClick={actions.setTo(10)}>10</button>
  </div>

export default withContext(CounterPane)
