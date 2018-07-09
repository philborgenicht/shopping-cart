import React, { Component } from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'
import CartTotal from './CartTotal'

const cartItemsList = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 3.99 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 19.99 }, quantity: 1 },
]

const products = [
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 3.99 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 19.99 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 25.00 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 10.00 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 3.99 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 29.99 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 400.00 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 39.90 },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {cartItemsList: cartItemsList}
  }

  addToList = (elem) => {
    const item = this.state.cartItemsList.filter(product => product.product.name === elem.product)
    if (item.length === 1) {
      item[0].quantity += Number(elem.quantity)
      this.setState({cartItemsList: this.state.cartItemsList})
    } else {
      const itemFromProducts = products.filter(item => item.name === elem.product)[0]
      const id = this.state.cartItemsList[this.state.cartItemsList.length-1].id+1
      const newItem = {
        id: id,
        product: itemFromProducts,
        quantity: Number(elem.quantity)
      }
      this.setState({cartItemsList: [...this.state.cartItemsList, newItem]})
    }
  }


  render() {
    return (
      <div className="App">
        <CartHeader/>
        <CartItems
          list={this.state.cartItemsList}
        />
        <CartTotal
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
