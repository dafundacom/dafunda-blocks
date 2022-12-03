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
        <div class="flex-1">

            <p class="mt-0 mb-3 text-3xl font-bold text-white">
                <?= $title ?>
            </p>
            <p class="mt-0 mb-3 text-base text-white">
                <?= $description ?>
            </p>

        </div>
        <div class="flex max-h-[162px] w-28 flex-col flex-wrap items-center overflow-hidden rounded-md bg-lime-600">
            <p class="flex grow items-center text-3xl font-bold text-white m-0">
                <?php $total_review_percentage = 0;
    foreach ($reviews as $key => $review) {
        $total_review_percentage = $total_review_percentage +  $review["value"];
    }
    $total_review_percentage = $total_review_percentage / count($review);
    ?>
                <?= $total_review_percentage ?>%
            </p>
            <div class="flex w-full justify-center bg-lime-500 py-2 text-xs text-white">
                SCORE
            </div>
        </div>
    </div>

    <div class="relative z-10 flex w-full flex-wrap overflow-hidden rounded-md bg-white">
        <div class="flex w-full flex-wrap border-b-2 border-slate-100 border-solid">
            <div class="basis-6/12 border-r-2 border-slate-100 border-solid p-3">
                <p class="mt-0 mb-3 text-sm font-bold">PROS</p>
                <ul class="list-none pl-0">
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
            <div class="basis-6/12 p-3">
                <p class="mt-0 mb-3 text-sm font-bold">CONS</p>
                <ul class="list-none pl-0">
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

                <?php foreach ($reviews as $review) :?>
                <div class="mb-6 flex flex-col flex-wrap">
                    <div class="mb-2 flex flex-wrap items-center justify-between">
                        <p
                            class="m-0 flex flex-1 flex-wrap items-center text-sm font-bold focus:outline-none focus:ring focus:ring-slate-300">
                            <?= $review["label"] ?>
                        </p>

                        <p class="m-0 flex flex-wrap items-center text-sm font-bold">
                            <?= $review["value"] ?>%
                        </p>

                    </div>
                    <div class="relative flex flex-wrap">
                        <?php
            $review_width = $review["value"];
                    if ($review_width >= 84) {
                        $review_width -= 1.5;
                    } elseif ($review_width >= 43) {
                        $review_width -= 1;
                    } elseif ($review_width >= 6) {
                        $review_width -= 0.5;
                    }
                    ?>

                        <div class="track"
                            style="width:<?= $review_width ?>%">
                        </div>
                        <input id="range_id" class="range" type="range" name="" min="0" max="100" step="1"
                            value="<?= $review["value"] ?>"
                            disabled />
                    </div>
                </div>
                <?php endforeach?>

            </div>
        </div>
    </div>
</div>