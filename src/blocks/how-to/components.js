import { Component } from "react";
import { convertFromSeconds } from "../../common";

const { __ } = wp.i18n; // Import __() from wp.i18n

const { RichText, MediaUpload, InspectorControls } =
	wp.blockEditor || wp.editor;

const { ToggleControl, PanelBody, RadioControl, RangeControl, SelectControl } =
	wp.components;

class InspectorPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			attributes: {
				advancedMode,
				section,
				sectionListStyle,
				suppliesListStyle,
				toolsListStyle,
				showUnitFirst,
				useSections,
				includeToolsList,
				addToolImages,
				includeSuppliesList,
				addSupplyImages,
				finalImageID,
				finalImageWidth,
				finalImageFloat,
				firstLevelTag,
				secondLevelTag,
				thirdLevelTag,
			},
			setAttributes,
			currentStep,
			updateState,
		} = this.props;

		let activeImage = { width: 0, float: "none" };

		let sectionNum = -1;
		let stepNum = -1;

		const tagList = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "strong"];

		if (currentStep !== "") {
			if (currentStep === "final") {
				if (finalImageID > -1) {
					activeImage = { width: finalImageWidth, float: finalImageFloat };
				}
			} else {
				const parsed = currentStep.split("-");

				if (useSections) {
					sectionNum = parseInt(parsed[1]);
					stepNum = parseInt(parsed[3]);

					if (!isNaN(stepNum)) {
						//exclude review image
						const { width, float, id } =
							section[sectionNum].steps[stepNum].stepPic;
						if (id > -1) {
							activeImage = { width, float };
						}
					}
				} else {
					stepNum = parseInt(parsed[1]);

					if (!isNaN(stepNum)) {
						//exclude review image
						const { width, float, id } = section[0].steps[stepNum].stepPic;
						if (id > -1) {
							activeImage = { width, float };
						}
					}
				}
			}
		}

		return (
			<InspectorControls>
				<PanelBody title={__("How To Settings")}>
					<ToggleControl
						label={__("Use sections")}
						checked={useSections}
						onChange={(useSections) => {
							setAttributes({ useSections });
							if (useSections) {
								let newSection = JSON.parse(JSON.stringify(section));
								newSection.forEach((ns, i) =>
									ns.steps.forEach((s, j) => {
										s.anchor = `section${i}step${j}`;
									})
								);
								if (currentStep !== "") {
									updateState({ currentStep: `section-0-${currentStep}` });
								}
							} else {
								updateState({
									currentStep: currentStep.slice(currentStep.indexOf("step")),
								});
								if (section.length < 1) {
									setAttributes({
										section: [{ sectionName: "", steps: [] }],
									});
								} else {
									let newSection = JSON.parse(JSON.stringify(section));
									newSection[0].steps.forEach((s, i) => {
										s.anchor = `step${i}`;
									});
									setAttributes({ section: newSection });
								}
							}
						}}
					/>
					<ToggleControl
						label={__("Use additional recommended attributes")}
						checked={advancedMode}
						onChange={(advancedMode) => setAttributes({ advancedMode })}
					/>
					{advancedMode && (
						<>
							<ToggleControl
								label={__("Include list of supplies")}
								checked={includeSuppliesList}
								onChange={(includeSuppliesList) =>
									setAttributes({ includeSuppliesList })
								}
							/>
							<ToggleControl
								label={__("Include list of tools")}
								checked={includeToolsList}
								onChange={(includeToolsList) =>
									setAttributes({ includeToolsList })
								}
							/>
							<ToggleControl
								label={__("Display the unit first in cost")}
								checked={showUnitFirst}
								onChange={(showUnitFirst) => setAttributes({ showUnitFirst })}
							/>
						</>
					)}
					{useSections && (
						<RadioControl
							label={__("Section list style")}
							selected={sectionListStyle}
							options={["none", "ordered", "unordered"].map((a) => ({
								label: __(a),
								value: a,
							}))}
							onChange={(sectionListStyle) =>
								setAttributes({ sectionListStyle })
							}
						/>
					)}
				</PanelBody>
				{activeImage.width > 0 && (
					<PanelBody title={__("Desktop image display settings")}>
						<RangeControl
							label={__("Image width")}
							value={activeImage.width}
							onChange={(imageWidth) => {
								if (currentStep === "final") {
									setAttributes({ finalImageWidth: imageWidth });
								} else {
									const parsed = currentStep.split("-");
									let sectionClone = JSON.parse(JSON.stringify(section));
									if (useSections) {
										sectionNum = parseInt(parsed[1]);
										stepNum = parseInt(parsed[3]);
									} else {
										stepNum = parseInt(parsed[1]);
									}
									sectionClone[Math.max(sectionNum, 0)].steps[
										stepNum
									].stepPic.width = imageWidth;

									setAttributes({ section: sectionClone });
								}
							}}
							min={200}
							max={800}
						/>
						<SelectControl
							label={__("Image float")}
							value={activeImage.float}
							onChange={(newFloatValue) => {
								if (currentStep === "final") {
									setAttributes({ finalImageFloat: newFloatValue });
								} else {
									const parsed = currentStep.split("-");
									let sectionClone = JSON.parse(JSON.stringify(section));
									if (useSections) {
										sectionNum = parseInt(parsed[1]);
										stepNum = parseInt(parsed[3]);
									} else {
										stepNum = parseInt(parsed[1]);
									}
									sectionClone[Math.max(sectionNum, 0)].steps[
										stepNum
									].stepPic.float = newFloatValue;

									setAttributes({ section: sectionClone });
								}
							}}
							options={["none", "left", "right"].map((a) => ({
								label: a,
								value: a,
							}))}
						/>
					</PanelBody>
				)}
				{advancedMode && includeSuppliesList && (
					<PanelBody title={__("Supplies list settings")}>
						<ToggleControl
							label={__("Enable adding image for each supply")}
							checked={addSupplyImages}
							onChange={(addSupplyImages) => setAttributes({ addSupplyImages })}
						/>
						<RadioControl
							label={__("Supplies list style")}
							selected={suppliesListStyle}
							options={["none", "ordered", "unordered"].map((a) => ({
								label: __(a),
								value: a,
							}))}
							onChange={(suppliesListStyle) =>
								setAttributes({ suppliesListStyle })
							}
						/>
					</PanelBody>
				)}
				{advancedMode && includeToolsList && (
					<PanelBody title={__("Tools list settings")}>
						<ToggleControl
							label={__("Enable adding image for each tool")}
							checked={addToolImages}
							onChange={(addToolImages) => setAttributes({ addToolImages })}
						/>
						<RadioControl
							label={__("Tools list style")}
							selected={toolsListStyle}
							options={["none", "ordered", "unordered"].map((a) => ({
								label: __(a),
								value: a,
							}))}
							onChange={(toolsListStyle) => setAttributes({ toolsListStyle })}
						/>
					</PanelBody>
				)}
				<PanelBody title={__("Tag Settings")}>
					<SelectControl
						label={__("Howto title tag")}
						value={firstLevelTag}
						options={tagList.map((tag) => ({ label: __(tag), value: tag }))}
						onChange={(firstLevelTag) => setAttributes({ firstLevelTag })}
					/>
					<SelectControl
						label={__("Section title tag")}
						value={secondLevelTag}
						options={tagList.map((tag) => ({ label: __(tag), value: tag }))}
						onChange={(secondLevelTag) => setAttributes({ secondLevelTag })}
					/>
					<SelectControl
						label={__("Step title tag")}
						value={thirdLevelTag}
						options={tagList.map((tag) => ({ label: __(tag), value: tag }))}
						onChange={(thirdLevelTag) => setAttributes({ thirdLevelTag })}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
const defaultTimeDisplay = {
	w: 0,
	d: 0,
	h: 0,
	m: 0,
	s: 0,
};

const ListWrapper = (props) => {
	const { className, children, listStyle } = props;
	return listStyle === "ordered" ? (
		<ol className={className ? className : null}>{children}</ol>
	) : (
		<ul
			className={className ? className : null}
			style={{ listStyleType: listStyle === "none" ? "none" : null }}
		>
			{children}
		</ul>
	);
};

class HowToStep extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startTime: Object.assign({}, defaultTimeDisplay),
			endTime: Object.assign({}, defaultTimeDisplay),
			validTimeInput: true,
		};
	}

	componentDidMount() {
		const {
			clips,
			hasVideoClip,
			videoClipEnd,
			videoClipStart,
			sectionNum,
			stepNum,
		} = this.props;

		if (hasVideoClip) {
			const start = convertFromSeconds(videoClipStart);
			const end = convertFromSeconds(videoClipEnd);
			const clipId =
				sectionNum > -1
					? `section${sectionNum}step${stepNum}`
					: `step${stepNum}`;
			this.setState({
				startTime: { w: 0, d: start.d, h: start.h, m: start.m, s: start.s },
				endTime: { w: 0, d: end.d, h: end.h, m: end.m, s: end.s },
				validTimeInput:
					clips.filter(
						(c) =>
							c.anchor !== clipId &&
							((videoClipStart > c.clipStart && videoClipStart < c.clipEnd) ||
								(videoClipEnd > c.clipStart && videoClipEnd < c.clipEnd))
					).length === 0,
			});
		}
	}

	componentDidUpdate(prevProps) {
		const {
			videoClipStart,
			videoClipEnd,
			sectionNum,
			stepNum,
			clips,
			videoURL,
		} = this.props;

		const clipId =
			sectionNum > -1 ? `section${sectionNum}step${stepNum}` : `step${stepNum}`;

		if (
			prevProps.videoClipStart !== videoClipStart ||
			prevProps.videoClipEnd !== videoClipEnd
		) {
			this.setState({
				validTimeInput:
					videoClipStart <= videoClipEnd &&
					clips.filter(
						(c) =>
							c.anchor !== clipId &&
							((videoClipStart > c.clipStart && videoClipStart < c.clipEnd) ||
								(videoClipEnd > c.clipStart && videoClipEnd < c.clipEnd))
					).length === 0,
			});
		}

		if (prevProps.videoURL !== videoURL) {
			this.setState({
				startTime: Object.assign({}, defaultTimeDisplay),
				endTime: Object.assign({}, defaultTimeDisplay),
			});
		}
	}

	render() {
		const {
			direction,
			tip,
			title,
			editStep,
			deleteStep,
			moveUp,
			moveDown,
			stepPic,
			stepTag,
			videoDuration,
			hasVideoClip,
			advancedMode,
			blockIsSelected,
			selectStep,
			stepNum,
		} = this.props;

		const { startTime, endTime, validTimeInput } = this.state;

		return (
			<>
				<li className="howto-step p-3 relative overflow-visible mt-12">
					<div className="howto-step__control-button absolute top-0 right-[10px] translate-y-[-50%] bg-gray-400 px-2 py-1 grid grid-cols-3 gap-2 rounded-lg">
						<button
							className="howto-arrow"
							icon="arrow-up-alt"
							onClick={() => moveUp()}
							label={__("Move step up")}
						>
							<i class="fa fa-arrow-up" aria-hidden="true"></i>
						</button>
						<button
							className="howto-arrow"
							icon="arrow-down-alt"
							onClick={() => moveDown()}
							label={__("Move step down")}
						>
							<i class="fa fa-arrow-down" aria-hidden="true"></i>
						</button>
						<button
							className="howto-delete"
							icon="trash"
							label={__("Delete step")}
							onClick={() => deleteStep()}
						>
							<i class="fa fa-times" aria-hidden="true"></i>
						</button>
					</div>

					<div className="flex flex-wrap">
						<div className="flex flex-wrap w-full">
							<h1 className="bg-slate-200 flex flex-wrap items-center justify-center my-2 aspect-square  md:col-span-1 rounded-full w-[2.2rem] md:w-[2.2rem] flex-none font-semibold text-2xl md:text-2xl h-[fit-content]">
								{stepNum + 1}
							</h1>

							<div className="px-2 flex-1">
								<RichText
									tagName={stepTag}
									keepPlaceholderOnFocus
									placeholder={__("Title goes here")}
									className="howto-step__title my-2 font-semibold text-[1.3rem] md:text-2xl"
									value={title}
									onChange={(newVal) => editStep({ title: newVal })}
									onFocus={selectStep}
								/>
							</div>
						</div>

						<div className="w-full">
							<RichText
								keepPlaceholderOnFocus
								placeholder={__("Direction goes here")}
								value={direction}
								onFocus={selectStep}
								onChange={(newVal) => editStep({ direction: newVal })}
							/>
							<RichText
								keepPlaceholderOnFocus
								className="hidden"
								placeholder={__("Add a tip (optional)")}
								value={tip}
								onFocus={selectStep}
								onChange={(newVal) => editStep({ tip: newVal })}
							/>
							{advancedMode && (
								<>
									{videoDuration > 0 && (
										<ToggleControl
											checked={hasVideoClip}
											label={__("Use part of the video in this step")}
											onChange={(hasVideoClip) => {
												editStep({ hasVideoClip });
												if (!hasVideoClip) {
													editStep({ videoClipEnd: 0, videoClipStart: 0 });
													this.setState({
														startTime: Object.assign({}, defaultTimeDisplay),
														endTime: Object.assign({}, defaultTimeDisplay),
													});
												}
											}}
										/>
									)}
									{videoDuration > 0 && hasVideoClip && (
										<>
											<span style={{ color: validTimeInput ? "black" : "red" }}>
												{__("Start time")}
											</span>
											{videoDuration >= 86400 && (
												<input
													type="number"
													value={startTime.d}
													min={0}
													step={1}
													title={__("Days")}
													onChange={(e) => {
														const { h, m, s } = this.state.startTime;
														const d = Number(e.target.value);
														const startPoint =
															d * 86400 + h * 3600 + m * 60 + s;

														if (
															startPoint < videoDuration &&
															d % 1 === 0 &&
															d > -1
														) {
															this.setState({
																startTime: Object.assign(startTime, { d }),
															});
															editStep({ videoClipStart: startPoint });
														}
													}}
												/>
											)}
											{videoDuration >= 3600 && (
												<input
													type="number"
													value={startTime.h}
													min={0}
													max={23}
													step={1}
													title={__("Hours")}
													onChange={(e) => {
														const { d, m, s } = this.state.startTime;
														const h = Number(e.target.value);
														const startPoint =
															d * 86400 + h * 3600 + m * 60 + s;

														if (
															startPoint < videoDuration &&
															h % 1 === 0 &&
															h > -1 &&
															h < 24
														) {
															this.setState({
																startTime: Object.assign(startTime, { h }),
															});
															editStep({ videoClipStart: startPoint });
														}
													}}
												/>
											)}
											{videoDuration >= 60 && (
												<input
													type="number"
													value={startTime.m}
													min={0}
													max={59}
													step={1}
													title={__("Minutes")}
													onChange={(e) => {
														const { d, h, s } = this.state.startTime;
														const m = Number(e.target.value);
														const startPoint =
															d * 86400 + h * 3600 + m * 60 + s;

														if (
															startPoint < videoDuration &&
															m % 1 === 0 &&
															m > -1 &&
															m < 60
														) {
															this.setState({
																startTime: Object.assign(startTime, { m }),
															});
															editStep({ videoClipStart: startPoint });
														}
													}}
												/>
											)}
											<input
												type="number"
												value={startTime.s}
												min={0}
												max={59}
												step={1}
												title={__("Seconds")}
												onChange={(e) => {
													const { d, h, m } = this.state.startTime;
													const s = Number(e.target.value);
													const startPoint = d * 86400 + h * 3600 + m * 60 + s;

													if (
														startPoint < videoDuration &&
														s % 1 === 0 &&
														s > -1 &&
														s < 60
													) {
														this.setState({
															startTime: Object.assign(startTime, { s }),
														});
														editStep({ videoClipStart: startPoint });
													}
												}}
											/>
											<br />
											<span style={{ color: validTimeInput ? "black" : "red" }}>
												{__("End time")}
											</span>
											{videoDuration >= 86400 && (
												<input
													type="number"
													value={endTime.d}
													min={0}
													step={1}
													title={__("Days")}
													onChange={(e) => {
														const { h, m, s } = this.state.endTime;
														const d = Number(e.target.value);
														const endPoint = d * 86400 + h * 3600 + m * 60 + s;

														if (
															endPoint <= videoDuration &&
															d % 1 === 0 &&
															d > -1
														) {
															this.setState({
																endTime: Object.assign(endTime, { d }),
															});
															editStep({ videoClipEnd: endPoint });
														}
													}}
												/>
											)}
											{videoDuration >= 3600 && (
												<input
													type="number"
													value={endTime.h}
													min={0}
													max={23}
													step={1}
													title={__("Hours")}
													onChange={(e) => {
														const { d, m, s } = this.state.endTime;
														const h = Number(e.target.value);
														const endPoint = d * 86400 + h * 3600 + m * 60 + s;

														if (
															endPoint <= videoDuration &&
															h % 1 === 0 &&
															h > -1 &&
															h < 24
														) {
															this.setState({
																endTime: Object.assign(endTime, { h }),
															});
															editStep({ videoClipEnd: endPoint });
														}
													}}
												/>
											)}
											{videoDuration >= 60 && (
												<input
													type="number"
													value={endTime.m}
													min={0}
													max={59}
													step={1}
													title={__("Minutes")}
													onChange={(e) => {
														const { d, h, s } = this.state.endTime;
														const m = Number(e.target.value);
														const endPoint = d * 86400 + h * 3600 + m * 60 + s;

														if (
															endPoint <= videoDuration &&
															m % 1 === 0 &&
															m > -1 &&
															m < 60
														) {
															this.setState({
																endTime: Object.assign(endTime, { m }),
															});
															editStep({ videoClipEnd: endPoint });
														}
													}}
												/>
											)}
											<input
												type="number"
												value={endTime.s}
												min={0}
												max={59}
												step={1}
												title={__("Seconds")}
												onChange={(e) => {
													const { d, h, m } = this.state.endTime;
													const s = Number(e.target.value);
													const endPoint = d * 86400 + h * 3600 + m * 60 + s;

													if (
														endPoint <= videoDuration &&
														s % 1 === 0 &&
														s > -1 &&
														s < 60
													) {
														this.setState({
															endTime: Object.assign(endTime, { s }),
														});
														editStep({ videoClipEnd: endPoint });
													}
												}}
											/>
										</>
									)}
								</>
							)}
						</div>
						<div className="w-full howto-step__image max-h-[1000px] md:max-h-[1600px] mx-auto mt-3">
							{stepPic.url !== "" ? (
								<figure className="w-full relative">
									<img
										className="howto-step-image mx-auto rounded-xl overflow-hidden"
										src={stepPic.url}
										onClick={selectStep}
									/>
									{blockIsSelected && (
										<span
											title={__("Delete image")}
											className="dashicons dashicons-trash howto-delete-image cursor-pointer"
											onClick={() =>
												editStep({
													stepPic: {
														id: -1,
														alt: "",
														url: "",
														caption: "",
														width: 0,
														float: "none",
													},
												})
											}
										/>
									)}
									<RichText
										tagName="figcaption"
										keepPlaceholderOnFocus
										placeholder={__("Step image caption")}
										value={stepPic.caption}
										onFocus={selectStep}
										onChange={(newCaption) =>
											editStep({
												stepPic: Object.assign(stepPic, {
													caption: newCaption,
												}),
											})
										}
									/>
								</figure>
							) : (
								<div className="flex flex-wrap justify-center align-center py-5">
									<MediaUpload
										onSelect={(img) => {
											editStep({
												stepPic: {
													id: img.id,
													alt: img.alt,
													url: img.url,
													caption: img.caption,
													width: Math.min(Math.max(img.width, 200), 800),
													float: "none",
												},
											});
											selectStep();
										}}
										allowedTypes={["image"]}
										value={stepPic.id}
										render={({ open }) => (
											<>
												<div
													className="w-full bg-[#EEEEEE] aspect-[16/6] rounded-lg flex flex-wrap justify-center items-center"
													onClick={open}
												>
													<div className="flex flex-wrap justify-center items-center text-[#999999] flex-col">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															xmlnsXlink="http://www.w3.org/1999/xlink"
															width="100"
															height="100"
															fill="none"
															viewBox="0 0 100 100"
														>
															<path
																fill="url(#pattern0)"
																d="M0 0H100V100H0z"
															></path>
															<defs>
																<pattern
																	id="pattern0"
																	width="1"
																	height="1"
																	patternContentUnits="objectBoundingBox"
																>
																	<use
																		transform="scale(.00781)"
																		xlinkHref="#image0_315_38"
																	></use>
																</pattern>
																<image
																	id="image0_315_38"
																	width="128"
																	height="128"
																	xlinkHref="data:image/png;base64,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"
																></image>
															</defs>
														</svg>
														<p className="text-[#999999]">Tambahkan Media</p>
													</div>
												</div>
											</>
										)}
									/>
								</div>
							)}
						</div>
					</div>
				</li>
			</>
		);
	}
}

// <button
// 	className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
// 	onClick={open}
// >
// 	{__("Upload Image")}
// </button>

class HowToSection extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			sectionListStyle,
			sectionNum,
			sectionName,
			sectionTag,
			steps,
			stepTag,
			editSection,
			deleteSection,
			videoDuration,
			clips,
			videoURL,
			advancedMode,
			blockIsSelected,
			updateState,
			currentStep,
		} = this.props;

		return (
			<li className="howto-section">
				<div>
					<RichText
						keepPlaceholderOnFocus
						tagName={sectionTag}
						placeholder={__("Section name goes here")}
						value={sectionName}
						onChange={(sectionName) => editSection({ sectionName, steps })}
					/>
					<button
						className="howto-delete"
						icon="trash"
						label={__("Delete section")}
						onClick={() => deleteSection()}
					/>
				</div>
				<ListWrapper
					className="howto-steps-list pl-0"
					listStyle={sectionListStyle}
				>
					{steps.map((step, i) => (
						<HowToStep
							{...step}
							advancedMode={advancedMode}
							clips={clips}
							sectionNum={sectionNum}
							stepNum={i}
							stepTag={stepTag}
							videoURL={videoURL}
							videoDuration={videoDuration}
							selectStep={() => this.props.selectStepInSection(i)}
							editStep={(newStep) => {
								editSection({
									sectionName,
									steps: [
										...steps.slice(0, i),
										Object.assign(steps[i], newStep),
										...steps.slice(i + 1),
									],
								});
							}}
							deleteStep={() => {
								let newSteps = [...steps.slice(0, i), ...steps.slice(i + 1)];
								newSteps.forEach(
									(step, j) => (step.anchor = `section${sectionNum}step${j}`)
								);
								editSection({
									sectionName,
									steps: [...steps.slice(0, i), ...steps.slice(i + 1)],
								});
								if (currentStep === `section-${sectionNum}-step-${i}`) {
									updateState({ currentStep: "" });
								}
							}}
							moveUp={() => {
								if (i > 0) {
									let newSteps = [
										...steps.slice(0, i - 1),
										steps[i],
										steps[i - 1],
										...steps.slice(i + 1),
									];
									newSteps.forEach(
										(step, j) => (step.anchor = `section${sectionNum}step${j}`)
									);
									editSection({ sectionName, steps: newSteps });
									//set value of currentStep to recently-moved step
									updateState({
										currentStep: `section-${sectionNum}-step-${i - 1}`,
									});
								}
							}}
							moveDown={() => {
								if (i < steps.length - 1) {
									let newSteps = [
										...steps.slice(0, i),
										steps[i + 1],
										steps[i],
										...steps.slice(i + 2),
									];
									newSteps.forEach(
										(step, j) => (step.anchor = `section${sectionNum}step${j}`)
									);
									editSection({ sectionName, steps: newSteps });
									updateState({
										currentStep: `section-${sectionNum}-step-${i + 1}`,
									});
								}
							}}
							blockIsSelected={blockIsSelected}
							currentStep={currentStep}
							updateState={updateState}
						/>
					))}
				</ListWrapper>

				<ButtonAddStep
					onClick={() => {
						editSection({
							sectionName,
							steps: [
								...steps,
								{
									anchor: `section${sectionNum}step${steps.length}`,
									stepPic: {
										img: -1,
										alt: "",
										url: "",
										width: 0,
										float: "none",
									},
									direction: "",
									tip: "",
									title: "",
									hasVideoClip: false,
									videoClipStart: 0,
									videoClipEnd: 0,
								},
							],
						});
					}}
				/>
			</li>
		);
	}
}

function ButtonAddStep(props) {
	const { onClick } = props;
	return (
		<>
			<div className="w-full flex flex-wrap justify-center my-12">
				<button
					className="text-gray-800 hover:text-gray-50 bg-transparent border hover:bg-slate-400 ring-gray-500  focus:ring-4 focus:ring-gray-500 font-thin text-sm px-2 py-1 focus:outline-none rounded-full transition duration-200 ease-in-out"
					onClick={onClick}
				>
					<i class="fa fa-plus mr-2" aria-hidden="true"></i>
					{__("Tambah Langkah")}
				</button>
			</div>
		</>
	);
}

export class EditorComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { videoURLInput: "", currentStep: "" };
	}

	componentDidMount() {
		const {
			attributes: { videoURL, section },
			setAttributes,
		} = this.props;

		this.setState({ videoURLInput: videoURL });

		//add width and float to images for each step

		let sectionClone = JSON.parse(JSON.stringify(section));
		let hasMissingProperties = false;

		sectionClone.forEach((s) => {
			s.steps.forEach((st) => {
				if (!st.stepPic.hasOwnProperty("width")) {
					hasMissingProperties = true;
					st.stepPic.width = 200;
					st.stepPic.float = "none";
				}
			});
		});

		if (hasMissingProperties) {
			setAttributes({ section: sectionClone });
		}
	}

	render() {
		const {
			attributes: {
				blockID,
				title,
				introduction,
				advancedMode,
				section,
				sectionListStyle,
				suppliesIntro,
				supplies,
				suppliesListStyle,
				toolsIntro,
				tools,
				toolsListStyle,
				howToYield,
				howToRatingValue,
				howToRatingCount,
				cost,
				costCurrency,
				costDisplayText,
				showUnitFirst,
				timeIntro,
				totalTime,
				totalTimeText,
				useSections,
				includeToolsList,
				addToolImages,
				includeSuppliesList,
				addSupplyImages,
				resultIntro,
				finalImageID,
				finalImageURL,
				finalImageCaption,
				finalImageWidth,
				finalImageFloat,
				videoURL,
				videoEmbedCode,
				videoDuration,
				firstLevelTag,
				secondLevelTag,
				thirdLevelTag,
			},
			setAttributes,
			block,
			getBlock,
			getClientIdsWithDescendants,
			isSelected,
		} = this.props;

		const { videoURLInput, currentStep } = this.state;

		const units = ["Tahun", "Bulan", "Minggu", "Hari", "Jam", "Menit", "Detik"];

		const resetVideoAttributes = () => {
			let newSection = JSON.parse(JSON.stringify(section));
			newSection.forEach((s) =>
				s.steps.map((st) =>
					Object.assign(st, {
						hasVideoClip: false,
						videoClipStart: 0,
						videoClipEnd: 0,
					})
				)
			);

			setAttributes({
				section: newSection,
				videoURL: "",
				videoDescription: "",
				videoUploadDate: 0,
				videoThumbnailURL: "",
				videoEmbedCode: `<p className="text-xs">${__(
					"When insertion is successful, video should appear here"
				)}</p>`,
				videoDuration: 0,
			});
		};

		const clips = section
			.reduce((stepList, section) => [...stepList, ...section.steps], [])
			.filter((s) => s.hasVideoClip)
			.map((s) => ({
				anchor: s.anchor,
				clipStart: s.videoClipStart,
				clipEnd: s.videoClipEnd,
			}));

		if (
			blockID === "" ||
			getClientIdsWithDescendants().some(
				(ID) =>
					"blockID" in getBlock(ID).attributes &&
					getBlock(ID).attributes.blockID === blockID
			)
		) {
			setAttributes({ blockID: block.clientId });
		}

		const checkVideoURLInput = () => {
			if (/^http(s)?:\/\//g.test(videoURLInput)) {
				const youtubeMatch =
					/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/g.exec(
						videoURLInput
					);
				const vimeoMatch =
					/^(?:https?\:\/\/)?(?:www\.|player\.)?(?:vimeo\.com\/)([0-9]+)/g.exec(
						videoURLInput
					);
				const dailyMotionMatch =
					/^(?:https?\:\/\/)?(?:www\.)?(?:dailymotion\.com\/video|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=([a-z0-9]+))?/g.exec(
						videoURLInput
					);
				const videoPressMatch =
					/^https?:\/\/(?:www\.)?videopress\.com\/(?:embed|v)\/([a-zA-Z0-9]{8,})/g.exec(
						videoURLInput
					);
				if (youtubeMatch) {
					fetch(
						`https://www.googleapis.com/youtube/v3/videos?id=${youtubeMatch[1]}&part=snippet,contentDetails,player&key=AIzaSyDgItjYofyXkIZ4OxF6gN92PIQkuvU319c`
					)
						.then((response) => {
							response.json().then((data) => {
								if (data.items.length) {
									let timePeriods = data.items[0].contentDetails.duration.match(
										/(\d{1,2}(?:W|D|H|M|S))/g
									);
									setAttributes({
										videoURL: `https://www.youtube.com/watch?v=${youtubeMatch[1]}`,
										videoName: data.items[0].snippet.title,
										videoDescription: data.items[0].snippet.description,
										videoUploadDate:
											Date.parse(data.items[0].snippet.publishedAt) / 1000,
										videoThumbnailURL: `https://i.ytimg.com/vi/${youtubeMatch[1]}/default.jpg`,
										videoEmbedCode: decodeURIComponent(
											data.items[0].player.embedHtml
										),
										videoDuration: timePeriods.reduce((sum, part) => {
											let multiplier = {
												W: 604800,
												D: 86400,
												H: 3600,
												M: 60,
												S: 1,
											};
											return (
												sum +
												Number(part.slice(0, -1)) * multiplier[part.slice(-1)]
											);
										}, 0),
									});
								} else {
									resetVideoAttributes();
									setAttributes({
										videoEmbedCode: `<p className="text-xs">${__(
											"No video found at URL"
										)}</p>`,
									});
								}
							});
						})
						.catch((err) => {
							console.log("youtube fetch error");
							console.log(err);
						});
				} else if (vimeoMatch) {
					fetch(`https://vimeo.com/api/v2/video/${vimeoMatch[1]}.json`)
						.then((response) => {
							if (response.ok) {
								response
									.json()
									.then((data) => {
										setAttributes({
											videoURL: data[0].url,
											videoName: data[0].title,
											videoDescription: data[0].description,
											videoUploadDate: Date.parse(data[0].upload_date) / 1000,
											videoThumbnailURL: data[0].thumbnail_large,
											videoDuration: data[0].duration,
										});
										fetch(
											`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
												data[0].url
											)}`
										)
											.then((response) => {
												response.json().then((data) => {
													setAttributes({
														videoEmbedCode: data.html,
													});
												});
											})
											.catch((err) => {
												console.log("vimeo oembed error");
												console.log(err);
											});
									})
									.catch((err) => {
										console.log(err);
									});
							} else {
								resetVideoAttributes();
								setAttributes({
									videoEmbedCode: `<p>${__("No video found at URL")}</p>`,
								});
							}
						})
						.catch((err) => {
							console.log("vimeo fetch error");
							console.log(err);
						});
				} else if (dailyMotionMatch) {
					fetch(
						`https://api.dailymotion.com/video/${dailyMotionMatch[1]}?fields=created_time%2Cthumbnail_1080_url%2Ctitle%2Cdescription%2Curl%2Cembed_html%2Cduration`
					)
						.then((response) => {
							if (response.ok) {
								response.json().then((data) => {
									setAttributes({
										videoURL: data.url,
										videoName: data.title,
										videoDescription: data.description,
										videoUploadDate: data.created_time,
										videoThumbnailURL: data.thumbnail_1080_url,
										videoEmbedCode: decodeURIComponent(data.embed_html),
										videoDuration: data.duration,
									});
								});
							} else {
								resetVideoAttributes();
								setAttributes({
									videoEmbedCode: `<p>${__("No video found at URL")}</p>`,
								});
							}
						})
						.catch((err) => {
							console.log("dailymotion input error");
							console.log(err);
						});
				} else if (videoPressMatch) {
					fetch(
						`https://public-api.wordpress.com/rest/v1.1/videos/${videoPressMatch[1]}`
					)
						.then((response) => {
							if (response.ok) {
								response.json().then((data) => {
									setAttributes({
										videoURL: `https://videopress.com/v/${data.guid}`,
										videoName: data.title,
										videoDescription: data.description,
										videoUploadDate: Date.parse(data.upload_date) / 1000,
										videoThumbnailURL: data.poster,
										videoEmbedCode: `<iframe width="560" height="315" src="https://videopress.com/embed/${data.guid}" frameborder="0" allowfullscreen></iframe>
					<script src="https://videopress.com/videopress-iframe.js"></script>`,
										videoDuration: Math.floor(data.duration / 1000),
									});
								});
							} else {
								resetVideoAttributes();
								setAttributes({
									videoEmbedCode: `<p>${__("No video found at URL")}</p>`,
								});
							}
						})
						.catch((err) => {
							console.log("videopress input error");
							console.log(err);
						});
				} else {
					resetVideoAttributes();
					setAttributes({ videoEmbedCode: "<p>Video site not supported</p>" });
				}
			} else {
				resetVideoAttributes();
				console.log("input is not a url");
			}
		};

		return (
			<>
				<InspectorPanel
					{...this.props}
					{...this.state}
					updateState={(newState) => this.setState(newState)}
				/>
				<div className="howto" id={`howto-${blockID}`}>
					<RichText
						tagName={firstLevelTag}
						placeholder={__("How to title")}
						keepPlaceholderOnFocus={true}
						value={title}
						className="howto__title"
						onChange={(title) => setAttributes({ title })}
					/>
					<RichText
						placeholder={__("How to introduction")}
						keepPlaceholderOnFocus={true}
						className="mb-3"
						value={introduction}
						onChange={(introduction) => setAttributes({ introduction })}
					/>
					{advancedMode && (
						<>
							<div className="howto-video-input w-full relative mb-2">
								<input
									type="url"
									placeholder={__("Insert video URL")}
									className="border border-slate-200 w-full"
									value={videoURLInput}
									onChange={(e) =>
										this.setState({ videoURLInput: e.target.value })
									}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											checkVideoURLInput();
										}
									}}
								/>
								<div className="absolute top-0 right-0 flex-wrap flex items-center h-full">
									<button
										icon={"editor-break"}
										label={__("Apply")}
										type={"submit"}
										className={`dashicons dashicons-yes-alt text-2xl mr-2 h-auto`}
										onClick={checkVideoURLInput}
									></button>
									<button
										icon="trash"
										label={__("Delete")}
										className={`dashicons dashicons-dismiss text-2xl mr-3 h-auto`}
										onClick={() => {
											resetVideoAttributes();
											this.setState({ videoURLInput: "" });
										}}
									></button>
								</div>
							</div>
							<div
								dangerouslySetInnerHTML={{
									__html: videoEmbedCode || "<p>Input error</p>",
								}}
								className="text-xs"
							/>
							{includeSuppliesList && (
								<>
									<RichText
										tagName={secondLevelTag}
										placeholder={__("Required supplies")}
										keepPlaceholderOnFocus={true}
										value={suppliesIntro}
										onChange={(suppliesIntro) =>
											setAttributes({ suppliesIntro })
										}
									/>
									<ListWrapper
										className={"howto-supplies-list"}
										listStyle={suppliesListStyle}
									>
										{supplies.map((supply, i) => (
											<li>
												<div>
													<RichText
														keepPlaceholderOnFocus
														value={supply.name}
														placeholder={__("Enter supply name")}
														onChange={(newName) =>
															setAttributes({
																supplies: [
																	...supplies.slice(0, i),
																	Object.assign(supplies[i], { name: newName }),
																	...supplies.slice(i + 1),
																],
															})
														}
													/>
													<button
														icon="trash"
														label={__("Delete supply")}
														onClick={() =>
															setAttributes({
																supplies: [
																	...supplies.slice(0, i),
																	...supplies.slice(i + 1),
																],
															})
														}
													/>
												</div>
												{addSupplyImages &&
													(supply.imageURL !== "" ? (
														<figure>
															<img
																className="howto-supply-image"
																src={supply.imageURL}
															/>
															{isSelected && (
																<span
																	title={__("Delete image")}
																	className="dashicons dashicons-trash howto-delete-image cursor-pointer"
																	onClick={() =>
																		setAttributes({
																			supplies: [
																				...supplies.slice(0, i),
																				Object.assign(supply, {
																					imageID: 0,
																					imageURL: "",
																					imageAlt: "",
																				}),
																				...supplies.slice(i + 1),
																			],
																		})
																	}
																/>
															)}
														</figure>
													) : (
														<MediaUpload
															onSelect={(img) =>
																setAttributes({
																	supplies: [
																		...supplies.slice(0, i),
																		Object.assign(supply, {
																			imageID: img.id,
																			imageURL: img.url,
																			imageAlt: img.alt,
																		}),
																		...supplies.slice(i + 1),
																	],
																})
															}
															allowedTypes={["image"]}
															value={supply.imageID}
															render={({ open }) => (
																<button
																	className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
																	onClick={open}
																>
																	{__("Upload Image")}
																</button>
															)}
														/>
													))}
											</li>
										))}
									</ListWrapper>
									<button
										className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
										onClick={() =>
											setAttributes({
												supplies: [
													...supplies,
													{ name: "", imageID: 0, imageAlt: "", imageURL: "" },
												],
											})
										}
									>
										{__("Add new supplies")}
									</button>
								</>
							)}
							{includeToolsList && (
								<>
									<RichText
										tagName={secondLevelTag}
										placeholder={__("Required tools")}
										keepPlaceholderOnFocus={true}
										value={toolsIntro}
										onChange={(toolsIntro) => setAttributes({ toolsIntro })}
									/>
									<ListWrapper
										className={"howto-tools-list"}
										listStyle={toolsListStyle}
									>
										{tools.map((tool, i) => (
											<li>
												<div>
													<RichText
														keepPlaceholderOnFocus
														value={tool.name}
														placeholder={__("Enter tool name")}
														onChange={(newTool) =>
															setAttributes({
																tools: [
																	...tools.slice(0, i),
																	Object.assign(tools[i], { name: newTool }),
																	...tools.slice(i + 1),
																],
															})
														}
													/>
													<button
														icon="trash"
														label={__("Delete tool")}
														onClick={() =>
															setAttributes({
																tools: [
																	...tools.slice(0, i),
																	...tools.slice(i + 1),
																],
															})
														}
													/>
												</div>
												{addToolImages &&
													(tool.imageURL !== "" ? (
														<figure>
															<img src={tool.imageURL} />
															{isSelected && (
																<span
																	title={__("Delete image")}
																	className="dashicons dashicons-trash howto-delete-image cursor-pointer"
																	onClick={() =>
																		setAttributes({
																			tools: [
																				...tools.slice(0, i),
																				Object.assign(tool, {
																					imageID: 0,
																					imageURL: "",
																					imageAlt: "",
																				}),
																				...tools.slice(i + 1),
																			],
																		})
																	}
																/>
															)}
														</figure>
													) : (
														<MediaUpload
															onSelect={(img) =>
																setAttributes({
																	tools: [
																		...tools.slice(0, i),
																		Object.assign(tool, {
																			imageID: img.id,
																			imageURL: img.url,
																			imageAlt: img.alt,
																		}),
																		...tools.slice(i + 1),
																	],
																})
															}
															allowedTypes={["image"]}
															value={tool.imageID}
															render={({ open }) => (
																<button
																	className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
																	onClick={open}
																>
																	{__("Upload Image")}
																</button>
															)}
														/>
													))}
											</li>
										))}
									</ListWrapper>
									<button
										className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
										onClick={() =>
											setAttributes({
												tools: [
													...tools,
													{ name: "", imageID: 0, imageAlt: "", imageURL: "" },
												],
											})
										}
									>
										{__("Add new tools")}
									</button>
								</>
							)}
							<div className="howto_cost_container mb-3 mt-0 flex flex-wrap justify-between">
								<RichText
									value={costDisplayText}
									className={`font-medium`}
									onChange={(costDisplayText) =>
										setAttributes({ costDisplayText })
									}
								/>
								<div
									className="howto_cost_display flex"
									style={{
										flexDirection: showUnitFirst ? "row" : "row-reverse",
									}}
								>
									<RichText
										style={
											showUnitFirst
												? { paddingRight: "10px" }
												: { paddingLeft: "10px" }
										}
										keepPlaceholderOnFocus
										placeholder={__("Units")}
										value={costCurrency}
										onChange={(costCurrency) => {
											costCurrency = costCurrency.replace(/<br>/g, "");
											setAttributes({ costCurrency });
										}}
									/>
									<RichText
										keepPlaceholderOnFocus
										placeholder={__("0")}
										value={String(cost)}
										onChange={(cost) => {
											if (!isNaN(Number(cost))) {
												setAttributes({ cost: Number(cost) });
											}
										}}
									/>
								</div>
							</div>
						</>
					)}
					<RichText
						tagName={secondLevelTag}
						className={`mt-0 mb-1`}
						placeholder={__("Duration")}
						keepPlaceholderOnFocus={true}
						value={timeIntro}
						onChange={(timeIntro) => setAttributes({ timeIntro })}
					/>
					<div className="howto-duration-input">
						<p className="m-0">
							<RichText
								keepPlaceholderOnFocus
								value={totalTimeText}
								onChange={(totalTimeText) => setAttributes({ totalTimeText })}
							/>
						</p>
						<div className="grid grid-cols-3 md:grid-cols-7 gap-4">
							{units.map((u, i) => {
								return (
									<>
										{(u === "years") |
										((u === "months") | (u === "weeks") | (u === "days")) ? (
											<p className="hidden">{__(u)}</p>
										) : (
											<>
												<p className="m-0">
													{__(u)} :{" "}
													<RichText
														className="howto-time-value inline-block"
														keepPlaceholderOnFocus
														placeholder={__("0")}
														value={String(totalTime[i])}
														onChange={(newInput) => {
															if (!isNaN(Number(newInput))) {
																setAttributes({
																	totalTime: [
																		...totalTime.slice(0, i),
																		Number(newInput),
																		...totalTime.slice(i + 1),
																	],
																});
															}
														}}
													/>
												</p>
											</>
										)}
									</>
								);
							})}

							{/* {totalTime.map((t, i) => {
								if (i < 4) {
									return (
										<>
											<RichText
												className="hidden"
												keepPlaceholderOnFocus
												placeholder={__("0")}
												value={String(t)}
												onChange={(newInput) => {
													if (!isNaN(Number(newInput))) {
														setAttributes({
															totalTime: [
																...totalTime.slice(0, i),
																Number(newInput),
																...totalTime.slice(i + 1),
															],
														});
													}
												}}
											/>
										</>
									);
								} else {
									return (
										<>
											<RichText
												className="howto-time-value"
												keepPlaceholderOnFocus
												placeholder={__("0")}
												value={String(t)}
												onChange={(newInput) => {
													if (!isNaN(Number(newInput))) {
														setAttributes({
															totalTime: [
																...totalTime.slice(0, i),
																Number(newInput),
																...totalTime.slice(i + 1),
															],
														});
													}
												}}
											/>
										</>
									);
								}
							})} */}
						</div>
					</div>
					{useSections ? (
						<ListWrapper listStyle={sectionListStyle}>
							{section.map((s, i) => (
								<HowToSection
									{...s}
									advancedMode={advancedMode}
									clips={clips}
									videoURL={videoURL}
									videoDuration={videoDuration}
									sectionListStyle={sectionListStyle}
									sectionNum={i}
									sectionTag={secondLevelTag}
									stepTag={thirdLevelTag}
									selectStepInSection={(step) =>
										this.setState({ currentStep: `section-${i}-step-${step}` })
									}
									editSection={(newSection) =>
										setAttributes({
											section: [
												...section.slice(0, i),
												newSection,
												...section.slice(i + 1),
											],
										})
									}
									deleteSection={() =>
										setAttributes({
											section: [
												...section.slice(0, i),
												...section.slice(i + 1),
											],
										})
									}
									blockIsSelected={isSelected}
									currentStep={currentStep}
									updateState={(newState) => this.setState(newState)}
								/>
							))}
						</ListWrapper>
					) : (
						<>
							<ListWrapper
								className={"howto-steps-list pl-0"}
								listStyle={sectionListStyle}
							>
								{section[0].steps.map((step, i) => (
									<HowToStep
										advancedMode={advancedMode}
										sectionNum={-1}
										stepNum={i}
										stepTag={thirdLevelTag}
										{...step}
										clips={clips}
										videoURL={videoURL}
										videoDuration={videoDuration}
										selectStep={() =>
											this.setState({ currentStep: `step-${i}` })
										}
										editStep={(newStep) => {
											setAttributes({
												section: [
													Object.assign(section[0], {
														steps: [
															...section[0].steps.slice(0, i),
															Object.assign(section[0].steps[i], newStep),
															...section[0].steps.slice(i + 1),
														],
													}),
												],
											});
										}}
										deleteStep={() => {
											let newSection = [
												Object.assign(section[0], {
													steps: [
														...section[0].steps.slice(0, i),
														...section[0].steps.slice(i + 1),
													],
												}),
											];

											section[0].steps.forEach((step, j) => {
												step.anchor = `step${j}`;
											});
											setAttributes({
												section: newSection,
											});
											if (currentStep === `step-${i}`) {
												this.setState({ currentStep: "" });
											}
										}}
										moveUp={() => {
											if (i > 0) {
												let newSection = [
													Object.assign(section[0], {
														steps: [
															...section[0].steps.slice(0, i - 1),
															section[0].steps[i],
															section[0].steps[i - 1],
															...section[0].steps.slice(i + 1),
														],
													}),
												];
												section[0].steps.forEach((step, j) => {
													step.anchor = `step${j}`;
												});
												setAttributes({ section: newSection });
												this.setState({ currentStep: `step-${i - 1}` });
											}
										}}
										moveDown={() => {
											if (i < section[0].steps.length - 1) {
												let newSection = [
													Object.assign(section[0], {
														steps: [
															...section[0].steps.slice(0, i),
															section[0].steps[i + 1],
															section[0].steps[i],
															...section[0].steps.slice(i + 2),
														],
													}),
												];
												section[0].steps.forEach((step, j) => {
													step.anchor = `step${j}`;
												});

												setAttributes({ section: newSection });
												this.setState({ currentStep: `step-${i + 1}` });
											}
										}}
										blockIsSelected={isSelected}
										updateState={(newState) => this.setState(newState)}
									/>
								))}
							</ListWrapper>

							<ButtonAddStep
								onClick={() => {
									setAttributes({
										section: [
											Object.assign(section[0], {
												steps: [
													...section[0].steps,
													{
														anchor: `step${section[0].steps.length}`,
														stepPic: {
															img: -1,
															alt: "",
															url: "",
															width: 0,
															float: "none",
														},
														direction: "",
														tip: "",
														title: "",
														hasVideoClip: false,
														videoClipStart: 0,
														videoClipEnd: 0,
													},
												],
											}),
										],
									});
								}}
							/>
							{/* <button
								className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
								onClick={() => {
									setAttributes({
										section: [
											Object.assign(section[0], {
												steps: [
													...section[0].steps,
													{
														anchor: `step${section[0].steps.length}`,
														stepPic: {
															img: -1,
															alt: "",
															url: "",
															width: 0,
															float: "none",
														},
														direction: "",
														tip: "",
														title: "",
														hasVideoClip: false,
														videoClipStart: 0,
														videoClipEnd: 0,
													},
												],
											}),
										],
									});
								}}
							>
								{__("Tambah Langkah")}
							</button> */}
						</>
					)}
					{useSections && (
						<button
							className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
							onClick={() =>
								setAttributes({
									section: [
										...section,
										{
											sectionName: "",
											steps: [
												{
													anchor: `section${section.length}step0`,
													stepPic: {
														img: -1,
														alt: "",
														url: "",
														width: 0,
														float: "none",
													},
													direction: "",
													tip: "",
													title: "",
													hasVideoClip: false,
													videoClipStart: 0,
													videoClipEnd: 0,
												},
											],
										},
									],
								})
							}
						>
							{__("Add Section")}
						</button>
					)}

					<div className="howto-yield bg-[#16A085] rounded-xl text-white p-5">
						<div className="w-100 flex flex-wrap justify-center mb-3">
							<RichText
								tagName={secondLevelTag}
								className={`text-white font-bold m-0`}
								placeholder={__("Result")}
								keepPlaceholderOnFocus={true}
								value={resultIntro}
								onChange={(resultIntro) => setAttributes({ resultIntro })}
								onFocus={() => this.setState({ currentStep: "final" })}
							/>
						</div>
						{finalImageURL !== "" ? (
							<figure className="howto-yield-image-container w-full relative">
								<img
									className="howto-step-image mx-auto rounded-xl overflow-hidden"
									src={finalImageURL}
									onClick={() => this.setState({ currentStep: "final" })}
								/>
								{isSelected && (
									<span
										title={__("Delete image")}
										className="dashicons dashicons-trash howto-delete-image cursor-pointer"
										onClick={() =>
											setAttributes({
												finalImageID: -1,
												finalImageAlt: "",
												finalImageURL: "",
												finalImageCaption: "",
												finalImageWidth: 0,
												finalImageFloat: "none",
											})
										}
									/>
								)}
								<RichText
									tagName="figcaption"
									keepPlaceholderOnFocus
									placeholder={__("Final image caption")}
									value={finalImageCaption}
									onChange={(finalImageCaption) =>
										setAttributes({ finalImageCaption })
									}
									onFocus={() => this.setState({ currentStep: "final" })}
								/>
							</figure>
						) : (
							<div className="flex flex-wrap justify-center align-center py-5">
								<MediaUpload
									onSelect={(img) => {
										this.setState({ currentStep: "final" });
										setAttributes({
											finalImageID: img.id,
											finalImageAlt: img.alt,
											finalImageURL: img.url,
											finalImageCaption: img.caption,
											finalImageWidth: Math.min(Math.max(img.width, 200), 800),
											finalImageFloat: "none",
										});
									}}
									allowedTypes={["image"]}
									value={finalImageID}
									render={({ open }) => (
										<>
											<div
												className="w-full bg-[#EEEEEE] aspect-[16/6] rounded-lg flex flex-wrap justify-center items-center"
												onClick={open}
											>
												<div className="flex flex-wrap justify-center items-center text-[#999999] flex-col">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlnsXlink="http://www.w3.org/1999/xlink"
														width="100"
														height="100"
														fill="none"
														viewBox="0 0 100 100"
													>
														<path
															fill="url(#pattern0)"
															d="M0 0H100V100H0z"
														></path>
														<defs>
															<pattern
																id="pattern0"
																width="1"
																height="1"
																patternContentUnits="objectBoundingBox"
															>
																<use
																	transform="scale(.00781)"
																	xlinkHref="#image0_315_38"
																></use>
															</pattern>
															<image
																id="image0_315_38"
																width="128"
																height="128"
																xlinkHref="data:image/png;base64,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"
															></image>
														</defs>
													</svg>
													<p className="text-[#999999]">Tambahkan Media</p>
												</div>
											</div>
										</>
									)}
								/>
							</div>
						)}
						<RichText
							keepPlaceholderOnFocus
							placeholder={__("Result text")}
							value={howToYield}
							onChange={(howToYield) => setAttributes({ howToYield })}
							onFocus={() => this.setState({ currentStep: "final" })}
						/>
					</div>
					<div className="howto-review-score">
						<div className="mb-4 grid grid-cols-2">
							<div className="howto-rating-value">
								<h4>Final Rating Value</h4>
								<div className="howto-yield">
									<RichText
										placeholder="0"
										keepPlaceholderOnFocus={true}
										value={howToRatingValue}
										onChange={(howToRatingValue) =>
											setAttributes({ howToRatingValue })
										}
									/>
								</div>
							</div>
							<div className="howto-rating-count">
								<h4>Rating Count</h4>
								<div className="howto-yield">
									<RichText
										placeholder="0"
										className="items-center justify-center"
										keepPlaceholderOnFocus={true}
										value={howToRatingCount}
										onChange={(howToRatingCount) =>
											setAttributes({ howToRatingCount })
										}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<style
					dangerouslySetInnerHTML={{
						__html: `@media (min-width:768px) {${
							useSections
								? section
										.map((s, i) =>
											s.steps
												.map((st) =>
													(({ width, float }) => ({ width, float }))(st.stepPic)
												)
												.map((img, j) =>
													img.width > 0
														? `#howto-${blockID} .howto-section:nth-child(${
																i + 1
														  }) .howto-step:nth-child(${
																j + 1
														  }) figure { width: ${img.width}px; float: ${
																img.float
														  };}`
														: ""
												)
												.join("")
										)
										.join("")
								: section[0].steps
										.map((s) =>
											(({ width, float }) => ({ width, float }))(s.stepPic)
										)
										.map((img, i) =>
											img.width > 0
												? `#howto-${blockID} .howto-step:nth-child(${
														i + 1
												  }) figure { width: ${img.width}px; float: ${
														img.float
												  };}`
												: ""
										)
										.join("")
						}
						${
							finalImageWidth > 0
								? `#howto-${blockID} .howto-yield-image-container{
							width: ${finalImageWidth}px;
							float: ${finalImageFloat};
						}`
								: ""
						}
					}`,
					}}
				/>
			</>
		);
	}
}
