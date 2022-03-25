const colors = require("tailwindcss/colors");

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
		extend: {
			colors: {
				primary: colors.teal,
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
