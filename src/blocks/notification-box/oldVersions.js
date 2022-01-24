const { RichText } = wp.editor;

export const oldAttributes = {
	dbe_notify_info: {
		type: "array",
		source: "children",
		selector: ".dbe_notify_text",
	},
	dbe_selected_notify: {
		type: "string",
		default: "dbe_notify_info",
	},
	align: {
		type: "string",
		default: "left",
	},
};

export const version_1_1_2 = (props) => {
	return (
		<div className={props.className}>
			<div className={props.attributes.dbe_selected_notify}>
				<p className="dbe_notify_text">{props.attributes.dbe_notify_info}</p>
			</div>
		</div>
	);
};

export const version_1_1_4 = (props) => {
	const { align, dbe_notify_info, dbe_selected_notify } = props.attributes;
	return (
		<div className={props.className}>
			<div className={dbe_selected_notify}>
				<RichText.Content
					tagName="p"
					style={{ textAlign: align }}
					value={dbe_notify_info}
				/>
			</div>
		</div>
	);
};

export const version_1_1_5 = (props) => {
	const { align, dbe_notify_info, dbe_selected_notify } = props.attributes;
	return (
		<div className={props.className}>
			<div className={dbe_selected_notify}>
				<RichText.Content
					tagName="p"
					className={"dbe_notify_text"}
					style={{ textAlign: align }}
					value={dbe_notify_info}
				/>
			</div>
		</div>
	);
};

export const updateFrom = (oldVersion) => ({
	attributes: oldAttributes,
	save: oldVersion,
});
