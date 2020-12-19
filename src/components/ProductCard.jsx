import React, {Component} from 'react';
import "../App.css";


class ProductCard extends Component {

    state = {
        quantity: 1
    };

    IncrementProduct = () => {
        this.setState(prevState => {
            if(prevState.quantity < 6){
                return {
                    quantity: prevState.quantity + 1
                }
                } else {
                    return null;
            }
        })
    }

    DecrementProduct = () => {
        this.setState(prevState => {
            if(prevState.quantity > 0){
                return {
                    quantity: prevState.quantity - 1 
                }
                } else {
                    return null;
            }   
        })  
    }

    handleQuantityChange = (event) => {
        this.setState({quantity : event.target.value})
    }

    componentDidMount(){
        if(this.props.product.quantity !== undefined){
            this.setState({
                quantity: this.props.product.quantity
            })
        }
    }

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

                {this.props.selectedItem.title ? 
                <div>
                    <button onClick={this.IncrementProduct}>+</button>
                    <input value={this.state.quantity} onChange={this.handleQuantityChange}/>
                    <button onClick={this.DecrementProduct}>-</button>
                </div> : null}
                
                </div>
                    </div>
                    

                    {this.props.selectedItem.title ? <button className="basket-button" onClick={() => this.props.handleClick(this.props.product, this.state.quantity)}>
                     Add To Basket</button> : null}

                    {this.props.selectedItem.title ? 
                    <button className="go-button" onClick={() => this.props.homePage()}>
                        Go Back
                    </button> : this.props.inBasket ? <button className="basket-button" onClick={() => this.props.handleClick(this.props.product, this.state.quantity)}>
                     Remove From Basket</button> : <button className="view-item-button" onClick={() => this.props.handleClick(this.props.product)}>View Item</button> }
            </div>
        )
    }
}

export default ProductCard;