<?php

function dbe_render_advanced_heading_block($attributes)
{
	extract($attributes);
	return "<" .
		$level .
		'  id="' .
		($anchor ?: "advanced-heading-" . $blockID) .
		'" data-blockid="' .
		$blockID .
		'">' .
		$content .
		"</" .
		$level .
		">";
}

function dbe_register_advanced_heading_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/advanced-heading", [
			"attributes" =>
				$defaultValues["dbe/advanced-heading"]["attributes"],
			"render_callback" => "dbe_render_advanced_heading_block",
		]);
	}
}

add_action("init", "dbe_register_advanced_heading_block");
