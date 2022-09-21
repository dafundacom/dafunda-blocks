<div class="howto mb-8" id="howto_<?= $blockID ?>" data-blockID="<?= $blockID ?>" block>
		<<?= $firstLevelTag ?> class="howto__title text-3xl">
			<?= $title ?>
		</<?= $firstLevelTag ?>>

		<?= dbe_convert_to_paragraphs($introduction) ?>

		<div class="flex w-full justify-center">
			<?php if ( $advancedMode ) : ?>
				<div class="mr-5">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
					</svg>
					<p class='inline-block m-0 text-base'>
						<?= $advancedMode
							? (($videoURL === "" ? "" : $videoEmbedCode) . $cost < 1
								? "Gratis"
								: $costDisplayText .
								" " .
								$costDisplay .
								"")
							: "" ?>
					</p>
				</div>
			<?php endif ?>
			<?php if ( $totalTimeDisplay ) : ?>
				<div class="flex items-center text-base">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					&nbsp;
					<?= $timeDisplay ?>
				</div>
			<?php endif ?>
		</div>

		<?= $header ?>

		<?php $sectionListStyleTag = $sectionListStyle === "ordered" ? "ul" : "ol"; ?>
		<<?= $sectionListStyleTag ?> class="pl-0">
			<?php if ( $useSections ) : ?>
				<?php foreach ( $section as $i => $section_ ) : ?>
					<li class="howto-section list-none">
						<<?= $secondLevelTag ?>>
							<?= $section_["sectionName"] ?>
						</<?= $secondLevelTag ?>>

						<ul class="howto-step-display">
							<?php foreach ( $section_["steps"] as $index => $step ) : ?>
								<li class="howto-step p-3 mb-12 list-none">
									<div class="flex flex-wrap">
										<div class="flex flex-wrap">
											<div class="bg-slate-200 flex flex-wrap items-center justify-center my-2 aspect-square  md:col-span-1 rounded-full w-[2.2rem] md:w-[2.2rem] flex-none font-semibold text-2xl md:text-2xl h-[fit-content]">
												<?= $index + 1 ?>
											</div>

											<div class="px-2 flex-1">
												<<?= $thirdLevelTag ?> id="<?= $step["anchor"] ?>" class="howto-step__title my-2 font-normal text-[1.3rem] md:text-2xl">
													<?= $step["title"] ?>
												</<?= $thirdLevelTag ?>>
											</div>
										</div>

										<div class="col-span-12 md:col-span-11 w-full">
											<?= dbe_convert_to_paragraphs($step["direction"]) ?>
										</div>

										<div class="col-span-12 howto-step__image max-h-[1000px] md:max-h-[1600px] mx-auto">

                                                <?php if ( $step["stepPic"]["url"] !== "" ) : ?>
                                                    <figure class="w-full">
                                                        <img class="howto-step-image mx-auto rounded-xl overflow-hidden" src="<?= $step["stepPic"]["url"] ?>">
                                                        <?php if ( $step["stepPic"]["caption"] !== "" ) : ?>
                                                        <center>
                                                            <figcaption>
                                                                <em class="text-base"> 
                                                                    <?= $step["stepPic"]["caption"] ?>
                                                                </em>
                                                            </figcaption>
                                                        </center>
                                                        <?php endif ?>
                                                    </figure>
                                                <?php endif ?>
										</div>
									</div>
								</li>
							<?php endforeach; ?>
						</ul>
					</li>
				<?php endforeach; ?>
			<?php else : ?>
				<?php if ( isset($section) && count($section) > 0 ) : ?>
					<?php foreach ( $section[0]["steps"] as $index => $step ) : ?>
						<li class="howto-step p-3 mb-12">
							<div class="flex flex-wrap">
								<div class="flex flex-wrap">
									<div class="bg-slate-200 flex flex-wrap items-center justify-center my-2 aspect-square  md:col-span-1 rounded-full w-[2.2rem] md:w-[2.2rem] flex-none font-semibold text-2xl md:text-2xl h-[fit-content]">
										<?= $index + 1 ?>
									</div>

									<div class="px-2 flex-1">
										<<?= $thirdLevelTag ?> id="<?= $step["anchor"] ?>" class="howto-step__title my-2 font-normal text-[1.3rem] md:text-2xl normal-case">
											<?= $step["title"] ?>
										</<?= $thirdLevelTag ?>>
									</div>
								</div>

								<div class="col-span-12 md:col-span-11 w-full">
									<?= dbe_convert_to_paragraphs($step["direction"]) ?>
								</div>

								<div class="col-span-12 howto-step__image max-h-[1000px] md:max-h-[1600px] mx-auto">
                                <?php if ( $step["stepPic"]["url"] !== "" ) : ?>
                                                    <figure class="w-full">
                                                        <img class="howto-step-image mx-auto rounded-xl overflow-hidden" src="<?= $step["stepPic"]["url"] ?>">
                                                        <?php if ( $step["stepPic"]["caption"] !== "" ) : ?>
                                                        <center>
                                                            <figcaption>
                                                                <em class="text-base"> 
                                                                    <?= $step["stepPic"]["caption"] ?>
                                                                </em>
                                                            </figcaption>
                                                        </center>
                                                        <?php endif ?>
                                                    </figure>
                                                <?php endif ?>
								</div>
							</div>
						</li>
					<?php endforeach; ?>
				<?php endif; ?>
			<?php endif; ?>
		</<?= $sectionListStyleTag ?>>


		<?php if ( $resultIntro && $howToYield ) : ?>
			<div class="howto-yield bg-[#16A085] rounded-xl text-white p-5">
				<div class="w-100 flex flex-wrap justify-center mb-3">
					<<?= $secondLevelTag ?> class="text-white font-bold m-0 text-3xl">
						<?= $resultIntro ?>
					</<?= $secondLevelTag ?>>
				</div>

                <?php if ( $finalImageURL !== "" ) : ?>
                    <figure class="howto-yield-image-container mt-2 w-full relative">
                        <img class="howto-yield-image mx-auto rounded-xl overflow-hidden" src="<?= $finalImageURL ?>">

                        <?php if ( $finalImageCaption !== "" ) : ?>
                           <center>
                                <em>
                                    <figcaption class="text-white text-base">
                                        <?= $finalImageCaption ?>
                                    </figcaption>
                                </em>
                            </center>
                        <?php endif ?>
                    </figure>
                <?php endif ?>

				<p class="mb-0 mt-2">
                <?= $howToYield ?>
                </p>
			</div>
		<?php endif; ?>
		<?php
		$isVoted = function () use ( $dbe_device_id ) {
			if ( ! $dbe_device_id) return false;
			global $wpdb;
			$table_name = $wpdb->prefix . GB_PREFIX . "_vote_log";
			$block_name = GB_PREFIX . "/how-to";
			$post_id = get_the_ID();
			$sql_string = "SELECT * FROM $table_name WHERE post_id = $post_id AND block_name = '$block_name' AND dbe_device_id = '$dbe_device_id'";
			$result = $wpdb->get_row($sql_string);
			if ( $result == null ) {
				return false;
			} else {
				return true;
			}
		};
		?>
		<div class="howto-review mt-4 rounded-lg border border-slate-200 md:overflow-hidden p-3 mb-3">

			<?php if ( ! $isVoted() ) : ?>
				<div class="howto-review__vote">
					<div class="w-full text-center mb-4">
						Apakah artikel ini membantu mu?
					</div>
					<div class="w-full flex flex-wrap justify-center items-center mb-3">
						<div class="howto-review__like mr-3 cursor-pointer" data-action="like">
							<button class="flex items-center py-1 bg-transparent">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#16A085">
									<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
								</svg>
							</button>
						</div>
						<div class="howto-review__dislike cursor-pointer" data-action="dislike">
							<button class="flex items-center py-1 bg-transparent">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#C44569">
									<path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			<?php endif ?>

			<div class="howto-review__thank w-full text-center my-4 text-lg <?= ! $isVoted() ? "hidden" : "" ?>">
				<p class="m-0">Terimakasih sudah memberi jawaban</p>
			</div>
		</div>
		<?php
		// $howToReviewPercent = intval(($howToRatingValue / 5) * 100);
		if ( ! isset($howToLikeCount) || gettype($howToLikeCount) != 'integer') $howToLikeCount = 0;
		if ( ! isset($howToDisikeCount) || gettype($howToDisikeCount) != 'integer') $howToDisikeCount = 0;
		if ( ! isset($howToVoteCount) || gettype($howToVoteCount) != 'integer') $howToVoteCount = 0;
		try {
			$howToReviewPercent = intval(($howToLikeCount / $howToVoteCount) * 100);
		} catch ( \Throwable $th ) {
			$howToReviewPercent = 0;
		}
		// $howToReviewPercent = 60;
		$howToReviewClass = "howto-review-result__good";
		if ( $howToReviewPercent > 100 ) {
			$howToReviewPercent = 100;
		}
		if ( $howToReviewPercent < 0 ) {
			$howToReviewPercent = 0;
		}
		$howToReviewPercentIcon =
			'<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbup h-10 w-10 rotate-[-13.41deg]" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>';
		if ( $howToReviewPercent >= 65 ) {
			$howToReviewClass = "howto-review-result__good";
		} elseif ( $howToReviewPercent >= 50 ) {
			$howToReviewPercentIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbdown h-10 w-10 rotate-[-13.41deg]" viewBox="0 0 20 20" fill="currentColor">
			<path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" /></svg>';
			$howToReviewClass = "howto-review-result__medium";
		} else {
			$howToReviewPercentIcon =
				'<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbdown h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" style="transform: scale(0.6) translate(1px, 13px)" /><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" style="transform: scale(0.6) translate(8px, 0px)" /></svg>';
			$howToReviewClass = "howto-review-result__bad";
		}
		?>

		<div class="wrapper-how-to-review text-white rounded-xl flex flex-wrap px-4 py-2 mb-3 howto-review-result <?= $howToReviewClass ?>">
		</div>

		<script>
			renderHowToReview(<?= $howToReviewPercent ?>)
			document.querySelectorAll(".howto-review .howto-review__like, .howto-review .howto-review__dislike").forEach((el, i) => {
				el.addEventListener("click", (e) => {
					e.target.closest(".howto-review__vote").classList.add("hidden")
					e.target.closest(".howto-review").querySelector(".howto-review__thank").classList.remove("hidden")
					let body = {
						post_id: <?= get_the_ID() ?>,
						block_id: e.target.closest(".howto").getAttribute("data-blockID"),
						block_name: "<?= GB_PREFIX ?>/how-to",
						action: el.getAttribute("data-action")
					}
					fetch("<?= site_url("wp-json/" . GB_PREFIX . "/v1/howto/vote"); ?>", {
							method: "POST",
							mode: "same-origin",
							credentials: "same-origin",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(body)
						})
						.then(res => res.text())
						.then(body => {
							try {
								return JSON.parse(body);
							} catch {
								return body
							}
						})
						.then(res => {
							renderHowToReview(parseInt((res.howToLikeCount / res.howToVoteCount) * 100))
						})
				})
			})

			function renderHowToReview(howToReviewPercent) {
				if (howToReviewPercent > 100) {
					howToReviewPercent = 100;
				}
				if (howToReviewPercent < 0) {
					howToReviewPercent = 0;
				}
				let howToReviewPercentIcon =
					'<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbup h-10 w-10 rotate-[-13.41deg]" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>';
				let howToReviewClass = ""
				if (howToReviewPercent >= 65) {
					howToReviewClass = "howto-review-result__good";
				} else if (howToReviewPercent >= 50) {
					howToReviewPercentIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbdown h-10 w-10 rotate-[-13.41deg]" viewBox="0 0 20 20" fill="currentColor"> <
						path d = "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" / > < /svg>`;
					howToReviewClass = "howto-review-result__medium";
				} else {
					howToReviewPercentIcon =
						'<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbdown h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" style="transform: scale(0.6) translate(1px, 13px)" /><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" style="transform: scale(0.6) translate(8px, 0px)" /></svg>';
					howToReviewClass = "howto-review-result__bad";
				}

				let html = `
			<p class="my-auto ml-0 mr-[10px] md:ml-3 md:mr-8  text-amber-300 text-4xl font-bold leading-none">${howToReviewPercent}%</p>
			<div>
				<p class="m-0">Orang menganggap tutorial ini</p>
				<p class="m-0 howto-review-result__membantu">
					${howToReviewPercent >= 65 ? "sangat " : " "}
					membantu
				</p>
			</div>
			<div class="ml-auto flex items-center">
				${howToReviewPercentIcon}
			</div>
				`
				let asdqwdcsdv = ["howto-review-result__bad", "howto-review-result__medium", "howto-review-result__good"]
				asdqwdcsdv.forEach(clss => {
					document.querySelector(".wrapper-how-to-review").classList.remove(clss)
				});

                let el_whtr = document.querySelector(".wrapper-how-to-review")

                if (howToReviewPercent >= 65) el_whtr.style.backgroundColor = "#16A085"
                else if (howToReviewPercent >= 50) el_whtr.style.backgroundColor = "#F19066"
                else el_whtr.style.backgroundColor = "#C44569"

				// el_whtr.classList.add(howToReviewClass)
				el_whtr.innerHTML = html;
			}
		</script>
</div>
