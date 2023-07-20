<div class="review_block wp-block relative w-full overflow-hidden rounded-md p-4"
    style="background: <?= $background_used == "color" ? $background_color : $background_gradient?>;">

    <?php if ($background_used == "image" && $background_image != "") :?>
    <div class="absolute inset-0 z-0">
        <img src="<?= $background_image ?>" class="w-full" />
        <div style="background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6477941518404237) 7%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 100%);transform:scaleY(1.5)"
            class="w-full h-full"></div>
    </div>
    <?php endif?>

    <div class="relative z-10 mb-4 flex w-full flex-row flex-wrap">
        <div class="flex-1 order-2 md:order-1">

            <p class="mt-0 mb-3 text-2xl md:text-3xl font-bold text-white">
                <?= $title ?>
            </p>
            <p class="mt-0 mb-3 text-base text-white">
                <?= $description ?>
            </p>

        </div>
        <div
            class="flex w-full md:w-28 flex-col flex-wrap items-center overflow-hidden rounded-md bg-success/70 order-1 md:order-2 mb-4 md:mb-0" style="max-height: 162px;">
            <p class="flex grow items-center text-3xl font-bold text-white m-0 py-4 md:py-10">
                <?= $result_total_breakdown_percentage ?>%
            </p>
            <div class="flex w-full justify-center bg-success/90 py-2 text-xs text-white">
                SCORE
            </div>
        </div>
    </div>

    <div class="relative z-10 flex w-full flex-wrap overflow-hidden rounded-md bg-white dark:bg-background">
        <div
            class="flex w-full flex-wrap border-0 border-b-2 border-black/10 dark:border-white/10 border-solid gap-4 md:gap-0">
            <div
                class="basis-full md:basis-6/12 border-0 border-b-2 md:border-b-0 md:border-r-2 border-black/10 dark:border-white/10 border-solid p-3">
                <p class="mt-0 mb-3 text-sm font-bold">PROS</p>
                <ul class="list-none pl-0 m-0">
                    <?php foreach ($pros as $pro) : ?>
                    <li class="flex flex-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-5 w-5 text-success/70">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <p class="mt-0 mb-3 flex-1 text-base">
                            <?= $pro ?>
                        </p>
                    </li>
                    <?php endforeach?>
                </ul>
            </div>
            <div class="basis-full md:basis-6/12 p-3">
                <p class="mt-0 mb-3 text-sm font-bold">CONS</p>
                <ul class="list-none pl-0 m-0">
                    <?php foreach ($cons as $con) : ?>
                    <li class="flex flex-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-5 w-5 text-danger">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        <p class="mt-0 mb-3 flex-1 text-base">
                            <?= $con ?>
                        </p>
                    </li>
                    <?php endforeach?>
                </ul>
            </div>
        </div>
        <div class="flex w-full flex-wrap p-5">
            <p class="mt-0 mb-3 text-sm font-bold">REVIEW BREAKDOWN</p>
            <div class="w-full">
                <?php foreach ($breakdowns as $breakdown) :?>
                  <div class="dafunda-block_review-slider mb-6">
                    <div class="w-full h-2 rounded bg-white border border-black/20 relative border-solid">
                      <div class="bg-danger rounded h-full" style="width: <?= $breakdown["value"] ?>%;">
                      </div>
                      <div class="absolute w-4 h-4 bg-white rounded-full border-[4px] border-danger border-solid top-1/2 -translate-x-1/2 -translate-y-1/2" style="left: <?= $breakdown["value"] ?>%;">
                      </div>
                    </div>
                  </div>
                <?php endforeach?>

            </div>
        </div>
    </div>
</div>
