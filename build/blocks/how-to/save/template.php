<div class="dbe-block how-to" id="how-to_<?= $blockID ?>"
  data-blockID="<?= $blockID ?>" block>
  <<?= $firstLevelTag ?> class="dbe-how-to__title">
    <?= $title ?>
  </<?= $firstLevelTag ?>>

  <p class="dbe-how-to__introduction">
    <?= dbe_convert_to_paragraphs($introduction) ?>
  </p>

  <div class="dbe-how-to__additional">
    <?php if ($advancedMode) : ?>
    <div class="dbe-how-to__cost">
      <svg xmlns="http://www.w3.org/2000/svg" class="dbe-how-to__cost-svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
      <p class="dbe-how-to__cost-display-text">
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
    <?php if ($totalTimeDisplay) : ?>
    <div class="dbe-how-to__time">
      <svg xmlns="http://www.w3.org/2000/svg" class="dbe-how-to__time-svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      &nbsp;
      <?= $timeDisplay ?>
    </div>
    <?php endif ?>
  </div>


  <?= $header ?>

  <?php $sectionListStyleTag = $sectionListStyle === "ordered" ? "ul" : "ol"; ?>


  <<?= $sectionListStyleTag ?> class="dbe-how-to__section">
    <?php if ($useSections) : ?>
    <?php foreach ($section as $i => $section_) : ?>
    <li class="dbe-how-to__section-item">
      <<?= $secondLevelTag ?> class="dbe-how-to__section-title">
        <?= $section_["sectionName"] ?>
      </<?= $secondLevelTag ?>>

      <ul class="dbe-how-to__step-display">
        <?php foreach ($section_["steps"] as $index => $step) : ?>
        <li class="dbe-how-to__step">
          <div class="dbe-how-to__step-number">
            <?= $index + 1 ?>
          </div>

          <div class="dbe-how-to__step-title">
            <<?= $thirdLevelTag ?>
              id="<?= $step["anchor"] ?>"
              class="dbe-how-to__step-title-text">
              <?= $step["title"] ?>
            </<?= $thirdLevelTag ?>>
          </div>

          <div class="dbe-how-to__step-direction">
            <?= dbe_convert_to_paragraphs($step["direction"]) ?>
          </div>

          <div class="dbe-how-to__step-image">
            <?php if ($step["stepPic"]["url"] !== "") : ?>
            <figure>
              <img class="dbe-how-to__step-image-item"
                src="<?= $step["stepPic"]["url"] ?>">
              <?php if ($step["stepPic"]["caption"] !== "") : ?>
              <center>
                <figcaption>
                  <em class="dbe-how-to__step-image-caption">
                    <?= $step["stepPic"]["caption"] ?>
                  </em>
                </figcaption>
              </center>
              <?php endif ?>
            </figure>
            <?php endif ?>
          </div>
        </li>
        <?php endforeach; ?>
      </ul>
    </li>
    <?php endforeach; ?>
    <?php else : ?>
    <?php if (isset($section) && count($section) > 0) : ?>
    <?php foreach ($section[0]["steps"] as $index => $step) : ?>
    <li class="dbe-how-to__step">
      <div class="dbe-how-to__step-number">
        <?= $index + 1 ?>
      </div>

      <div class="dbe-how-to__step-title">
        <<?= $thirdLevelTag ?>
          id="<?= $step["anchor"] ?>"
          class="dbe-how-to__step-title-text">
          <?= $step["title"] ?>
        </<?= $thirdLevelTag ?>>
      </div>

      <div class="dbe-how-to__step-direction">
        <?= dbe_convert_to_paragraphs($step["direction"]) ?>
      </div>

      <div class="dbe-how-to__step-image">
        <?php if ($step["stepPic"]["url"] !== "") : ?>
        <figure>
          <img class="dbe-how-to__step-image-item"
            src="<?= $step["stepPic"]["url"] ?>">
          <?php if ($step["stepPic"]["caption"] !== "") : ?>
          <center>
            <figcaption>
              <em class="dbe-how-to__step-image-caption">
                <?= $step["stepPic"]["caption"] ?>
              </em>
            </figcaption>
          </center>
          <?php endif ?>
        </figure>
        <?php endif ?>
      </div>
    </li>
    <?php endforeach; ?>
    <?php endif; ?>
    <?php endif; ?>
  </<?= $sectionListStyleTag ?>>


  <?php if ($resultIntro && $howToYield) : ?>
  <div class="how-to-yield">
    <div class="how-to-yield-title">
      <<?= $secondLevelTag ?> class="how-to-yield-title-text">
        <?= $resultIntro ?>
      </<?= $secondLevelTag ?>>
    </div>

    <?php if ($finalImageURL !== "") : ?>
    <figure class="how-to-yield-image-container">
      <img class="how-to-yield-image" src="<?= $finalImageURL ?>">
      <?php if ($finalImageCaption !== "") : ?>
      <center>
        <em class="how-to-yield-image-caption">
          <figcaption>
            <?= $finalImageCaption ?>
          </figcaption>
        </em>
      </center>
      <?php endif ?>
    </figure>
    <?php endif ?>

    <p class="how-to-yield-text">
      <?= $howToYield ?>
    </p>
  </div>
  <?php endif; ?>


  <?php
$isVoted = function () use ($dbe_device_id) {
    if (! $dbe_device_id) {
        return false;
    }
    global $wpdb;
    $table_name = $wpdb->prefix . DBE_PREFIX . "_vote_log";
    $block_name = DBE_PREFIX . "/how-to";
    $post_id = get_the_ID();
    $sql_string = "SELECT * FROM $table_name WHERE post_id = $post_id AND block_name = '$block_name' AND dbe_device_id = '$dbe_device_id'";
    $result = $wpdb->get_row($sql_string);
    if ($result == null) {
        return false;
    } else {
        return true;
    }
};
?>
  <div class="how-to-review mt-4">
    <?php if (! $isVoted()) : ?>
    <div class="how-to-review-vote">
      <div class="how-to-review-vote-question">
        Apakah artikel ini membantu mu?
      </div>
      <div class="how-to-review-vote-buttons">
        <div class="how-to-review-vote-like" data-action="like">
          <button class="how-to-review-vote-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="how-to-review-vote-icon" viewBox="0 0 20 20" fill="#16A085">
              <path
                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
          </button>
        </div>
        <div class="how-to-review-vote-dislike" data-action="dislike">
          <button class="how-to-review-vote-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="how-to-review-vote-icon" viewBox="0 0 20 20" fill="#C44569">
              <path
                d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <?php endif ?>

    <div
      class="how-to-review-thank <?= ! $isVoted() ? "hidden" : "" ?>">
      <p class="how-to-review-thank-text">Terimakasih sudah memberi jawaban</p>
    </div>
  </div>


  <?php
// $howToReviewPercent = intval(($howToRatingValue / 5) * 100);
if (!isset($howToLikeCount) || gettype($howToLikeCount) != 'integer') {
    $howToLikeCount = 0;
}
if (!isset($howToDisikeCount) || gettype($howToDisikeCount) != 'integer') {
    $howToDisikeCount = 0;
}
if (!isset($howToVoteCount) || gettype($howToVoteCount) != 'integer') {
    $howToVoteCount = 0;
}
try {
    $howToReviewPercent = intval(($howToLikeCount / $howToVoteCount) * 100);
} catch (\Throwable $th) {
    $howToReviewPercent = 0;
}
// $howToReviewPercent = 60;
$howToReviewClass = "how-to-review-result__good";
if ($howToReviewPercent > 100) {
    $howToReviewPercent = 100;
}
if ($howToReviewPercent < 0) {
    $howToReviewPercent = 0;
}
$howToReviewPercentIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" class="how-to-review-result__good-svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>';
if ($howToReviewPercent >= 65) {
    $howToReviewClass = "how-to-review-result__good";
} elseif ($howToReviewPercent >= 50) {
    $howToReviewPercentIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="how-to-review-result__medium-svg" viewBox="0 0 20 20" fill="currentColor">
			<path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" /></svg>';
    $howToReviewClass = "how-to-review-result__medium";
} else {
    $howToReviewPercentIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" class="how-to-review-result__bad-svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" style="transform: scale(0.6) translate(1px, 13px)" /><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" style="transform: scale(0.6) translate(8px, 0px)" /></svg>';
    $howToReviewClass = "how-to-review-result__bad";
}
?>

  <div
    class="wrapper-how-to-review text-white rounded-xl flex flex-wrap items-center px-4 py-3 mb-3 how-to-review-result <?= $howToReviewClass ?>">
  </div>

  <script>
    renderHowToReview( <?= $howToReviewPercent ?> )
    document.querySelectorAll(".how-to-review .how-to-review-vote-like, .how-to-review .how-to-review-vote-dislike")
      .forEach((
        el, i) => {
        el.addEventListener("click", (e) => {
          e.target.closest(".how-to-review-vote").classList.add("hidden")
          e.target.closest(".how-to-review").querySelector(".how-to-review-thank").classList
            .remove("hidden")
          e.target.closest(".how-to-review").querySelector(".how-to-review-thank").style.display = "block"
          let body = {
            post_id: <?= get_the_ID() ?> ,
            block_id: e.target.closest(".how-to").getAttribute("data-blockID"),
            block_name: "<?= DBE_PREFIX ?>/how-to",
            action: el.getAttribute("data-action")
          }
          fetch(
              "<?= site_url("wp-json/" . DBE_PREFIX . "/v1/howto/vote"); ?>", {
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
        howToReviewClass = "how-to-review-result__good";
      } else if (howToReviewPercent >= 50) {
        howToReviewPercentIcon =
          `<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbdown h-10 w-10 rotate-[-13.41deg]" viewBox="0 0 20 20" fill="currentColor"> <
						path d = "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" / > < /svg>`;
        howToReviewClass = "how-to-review-result__medium";
      } else {
        howToReviewPercentIcon =
          '<svg xmlns="http://www.w3.org/2000/svg" class="svg-thumbdown h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" style="transform: scale(0.6) translate(1px, 13px)" /><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" style="transform: scale(0.6) translate(8px, 0px)" /></svg>';
        howToReviewClass = "how-to-review-result__bad";
      }

      let html = `
			<p class="my-auto ml-0 mr-[10px] md:ml-3 md:mr-8 text-4xl font-bold leading-none text-white">${howToReviewPercent}%</p>
			<div style="max-width: 60%">
				<p class="m-0 leading-5 text-white">Orang menganggap tutorial ini ${howToReviewPercent >= 65 ? "sangat " : " "} membantu</p>
				<p class="m-0 how-to-review-result__membantu">
				</p>
			</div>
			<div class="ml-auto flex items-center text-white">
				${howToReviewPercentIcon}
			</div>
				`
      let asdqwdcsdv = ["how-to-review-result__bad", "how-to-review-result__medium", "how-to-review-result__good"]
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