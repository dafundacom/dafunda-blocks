import fontsList from "./fonts";
const { __ } = wp.i18n;

export const headingLevels = [1, 2, 3, 4, 5, 6];

export const textTransformOptions = [
	{
		value: "none",
		label: __("None", "dafunda-blocks"),
	},
	{
		value: "uppercase",
		label: __("Uppercase", "dafunda-blocks"),
	},
	{
		value: "lowercase",
		label: __("Lowercase", "dafunda-blocks"),
	},
	{
		value: "capitalize",
		label: __("Capitalize", "dafunda-blocks"),
	},
];

export const fontWeightOptions = [
	"Normal",
	"Bold",
	"100",
	"200",
	"300",
	"400",
	"500",
	"600",
	"700",
	"800",
	"900",
].map((o) => ({ value: o, label: __(o, "dafunda-blocks") }));

export const fontFamilyOptions = fontsList.map((fontFamilyOption) => ({
	value: fontFamilyOption,
	label: __(fontFamilyOption, "dafunda-blocks"),
}));
