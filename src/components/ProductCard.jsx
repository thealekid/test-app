import React, {Component} from 'react';

class ProductCard extends Component {

    render() {
        return(
            <div classname="product-card">
                <img src={this.props.product.image} alt={this.props.product.title} className="product-avatar"/>
                <h2>{this.props.product.title}</h2>
                <p>{this.props.product.sku} , £{this.props.product.price}</p>
                <button className="basket-button">Add To Basket</button>

            </div>
        )
    }
}

export default ProductCard;