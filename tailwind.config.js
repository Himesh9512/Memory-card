/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#000000",
				secondary: "#e23636",
			},
			gridTemplateColumns: {
				custom: "repeat(auto-fit,minmax(100px,250px))",
			},
			fontFamily: {
				marvel: "Marvel",
			},
		},
	},
	plugins: [],
};
