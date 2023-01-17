<div class="dbe-blocks dbe-posts"
    id="dbe-posts-<?= $attributes['blockID'] ?>">
    <div class="flex flex-col flex-wrap gap-2 dbe-posts-list">
        <?php foreach ($posts as $key => $post) :?>
        <div>
            <a href="<?= $post["guid"] ?>"
                class="flex flex-wrap overflow-hidden rounded-md border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="basis-2/12">
                    <img class="h-full w-full object-cover object-center"
                        src="<?= $post["thumbnails"]["medium_large"] ?>"
                        alt="<?= $post["post_title"] ?>" />
                </div>
                <div class="flex basis-10/12 flex-col justify-between p-2 leading-normal">
                    <h5 class="m-0 mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                        <?= $post["post_title"] ?>
                    </h5>

                    <!-- {/* Details */} -->
                    <div class="mb-2 flex flex-wrap gap-2">
                        <!-- {/* Author */} -->
                        <div class="flex flex-wrap items-center gap-1">
                            <img src="<?= $post["author"]["image"] ?>"
                                class="h-3.5 w-3.5 rounded-full" />
                            <p class="m-0 text-xs">
                                <?= $post["author"]["name"] ?>
                            </p>
                        </div>

                        <!-- {/* Date */} -->
                        <div class="flex flex-wrap items-center gap-1">
                            <div class="h-3.5 w-3.5">
                                <img src="<?= DBE_PLUGIN_BUILD_URL . "/icons/calendar-days.svg"?>"
                                    alt="">
                            </div>
                            <p class="m-0 text-xs">
                                <?= $post["post_date"] ?>
                            </p>
                        </div>

                        <!-- {/* Comment Count */} -->
                        <div class="flex flex-wrap items-center gap-1">
                            <div class="h-3.5 w-3.5">
                                <img src="<?= DBE_PLUGIN_BUILD_URL . "/icons/chat-bubble-bottom-center-text.svg"?>"
                                    alt="">
                            </div>
                            <p class="m-0 text-xs">
                                <?= $post["comment_count"] ?>
                            </p>
                        </div>
                    </div>

                    <p class="m-0 mb-2 text-xs font-normal text-gray-700 dark:text-gray-400">
                        <?= $post["post_excerpt"] ?>
                    </p>

                    <div class="anchor mb-2 flex flex-wrap items-center gap-2 text-xs">
                        Read more
                        <div class="h-3.5 w-3.5">
                            <img src="<?= DBE_PLUGIN_BUILD_URL . "/icons/arrow-right.svg"?>"
                                alt="">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <?php endforeach?>
    </div>
</div>

<script>
    window.addEventListener("load", () => {
        dbe_posts(JSON.parse(`<?= json_encode($attributes) ?>`))
    });
</script>
