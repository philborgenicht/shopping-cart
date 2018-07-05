import React, { Component } from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader/>
        <CartItems/>
        <CartFooter
          copyright="2016"
        />
      </div>
    );
  }
}

export default App
