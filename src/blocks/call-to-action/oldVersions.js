export const oldAttributes = {
	dbe_call_to_action_headline_text: {
		type: "array",
		source: "children",
		selector: ".call_to_action_headline_text",
	},
	dbe_cta_content_text: {
		type: "array",
		source: "children",
		selector: ".cta_content_text",
	},
	dbe_cta_button_text: {
		type: "array",
		source: "children",
		selector: ".cta_button_text",
	},
	headFontSize: {
		type: "number",
		default: 30,
	},
	headColor: {
		type: "string",
		default: "#444444",
	},
	headAlign: {
		type: "string",
		default: "center",
	},
	contentFontSize: {
		type: "number",
		default: 15,
	},
	contentColor: {
		type: "string",
		default: "#444444",
	},
	buttonFontSize: {
		type: "number",
		default: 14,
	},
	buttonColor: {
		type: "string",
		default: "#E27330",
	},
	buttonTextColor: {
		type: "string",
		default: "#ffffff",
	},
	buttonWidth: {
		type: "number",
		default: 250,
	},
	ctaBackgroundColor: {
		type: "string",
		default: "#f8f8f8",
	},
	ctaBorderColor: {
		type: "string",
		default: "#ECECEC",
	},
	ctaBorderSize: {
		type: "number",
		default: 2,
	},
	url: {
		type: "string",
		source: "attribute",
		selector: "a",
		attribute: "href",
	},
	contentAlign: {
		type: "string",
		default: "center",
	},
	addNofollow: {
		type: "boolean",
		default: false,
	},
	openInNewTab: {
		type: "boolean",
		default: false,
	},
};

export const version_1_1_2 = (props) => {
	const {
		ctaBackgroundColor,
		ctaBorderSize,
		ctaBorderColor,
		headFontSize,
		headColor,
		dbe_call_to_action_headline_text,
		contentFontSize,
		contentColor,
		contentAlign,
		dbe_cta_content_text,
		buttonColor,
		buttonWidth,
		url,
		buttonTextColor,
		buttonFontSize,
		dbe_cta_button_text,
	} = props.attributes;
	return (
		<div className={props.className}>
			<div
				className="call_to_action"
				style={{
					backgroundColor: ctaBackgroundColor,
					border: ctaBorderSize + "px solid",
					borderColor: ctaBorderColor,
				}}
			>
				<div className="call_to_action_headline">
					<p
						className="call_to_action_headline_text"
						style={{
							fontSize: headFontSize + "px",
							color: headColor,
						}}
					>
						{dbe_call_to_action_headline_text}
					</p>
				</div>
				<div className="call_to_action_content">
					<p
						className="cta_content_text"
						style={{
							fontSize: contentFontSize + "px",
							color: contentColor,
							textAlign: contentAlign,
						}}
					>
						{dbe_cta_content_text}
					</p>
				</div>
				<div className="call_to_action_button">
					<span
						className={`wp-block-button cta_button`}
						style={{
							backgroundColor: buttonColor,
							width: buttonWidth + "px",
						}}
					>
						<a href={url} target="_blank">
							<p
								className="cta_button_text"
								style={{
									color: buttonTextColor,
									fontSize: buttonFontSize + "px",
								}}
							>
								{dbe_cta_button_text}
							</p>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export const version_1_1_4 = (props) => {
	const {
		ctaBackgroundColor,
		ctaBorderSize,
		ctaBorderColor,
		headFontSize,
		headColor,
		dbe_call_to_action_headline_text,
		contentFontSize,
		contentColor,
		contentAlign,
		dbe_cta_content_text,
		buttonColor,
		buttonWidth,
		url,
		buttonTextColor,
		buttonFontSize,
		dbe_cta_button_text,
	} = props.attributes;
	return (
		<div className={props.className}>
			<div
				className="call_to_action"
				style={{
					backgroundColor: ctaBackgroundColor,
					border: ctaBorderSize + "px solid",
					borderColor: ctaBorderColor,
				}}
			>
				<div className="call_to_action_headline">
					<p
						className="call_to_action_headline_text"
						style={{
							fontSize: headFontSize + "px",
							color: headColor,
						}}
					>
						{dbe_call_to_action_headline_text}
					</p>
				</div>
				<div className="call_to_action_content">
					<p
						className="cta_content_text"
						style={{
							fontSize: contentFontSize + "px",
							color: contentColor,
							textAlign: contentAlign,
						}}
					>
						{dbe_cta_content_text}
					</p>
				</div>
				<div className="call_to_action_button">
					<span
						className={`wp-block-button cta_button`}
						style={{
							backgroundColor: buttonColor,
							width: buttonWidth + "px",
						}}
					>
						<a href={url} target="_blank" rel="noopener noreferrer">
							<p
								className="cta_button_text"
								style={{
									color: buttonTextColor,
									fontSize: buttonFontSize + "px",
								}}
							>
								{dbe_cta_button_text}
							</p>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export const version_1_1_5 = (props) => {
	const {
		ctaBackgroundColor,
		ctaBorderSize,
		ctaBorderColor,
		headFontSize,
		headColor,
		headAlign,
		dbe_call_to_action_headline_text,
		contentFontSize,
		contentColor,
		contentAlign,
		dbe_cta_content_text,
		buttonColor,
		buttonWidth,
		url,
		buttonTextColor,
		buttonFontSize,
		dbe_cta_button_text,
	} = props.attributes;
	return (
		<div className={props.className}>
			<div
				className="call_to_action"
				style={{
					backgroundColor: ctaBackgroundColor,
					border: ctaBorderSize + "px solid",
					borderColor: ctaBorderColor,
				}}
			>
				<div className="call_to_action_headline">
					<p
						className="call_to_action_headline_text"
						style={{
							fontSize: headFontSize + "px",
							color: headColor,
							textAlign: headAlign,
						}}
					>
						{dbe_call_to_action_headline_text}
					</p>
				</div>
				<div className="call_to_action_content">
					<p
						className="cta_content_text"
						style={{
							fontSize: contentFontSize + "px",
							color: contentColor,
							textAlign: contentAlign,
						}}
					>
						{dbe_cta_content_text}
					</p>
				</div>
				<div className="call_to_action_button">
					<span
						className={`wp-block-button cta_button`}
						style={{
							backgroundColor: buttonColor,
							width: buttonWidth + "px",
						}}
					>
						<a href={url} target="_blank" rel="noopener noreferrer">
							<p
								className="cta_button_text"
								style={{
									color: buttonTextColor,
									fontSize: buttonFontSize + "px",
								}}
							>
								{dbe_cta_button_text}
							</p>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export const version_2_0_0 = (props) => {
	const {
		ctaBackgroundColor,
		ctaBorderSize,
		ctaBorderColor,
		headFontSize,
		headColor,
		headAlign,
		dbe_call_to_action_headline_text,
		contentFontSize,
		contentColor,
		contentAlign,
		dbe_cta_content_text,
		buttonColor,
		buttonWidth,
		url,
		buttonTextColor,
		buttonFontSize,
		dbe_cta_button_text,
		addNofollow,
		openInNewTab,
	} = props.attributes;
	return (
		<div className={props.className}>
			<div
				className="call_to_action"
				style={{
					backgroundColor: ctaBackgroundColor,
					border: ctaBorderSize + "px solid",
					borderColor: ctaBorderColor,
				}}
			>
				<div className="call_to_action_headline">
					<p
						className="call_to_action_headline_text"
						style={{
							fontSize: headFontSize + "px",
							color: headColor,
							textAlign: headAlign,
						}}
					>
						{dbe_call_to_action_headline_text}
					</p>
				</div>
				<div className="call_to_action_content">
					<p
						className="cta_content_text"
						style={{
							fontSize: contentFontSize + "px",
							color: contentColor,
							textAlign: contentAlign,
						}}
					>
						{dbe_cta_content_text}
					</p>
				</div>
				<div className="call_to_action_button">
					<a
						href={url}
						target={openInNewTab ? "_blank" : "_self"}
						rel={`${addNofollow ? "nofollow " : ""}noopener noreferrer`}
						className={`wp-block-button cta_button`}
						style={{
							backgroundColor: buttonColor,
							width: buttonWidth + "px",
						}}
					>
						<p
							className="cta_button_text"
							style={{
								color: buttonTextColor,
								fontSize: buttonFontSize + "px",
							}}
						>
							{dbe_cta_button_text}
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export const updateFrom = (oldVersion) => {
	return { attributes: oldAttributes, save: oldVersion };
};
