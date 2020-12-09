import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "../App.css";

class NavButtons extends Component {

    render() {
        return(
            <div>
                <Link to="/">
                    <button className="home-button" >Home Page</button>
                </Link>
                <Link to="/basket">
                    <button className="basket-button" >Your Basket({this.props.numOfItems} items)</button>
                </Link>
            </div>
        )
    }
}

export default NavButtons;


