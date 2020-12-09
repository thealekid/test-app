import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

import ProductContainer from './components/ProductContainer';
import NavButtons from './components/NavButtons';
import Basket from './components/Basket';

const API = "https://raw.githubusercontent.com/thealekid/kelisto-frontend-js-challenge/master/data/products.json"

class App extends Component {

  state = {
    products: [],
    cart: [],
    selectedItem: {}
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item
    })
  }

  removeSelectedItem = () => {
    this.setState({
      selectedItem: {}
    })
  }

  addItemToCart = (item) => {
      this.setState({
          cart: [...this.state.cart, item]
      })
  }

  removeFromCart = item => {
    const newCart = this.state.cart.filter(product => product !== item)
    this.setState({
      cart: [...newCart]
    })
  }


  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      products: data
    }))
  }

  render() {
    return(

    <div className="App">
      <NavButtons numOfItems={this.state.cart.length}/>
      <Switch>
        <Route exact path="/">
          <ProductContainer products={this.state.products} removeItem={this.removeSelectedItem}  selectItem={this.selectItem} addToCart={this.addItemToCart} selectedItem={this.state.selectedItem} />
        </Route>
        <Route exact path="/basket">
          <Basket cart={this.state.cart} removeItem={this.removeSelectedItem} handleClick={this.removeFromCart} selectedItem={this.state.selectedItem}/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </div>

    )
  };
}

export default App;
