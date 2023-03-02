import React from "react";

const Card = (props) => {
	const { id, name, image } = props.card;
	return (
		<div
			key={id}
			className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-4 border-white bg-primary text-xl uppercase">
			<img src={image} alt={name} className="flex h-56 w-full" />
			<span className="p-2 font-bold">{name}</span>
		</div>
	);
};

export default Card;
