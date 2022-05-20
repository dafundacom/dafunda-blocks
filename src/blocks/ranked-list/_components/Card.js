import { ButtonDeleteImage } from "./index";
import { useState, useEffect } from "react";
const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText, MediaUpload } = wp.blockEditor || wp.editor;

export function Card(props) {
	let {
		attributes: { blockID, lists },
		data,
		setAttributes,
		block,
		getBlock,
		getClientIdsWithDescendants,
		isSelected,
		index,
		moveUp,
		moveDown,
		deleteList,
		editList,
	} = props;
	data = validateObj(data);
	let { title, description, imageurl, imagealt, imageid } = data;
	return (
		<li className="ranked-list-card flex flex-wrap p-3 relative">
			<div className="absolute top-0 right-[10px] translate-y-[-50%] bg-gray-400 px-2 py-1 grid grid-cols-3 gap-2 rounded-lg text-2xl">
				<button
					className="howto-arrow"
					icon="arrow-up-alt"
					onClick={() => moveUp()}
					label={__("Move step up")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				<button
					className="howto-arrow"
					icon="arrow-down-alt"
					onClick={() => moveDown()}
					label={__("Move step down")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				<button
					className="howto-delete"
					icon="trash"
					label={__("Delete step")}
					onClick={deleteList}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			{/* Image */}
			{imageurl && imageurl != "" ? (
				<figure className="relative w-48">
					<img
						className="rounded-xl aspect-square w-full"
						src={imageurl}
						// onClick={selectStep}
					/>

					<ButtonDeleteImage
						onClick={() => {
							editList({
								imagealt: "",
								imageid: "",
								imageurl: "",
							});
						}}
					/>
					{/* {blockIsSelected && (
					<ButtonDeleteImage
						onClick={() => {
							editStep({
								stepPic: {
									id: -1,
									alt: "",
									url: "",
									caption: "",
									width: 0,
									float: "none",
								},
							});
						}}
					/>
        <button>Delete Image</button>
				)} */}
				</figure>
			) : (
				<div className="flex flex-wrap justify-center align-center w-48 aspect-square cursor-pointer">
					<MediaUpload
						onSelect={(newImage) => {
							editList({
								imagealt: newImage?.alt ?? "",
								imageid: newImage?.id ?? "",
								imageurl: newImage?.url ?? "",
							});
						}}
						allowedTypes={["image"]}
						value={index}
						render={({ open }) => (
							<>
								<div
									className="w-full bg-[#EEEEEE] aspect-[16/9] md:aspect-[16/6] rounded-lg flex flex-wrap justify-center items-center"
									onClick={open}
								>
									<div className="flex flex-wrap justify-center items-center text-[#999999] flex-col">
										<i class="fa fa-picture-o text-8xl" aria-hidden="true"></i>
										<p className="text-[#999999] m-0">Tambahkan Media</p>
									</div>
								</div>
							</>
						)}
					/>
				</div>
			)}

			<div className="flex flex-[1] flex-wrap flex-col">
				{/* Input */}
				<RichText
					// tagName={"p"}
					keepPlaceholderOnFocus
					placeholder={__("Title goes here")}
					className="font-normal text-[1.3rem] md:text-2xl ml-3 w-full mb-3"
					value={title}
					onChange={(title) => editList({ title })}
					// onFocus={selectStep}
				/>

				<RichText
					// tagName={"p"}
					keepPlaceholderOnFocus
					placeholder={__("Description goes here")}
					className="font-normal ml-3 w-full"
					value={description}
					onChange={(description) => editList({ description })}
					// onFocus={selectStep}
				/>

				{/* Info */}
			</div>
		</li>
	);
}

function validateObj(obj) {
	let newObj = {};
	Object.keys(obj).forEach((key) => {
		let o = obj[key];
		if (!o) newObj[key] = "";
		else newObj[key] = obj[key];
	});
	return newObj;
}

// let arr = [];
// document.querySelectorAll(".listItem_main__2bFpq").forEach((el) => {
// 	let item = {};
// 	item.image = el.querySelector("img").getAttribute("src");
// 	item.title = el.querySelector("h2 a").innerText;
// 	arr.push(item);
// });
// copy(arr);
