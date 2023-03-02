import React, { useEffect, useState } from "react";
import ScoreBoard from "./scoreboard";
import CardContainer from "./cardsContainer";
import { data } from "../utilities/data";
import { randamizeElements } from "../utilities/utils";

const Main = () => {
	const [bestScore, setBestScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [cards, setCards] = useState([]);
	const [clickedCardIds, setClickedCardIds] = useState([]);

	useEffect(() => {
		(() => {
			setCards(randamizeElements(data));
		})();
	}, []);

	const handleCardOnClick = (e) => {
		const cardId = e.target.parentNode.id;
		nextRound(cardId);
		setCards(randamizeElements(data));
	};

	const nextRound = (cardId) => {
		if (clickedCardIds.includes(cardId)) return resetGame();
		setClickedCardIds((prevState) => [...prevState, cardId]);
		scoreIncrement();
	};

	const scoreIncrement = () => {
		setCurrentScore(currentScore + 1);
		if (currentScore >= bestScore) {
			setBestScore(bestScore + 1);
		}
	};
	const resetGame = () => {
		setCurrentScore(0);
		setCards(randamizeElements(data));
	};
	return (
		<main className="background-pattern flex h-full select-none flex-col items-center overflow-scroll bg-primary">
			<ScoreBoard currentScore={currentScore} bestScore={bestScore} />
			<CardContainer cards={cards} handleOnClick={handleCardOnClick}></CardContainer>
		</main>
	);
};

export default Main;
