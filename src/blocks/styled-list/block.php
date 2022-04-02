<?php

function dbe_render_styled_list_block($attributes)
{
	extract($attributes);

	$listItems = "";

	if (
		json_encode($listItem) ===
		"[" .
			join(
				",",
				array_fill(
					0,
					3,
					'{"text":"","selectedIcon":"check","indent":0}'
				)
			) .
			"]"
	) {
		$listItems = $list;
	} else {
		$sortedItems = [];

		foreach ($listItem as $elem) {
			$last = count($sortedItems) - 1;
			if (
				count($sortedItems) === 0 ||
				$sortedItems[$last][0]["indent"] < $elem["indent"]
			) {
				array_push($sortedItems, [$elem]);
			} elseif ($sortedItems[$last][0]["indent"] === $elem["indent"]) {
				array_push($sortedItems[$last], $elem);
			} else {
				while ($sortedItems[$last][0]["indent"] > $elem["indent"]) {
					array_push(
						$sortedItems[count($sortedItems) - 2],
						array_pop($sortedItems)
					);
					$last = count($sortedItems) - 1;
				}
				if ($sortedItems[$last][0]["indent"] === $elem["indent"]) {
					array_push($sortedItems[$last], $elem);
				}
			}
		}

		while (
			count($sortedItems) > 1 &&
			$sortedItems[count($sortedItems) - 1][0]["indent"] >
				$sortedItems[count($sortedItems) - 2][0]["indent"]
		) {
			array_push(
				$sortedItems[count($sortedItems) - 2],
				array_pop($sortedItems)
			);
		}

		$sortedItems = $sortedItems[0];

		if (!function_exists("dbe_makeList")) {
			function dbe_makeList($num, $item, $color, $size)
			{
				static $outputString = "";
				if ($num === 0 && $outputString != "") {
					$outputString = "";
				}
				if (isset($item["indent"])) {
					$outputString .=
						"<li>" .
						($item["text"] === "" ? "<br/>" : $item["text"]) .
						"</li>";
				} else {
					$outputString = substr_replace(
						$outputString,
						'<ul class="fa-ul">',
						strrpos($outputString, "</li>"),
						strlen("</li>")
					);

					foreach ($item as $key => $subItem) {
						dbe_makeList($key + 1, $subItem, $color, $size);
					}
					$outputString .= "</ul>" . "</li>";
				}
				return $outputString;
			}
		}

		foreach ($sortedItems as $key => $item) {
			$listItems = dbe_makeList($key, $item, $iconColor, $iconSize);
		}
	}

	return '<div class="styled_list ' .
		(isset($className) ? " " . esc_attr($className) : "") .
		'"' .
		($blockID === "" ? "" : ' id="styled_list-' . $blockID . '"') .
		'><ul class="fa-ul">' .
		$listItems .
		"</ul></div>";
}

function dbe_register_styled_list_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/styled-list", [
			"attributes" => $defaultValues["dbe/styled-list"]["attributes"],
			"render_callback" => "dbe_render_styled_list_block",
		]);
	}
}

add_action("init", "dbe_register_styled_list_block");
