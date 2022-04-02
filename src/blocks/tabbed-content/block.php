<?php

/**
 * Enqueue frontend script for content toggle block
 *
 * @return void
 */

function dbe_render_tab_block($attributes, $contents)
{
	extract($attributes);
	return '<div role="tabpanel" class="wp-block-tabbed-content-tab-content-wrap ' .
		($isActive ? "active" : "hide") .
		(isset($className) ? " " . esc_attr($className) : "") .
		'"
        id="tabbed-content-' .
		$parentID .
		"-panel-" .
		$index .
		'" aria-labelledby="tabbed-content-' .
		$parentID .
		"-tab-" .
		$index .
		'" tabindex="0">' .
		$contents .
		"</div>";
}

if (!class_exists("simple_html_dom_node")) {
	require dirname(dirname(__DIR__)) . "/simple_html_dom.php";
}

function dbe_register_tab_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/tab-block", [
			"attributes" => $defaultValues["dbe/tab-block"]["attributes"],
			"render_callback" => "dbe_render_tab_block",
		]);
	}
}

function dbe_render_tabbed_content_block($attributes, $contents)
{
	extract($attributes);
	$blockName = "wp-block-tabbed-content";

	$tabs = "";

	$contents = str_get_html(
		'<div id="tabarray">' . $contents . "</div>",
		$lowercase = true,
		$forceTagsClosed = true,
		$target_charset = DEFAULT_TARGET_CHARSET,
		$stripRN = false
	)->find("#tabarray > .wp-block-tabbed-content-tab-content-wrap");

	$tabContents = [];

	foreach ($contents as $key => $content) {
		if ($useAnchors) {
			if ($tabsAnchor[$key] !== "") {
				$content->{'data-tab-anchor'} = $tabsAnchor[$key];
			}
		}
		$tabContent = $content->outertext;
		if (
			preg_match(
				'/^<div role="tabpanel" class="wp-block-tabbed-content-tab-content-wrap active"/',
				$tabContent
			)
		) {
			$accordionIsActive = true;
		} else {
			$accordionIsActive = false;
		}

		if (
			$tabletTabDisplay === "accordion" ||
			$mobileTabDisplay === "accordion"
		) {
			$content =
				'<div class="' .
				$blockName .
				"-accordion-toggle" .
				($accordionIsActive ? " active" : "") .
				($tabletTabDisplay === "accordion" ? " tablet-display" : "") .
				($mobileTabDisplay === "accordion" ? " mobile-display" : "") .
				'">' .
				$tabsTitle[$key] .
				"</div>" .
				$tabContent;
			array_push($tabContents, $content);
		} else {
			array_push($tabContents, $content->outertext);
		}
	}

	foreach ($tabsTitle as $key => $title) {
		$tabs .=
			'<div role="tab" id="tabbed-content-' .
			$blockID .
			"-tab-" .
			$key .
			'" aria-controls="tabbed-content-' .
			$blockID .
			"-panel-" .
			$key .
			'"
            aria-selected="' .
			json_encode($activeTab === $key) .
			'" class = "' .
			$blockName .
			"-tab-title-" .
			($tabVertical ? "vertical-" : "") .
			"wrap" .
			($mobileTabDisplay === "verticaltab"
				? " " . $blockName . "-tab-title-mobile-vertical-wrap"
				: "") .
			($tabletTabDisplay === "verticaltab"
				? " " . $blockName . "-tab-title-tablet-vertical-wrap"
				: "") .
			($activeTab === $key ? " active" : "") .
			'"' .
			($blockID === ""
				? ' style="background-color: ' .
					($activeTab === $key ? $theme : "initial") .
					"; border-color: " .
					($activeTab === $key ? $theme : "lightgrey") .
					"; color: " .
					($activeTab === $key ? $titleColor : "#000000") .
					';"'
				: "") .
			' tabindex="-1">
            <div class="' .
			$blockName .
			'-tab-title">' .
			$title .
			"</div></div>";
	}

	$mobileTabStyle = substr(
		$mobileTabDisplay,
		0,
		strlen($mobileTabDisplay) - 3
	);
	$tabletTabStyle = substr(
		$tabletTabDisplay,
		0,
		strlen($tabletTabDisplay) - 3
	);

	return '<div class="' .
		$blockName .
		($tabStyle !== "tabs" ? "-" . $tabStyle : "") .
		" " .
		$blockName .
		"-holder" .
		($tabVertical ? " vertical-holder" : "") .
		(isset($className) ? " " . esc_attr($className) : "") .
		(isset($align) ? " align" . $align : "") .
		($mobileTabDisplay !== "accordion"
			? " " . $blockName . "-" . $mobileTabStyle . "-holder-mobile"
			: "") .
		($tabletTabDisplay !== "accordion"
			? " " . $blockName . "-" . $tabletTabStyle . "-holder-tablet"
			: "") .
		'"' .
		($blockID === "" ? "" : ' id="tabbed-content-' . $blockID . '"') .
		($mobileTabDisplay === "accordion" || $tabletTabDisplay === "accordion"
			? ' data-active-tabs="[' . $activeTab . ']"'
			: "") .
		'>
                <div class="' .
		$blockName .
		"-tab-holder" .
		($tabVertical ? " vertical-tab-width" : "") .
		($mobileTabDisplay !== "accordion"
			? " " . $mobileTabStyle . "-tab-width-mobile"
			: "") .
		($tabletTabDisplay !== "accordion"
			? " " . $tabletTabStyle . "-tab-width-tablet"
			: "") .
		'">
                    <div role="tablist" class="' .
		$blockName .
		"-tabs-title" .
		($tabVertical ? "-vertical-tab" : "") .
		($mobileTabDisplay === "accordion"
			? " mobile-hide"
			: " " .
				$blockName .
				"-tabs-title-mobile-" .
				$mobileTabStyle .
				"-tab") .
		($tabletTabDisplay === "accordion"
			? " tablet-hide"
			: " " .
				$blockName .
				"-tabs-title-tablet-" .
				$tabletTabStyle .
				"-tab") .
		'">' .
		$tabs .
		'</div></div>
                <div class="' .
		$blockName .
		"-tabs-content" .
		($tabVertical ? " vertical-content-width " : "") .
		($mobileTabDisplay === "verticaltab"
			? " vertical-content-width-mobile"
			: ($mobileTabDisplay === "accordion"
				? " tabbed-content-mobile-accordion"
				: "")) .
		($tabletTabDisplay === "verticaltab"
			? " vertical-content-width-tablet"
			: ($tabletTabDisplay === "accordion"
				? " tabbed-content-tablet-accordion"
				: "")) .
		'">' .
		implode($tabContents) .
		'</div>
            </div>';
}

function dbe_register_tabbed_content_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/tabbed-content-block", [
			"attributes" =>
				$defaultValues["dbe/tabbed-content-block"]["attributes"],
			"render_callback" => "dbe_render_tabbed_content_block",
		]);
	}
}

function dbe_tabbed_content_add_frontend_assets()
{
	require_once dirname(dirname(__DIR__)) . "/common.php";

	$presentBlocks = dbe_getPresentBlocks();

	foreach ($presentBlocks as $block) {
		if (
			$block["blockName"] === "dbe/tabbed-content" ||
			$block["blockName"] === "dbe/tabbed-content-block"
		) {
			wp_enqueue_script(
				"dafunda_blocks-tabbed-content-front-script",
				plugins_url("tabbed-content/front.build.js", dirname(__FILE__)),
				[],
				Dafunda_Blocks_Constants::plugin_version(),
				true
			);
			if (!wp_script_is("dafunda_blocks-scrollby-polyfill", "queue")) {
				wp_enqueue_script(
					"dafunda_blocks-scrollby-polyfill",
					plugins_url("scrollby-polyfill.js", dirname(__FILE__)),
					[],
					Dafunda_Blocks_Constants::plugin_version(),
					true
				);
			}
			break;
		}
	}
}

add_action("wp_enqueue_scripts", "dbe_tabbed_content_add_frontend_assets");
add_action("init", "dbe_register_tabbed_content_block");
add_action("init", "dbe_register_tab_block");
