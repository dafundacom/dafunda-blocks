<div class="review_block wp-block relative min-h-[500px] w-full overflow-hidden rounded-md !p-4"
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
            class="flex max-h-[162px] w-full md:w-28 flex-col flex-wrap items-center overflow-hidden rounded-md bg-lime-600 order-1 md:order-2 mb-4 md:mb-0">
            <p class="flex grow items-center text-3xl font-bold text-white m-0 py-4 md:py-10">
                <?= $result_total_breakdown_percentage ?>%
            </p>
            <div class="flex w-full justify-center bg-lime-500 py-2 text-xs text-white">
                SCORE
            </div>
        </div>
    </div>

    <div class="relative z-10 flex w-full flex-wrap overflow-hidden rounded-md bg-white dark:bg-neutral-900">
        <div
            class="flex w-full flex-wrap border-0 border-b-2 border-slate-100 dark:border-neutral-800 border-solid gap-4 md:gap-0">
            <div
                class=" basis-full md:basis-6/12 border-0 border-b-2 md:border-r-2 border-slate-100 dark:border-neutral-800 border-solid p-3">
                <p class="mt-0 mb-3 text-sm font-bold">PROS</p>
                <ul class="list-none pl-0 m-0">
                    <?php foreach ($pros as $pro) : ?>
                    <li class="flex flex-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-5 w-5 text-lime-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                        <p class="mt-0 mb-3 flex-1 text-base focus:outline-none focus:ring focus:ring-slate-300">
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
                            stroke="currentColor" class="h-5 w-5 text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        <p class="mt-0 mb-3 flex-1 text-base focus:outline-none focus:ring focus:ring-slate-300">
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
                <div class="mb-6 flex flex-col flex-wrap">
                    <div class="mb-2 flex flex-wrap items-center justify-between">
                        <p
                            class="m-0 flex flex-1 flex-wrap items-center text-sm font-bold focus:outline-none focus:ring focus:ring-slate-300">
                            <?= $breakdown["label"] ?>
                        </p>

                        <p class="m-0 flex flex-wrap items-center text-sm font-bold">
                            <?= $breakdown["value"] ?>%
                        </p>

                    </div>
                    <div class="relative flex flex-wrap costum-slider">
                        <?php
            $breakdown_width = $breakdown["value"];
                    if ($breakdown_width >= 84) {
                        $breakdown_width -= 1.5;
                    } elseif ($breakdown_width >= 70) {
                        $breakdown_width -= 1.5;
                    } elseif ($breakdown_width >= 33) {
                        $breakdown_width -= 1;
                    } elseif ($breakdown_width >= 6) {
                        $breakdown_width -= 0.5;
                    }
                    ?>

                        <div class="track"
                            style="width:<?= $breakdown_width ?>%">
                            <div class="thumb w-4 h-4 rounded-full bg-white border-[4px] border-red-400 border-solid absolute right-0 top-[50%] translate-x-[50%] translate-y-[-50%] cursor-pointer"></div>
                        </div>
                        <input id="range_id" class="range" type="range" name="" min="0" max="100" step="1"
                            value="<?= $breakdown["value"] ?>" />
                    </div>
                </div>
                <?php endforeach?>

            </div>
        </div>
    </div>
</div>
