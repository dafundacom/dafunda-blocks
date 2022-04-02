<?php

function dbe_render_number_box_block($attributes)
{
	extract($attributes);

	$column1 =
		'<div class="number_1"' .
		($blockID === ""
			? ' style="border-color: ' . $borderColor . ';"'
			: "") .
		'>
        <div class="number_box_number"' .
		($blockID === ""
			? ' style="background-color: ' . $numberBackground . ';"'
			: "") .
		'>
            <p class="number_one_number"' .
		($blockID === "" ? ' style="color: ' . $numberColor . ';"' : "") .
		">" .
		$columnOneNumber .
		'</p>
        </div>
        <p class="number_one_title"' .
		($blockID === "" ? ' style="text-align: ' . $title1Align . ';"' : "") .
		">" .
		$columnOneTitle .
		'</p>
        <p class="number_one_body"' .
		($blockID === "" ? ' style="text-align: ' . $body1Align . ';"' : "") .
		">" .
		$columnOneBody .
		'</p>
    </div>';

	$column2 =
		'<div class="number_2"' .
		($blockID === ""
			? ' style="border-color: ' . $borderColor . ';"'
			: "") .
		'>
        <div class="number_box_number"' .
		($blockID === ""
			? ' style="background-color: ' . $numberBackground . ';"'
			: "") .
		'>
            <p class="number_two_number"' .
		($blockID === "" ? ' style="color: ' . $numberColor . ';"' : "") .
		">" .
		$columnTwoNumber .
		'</p>
        </div>
        <p class="number_two_title"' .
		($blockID === "" ? ' style="text-align: ' . $title2Align . ';"' : "") .
		">" .
		$columnTwoTitle .
		'</p>
        <p class="number_two_body"' .
		($blockID === "" ? ' style="text-align: ' . $body2Align . ';"' : "") .
		">" .
		$columnTwoBody .
		'</p>
    </div>';

	$column3 =
		'<div class="number_3"' .
		($blockID === ""
			? ' style="border-color: ' . $borderColor . ';"'
			: "") .
		'>
        <div class="number_box_number"' .
		($blockID === ""
			? ' style="background-color: ' . $numberBackground . ';"'
			: "") .
		'>
            <p class="number_three_number"' .
		($blockID === "" ? ' style="color: ' . $numberColor . ';"' : "") .
		">" .
		$columnThreeNumber .
		'</p>
        </div>
        <p class="number_three_title"' .
		($blockID === "" ? ' style="text-align: ' . $title3Align . ';"' : "") .
		">" .
		$columnThreeTitle .
		'</p>
        <p class="number_three_body"' .
		($blockID === "" ? ' style="text-align: ' . $body3Align . ';"' : "") .
		">" .
		$columnThreeBody .
		'</p>
    </div>';

	$columns = $column1;

	if ((int) $column >= 2) {
		$columns .= $column2;
	}
	if ((int) $column >= 3) {
		$columns .= $column3;
	}

	return '<div class="number_box column_' .
		$column .
		(isset($className) ? " " . esc_attr($className) : "") .
		'"' .
		($blockID === "" ? "" : ' id="number-box-' . $blockID . '"') .
		">" .
		$columns .
		"</div>";
}

function dbe_register_number_box_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/number-box-block", [
			"attributes" =>
				$defaultValues["dbe/number-box-block"]["attributes"],
			"render_callback" => "dbe_render_number_box_block",
		]);
	}
}

add_action("init", "dbe_register_number_box_block");
