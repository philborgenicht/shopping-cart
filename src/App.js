import React, { Component } from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'

const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]

class App extends Component {

  addToList = (elem) => {
    const itemFromProducts = products.filter(item => item.name === elem.product)[0]
    const id = this.state.cartItemsList[this.state.cartItemsList.length-1].id+1
    const newItem = {
      id: id,
      product: itemFromProducts,
      quantity: elem.quantity
    }
    this.setState({cartItemsList: [...this.state.cartItemsList, newItem]})
  }

  constructor(props) {
    super(props)
    this.state = {cartItemsList: cartItemsList}
  }

  render() {
    return (
      <div className="App">
        <CartHeader/>
        <CartItems
          list={this.state.cartItemsList}
        />
        <AddItem
          products={products}
          addToList={this.addToList}
        />
        <CartFooter
          copyright="2016"
        />
      </div>
    );
  }
}

export default App
