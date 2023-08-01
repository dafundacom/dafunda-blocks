<div class="dbe-block" id="recommendation-<?= $blockID ?>">
  <ol class="recommendation">
    <?php foreach ($lists as $index => $list) : ?>
      <li class="recommendation-card" data-index="<?= $index ?>">
        <div class="recommendation-image">
          <figure>
            <img class="recommendation-image-img" src="<?= $list["imageurl"] ?>" />
            <?php if (isset($list['price']) && $list['price']) : ?>
              <span class="recommendation-image-price"><?= isset($list['pricetag']) ? $list['pricetag'] . " " : "" ?><?= $list['price'] ?></span>
            <?php endif ?>
            <div class="recommendation-image-overlay" style="box-shadow: rgb(0 0 0 / 54%) -3px -125px 35px -14px inset;"></div>
          </figure>
          <div class="recommendation-image-info">
            <h4 class="recommendation-image-info-index"><?= $index + 1 ?>. &nbsp;</h4>
            <h4 class="recommendation-image-info-title"><?= $list['title'] ?></h4>
            <p class="recommendation-image-info-subtitle"><?= $list['subtitle'] ?></p>
          </div>
        </div>

        <div class="recommendation-olshop">
          <div>
            <?php foreach ($list["olshops"] as $index => $olshop) : ?>
              <a href="<?= $olshop["url"] ?>" class="recommendation-olshop-link">
                <?= file_get_contents(realpath(dirname(__DIR__, 1)) . "/icons/Icon" . $olshop['name'] . ".svg") ?>
                &nbsp; <?= $olshop["name"] ?>
              </a>
              <?php endforeach ?>
            </div>
        </div>

        <div class="recommendation-description">
          <?= htmlspecialchars_decode(stripslashes($list['description'])) ?>
        </div>

        <?php if (isset($list['url']) && $list['url'] != "") : ?>
          <a href="<?= $list['url'] ?>" class="recommendation-more-link">
            <svg xmlns="http://www.w3.org/2000/svg" class="recommendation-more-link-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            LIHAT LEBIH BANYAK
          </a>
        <?php endif ?>

      </li>
    <?php endforeach ?>
  </ol>
</div>
