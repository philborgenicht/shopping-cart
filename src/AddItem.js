import React, { Component } from 'react'


class AddItem extends Component {

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.addToList(this.state)
  }

  render() {
    return (
      <form className="container" onSubmit={this.submitForm}>
        <div className="form-group">
          <label htmlFor="Quantity">Quantity</label>
          <input name="quantity" type="number" className="form-control" id="quantity" placeholder="Enter quantity" onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="productsDropdown">Products</label>
          <select name="product" className="form-control" id="productsDropdown" onChange={this.onChange}>
            {this.props.products.map(item => <option key={item.id}>{item.name}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default AddItem
