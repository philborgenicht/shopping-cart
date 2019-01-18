import React, { Component } from 'react'

class CartTotal extends Component {

  totalPrice = () => {
    let total = 0
    for (let elem of this.props.list) {
      total += (elem.product.priceInCents/100*elem.quantity)
    }
    return total.toFixed(2)
  }

  render () {
    return (
      <div className="cart-total container">
        <hr/>
          <div className="row pl-3">
            Total Price: ${this.totalPrice()}
          </div>
        <hr/>
      </div>
    )
  }
}

export default CartTotal
