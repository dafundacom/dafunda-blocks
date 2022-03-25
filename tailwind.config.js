const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: [
		"./*.{js,php}",
		"./**/*.{js,php}",
		"./**/**/*.{js,php}",
		"./**/**/**/*.{js,php}",
		"./**/**/**/**/*.{js,php}",
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
