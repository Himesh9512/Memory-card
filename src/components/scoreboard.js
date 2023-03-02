import React from "react";

const ScoreBoard = ({ currentScore, bestScore }) => {
	return (
		<div className="m-8 flex min-w-fit max-w-md items-center justify-evenly gap-6 rounded-md bg-secondary p-4 text-3xl text-white">
			<span>CURRENT: {currentScore}</span>
			<span>BEST: {bestScore}</span>
		</div>
	);
};

export default ScoreBoard;
