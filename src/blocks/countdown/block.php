<?php

function dbe_filter_time_display($timeArray, $largestUnit, $smallestUnit)
{
	$timeUnits = ["week", "day", "hour", "minute", "second"];
	return array_slice(
		$timeArray,
		array_search($largestUnit, $timeUnits),
		array_search($smallestUnit, $timeUnits) -
			array_search($largestUnit, $timeUnits) +
			1
	);
}

function dbe_render_countdown_block($attributes)
{
	//used to display initial rendering
	extract($attributes);

	$timeUnits = ["week", "day", "hour", "minute", "second"];

	$timeLeft = $endDate - time();
	$seconds = $timeLeft % 60;
	$minutes = (($timeLeft - $seconds) % 3600) / 60;

	$hours = ($timeLeft - $minutes * 60 - $seconds) / 3600;

	if (array_search($largestUnit, $timeUnits) < 2) {
		$hours %= 24;
	}

	$days = ($timeLeft - $hours * 3600 - $minutes * 60 - $seconds) / 86400;

	if ($largestUnit === "week") {
		$days %= 7;
	}

	$weeks =
		($timeLeft - $days * 86400 - $hours * 3600 - $minutes * 60 - $seconds) /
		604800;

	$defaultFormatValues = [
		'<span class="countdown_week">' .
		$weeks .
		"</span> " .
		__("weeks", "dafunda-blocks"),
		'<span class="countdown_day">' .
		$days .
		"</span> " .
		__("days", "dafunda-blocks"),
		'<span class="countdown_hour">' .
		$hours .
		"</span> " .
		__("hours", "dafunda-blocks"),
		'<span class="countdown_minute">' .
		$minutes .
		"</span> " .
		__("minutes", "dafunda-blocks"),
		'<span class="countdown_second">' .
		$seconds .
		"</span> " .
		__("seconds", "dafunda-blocks"),
	];

	$defaultFormat = implode(
		" ",
		dbe_filter_time_display(
			$defaultFormatValues,
			$largestUnit,
			$smallestUnit
		)
	);

	if (!function_exists("dbe_generateCircle")) {
		function dbe_generateCircle($label, $value, $limit, $color, $size)
		{
			$circlePath =
				"M 50,50 m 0,-35 a 35,35 0 1 1 0,70 a 35,35 0 1 1 0,-70";
			$prefix = "countdown_circle_";
			return '<div class="' .
				$prefix .
				$label .
				'">
                        <svg height="' .
				$size .
				'" width="' .
				$size .
				'" viewBox="0 0 100 100">
                            <path class="' .
				$prefix .
				'trail" d="' .
				$circlePath .
				'" stroke-width="3" ></path>
                            <path class="' .
				$prefix .
				'path" d="' .
				$circlePath .
				'" stroke="' .
				$color .
				'" stroke-width="3" style="stroke-dasharray: ' .
				($value * 219.911) / $limit .
				'px, 219.911px;"></path>
                        </svg>
                        <div class="' .
				$prefix .
				"label countdown_" .
				$label .
				'">' .
				$value .
				'</div>
                    </div>';
		}
	}

	$circularFormatValues = [
		dbe_generateCircle("week", $weeks, 52, $circleColor, $circleSize),
		dbe_generateCircle("day", $days, 7, $circleColor, $circleSize),
		dbe_generateCircle("hour", $hours, 24, $circleColor, $circleSize),
		dbe_generateCircle("minute", $minutes, 60, $circleColor, $circleSize),
		dbe_generateCircle("second", $seconds, 60, $circleColor, $circleSize),
	];

	$circularFormatLabels = [
		"<p>" . __("Weeks", "dafunda-blocks") . "</p>",
		"<p>" . __("Days", "dafunda-blocks") . "</p>",
		"<p>" . __("Hours", "dafunda-blocks") . "</p>",
		"<p>" . __("Minutes", "dafunda-blocks") . "</p>",
		"<p>" . __("Seconds", "dafunda-blocks") . "</p>",
	];

	$circularFormat =
		'<div class="countdown_circular_container">' .
		implode(
			"",
			dbe_filter_time_display(
				$circularFormatValues,
				$largestUnit,
				$smallestUnit
			)
		) .
		implode(
			"",
			dbe_filter_time_display(
				$circularFormatLabels,
				$largestUnit,
				$smallestUnit
			)
		) .
		"</div>";

	if (!function_exists("dbe_generateDigitArray")) {
		function dbe_generateDigitArray($value, $maxValue = 0)
		{
			$digits = [];

			while ($value > 0) {
				$digits[] = $value % 10;
				$value = ((int) ($value / 10));
			}

			$missingDigits =
				($maxValue ? floor(log10($maxValue)) + 1 : 1) - count($digits);

			$digits = array_merge(
				$missingDigits > 0 ? array_fill(0, $missingDigits, 0) : [],
				array_reverse($digits)
			);

			return array_map(function ($digit) {
				return '<div class="countdown-odometer-digit">' .
					$digit .
					"</div>";
			}, $digits);
		}
	}

	$odometerValues = [
		'<div class="countdown-odometer countdown-digit-container dbe_countdown_week">' .
		implode(dbe_generateDigitArray($weeks)) .
		"</div>",
		'<div class="countdown-odometer countdown-digit-container countdown_day">' .
		implode(dbe_generateDigitArray($days, $largestUnit === "day" ? 0 : 6)) .
		"</div>",
		'<div class="countdown-odometer countdown-digit-container countdown_hour">' .
		implode(
			dbe_generateDigitArray($hours, $largestUnit === "hour" ? 0 : 23)
		) .
		"</div>",
		'<div class="countdown-odometer countdown-digit-container countdown_minute">' .
		implode(dbe_generateDigitArray($minutes, 59)) .
		"</div>",
		'<div class="countdown-odometer countdown-digit-container countdown_second">' .
		implode(dbe_generateDigitArray($seconds, 59)) .
		"</div>",
	];

	$odometerLabels = [
		"<span>" . __("Weeks", "dafunda-blocks") . "</span>",
		"<span>" . __("Days", "dafunda-blocks") . "</span>",
		"<span>" . __("Hours", "dafunda-blocks") . "</span>",
		"<span>" . __("Minutes", "dafunda-blocks") . "</span>",
		"<span>" . __("Seconds", "dafunda-blocks") . "</span>",
	];

	$odometerFormat =
		'<div class="countdown-odometer-container">' .
		implode(
			"<span></span>",
			dbe_filter_time_display(
				$odometerLabels,
				$largestUnit,
				$smallestUnit
			)
		) .
		implode(
			'<span class="countdown-separator">:</span>',
			dbe_filter_time_display(
				$odometerValues,
				$largestUnit,
				$smallestUnit
			)
		) .
		"</div>";

	$selctedFormat = $defaultFormat;

	if ($style === "Regular") {
		$selectedFormat = $defaultFormat;
	} elseif ($style === "Circular") {
		$selectedFormat = $circularFormat;
	} else {
		$selectedFormat = $odometerFormat;
	}

	if ($timeLeft > 0) {
		return "<div " .
			($blockID === "" ? "" : 'id="countdown_' . $blockID . '"') .
			'class="countdown' .
			(isset($className) ? " " . esc_attr($className) : "") .
			'" data-expirymessage="' .
			$expiryMessage .
			'" data-enddate="' .
			$endDate .
			'" data-largestUnit="' .
			$largestUnit .
			'" data-smallestunit="' .
			$smallestUnit .
			'">
            ' .
			$selectedFormat .
			"</div>";
	} else {
		return '<div class="countdown' .
			(isset($className) ? " " . esc_attr($className) : "") .
			'" ' .
			($blockID === ""
				? 'style="text-align:' . $messageAlign . ";"
				: 'id="countdown_' . $blockID . '"') .
			">" .
			$expiryMessage .
			"</div>";
	}
}

function dbe_register_countdown_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/countdown", [
			"attributes" => $defaultValues["dbe/countdown"]["attributes"],
			"render_callback" => "dbe_render_countdown_block",
		]);
	}
}

add_action("init", "dbe_register_countdown_block");

function dbe_countdown_add_frontend_assets()
{
	require_once dirname(dirname(__DIR__)) . "/common.php";

	$presentBlocks = dbe_getPresentBlocks();

	foreach ($presentBlocks as $block) {
		if ($block["blockName"] === "dbe/countdown") {
			wp_enqueue_script(
				"dafunda_blocks-countdown-script",
				plugins_url("countdown/front.build.js", dirname(__FILE__)),
				[],
				Dafunda_Blocks_Constants::plugin_version(),
				true
			);
		}
	}
}

add_action("wp_enqueue_scripts", "dbe_countdown_add_frontend_assets");
