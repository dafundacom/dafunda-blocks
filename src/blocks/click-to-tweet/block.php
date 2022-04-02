<?php
/**
 * Click to tweet block.
 */

/**
 * Registering meta for the tweet.
 */
function dbe_register_meta()
{
	register_meta("post", "dbe_ctt_via", [
		"show_in_rest" => true,
		"single" => true,
	]);
}

add_action("init", "dbe_register_meta");

/**
 * Rendering the block dynamically.
 *
 * @param $attributes
 *
 * @return string
 *
 */
function dbe_render_click_to_tweet_block($attributes)
{
	extract($attributes);
	$via = get_post_meta(get_the_ID(), "dbe_ctt_via", true);
	$via = $via
		? "&via=" .
			mb_strimwidth(preg_replace("/[^A-Za-z0-9_]/", "", $via), 0, 15)
		: false; //ensure that only valid Twitter usernames appear
	$tweet = preg_replace('/<br><br>$/', "<br>", $ubTweet);
	$tweet_url = $tweet
		? rawurlencode(
			preg_replace("/<.+?>/", "", str_replace("<br>", "\n", $tweet))
		)
		: false;

	/*$tweetFontSize = isset( $attributes['tweetFontSize'] ) ? "font-size:{$attributes['tweetFontSize']}" : "font-size: 20";
	$tweetColor = isset( $attributes['tweetColor'] ) ? "color:{$attributes['tweetColor']}" : "color: #444444";
    $borderColor = isset( $attributes['borderColor'] ) ? "border-color:{$attributes['borderColor']}" : "border-color: #CCCCCC";
    */

	$permalink = esc_url(get_the_permalink());
	$url = apply_filters(
		"dbe_click_to_tweet_url",
		"http://twitter.com/intent/tweet?&text={$tweet_url}&url={$permalink}{$via}"
	);

	$output = "";
	if ($blockID === "") {
		$output .= sprintf(
			'<div class="click_to_tweet%1$s" style="border-color: %2$s;">',
			isset($className) ? " " . esc_attr($className) : "",
			$borderColor
		);
		$output .= sprintf(
			'<div class="tweet" style="font-size: %1$spx; color: %2$s">',
			$tweetFontSize,
			$tweetColor
		);
	} else {
		$output .= sprintf(
			'<div class="click_to_tweet%1$s" id="%2$s">',
			isset($className) ? " " . esc_attr($className) : "",
			esc_attr("dbe_click_to_tweet_" . $blockID)
		);
		$output .= sprintf('<div class="tweet">');
	}

	$output .= $tweet;
	$output .= sprintf("</div>");
	$output .= sprintf('<div class="click_tweet">');
	$output .= sprintf("<span>");
	$output .= sprintf("<i></i>");
	$output .= sprintf(
		'<a target="_blank" href="%1$s">' .
			__("Click to Tweet", "dafunda-blocks") .
			"</a>",
		$url
	);
	$output .= sprintf("</span>");
	$output .= sprintf("</div>");
	$output .= sprintf("</div>");

	return $output;
}

/**
 * Registering dynamic block.
 */
function dbe_register_click_to_tweet_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/click-to-tweet", [
			"attributes" => $defaultValues["dbe/click-to-tweet"]["attributes"],
			"render_callback" => "dbe_render_click_to_tweet_block",
		]);
	}
}

add_action("init", "dbe_register_click_to_tweet_block");
