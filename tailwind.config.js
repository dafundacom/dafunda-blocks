module.exports = {
	darkMode: "class",
	content: [
		"../**.php",
		"../**/**.php",
		"./src/js/**.js",
		"**.php",
		"**/**.php",
		"src/js/**.js",
	],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
