import React from 'react';
import { Link } from 'react-router-dom';
import "./Soda.css"
const Soda = () => {
    return (
        <div className="Soda">
            <img src="https://www.britishfoodshop.com/cdn/shop/products/100700_1024x1024.jpg?v=1582078189" width="500rem"></img>
           <h1><Link to="/">Go back</Link></h1> 
        </div>
    );
};

export default Soda;