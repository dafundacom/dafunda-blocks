import React from "react";
const { __ } = wp.i18n; // Import __() from wp.i18n

export function ButtonDeleteImage({ onClick }) {
	return (
		<span
			title={__("Delete image")}
			className="dashicons dashicons-trash howto-delete-image cursor-pointer"
			onClick={onClick}
		/>
	);
}
