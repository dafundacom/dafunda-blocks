const { RichText } = wp.editor;

export const oldAttributes = {
	notify_info: {
		type: "array",
		source: "children",
		selector: ".notify_text",
	},
	selected_notify: {
		type: "string",
		default: "notify_info",
	},
	align: {
		type: "string",
		default: "left",
	},
};

export const version_1_1_2 = (props) => {
	return (
		<div className={props.className}>
			<div className={props.attributes.selected_notify}>
				<p className="notify_text">{props.attributes.notify_info}</p>
			</div>
		</div>
	);
};

export const version_1_1_4 = (props) => {
	const { align, notify_info, selected_notify } = props.attributes;
	return (
		<div className={props.className}>
			<div className={selected_notify}>
				<RichText.Content
					tagName="p"
					style={{ textAlign: align }}
					value={notify_info}
				/>
			</div>
		</div>
	);
};

export const version_1_1_5 = (props) => {
	const { align, notify_info, selected_notify } = props.attributes;
	return (
		<div className={props.className}>
			<div className={selected_notify}>
				<RichText.Content
					tagName="p"
					className={"notify_text"}
					style={{ textAlign: align }}
					value={notify_info}
				/>
			</div>
		</div>
	);
};

export const updateFrom = (oldVersion) => ({
	attributes: oldAttributes,
	save: oldVersion,
});
