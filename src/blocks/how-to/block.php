<?php

function generateISODurationCode($rawInput)
{
	if (is_array($rawInput)) {
		$inputArr = $rawInput;
	} else {
		$inputArr = array_fill(0, 7, 0);

		$inputArr[3] = ($rawInput - ($rawInput % 86400)) / 86400;
		$inputArr[4] = (($rawInput - ($rawInput % 3600)) / 3600) % 24;
		$inputArr[5] = (($rawInput - ($rawInput % 60)) / 60) % 60;
		$inputArr[6] = $rawInput % 60;
	}

	$tIsAbsent = true;
	$output = "P";
	$unitLetters = ["Y", "M", "W", "D", "H", "M", "S"];

	if (
		$inputArr[2] > 0 &&
		count(
			array_filter($inputArr, function ($item) {
				return $item > 0;
			})
		) > 1
	) {
		$inputArr[3] += $inputArr[2] * 7;
		$inputArr[2] = 0;
	}

	foreach ($inputArr as $i => $t) {
		if ($i > 3 && $tIsAbsent) {
			$output .= "T";
			$tIsAbsent = false;
		}
		if ($t > 0) {
			$output .= round($t) . $unitLetters[$i]; //decimal values for time aren't recognized
		}
	}
	return $output;
}

function dbe_convert_to_paragraphs($string)
{
	if ($string === "") {
		return "";
	} else {
		$string = explode("<br>", $string);
		$string = array_map(function ($p) {
			return "<p>" . $p . "</p>";
		}, $string);
		return implode("", $string);
	}
}

function dbe_render_how_to_supply(
	$advancedMode,
	$includeSuppliesList,
	$secondLevelTag,
	$suppliesIntro,
	$suppliesListStyle,
	$supplies,
	$tools,
	$includeToolsList,
	$toolsIntro,
	$toolsListStyle
) {
	if ($advancedMode && $includeSuppliesList) {
		ob_start(); ?>
		<hr>
		<<?= $secondLevelTag ?> class="mt-0">
			<?= $suppliesIntro ?>
		</<?= $secondLevelTag ?>>
		<?php $suppliesListStyleTag = $suppliesListStyle === "ordered" ? "ol" : "ul"; ?>
		<?php if (isset($supplies) && count($supplies) > 0): ?>
			<<?= $suppliesListStyleTag ?> class="howto-supplies-list pl-0">
				<?php foreach ($supplies as $i => $s): ?>
					<li class="howto-card p-3">
						<p class="text-md mb-3"><?= $i + 1 ?> . <?= $s["name"] ?></p>
						<?php if ($s["imageURL"] !== ""): ?>
							<div class="max-h-[1000px] md:max-h-[1600px] mx-auto">
								<figure class="w-full">
									<img src="<?= $s["imageURL"] ?>" class="mx-auto rounded-xl overflow-hidden" />
								</figure>
							</div>
						<?php endif; ?>
					</li>

				<?php endforeach; ?>

			</<?= $suppliesListStyleTag ?>>
		<?php endif; ?>
	<?php return ob_get_clean();
	} else {
		return "";
	}
}

function dbe_render_how_to_tool(
	$advancedMode,
	$includeSuppliesList,
	$secondLevelTag,
	$suppliesIntro,
	$suppliesListStyle,
	$supplies,
	$tools,
	$includeToolsList,
	$toolsIntro,
	$toolsListStyle
) {
	if ($advancedMode && $includeToolsList) {
		ob_start(); ?>
		<hr>
		<<?= $secondLevelTag ?> class="mt-0">
			<?= $toolsIntro ?>
		</<?= $secondLevelTag ?>>
		<?php if (isset($tools) && count($tools) > 0): ?>
			<?php $toolsListStyleTag = $toolsListStyle === "ordered" ? "ol" : "ul"; ?>
			<<?= $toolsListStyleTag ?> class="howto-tools-list pl-0">
				<?php foreach ($tools as $i => $t): ?>
					<li class="howto-card p-3">
						<p class="text-md mb-3"><?= $i + 1 ?> . <?= $t["name"] ?></p>
						<?php if ($t["imageURL"] !== ""): ?>
							<div class="max-h-[1000px] md:max-h-[1600px] mx-auto">
								<figure class="w-full">
									<img src="<?= $t["imageURL"] ?>" class="mx-auto rounded-xl overflow-hidden" />
								</figure>
							</div>
						<?php endif; ?>
					</li>

				<?php endforeach; ?>

			</<?= $toolsListStyleTag ?>>
		<?php endif; ?>
	<?php return ob_get_clean();
	} else {
		return "";
	}
}

function dbe_render_how_to_block($attributes)
{
	extract($attributes);

	$timeUnits = ["Detik", "Menit", "Jam", "Hari", "Minggu", "Bulan", "Tahun"];

	$header = "";
	if (isset($supplies) && count($supplies) > 0) {
		$header .= dbe_render_how_to_supply(
			$advancedMode,
			$includeSuppliesList,
			$secondLevelTag,
			$suppliesIntro,
			$suppliesListStyle,
			$supplies,
			$tools,
			$includeToolsList,
			$toolsIntro,
			$toolsListStyle
		);
	}

	if (isset($tools) && count($tools) > 0) {
		$header .= dbe_render_how_to_tool(
			$advancedMode,
			$includeSuppliesList,
			$secondLevelTag,
			$suppliesIntro,
			$suppliesListStyle,
			$supplies,
			$tools,
			$includeToolsList,
			$toolsIntro,
			$toolsListStyle
		);
	}
	$costDisplay = $showUnitFirst
		? $costCurrency . " " . $cost
		: $cost . " " . $costCurrency;

	$timeDisplay = "<div>";

	$totalTimeDisplay = "";

	foreach ($totalTime as $i => $t) {
		if ($t > 0) {
			$totalTimeDisplay .=
				$t . " " . __($timeUnits[6 - $i] . ($t > 1 ? "" : "")) . " ";
		}
	}

	$timeDisplay .= "<p class=\"mb-0\"> Sekitar " . $totalTimeDisplay . "</p>";
	$timeDisplay .= "</div>";

	$ISOTotalTime = generateISODurationCode($totalTime);

	$clips = "";

	ob_start();
	?>
	<div class="howto" id="howto_<?= $blockID ?>">

		<<?= $firstLevelTag ?> class="howto__title">
			<?= $title ?>
		</<?= $firstLevelTag ?>>

		<?= dbe_convert_to_paragraphs($introduction) ?>

		<div class="flex w-full justify-center">
			<div class="mr-5">
				<i class="fa fa-tag" aria-hidden="true"></i>
				<?= $advancedMode
    	? (($videoURL === "" ? "" : $videoEmbedCode) . $cost < 1
    		? "Gratis"
    		: "<p class='inline-block m-0'>" .
    			$costDisplayText .
    			" " .
    			$costDisplay .
    			"</p>")
    	: "" ?>
			</div>
			<div class="flex items-center">
				<i class="fa fa-clock-o mr-2" aria-hidden="true"></i> <?= $timeDisplay ?>
			</div>
		</div>

		<?= $header ?>
		<?php $sectionListStyleTag = $sectionListStyle === "ordered" ? "ul" : "ol"; ?>
		<<?= $sectionListStyleTag ?> class="pl-0">
			<?php if ($useSections): ?>
				<?php foreach ($section as $i => $s): ?>
					<li class="howto-section list-none">
						<<?= $secondLevelTag ?>>
							<?= $s["sectionName"] ?>
						</<?= $secondLevelTag ?>>

						<ul class="howto-step-display">
							<?php foreach ($s["steps"] as $index => $step): ?>
								<li class="howto-step p-3 mb-12">
									<div class="flex flex-wrap">
										<div class="flex flex-wrap">
											<div class="bg-slate-200 flex flex-wrap items-center justify-center my-2 aspect-square  md:col-span-1 rounded-full w-[2.2rem] md:w-[2.2rem] flex-none font-semibold text-2xl md:text-2xl h-[fit-content]">
												<?= $index + 1 ?>
											</div>

											<div class="px-2 flex-1">
												<<?= $thirdLevelTag ?> id="<?= $step[
 	"anchor"
 ] ?>" class="howto-step__title my-2 font-normal text-[1.3rem] md:text-2xl">
													<?= $step["title"] ?>
												</<?= $thirdLevelTag ?>>
											</div>
										</div>

										<div class="col-span-12 md:col-span-11 w-full">
											<?= dbe_convert_to_paragraphs($step["direction"]) ?>
										</div>

										<div class="col-span-12 howto-step__image max-h-[1000px] md:max-h-[1600px] mx-auto">
											<?= $step["stepPic"]["url"] !== ""
           	? ($step["stepPic"]["caption"] === ""
           			? ""
           			: '<figure class="w-full">') .
           		'<img class="howto-step-image mx-auto rounded-xl overflow-hidden" src="' .
           		$step["stepPic"]["url"] .
           		'">' .
           		($step["stepPic"]["caption"] === ""
           			? ""
           			: "<figcaption>" .
           				$step["stepPic"]["caption"] .
           				"</figcaption></figure>")
           	: "" ?>
										</div>
									</div>
								</li>
							<?php endforeach; ?>
						</ul>
					</li>
				<?php endforeach; ?>
			<?php else: ?>
				<?php if (isset($section) && count($section) > 0): ?>
					<?php foreach ($section[0]["steps"] as $index => $step): ?>
						<li class="howto-step p-3 mb-12">
							<div class="flex flex-wrap">
								<div class="flex flex-wrap">
									<div class="bg-slate-200 flex flex-wrap items-center justify-center my-2 aspect-square  md:col-span-1 rounded-full w-[2.2rem] md:w-[2.2rem] flex-none font-semibold text-2xl md:text-2xl h-[fit-content]">
										<?= $index + 1 ?>
									</div>

									<div class="px-2 flex-1">
										<<?= $thirdLevelTag ?> id="<?= $step[
 	"anchor"
 ] ?>" class="howto-step__title my-2 font-normal text-[1.3rem] md:text-2xl">
											<?= $step["title"] ?>
										</<?= $thirdLevelTag ?>>
									</div>
								</div>

								<div class="col-span-12 md:col-span-11 w-full">
									<?= dbe_convert_to_paragraphs($step["direction"]) ?>
								</div>

								<div class="col-span-12 howto-step__image max-h-[1000px] md:max-h-[1600px] mx-auto">
									<?= $step["stepPic"]["url"] !== ""
         	? ($step["stepPic"]["caption"] === ""
         			? ""
         			: '<figure class="w-full">') .
         		'<img class="howto-step-image mx-auto rounded-xl overflow-hidden" src="' .
         		$step["stepPic"]["url"] .
         		'">' .
         		($step["stepPic"]["caption"] === ""
         			? ""
         			: "<figcaption>" .
         				$step["stepPic"]["caption"] .
         				"</figcaption></figure>")
         	: "" ?>
								</div>
							</div>
						</li>
					<?php endforeach; ?>
				<?php endif; ?>
			<?php endif; ?>
		</<?= $sectionListStyleTag ?>>

		<?php if ($resultIntro && $howToYield): ?>
			<div class="howto-yield bg-[#16A085] rounded-xl text-white p-5">
				<div class="w-100 flex flex-wrap justify-center mb-3">
					<<?= $secondLevelTag ?> class="text-white font-bold m-0">
						<?= $resultIntro ?>
					</<?= $secondLevelTag ?>>
				</div>
				<?= $finalImageURL === ""
    	? ""
    	: (!isset($finalImageCaption) || $finalImageCaption === ""
    			? ""
    			: '<figure class="howto-yield-image-container mt-2 w-full relative">') .
    		'<img class="howto-yield-image mx-auto rounded-xl overflow-hidden" src="' .
    		$finalImageURL .
    		'">' .
    		(!isset($finalImageCaption) || $finalImageCaption === ""
    			? ""
    			: "<figcaption class=\"text-white\">" .
    				$finalImageCaption .
    				"</figcaption></figure>") ?>
				<?= dbe_convert_to_paragraphs($howToYield) ?>
			</div>
		<?php endif; ?>

		<div class="howto-review p-3 mb-3">
			<div class="howto-review__vote">
				<div class="w-full text-center mb-4">
					Apakah artikel ini membantu mu?
				</div>
				<div class="w-full flex flex-wrap justify-center items-center mb-3">
					<div class="howto-review__like mr-3 cursor-pointer">
						<button class="flex items-center py-1">

							<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#16A085">
								<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
							</svg>
						</button>
					</div>
					<div class="howto-review__dislike cursor-pointer">
						<button class="flex items-center py-1">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#C44569">
								<path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div class="howto-review__thank w-full text-center my-4 text-lg hidden">
				<p class="m-0">Terimakasih sudah memberi jawaban</p>
			</div>
		</div>
		<?php
  $howToReviewPercent = intval(($howToRatingValue / 5) * 100);
  $howToReviewClass = "howto-review-result__good";
  if ($howToReviewPercent > 100) {
  	$howToReviewPercent = 100;
  }
  if ($howToReviewPercent < 0) {
  	$howToReviewPercent = 0;
  }
  $howToReviewPercentIcon =
  	'<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbup h-10 w-10 rotate-[-13.41deg]" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>';
  if ($howToReviewPercent >= 65) {
  	$howToReviewClass = "howto-review-result__good";
  } elseif ($howToReviewPercent >= 50) {
  	$howToReviewPercentIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbdown h-10 w-10 rotate-[-13.41deg]" viewBox="0 0 20 20" fill="currentColor">
			<path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" /></svg>';
  	$howToReviewClass = "howto-review-result__medium";
  } else {
  	$howToReviewPercentIcon =
  		'<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbdown h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" style="transform: scale(0.6) translate(1px, 13px)" /><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" style="transform: scale(0.6) translate(8px, 0px)" /></svg>';
  	$howToReviewClass = "howto-review-result__bad";
  }
  ?>

		<div class="text-white rounded-xl flex flex-wrap px-4 py-2 mb-3 howto-review-result <?= $howToReviewClass ?>">
			<p class="my-auto ml-0 mr-[10px] md:ml-3 md:mr-8  text-amber-300 text-4xl font-bold leading-none"><?= $howToReviewPercent ?>%</p>
			<div>
				<p class="m-0">Orang menganggap tutorial ini</p>
				<p class="m-0 howto-review-result__membantu">
					<?php if ($howToReviewPercent >= 65): ?>
						sangat
					<?php endif; ?>
					membantu
				</p>
			</div>
			<div class="ml-auto flex items-center">
				<?= $howToReviewPercentIcon ?>
			</div>
		</div>

		<script>
			document.querySelectorAll(".howto-review .howto-review__like, .howto-review .howto-review__dislike").forEach((el, i) => {
				el.addEventListener("click", (e) => {
					e.target.closest(".howto-review__vote").classList.add("hidden")
					e.target.closest(".howto-review").querySelector(".howto-review__thank").classList.remove("hidden")
				})
			})
		</script>

	</div>
	<?php
 $SCHEMEJSON = [
 	"@context" => "http://schema.org",
 	"@type" => "HowTo",
 	"name" => str_replace("\'", "'", wp_filter_nohtml_kses($title)),
 	"description" => str_replace(
 		"\'",
 		"'",
 		wp_filter_nohtml_kses($introduction)
 	),
 ];

 if (array_unique($totalTime) !== [0]) {
 	$SCHEMEJSON["totalTime"] = $ISOTotalTime;
 }

 if ($videoURL) {
 	$SCHEMEJSON["video"] = [
 		"@type" => "VideoObject",
 		"name" => str_replace("\'", "'", wp_filter_nohtml_kses($videoName)),
 		"description" =>
 			str_replace("\'", "'", wp_filter_nohtml_kses($videoDescription)) ?:
 			__("No description provided"),
 		"duration" => generateISODurationCode($videoDuration),
 		"thumbnailUrl" => esc_url($videoThumbnailURL),
 		"contentUrl" => esc_url($videoURL),
 		"embedUrl" => esc_url($videoURL),
 		"uploadDate" => date("c", $videoUploadDate),
 	];
 	if ($clips) {
 		$SCHEMEJSON["video"]["hasPart"] = "[" . $clips . "]";
 	}
 }

 if ($cost > 0) {
 	$SCHEMEJSON["estimatedCost"] = [
 		"@type" => "MonetaryAmount",
 		"currency" => str_replace(
 			"\'",
 			"'",
 			wp_filter_nohtml_kses($costCurrency)
 		),
 		"value" => wp_filter_nohtml_kses($cost),
 	];
 }

 $SCHEMEJSON["supply"] = [];
 if ($advancedMode && $includeSuppliesList) {
 	if (isset($supplies) && count($supplies) > 0) {
 		foreach ($supplies as $i => $s) {
 			$suppliesScheme = [
 				"@type" => "HowToSupply",
 				"name" => str_replace(
 					"\'",
 					"'",
 					wp_filter_nohtml_kses($s["name"])
 				),
 				"url" => get_permalink() . "#supply" . $i,
 			];
 			if ($s["imageURL"]) {
 				$suppliesScheme["image"] = $s["imageURL"];
 			}

 			array_push($SCHEMEJSON["supply"], $suppliesScheme);
 		}
 	}
 }

 $SCHEMEJSON["tool"] = [];
 if ($advancedMode && $includeToolsList) {
 	if (isset($tools) && count($tools) > 0) {
 		foreach ($tools as $i => $t) {
 			$toolsScheme = [
 				"@type" => "HowToTool",
 				"name" => str_replace(
 					"\'",
 					"'",
 					wp_filter_nohtml_kses($t["name"])
 				),
 				"url" => get_permalink() . "#tool" . $i,
 			];
 			if ($s["imageURL"]) {
 				$toolsScheme["image"] = $t["imageURL"];
 			}

 			array_push($SCHEMEJSON["tool"], $toolsScheme);
 		}
 	}
 }

 $SCHEMEJSON["step"] = [];
 if ($useSections) {
 	foreach ($section as $i => $s) {
 		$stepsScheme = [
 			"@type" => "HowToSection",
 			"name" => str_replace(
 				"\'",
 				"'",
 				wp_filter_nohtml_kses($s["sectionName"])
 			),
 		];
 		$stepsScheme["itemListElement"] = [];
 		foreach ($s["steps"] as $j => $step) {
 			$stepScheme = [
 				"@type" => "HowToStep",
 				"name" => str_replace(
 					"\'",
 					"'",
 					wp_filter_nohtml_kses($step["title"])
 				),
				 "url" => get_permalink() . "#" . $step["anchor"],
 			];

 			if ($advancedMode) {
 				// $stepScheme["url"] = get_permalink() . "#" . $step["anchor"];
 				if ($step["hasVideoClip"]) {
 					$stepScheme["video"] = [
 						"@id" => $step["anchor"],
 					];
 				}
 			}

 			if ($step["stepPic"]["url"]) {
 				$stepScheme["image"] = $step["stepPic"]["url"];
 			}
 			$stepScheme["itemListElement"] = [
 				[
 					"@type" => "HowToDirection",
 					"text" => "",
 				],
 			];
 			if ($step["title"] !== "") {
 				$stepScheme["itemListElement"][0]["text"] =
 					str_replace(
 						"\'",
 						"'",
 						wp_filter_nohtml_kses($step["title"])
 					) . " ";
 			}
 			$stepScheme["itemListElement"][0]["text"] .= str_replace(
 				"\'",
 				"'",
 				wp_filter_nohtml_kses($step["direction"])
 			);

 			if ($step["tip"] !== "") {
 				// Belum ada, gak paham maksudnya gimana
 			}
 			array_push($stepsScheme["itemListElement"], $stepScheme);
 		}

 		array_push($SCHEMEJSON["step"], $stepsScheme);
 	}
 } else {
 	if (isset($section) && count($section) > 0) {
 		foreach ($section[0]["steps"] as $index => $step) {
 			$stepScheme = [
 				"@type" => "HowToStep",
 				"name" => str_replace(
 					"\'",
 					"'",
 					wp_filter_nohtml_kses($step["title"])
 				),
				 "url" => get_permalink() . "#" . $step["anchor"],
 			];

 			if ($advancedMode) {
 				// $stepScheme["url"] = get_permalink() . "#" . $step["anchor"];
 				if ($step["hasVideoClip"]) {
 					$stepScheme["video"] = [
 						"@id" => $step["anchor"],
 					];
 				}
 			}

 			$stepScheme["image"] = $step["stepPic"]["url"];
 			$stepScheme["itemListElement"] = [
 				[
 					"@type" => "HowToDirection",
 					"text" => "",
 				],
 			];
 			if ($step["title"] !== "") {
 				$stepScheme["itemListElement"][0]["text"] =
 					str_replace(
 						"\'",
 						"'",
 						wp_filter_nohtml_kses($step["title"])
 					) . " ";
 			}
 			$stepScheme["itemListElement"][0]["text"] .= str_replace(
 				"\'",
 				"'",
 				wp_filter_nohtml_kses($step["direction"])
 			);

 			if ($step["tip"] !== "") {
 				// Belum ada, gak paham maksudnya gimana
 			}

 			array_push($SCHEMEJSON["step"], $stepScheme);
 		}
 	}
 }

 $SCHEMEJSON["yield"] = str_replace(
 	"\'",
 	"'",
 	wp_filter_nohtml_kses($howToYield)
 );
 $SCHEMEJSON["image"] = $finalImageURL;
 $SCHEMEJSON["aggregateRating"] = [
 	"@type" => "AggregateRating",
 	"ratingValue" => str_replace(
 		"\'",
 		"'",
 		wp_filter_nohtml_kses($howToRatingValue)
 	),
 	"bestRating" => "5",
 	"worstRating" => "1",
 	"ratingCount" => str_replace(
 		"\'",
 		"'",
 		wp_filter_nohtml_kses(intval($howToRatingCount))
 	),
 ];
 $SCHEMEJSON = json_encode(
 	$SCHEMEJSON,
 	JSON_UNESCAPED_UNICODE |
 		JSON_PRETTY_PRINT |
 		JSON_UNESCAPED_SLASHES |
 		JSON_HEX_TAG |
 		JSON_HEX_AMP |
 		JSON_HEX_APOS |
 		JSON_HEX_QUOT
 );
 $SCHEMEJSON =
 	PHP_EOL .
 	'<script type="application/ld+json">' .
 	PHP_EOL .
 	$SCHEMEJSON .
 	PHP_EOL .
 	"</script>";
 ?>
	<?= $SCHEMEJSON ?>
<?php return ob_get_clean();
}
function dbe_register_how_to_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/how-to", [
			"attributes" => $defaultValues["dbe/how-to"]["attributes"],
			"render_callback" => "dbe_render_how_to_block",
		]);
	}
}
add_action("init", "dbe_register_how_to_block");
