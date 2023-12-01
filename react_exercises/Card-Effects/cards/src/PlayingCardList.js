import React from "react";
import useAxios from "./hooks/useAxios";
import { formatCard } from "./helper";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
"cards",
    "https://deckofcardsapi.com/api/deck/new/draw/",
  
  );
  const handleAddCard = () => {
    addCard(formatCard)
      .then(() => {
        // Additional logic after a card is successfully added
      })
      .catch((error) => {
        // Error handling if adding a card fails
        console.error("Error adding a card:", error);
      });
  };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {Array.isArray(cards) && cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>

  );
}

CardTable.defaultProps = {};

export default CardTable;
