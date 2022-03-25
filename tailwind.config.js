const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: [
		"./*.{js,php}",
		"./src/*.{js,php}",
		"./src/**/*.{js,php}",
		"./src/**/**/*.{js,php}",
		"./src/**/**/**/*.{js,php}",
	],
	theme: {
		extend: {
			colors: {
				primary: colors.teal,
				secondary: colors.slate,
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
