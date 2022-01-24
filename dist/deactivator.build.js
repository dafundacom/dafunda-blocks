/* eslint-disable */

if (window.dafunda_blocks) {
	window.dafunda_blocks.forEach((block) => {
		if (!block.active) {
			wp.blocks.unregisterBlockType(block.name);
		}
	});
}
