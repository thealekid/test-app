import React, {Component} from 'react';
import "../App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

class ProductCard extends Component {

    render() {
        return(
            <div className="product-card">
                <div className="product-box">
                <div className="image-detail">
                <img src={this.props.product.image} alt={this.props.product.title} className="product-avatar"/>
                </div>
                <div className="product-content">
                <h4>{this.props.product.title}</h4>
                <p>{this.props.product.sku} , £{this.props.product.price}</p>
                </div>
                    </div>
                    {this.props.selectedItem.title ? <button className="go-button" onClick={() => this.props.homePage()}>Go Back</button> : null }
                <button className="basket-button" onClick={() => this.props.handleClick(this.props.product)}>{this.props.isAdding ? "Add To Basket" : "Remove From Basket"}</button>
            </div>
        )
    }
}

export default ProductCard;