import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
const vendingImg = "https://www.megavending.com/assets/src/xo/d/e/MP40-HR40-Snack-Vending-Machine.jpg"
const VendingMachine = () => {
    return (
        <div className="VendingMachine">
           
                <Message>
        <h1>hello i am a vending machine. what would you like to eat?</h1>
      </Message>
      <img id="img" src={vendingImg}></img>
      <img id="img" src={vendingImg}></img>
            <Message>
            <h1><Link to="/Candy">Candy</Link></h1>
            <h1><Link to="/Chips">Chips</Link></h1>
            <h1><Link to="/Soda">Soda</Link></h1>
            </Message>
        </div>
    );
};

export default VendingMachine;