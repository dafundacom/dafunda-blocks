const { __ } = wp.i18n;

const {
	RichText,
	ColorPalette,
	InspectorControls,
	URLInput,
	BlockControls,
	PanelColorSettings,
} = wp.blockEditor || wp.editor;

const {
	PanelBody,
	Icon,
	Button,
	ToolbarGroup,
	ToolbarButton,
	RangeControl,
	CheckboxControl,
	ToggleControl,
	SelectControl,
} = wp.components;

export const blockControls = (props) => {
	const { editable, attributes, setAttributes } = props;

	const { headAlign, contentAlign } = attributes;

	return (
		<BlockControls>
			{["header", "content"].includes(editable) && (
				<ToolbarGroup>
					{["left", "center", "right", "justify"]
						.slice(0, editable === "header" ? 3 : 4)
						.map((a) => (
							<ToolbarButton
								icon={`editor-${a === "justify" ? a : "align" + a}`}
								label={__(
									(a !== "justify" ? "Align " : "") +
										a[0].toUpperCase() +
										a.slice(1)
								)}
								isActive={
									(editable === "header" ? headAlign : contentAlign) === a
								}
								onClick={() =>
									setAttributes(
										editable === "header"
											? { headAlign: a }
											: { contentAlign: a }
									)
								}
							/>
						))}
				</ToolbarGroup>
			)}
		</BlockControls>
	);
};

export const inspectorControls = (props) => {
	const { attributes, setAttributes } = props;

	const {
		ctaBackgroundColor,
		ctaBorderColor,
		headFontSize,
		headColor,
		contentColor,
		contentFontSize,
		buttonWidth,
		buttonFontSize,
		buttonColor,
		buttonTextColor,
		addNofollow,
		openInNewTab,
		linkIsSponsored,
		useHeadingTag,
		selectedHeadingTag,
	} = attributes;

	const headingTagOptions = [
		{ value: "h2", label: __("H2", "dafunda-blocks") },
		{ value: "h3", label: __("H3", "dafunda-blocks") },
		{ value: "h4", label: __("H4", "dafunda-blocks") },
		{ value: "h5", label: __("H5", "dafunda-blocks") },
		{ value: "h6", label: __("H6", "dafunda-blocks") },
	];

	return (
		<InspectorControls>
			<PanelColorSettings
				title={__("Color Settings", "dafunda-blocks")}
				initialOpen={false}
				colorSettings={[
					{
						value: ctaBackgroundColor,
						onChange: (ctaBackgroundColor) =>
							setAttributes({ ctaBackgroundColor }),
						label: __("Background Color", "dafunda-blocks"),
					},
					{
						value: ctaBorderColor,
						onChange: (ctaBorderColor) => setAttributes({ ctaBorderColor }),
						label: __("Border Color", "dafunda-blocks"),
					},
				]}
			/>

			<PanelBody
				title={__("Headline Settings", "dafunda-blocks")}
				initialOpen={false}
			>
				<RangeControl
					label={__("Font Size", "dafunda-blocks")}
					value={headFontSize}
					onChange={(value) => setAttributes({ headFontSize: value })}
					min={10}
					max={200}
					beforeIcon="editor-textcolor"
					allowReset
				/>
				{typeof useHeadingTag !== "undefined" && (
					<ToggleControl
						label={__("Use Heading Tag", "dafunda-blocks")}
						checked={useHeadingTag}
						onChange={() => setAttributes({ useHeadingTag: !useHeadingTag })}
					/>
				)}
				{useHeadingTag && (
					<SelectControl
						label={__("Select Heading Tag", "dafunda-blocks")}
						options={headingTagOptions}
						value={selectedHeadingTag}
						onChange={(selectedHeadingTag) =>
							setAttributes({ selectedHeadingTag })
						}
					/>
				)}
				<p>
					{__("Color", "dafunda-blocks")}
					{headColor && (
						<span
							class="component-color-indicator"
							aria-label={`(Color: ${headColor})`}
							style={{ background: headColor }}
						/>
					)}
				</p>
				<ColorPalette
					value={headColor}
					onChange={(headColor) => setAttributes({ headColor })}
				/>
			</PanelBody>

			<PanelBody
				title={__("Content Settings", "dafunda-blocks")}
				initialOpen={false}
			>
				<RangeControl
					label={__("Font Size", "dafunda-blocks")}
					value={contentFontSize}
					onChange={(value) => setAttributes({ contentFontSize: value })}
					min={10}
					max={200}
					beforeIcon="editor-textcolor"
					allowReset
				/>
				<p>
					{__("Color", "dafunda-blocks")}
					{contentColor && (
						<span
							class="component-color-indicator"
							aria-label={`(Color: ${contentColor})`}
							style={{ background: contentColor }}
						/>
					)}
				</p>

				<ColorPalette
					value={contentColor}
					onChange={(contentColor) => setAttributes({ contentColor })}
				/>
			</PanelBody>

			<PanelBody
				title={__("Button Settings", "dafunda-blocks")}
				initialOpen={false}
			>
				<RangeControl
					label={__("Button Width", "dafunda-blocks")}
					value={buttonWidth}
					onChange={(value) => setAttributes({ buttonWidth: value })}
					min={10}
					max={500}
					beforeIcon="editor-code"
					allowReset
				/>

				<RangeControl
					label={__("Font Size", "dafunda-blocks")}
					value={buttonFontSize}
					onChange={(value) => setAttributes({ buttonFontSize: value })}
					min={10}
					max={200}
					beforeIcon="editor-textcolor"
					allowReset
				/>
				<p>
					{__("Button Color", "dafunda-blocks")}
					{buttonColor && (
						<span
							class="component-color-indicator"
							aria-label={`(Color: ${buttonColor})`}
							style={{ background: buttonColor }}
						/>
					)}
				</p>
				<ColorPalette
					value={buttonColor}
					onChange={(buttonColor) => setAttributes({ buttonColor })}
				/>

				<p>
					{__("Button Text Color", "dafunda-blocks")}
					{buttonTextColor && (
						<span
							class="component-color-indicator"
							aria-label={`(Color: ${buttonTextColor})`}
							style={{ background: buttonTextColor }}
						/>
					)}
				</p>
				<ColorPalette
					value={buttonTextColor}
					onChange={(buttonTextColor) => setAttributes({ buttonTextColor })}
				/>
			</PanelBody>
			<PanelBody
				title={__("Link Settings", "dafunda-blocks")}
				initialOpen={false}
			>
				<CheckboxControl
					label={__("Add Nofollow to Link", "dafunda-blocks")}
					checked={addNofollow}
					onChange={() => setAttributes({ addNofollow: !addNofollow })}
				/>
				<CheckboxControl
					label={__("Open Link in New Tab", "dafunda-blocks")}
					checked={openInNewTab}
					onChange={() => setAttributes({ openInNewTab: !openInNewTab })}
				/>
				<CheckboxControl
					label={__("Mark link as sponsored")}
					checked={linkIsSponsored}
					onChange={() => setAttributes({ linkIsSponsored: !linkIsSponsored })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export const editorDisplay = (props) => {
	const { isSelected, setState, attributes, setAttributes } = props;

	const {
		ctaBackgroundColor,
		ctaBorderColor,
		ctaBorderSize,
		headFontSize,
		headColor,
		headAlign,
		contentAlign,
		contentColor,
		contentFontSize,
		buttonWidth,
		buttonFontSize,
		buttonColor,
		buttonTextColor,
		dbe_call_to_action_headline_text,
		dbe_cta_content_text,
		dbe_cta_button_text,
		useHeadingTag,
	} = attributes;
	return (
		<>
			<div
				className="dbe_call_to_action"
				style={{
					backgroundColor: ctaBackgroundColor,
					borderWidth: ctaBorderSize + "px",
					borderColor: ctaBorderColor,
				}}
			>
				<div className="dbe_call_to_action_headline">
					<RichText
						tagName={useHeadingTag ? "h2" : "p"}
						placeholder={__("CTA Title Goes Here", "dafunda-blocks")}
						className="dbe_call_to_action_headline_text"
						style={{
							fontSize: headFontSize + "px",
							color: headColor || "inherit",
							textAlign: headAlign,
						}}
						onChange={(value) =>
							setAttributes({ dbe_call_to_action_headline_text: value })
						}
						value={dbe_call_to_action_headline_text}
						allowedFormats={["core/bold", "core/italic", "core/strikethrough"]}
						keepPlaceholderOnFocus={true}
						unstableOnFocus={() => setState({ editable: "header" })}
					/>
				</div>

				<div className="dbe_call_to_action_content">
					<RichText
						tagName="p"
						placeholder={__("Add Call to Action Text Here", "dafunda-blocks")}
						className="dbe_cta_content_text"
						style={{
							fontSize: contentFontSize + "px",
							color: contentColor || "inherit",
							textAlign: contentAlign,
						}}
						onChange={(value) => setAttributes({ dbe_cta_content_text: value })}
						value={dbe_cta_content_text}
						keepPlaceholderOnFocus={true}
						unstableOnFocus={() => setState({ editable: "content" })}
					/>
				</div>

				<div className="dbe_call_to_action_button">
					<span
						className={`wp-block-button dbe_cta_button`}
						style={{
							backgroundColor: buttonColor,
							width: buttonWidth + "px",
						}}
					>
						<RichText
							tagName="p"
							placeholder={__("Button Text", "dafunda-blocks")}
							className="dbe_cta_button_text"
							style={{
								color: buttonTextColor || "inherit",
								fontSize: buttonFontSize + "px",
							}}
							onChange={(value) =>
								setAttributes({ dbe_cta_button_text: value })
							}
							value={dbe_cta_button_text}
							keepPlaceholderOnFocus={true}
							unstableOnFocus={() => setState({ editable: "button" })}
						/>
					</span>
				</div>
			</div>
			<div className="dbe_call_to_action_url_input">
				{isSelected && (
					<form
						onSubmit={(event) => event.preventDefault()}
						className={`editor-format-toolbar__link-modal-line dbe_cta_url_input_box flex-container`}
					>
						<div className="dbe-icon-holder">
							<Icon icon="admin-links" />
						</div>
						<URLInput
							autoFocus={false}
							className="button-url"
							value={props.attributes.url}
							onChange={(value) => setAttributes({ url: value })}
							unstableOnFocus={() => setState({ editable: "URLInput" })}
						/>
						<Button
							icon={"editor-break"}
							label={__("Apply", "dafunda-blocks")}
							type={"submit"}
						/>
					</form>
				)}
			</div>
		</>
	);
};
