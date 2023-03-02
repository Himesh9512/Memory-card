import React, { useEffect, useState } from "react";
import ScoreBoard from "./scoreboard";
import CardContainer from "./cardsContainer";
import { data } from "../utilities/data";

const Main = () => {
	const [bestScore, setBestScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		(() => {
			setCards(randamizeElements(data));
		})();
	}, []);

	const randamizeElements = (array) => {
		return [...array].sort(() => Math.random() - 0.5);
	};

	return (
		<main className="background-pattern flex h-full select-none flex-col items-center overflow-scroll bg-primary">
			<ScoreBoard currentScore={currentScore} bestScore={bestScore} />
			<CardContainer cards={cards}></CardContainer>
		</main>
	);
};

export default Main;
