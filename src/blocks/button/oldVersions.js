import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { generateIcon, dashesToCamelcase } from "../../common";
import { iconSize } from "./components";

export const oldAttributes = {
	buttonText: {
		type: "array",
		source: "children",
		selector: ".button-block-btn",
		default: "Button Text",
	},
	align: {
		type: "string",
		default: "center",
	},
	url: {
		type: "string",
		source: "attribute",
		selector: "a",
		attribute: "href",
	},
	size: {
		type: "string",
		default: "medium",
	},
	buttonColor: {
		type: "string",
		default: "#44c767",
	},
	buttonHoverColor: {
		type: "string",
		default: "#313131",
	},
	buttonTextColor: {
		type: "string",
		default: "#ffffff",
	},
	buttonTextHoverColor: {
		type: "string",
		default: "#ffffff",
	},
	buttonRounded: {
		type: "boolean",
		default: true,
	},
	chosenIcon: {
		type: "string",
		default: "",
	},
	iconPosition: {
		type: "string",
		default: "left",
	},
	buttonIsTransparent: {
		type: "boolean",
		default: false,
	},
	addNofollow: {
		type: "boolean",
		default: true,
	},
	openInNewTab: {
		type: "boolean",
		default: true,
	},
};

export const version_1_1_2 = (props) => {
	const {
		buttonText,
		align,
		url,
		size,
		buttonColor,
		buttonTextColor,
		buttonRounded,
	} = props.attributes;

	return (
		<div className={props.className}>
			<div className={"button-container align-button-" + align}>
				<a
					href={url}
					target="_blank"
					className={"button-block-btn button-" + size}
					style={{
						backgroundColor: buttonColor,
						color: buttonTextColor,
						borderRadius: buttonRounded ? "60px" : "0px",
					}}
				>
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export const version_1_1_4 = (props) => {
	const {
		buttonText,
		align,
		url,
		size,
		buttonColor,
		buttonTextColor,
		buttonRounded,
	} = props.attributes;

	return (
		<div className={props.className}>
			<div className={"button-container align-button-" + align}>
				<a
					href={url}
					target="_blank"
					className={"button-block-btn button-" + size}
					style={{
						backgroundColor: buttonColor,
						color: buttonTextColor,
						borderRadius: buttonRounded ? "60px" : "0px",
					}}
					rel="noopener noreferrer"
				>
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export const version_1_1_5 = (props) => {
	const {
		buttonText,
		align,
		url,
		size,
		buttonColor,
		buttonTextColor,
		buttonRounded,
	} = props.attributes;

	return (
		<div className={props.className}>
			<div className={"button-container align-button-" + align}>
				<a
					href={url}
					target="_blank"
					className={"button-block-btn button-" + size}
					style={{
						backgroundColor: buttonColor,
						color: buttonTextColor,
						borderRadius: buttonRounded ? "60px" : "0px",
					}}
					rel="noopener noreferrer"
				>
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export const version_2_0_0 = (props) => {
	const {
		buttonText,
		align,
		url,
		size,
		buttonColor,
		buttonTextColor,
		buttonHoverColor,
		buttonTextHoverColor,
		buttonRounded,
		chosenIcon,
		iconPosition,
		buttonIsTransparent,
		addNofollow,
		openInNewTab,
	} = props.attributes;

	const allIcons = Object.assign(fas, fab);

	return (
		<div
			className={`${props.className} button-container align-button-${align}`}
		>
			<a
				href={url}
				target={openInNewTab ? "_blank" : "_self"}
				rel={`noopener noreferrer${addNofollow ? " nofollow" : ""}`}
				className={`button-block-main button-${size}`}
				data-defaultColor={buttonColor}
				data-defaultTextColor={buttonTextColor}
				data-hoverColor={buttonHoverColor}
				data-hoverTextColor={buttonTextHoverColor}
				data-buttonIsTransparent={buttonIsTransparent}
				style={{
					backgroundColor: buttonIsTransparent ? "transparent" : buttonColor,
					color: buttonIsTransparent ? buttonColor : buttonTextColor,
					borderRadius: buttonRounded ? "60px" : "0px",
					border: buttonIsTransparent ? `3px solid ${buttonColor}` : "none",
				}}
			>
				<div
					className="button-content-holder"
					style={{
						flexDirection: iconPosition === "left" ? "row" : "row-reverse",
					}}
				>
					{chosenIcon &&
						chosenIcon !== "" &&
						allIcons.hasOwnProperty(`fa${dashesToCamelcase(chosenIcon)}`) && (
							<span className="button-icon-holder">
								{generateIcon(
									allIcons[`fa${dashesToCamelcase(chosenIcon)}`],
									iconSize[size]
								)}
							</span>
						)}
					<span className={"button-block-btn"}>{buttonText}</span>
				</div>
			</a>
		</div>
	);
};

export const updateFrom = (oldVersion) => {
	return { attributes: oldAttributes, save: oldVersion };
};
