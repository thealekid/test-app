import React, { Component } from 'react';
import ProductCard from './ProductCard';
import "../App.css";

class ProductContainer extends Component {

    displayItem = () => {
        if (this.props.selectedItem.description){
            return (
                <div className="product-list">
                    <ProductCard selectedItem={this.props.selectedItem} homePage={this.props.removeItem} inBasket={false} product={this.props.selectedItem} handleClick={this.props.addToCart}/> 
                    <h2>Product Description</h2>
                <p className="desc">{this.props.selectedItem.description}</p>
                </div>
            )
        }

        return this.props.products.map(product => <ProductCard selectedItem={this.props.selectedItem} inBasket={false} key={product.id} product={product} handleClick={this.props.selectItem}/> )
    }

    render(){
        return(
            <div className="product-collection">
                {this.displayItem()}
                <div className="desc-div">
                </div>
            </div>
        )
    }
}

export default ProductContainer;