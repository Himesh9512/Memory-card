import React from "react";
import Card from "../utilities/card";

const CardContainer = ({ cards, handleOnClick }) => {
	return (
		<div className="m-auto grid w-4/5 grid-cols-custom justify-center gap-10 p-5">
			{cards.map((card) => {
				return <Card card={card} onClick={handleOnClick} />;
			})}
		</div>
	);
};

export default CardContainer;
