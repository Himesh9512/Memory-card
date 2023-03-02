import React from "react";

const ResetPopUpDialog = (props) => {
	const { currentScore, bestScore, handleGameOver } = props;
	return (
		<div>
			<span>Oops!!!</span>
			<div>
				<span>Current:{currentScore}</span>
				<span>Best:{bestScore}</span>
			</div>
			<button onClick={handleGameOver}>Restart</button>
		</div>
	);
};

export default ResetPopUpDialog;
