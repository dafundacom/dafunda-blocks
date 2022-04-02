<?php

function dbe_render_divider_block($attributes)
{
	extract($attributes);
	return '<hr class="divider' .
		(isset($className) ? " " . esc_attr($className) : "") .
		'" ' .
		($blockID === ""
			? 'style="border-top: ' .
				$borderSize .
				"px " .
				$borderStyle .
				" " .
				$borderColor .
				"; margin-top: " .
				$borderHeight .
				"px; margin-bottom: " .
				$borderHeight .
				'px;"'
			: 'id="divider_' . $blockID . '"') .
		"></hr>";
}

function dbe_register_divider_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/divider", [
			"attributes" => $defaultValues["dbe/divider"]["attributes"],
			"render_callback" => "dbe_render_divider_block",
		]);
	}
}

add_action("init", "dbe_register_divider_block");
