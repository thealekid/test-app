import React from 'react';
import ProductCard from './ProductCard'


const ProductContainer = (props) => {
    return(
        <div id="product-collection">
            {props.products.map(product => <ProductCard key={product.id} product={product}/> )}
        </div>
    )
}

export default ProductContainer;