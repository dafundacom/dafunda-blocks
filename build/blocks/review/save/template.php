<div
  class="dbe-block review <?= $background_used == "color" ? 'bg-color' : 'bg-gradient' ?>"
  style="background: <?= $background_used == "color" ? $background_color : $background_gradient?>;">
  <?php if ($background_used == "image" && $background_image != "") :?>
  <div class="review__image">
    <img src="<?= $background_image ?>" class="w-full" />
    <div class="review__image__overlay"></div>
  </div>
  <?php endif?>

  <div class="review__content">
    <div class="flex-1 order-2 md:order-1 md:mr-3">
      <p class="title">
        <?= $title ?>
      </p>
      <p class="description">
        <?= $description ?>
      </p>
    </div>
    <div class="score">
      <p class="percentage">
        <?= $result_total_breakdown_percentage ?>%
      </p>
      <div class="label">
        SCORE
      </div>
    </div>
  </div>

  <div class="review__details">
    <div class="pros-cons">
      <div class="pros">
        <p>PROS</p>
        <ul>
          <?php foreach ($pros as $pro) : ?>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <p>
              <?= $pro ?>
            </p>
          </li>
          <?php endforeach?>
        </ul>
      </div>
      <div class="cons">
        <p>CONS</p>
        <ul>
          <?php foreach ($cons as $con) : ?>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p>
              <?= $con ?>
            </p>
          </li>
          <?php endforeach?>
        </ul>
      </div>
    </div>

    <div class="review-breakdown">
      <p class="review-breakdown__header">REVIEW BREAKDOWN</p>
      <div class="w-full">
        <?php foreach ($breakdowns as $breakdown) :?>
        <div class="review-breakdown__slider">
          <p class="review-breakdown__title">
            <?= $breakdown["label"] ?></p>
          <div class="bar ">
            <div class="progress"
              style="width: <?= $breakdown["value"] ?>%; background: <?= $background_used == "color" ? $background_color : $background_gradient?>;">
            </div>
            <div class="marker"
              style="left: <?= $breakdown["value"] ?>%;">
            </div>
          </div>
        </div>
        <?php endforeach?>
      </div>
    </div>
  </div>
</div>