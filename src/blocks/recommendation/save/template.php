<div class="dbe-block recommendation" id="recommendation-<?= $blockID ?>">
    <ol class="p-0">
        <?php foreach ($lists as $index => $list) : ?>
            <li class="recommendation-card flex flex-wrap flex-col relative shadow-lg rounded-lg mb-6 bg-card">
                <!-- Image -->
                <div class="relative aspect-[16/10] md:aspect-[16/7] object-cover object-center w-full overflow-hidden rounded-t-lg">
                    <figure>
                        <img class="w-full max-h-[-webkit-fill-available] object-cover object-center" src="<?= $list["imageurl"] ?>" />
                        <?php if (isset($list['price']) && $list['price']) : ?>
                            <span class="z-10 absolute right-[20px] top-[20px] text-white bg-danger w-auto h-auto rounded-full leading-none transition duration-200 ease-in-out text-sm md:text-lg font-bold px-6 md:px-11 py-2 md:py-3"><?= isset($list['pricetag']) ? $list['pricetag'] . " " : "" ?><?= $list['price'] ?></span>
                        <?php endif ?>

                        <div class="absolute inset-0" style="box-shadow: rgb(0 0 0 / 54%) -3px -125px 35px -14px inset;"></div>
                    </figure>
                    <div class="absolute left-0 bottom-0 w-full pl-4 pb-2 flex flex-wrap">
                        <h4 class="m-0 font-semibold text-white">
                            <?= $index + 1 ?>. &nbsp;
                        </h4>
                        <h4 class="m-0 font-semibold text-white"><?= $list['title'] ?></h4>
                        <p class="w-full m-0 text-white leading-5"><?= $list['subtitle'] ?></p>
                    </div>
                </div>
                <!-- Image END -->

                <!-- Olshop Link  -->
                <div class="p-5">
                    <div class="grid grid-cols-2 gap-3">
                        <?php foreach ($list["olshops"] as $index => $olshop) : ?>
                            <a href="<?= $olshop["url"] ?>" class="py-2  bg-black/10 dark:bg-black/50 hover:bg-black/20 dark:hover:bg-black/90 flex justify-center items-center rounded-lg font-bold text-sm duration-200" <?= isset($openNewTab) && $openNewTab ? "target='_blank'" : "" ?>>
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

                <?php if (isset($list['url']) && $list['url'] != "") : ?>
                    <a href="<?= $list['url'] ?>" class="hover:bg-black/10 dark:!text-danger dark:hover:!text-card  dark:bg-card-foreground rounded-b-md !no-underline !font-bold flex flex-wrap items-center justify-center !text-base text-center w-full !py-3 !m-0" <?= isset($openNewTab) && $openNewTab ? "target='_blank'" : "" ?>>
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
