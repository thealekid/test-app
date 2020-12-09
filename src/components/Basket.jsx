import React from 'react'
import ProductCard from './ProductCard';
import "../App.css";

function Basket(props) {
    return (
        <div className="basket">
            {props.selectedItem.title ? props.removeItem() : null}
            {props.cart.map(product => <ProductCard selectedItem={{}} key={product.id} isAdding={false} product={product} handleClick={props.handleClick}/> )}
        </div>      
    )
}

export default Basket;
