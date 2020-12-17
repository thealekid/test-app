import React from 'react'
import ProductCard from './ProductCard';
import "../App.css";

function Basket(props) {
    return (
        <div className="basket">
            {props.selectedItem.title ? props.removeItem() : null}
            {props.cart.map(product => <ProductCard selectedItem={{}} key={product.id} isAdding={false} product={product} handleClick={props.handleClick}/> )}
            <h3>Total</h3>
            {props.cart.length !== 0 ? props.cart.reduce((accumulator, product) => {return accumulator += product.price * product.quantity}, 0).toFixed(2) : 0} 
        </div>    
    )
}

export default Basket;
