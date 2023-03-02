import React from "react";
import Card from "../utilities/card";

const CardContainer = ({ cards }) => {
	return (
		<div className="m-auto grid w-4/5 cursor-pointer grid-cols-custom justify-center gap-10 p-5">
			{cards.map((card) => {
				return <Card card={card} />;
			})}
		</div>
	);
};

export default CardContainer;
