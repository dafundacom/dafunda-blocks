<div class="ranked-list " id="ranked-list-<?= $blockID ?>">
    <ol class="ranked-list p-0">
        <?php foreach ($lists as $index => $list) : ?>
        <li class="ranked-list-card flex flex-wrap flex-col relative shadow-lg rounded-lg mb-6 dark:bg-neutral-900"
            data-index="<?= $index ?>">
            <div class="relative object-cover object-center w-full overflow-hidden rounded-t-lg" style="aspect-ratio: 16/7;">
                <?php if (isset($list["imageurl"]) && $list["imageurl"] != "") : ?>
                <figure>
                    <img class="w-full object-cover object-center" style="max-height: -webkit-fill-available;"
                        src="<?= $list["imageurl"] ?>" />
                </figure>
                <?php else : ?>
                <div class="rounded-xl aspect-square w-full object-cover object-center bg-gray-200 flex justify-center items-center"
                    style="height: -webkit-fill-available; ">
                    <span class="text-lg font-bold">NO IMAGE</span>
                </div>
                <?php endif ?>

                <div class="absolute flex flex-wrap left-0 bottom-0 pl-3 md:pl-4 pb-1 md:pb-2 pt-6 md:pt-8 w-full"
                    style="background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%);">
                    <h4
                        class="m-0 font-semibold text-lg md:text-2xl <?= isset($list["imageurl"]) && $list["imageurl"] != "" ? "text-white" : "" ?>">
                        <?= $index + 1 ?>.&nbsp;
                    </h4>
                    <h4
                        class="m-0 font-semibold text-lg md:text-2xl <?= isset($list["imageurl"]) && $list["imageurl"] != "" ? "text-white" : "" ?>">
                        <?= $list["title"] ?? "" ?>
                    </h4>
                </div>
            </div>

            <?php
            $userVoted = "";
            if (in_array(get_current_user_id(), $list["likes"])) {
                $userVoted = "like";
            }
            if (in_array(get_current_user_id(), $list["dislikes"])) {
                $userVoted = "dislike";
            }
            ?>
            <div class="p-5 flex ranked-list-vote w-full justify-center gap-3"
                data-voted="<?= $userVoted ?>">
                <button type="button"
                    class="ranked-list-vote-button flex flex-wrap items-start w-fit opacity-50 hover:shadow-none bg-transparent <?= in_array(get_current_user_id(), $list["likes"]) ? "opacity-80" : "" ?> <?= in_array(get_current_user_id(), $list["dislikes"]) ? "opacity-30" : "" ?>"
                    data-action="like">
                    <p class="m-0 mx-1 inline-block font-bold text-xl leading-6 text-gray-700 dark:text-white ">
                        <?= count($list["likes"]) ?? 0 ?>
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 inline-block text-gray-700 dark:text-white" style="transform: translateY(-2px);" 
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>

                </button>
                <button type="button"
                    class="ranked-list-vote-button flex flex-wrap items-start w-fit opacity-50 hover:shadow-none bg-transparent <?= in_array(get_current_user_id(), $list["dislikes"]) ? "opacity-80" : "" ?> <?= in_array(get_current_user_id(), $list["likes"]) ? "opacity-30" : "" ?>"
                    data-action="dislike">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7 inline-block text-gray-700 dark:text-white" style="transform: translateY(-2px);"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                    </svg>
                    <p class="m-0 mx-1 inline-block font-bold text-xl leading-6 text-gray-700 dark:text-white ">
                        <?= count($list["dislikes"]) ?? 0 ?>
                    </p>
                </button>
            </div>

            <?php if (isset($list["description"])) : ?>
            <div class="recomendasi-list-description p-5 pt-0">
                <p class="w-full my-0 text-base">
                    <?= $list["description"] ?? "" ?>
                </p>
            </div>
            <?php endif ?>
        </li>
        <?php endforeach; ?>
    </ol>
</div>

<script>
    document.querySelectorAll(".ranked-list-vote-button").forEach((el, index) => {
        el.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation()
            let parent = el.closest(".ranked-list-vote")
            let action = el.getAttribute("data-action")
            if (parent.getAttribute("data-voted") != action) {
                parent.setAttribute("data-voted", action)
                let body = {
                    post_id: <?= get_the_ID() ?> ,
                    post_type: "POST",
                    block_id: <?= "'{$blockID}'" ?> ,
                    index: parseInt(el.closest("li").getAttribute("data-index")),
                    action
                }

                el.closest(".ranked-list-vote").querySelectorAll("button").forEach(ell => {
                    newClass = ell.classList.value
                    newClass = newClass.replace("opacity-80", "")
                    newClass = newClass.replace("opacity-30", "")
                    // if (ell.getAttribute("data-action") == "dislike") newClass += " ml-4"
                    ell.setAttribute("class", newClass)
                    if (el == ell) {
                        ell.classList.add("opacity-80")
                    } else {
                        ell.classList.add("opacity-30")
                    }

                    if (el == ell) {
                        ell.querySelector("p").innerText = parseInt(ell.querySelector("p")
                            .innerText) + 1
                    } else if (parseInt(ell.querySelector("p").innerText) > 0) {
                        ell.querySelector("p").innerText = parseInt(ell.querySelector("p")
                            .innerText) - 1
                    }
                })

                fetch("<?= site_url('wp-json/dbe/v1/rankedlist/vote'); ?>", {
                    method: "POST",
                    mode: "same-origin",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
                // .then(res => res.json())
                // .then(res => {
                // })
                // .catch((err) => {
                // })
            }
        })
    })
</script>
