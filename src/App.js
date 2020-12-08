import React, {Component} from 'react';
import './App.css';

import ProductContainer from './components/ProductContainer';

const API = "https://raw.githubusercontent.com/thealekid/kelisto-frontend-js-challenge/master/data/products.json"

class App extends Component {

  state = {
    products: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      products: data
    }))
  }

  // renderProducts = () => {
  //   return this.state.products.map(product => <img src={product.image}/>)
  // } 

  render() {
    // if (this.state.products != null) {
    //   return (
    //     <div>
    //       {this.renderProducts()}
    //     </div>
    //   )
    // }
    return(

    <div className="App">
      <ProductContainer products={this.state.products}/>
    </div>

    )
  };
}

export default App;
