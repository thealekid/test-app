import React, { Component } from 'react';
import ProductCard from './ProductCard';
import "../App.css";

class ProductContainer extends Component {

    displayItem = () => {
        if (this.props.selectedItem.description){
            return (
                <div className="product-list">
                    <ProductCard selectedItem={this.props.selectedItem} homePage={this.props.removeItem} isAdding={true} product={this.props.selectedItem} handleClick={this.props.addToCart}/> 
                </div>
            )
        }

        return this.props.products.map(product => <ProductCard selectedItem={this.props.selectedItem} isAdding={true} key={product.id} product={product} handleClick={this.props.selectItem}/> )
    }

    render(){
        return(
            <div className="product-collection">
                {this.displayItem()}
                <div className="desc-div">
                    <h2>Product Description</h2>
                <p className="desc">{this.props.selectedItem.description}</p>
                </div>
            </div>
        )
    }
}

export default ProductContainer;