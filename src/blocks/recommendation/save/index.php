<div class="rekomendasi-list " id="ranked-list-<?= $blockID ?>">
    <ol class="rekomendasi-list p-0">
      <?php foreach ( $lists as $index => $list ) : ?>
        <li class="rekomendasi-list-card flex flex-wrap flex-col relative shadow-lg rounded-lg mb-6">
          <!-- Image -->
          <div class="relative aspect-[16/7] object-cover object-center w-full overflow-hidden rounded-t-lg">
            <figure>
              <img class="" src="<?= $list["imageurl"] ?>" />
              <?php if ( isset($list['price']) && $list['price'] != "" ) : ?>
                <span class="absolute right-[20px] top-[20px] text-white hover:bg-red-800/90 p-2 w-auto h-auto rounded-full leading-none transition duration-200 ease-in-out text-lg font-bold px-11 py-3" style="background:rgba(225, 13, 13, 0.86);"><?= isset($list['pricetag']) ? $list['pricetag'] . " " : "" ?><?= $list['price'] ?></span>
              <?php endif ?>

              <div class="absolute inset-0" style="box-shadow: rgb(0 0 0 / 54%) -3px -125px 35px -14px inset;"></div>
            </figure>
            <div class="absolute left-6 bottom-3 flex flex-wrap">
              <h4 class="m-0 font-semibold text-white">
                <?= $index + 1 ?>. &nbsp;
              </h4>
              <h4 class="m-0 font-semibold text-white"><?= $list['title'] ?></h4>
              <p class="w-full m-0 text-white"><?= $list['subtitle'] ?></p>
            </div>
          </div>
          <!-- Image END -->

          <!-- Olshop Link  -->
          <div class="p-5">
            <div class="grid grid-cols-2 gap-3">
            <?php foreach ( $list["olshops"] as $index => $olshop ) : ?>
                <a href="<?= $olshop["url"] ?>" class="py-2 bg-[#EEEEEE] flex justify-center items-center rounded-lg font-bold text-sm" <?= isset($openNewTab) && $openNewTab ? "target='_blank'" : "" ?> >
                  <?= file_get_contents(realpath(dirname(__DIR__, 1)) . "/icons/Icon" . $olshop['name'] . ".svg") ?>
                  &nbsp; <?= $olshop["name"] ?>
                </a>
            <?php endforeach ?>
            </div>
          </div>
          <!-- Olshop Link END  -->

          <!-- Description -->
          <div class="p-5 pt-0">
            <?= htmlspecialchars_decode(stripslashes($list['description'])) ?>
          </div>
          <!-- Description END -->

          <?php if ( isset($list['url']) && $list['url'] != "" ) : ?>
            <a href="<?= $list['url'] ?>" class="text-red-700 font-bold flex flex-wrap items-center justify-center text-base text-center w-full py-3" <?= isset($openNewTab) && $openNewTab ? "target='_blank'" : "" ?> >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              LIHAT LEBIH BANYAK
            </a>
          <?php endif ?>

        </li>
      <?php endforeach ?>
    </ol>
  </div>
