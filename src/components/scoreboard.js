import React from "react";

const ScoreBoard = (props) => {
	const { currentScore, bestScore } = props;
	return (
		<div className="m-8 flex min-w-fit max-w-md items-center justify-evenly gap-6 rounded-md bg-[#F0A04B] p-4 text-3xl text-white">
			<span className="text-dark-text">Current: {currentScore}</span>
			<span className="text-dark-text">Best: {bestScore}</span>
		</div>
	);
};

export default ScoreBoard;
