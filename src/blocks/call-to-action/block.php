<?php

function dbe_render_call_to_action_block($attributes)
{
	extract($attributes);
	return '<div class="call_to_action' .
		(isset($className) ? " " . esc_attr($className) : "") .
		'"' .
		($blockID !== ""
			? ' id="call_to_action_' . $blockID . '"'
			: 'style="background-color: ' .
				$ctaBackgroundColor .
				"; border-width: " .
				$ctaBorderSize .
				"px; border-color: " .
				$ctaBorderColor .
				'"') .
		'>
                <div class="call_to_action_headline">
                    <' .
		($useHeadingTag ? $selectedHeadingTag : "p") .
		' class="call_to_action_headline_text"' .
		($blockID === ""
			? ' style="font-size: ' .
				$headFontSize .
				"px; color: " .
				$headColor .
				"; text-align: " .
				$headAlign .
				';"'
			: "") .
		">" .
		$dbe_call_to_action_headline_text .
		"</" .
		($useHeadingTag ? $selectedHeadingTag : "p") .
		'></div>
                <div class="call_to_action_content">
                    <p class="cta_content_text"' .
		($blockID === ""
			? ' style="font-size: ' .
				$contentFontSize .
				"px; color: " .
				$contentColor .
				"; text-align: " .
				$contentAlign .
				';"'
			: "") .
		">" .
		$dbe_cta_content_text .
		'</p></div>
                <div class="call_to_action_button">
                    <a href="' .
		esc_url($url) .
		'" target="_' .
		($openInNewTab ? "blank" : "self") .
		'" rel="' .
		($addNofollow ? "nofollow " : "") .
		($linkIsSponsored ? "sponsored " : "") .
		'noopener noreferrer"
                        class="cta_button"' .
		($blockID === ""
			? ' style="background-color: ' .
				$buttonColor .
				"; width: " .
				$buttonWidth .
				'px;"'
			: "") .
		'>
                        <p class="cta_button_text"' .
		($blockID === ""
			? ' style="color: ' .
				$buttonTextColor .
				"; font-size: " .
				$buttonFontSize .
				'px;"'
			: "") .
		">" .
		$dbe_cta_button_text .
		"</p></a></div></div>";
}

function dbe_register_call_to_action_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/call-to-action-block", [
			"attributes" =>
				$defaultValues["dbe/call-to-action-block"]["attributes"],
			"render_callback" => "dbe_render_call_to_action_block",
		]);
	}
}

add_action("init", "dbe_register_call_to_action_block");
