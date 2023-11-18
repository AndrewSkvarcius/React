import React, { useState, useEffect, useRef} from 'react';
import Card from "./Card";
import "./Deck.css"
import axios from "axios";

const BASE_URL = "http://deckofcardsapi.com/api/deck";

// Uses Deck API to Deal Card at a time 
const Deck = () => {
    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [autoDeal, setAutoDeal] = useState(false);
    const timerRef = useRef(null);

// Loads deck from API into state
useEffect (() => {
    async function cardData() {
        let data = await axios.get(`${BASE_URL}/new/shuffle/`);
        setDeck(data.data);
    } 
    cardData();
},[setDeck])

// Deal a card every second if autoDeal is true

useEffect(() => {
    async function dealCard(){
        let {deck_id} = deck;

        try{
            let drawRes = await axios.get(`${BASE_URL}/${deck_id}/draw/`);

            if (drawRes.data.remaining === 0) {
                setAutoDeal(false);
                throw new Error(`All cards delt`);
            }

            const card = drawRes.data.cards[0];

            setDrawn(data => [
                ...data,
                {
                    id: card.code,
                    name: card.suit + " " + card.value,
                    image: card.image
                }
            ]);
        } catch(e){
            alert(e);
        }
    }
    

    if (autoDeal && !timerRef.current) {
        timerRef.current = setInterval(async() => {
            await dealCard();
        }, 1000);
    }

    return () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        };
    }, [autoDeal, setAutoDeal, deck]);

    const toggleAutoDeal = () => {
        setAutoDeal(autoDeal => !autoDeal);
    };

    const cards = drawn.map(card => (
        <Card key={card.id} name={card.name} image={card.image} />
    ));

    return (
        <div className="Deck">
            {deck ? (
                <button className="Deck-btn" onClick={toggleAutoDeal}>
                    {autoDeal ? "STOP" : "KEEP"} DRAWING
                </button>
            ) : null}
            <div className="Deck-card-area">
                {cards}

            </div>
        </div>
    )
}



export default Deck;