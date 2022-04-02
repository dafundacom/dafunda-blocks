<?php

/**
 * Enqueue frontend script for button block
 *
 * @return void
 */

function dbe_buttons_parse($b)
{
	require_once dirname(dirname(__DIR__)) . "/common.php";

	//defaults
	$buttonWidth = "fixed";
	$url = "";
	$openInNewTab = true;
	$addNofollow = true;
	$addSponsored = false;
	$size = "medium";
	$chosenIcon = "";
	$buttonText = "Button Text";

	extract($b); //should overwrite the values above if they exist in the array

	$iconSize = ["small" => 25, "medium" => 30, "large" => 35, "larger" => 40];

	return '<div class="button-container' .
		($buttonWidth === "full" ? " button-full-container" : "") .
		'">
    <a href="' .
		esc_url($url) .
		'" target="' .
		($openInNewTab ? "_blank" : "_self") .
		'"
    rel="noopener noreferrer' .
		($addNofollow ? " nofollow" : "") .
		($addSponsored ? " sponsored" : "") .
		'"
    class="button-block-main button-' .
		$size .
		($buttonWidth === "full"
			? " button-full-width"
			: ($buttonWidth === "flex"
				? " button-flex-" . $size
				: "")) .
		'" role="button">
    <div class="button-content-holder">' .
		($chosenIcon !== ""
			? '<span class="button-icon-holder"><svg xmlns="http://www.w3.org/2000/svg"
        height="' .
				$iconSize[$size] .
				'", width="' .
				$iconSize[$size] .
				'"
        viewBox="0, 0, ' .
				Dafunda_Blocks_IconSet::generate_fontawesome_icon(
					$chosenIcon
				)[0] .
				", " .
				Dafunda_Blocks_IconSet::generate_fontawesome_icon(
					$chosenIcon
				)[1] .
				'"><path fill="currentColor" d="' .
				Dafunda_Blocks_IconSet::generate_fontawesome_icon(
					$chosenIcon
				)[2] .
				'"></svg></span>'
			: "") .
		'<span class="button-block-btn">' .
		$buttonText .
		'</span>
    </div></a></div>';
}

function dbe_render_button_block($attributes)
{
	require_once dirname(dirname(__DIR__)) . "/common.php";
	extract($attributes);

	$iconSize = ["small" => 25, "medium" => 30, "large" => 35, "larger" => 40];

	$buttonDisplay =
		!isset($buttons) || count($buttons) === 0
			? '<div class="button-container align-button-' .
				$align .
				(isset($className) ? " " . esc_attr($className) : "") .
				'"' .
				(!isset($blockID) || $blockID === ""
					? " "
					: ' id="button-' . $blockID . '"') .
				'>
    <a href="' .
				esc_url($url) .
				'" target="' .
				($openInNewTab ? "_blank" : "_self") .
				'"
    rel="noopener noreferrer' .
				($addNofollow ? " nofollow" : "") .
				'"
    class="button-block-main button-' .
				$size .
				($buttonWidth === "full"
					? " button-full-width"
					: ($buttonWidth === "flex"
						? " button-flex-" . $size
						: "")) .
				'">
    <div class="button-content-holder">' .
				($chosenIcon !== ""
					? '<span class="button-icon-holder"><svg xmlns="http://www.w3.org/2000/svg"
        height="' .
						$iconSize[$size] .
						'", width="' .
						$iconSize[$size] .
						'"
        viewBox="0, 0, ' .
						Dafunda_Blocks_IconSet::generate_fontawesome_icon(
							$chosenIcon
						)[0] .
						", " .
						Dafunda_Blocks_IconSet::generate_fontawesome_icon(
							$chosenIcon
						)[1] .
						'"><path fill="currentColor" d="' .
						Dafunda_Blocks_IconSet::generate_fontawesome_icon(
							$chosenIcon
						)[2] .
						'"></svg></span>'
					: "") .
				'<span class="button-block-btn">' .
				$buttonText .
				'</span>
    </div></a></div>'
			: join("", array_map("dbe_buttons_parse", $buttons));

	return '<div class="' .
		(isset($buttons) && count($buttons) > 0 ? "buttons" : "button") .
		(isset($buttons) && count($buttons) > 0
			? " align-button-" . ($align === "" ? "center" : $align)
			: "") .
		(isset($className) ? " " . esc_attr($className) : "") .
		'" ' .
		(!isset($blockID) || $blockID === ""
			? " "
			: ' id="button-' . $blockID . '"') .
		">" .
		$buttonDisplay .
		"</div>";
}

function dbe_button_add_frontend_assets()
{
	require_once dirname(dirname(__DIR__)) . "/common.php";

	$presentBlocks = dbe_getPresentBlocks();

	foreach ($presentBlocks as $block) {
		if (
			($block["blockName"] === "dbe/button" &&
				!isset($block["attrs"]["blockID"])) ||
			$block["blockName"] === "dbe/button-block"
		) {
			wp_enqueue_script(
				"dafunda_blocks-button-front-script",
				plugins_url("button/front.build.js", dirname(__FILE__)),
				[],
				Dafunda_Blocks_Constants::plugin_version(),
				true
			);
			break;
		}
	}
}

function dbe_register_button_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/button", [
			"attributes" => $defaultValues["dbe/button"]["attributes"],
			"render_callback" => "dbe_render_button_block",
		]);
	}
}

add_action("init", "dbe_register_button_block");

add_action("wp_enqueue_scripts", "dbe_button_add_frontend_assets");
