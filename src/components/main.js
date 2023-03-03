import React, { useEffect, useState } from "react";

import { data } from "../utilities/data";
import { randamizeElements } from "../utilities/utils";

import ScoreBoard from "./scoreboard";
import CardContainer from "./cardsContainer";
import ResetModal from "../utilities/resetModal";

const Main = () => {
	const [bestScore, setBestScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [cards, setCards] = useState([]);
	const [clickedCardIds, setClickedCardIds] = useState([]);
	const [modalDisplay, setModalDisplay] = useState("none");

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
		if (clickedCardIds.includes(cardId)) return setModalDisplay("block");
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
		setClickedCardIds([]);
		setCurrentScore(0);
	};

	const handleGameOver = () => {
		setModalDisplay("none");
		resetGame();
	};
	return (
		<main className="background-pattern flex h-full select-none flex-col items-center overflow-scroll bg-primary">
			<ResetModal
				display={modalDisplay}
				currentScore={currentScore}
				bestScore={bestScore}
				handleGameOver={handleGameOver}
			/>
			<ScoreBoard currentScore={currentScore} bestScore={bestScore} />
			<CardContainer cards={cards} handleOnClick={handleCardOnClick}></CardContainer>
		</main>
	);
};

export default Main;
