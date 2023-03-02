import React from "react";

const Footer = () => {
	return (
		<footer className="relative top-full flex h-[10%] items-center justify-center bg-slate-800 text-2xl font-thin text-slate-50">
			<div>
				Created by{" "}
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Himesh9512"
					className="text-blue-400 hover:text-cyan-200">
					Himesh9512
				</a>
			</div>
		</footer>
	);
};

export default Footer;
