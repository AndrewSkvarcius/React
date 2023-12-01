import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Message from "./Message";
import "./Candy.css"
const candyImg = "https://m.media-amazon.com/images/I/914gJ-bJ2mL.jpg";

const Candy = () => {
    const [bags, setBags] = useState([])

    function addBags(){
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setBags(prevBags => [...prevBags, { x, y }])
    }
    const c = bags.map((bag, i) => (
        <img
      key={i}
      src={candyImg}
      className="bag"
      style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
      alt="bag of gummy bears"
    />
    ));
    return (
        <div className="Candy">
            <Message>
            <h1>Sugar Consumed: {bags.length}</h1>
            <button onClick={addBags}>More Candy</button>
            <h1><Link to="/">Go back</Link></h1>
            </Message>
            {c}
        </div>
    );
};

export default Candy;