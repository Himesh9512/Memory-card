import React from "react";

const ResetModal = (props) => {
	const { display, currentScore, bestScore, handleGameOver } = props;
	return (
		<div
			style={{ display: display }}
			className="fixed top-0 left-0 z-[999] h-full w-full bg-[rgba(0,0,0,0.7)]">
			<div className="relative top-1/3 m-auto w-1/4 min-w-fit rounded-xl bg-secondary p-3 text-center max-sm:w-2/3">
				<span className="text-6xl font-bold">Oops!!!</span>
				<div className="m-2 flex justify-center gap-2 text-xl">
					<span>Current:{currentScore}</span>
					<span>Best:{bestScore}</span>
				</div>
				<button onClick={(e) => handleGameOver(e)}>
					<span className="material-icons">replay</span>
				</button>
			</div>
		</div>
	);
};

export default ResetModal;
