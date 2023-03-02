import React, { useState } from "react";
import ScoreBoard from "./scoreboard";

const Main = () => {
	const [bestScore, setBestScore] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);

	return (
		<main className="flex h-full flex-col items-center bg-[#FEFBE9]">
			<ScoreBoard currentScore={currentScore} bestScore={bestScore} />
		</main>
	);
};

export default Main;
