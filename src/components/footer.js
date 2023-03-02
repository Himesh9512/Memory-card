import React from "react";

const Footer = () => {
	return (
		<footer className="flex h-[10%] items-center justify-center bg-secondary text-2xl font-thin text-slate-50">
			<div>
				Created by{" "}
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Himesh9512"
					className="text-black hover:text-red-300">
					Himesh9512
				</a>
			</div>
		</footer>
	);
};

export default Footer;
