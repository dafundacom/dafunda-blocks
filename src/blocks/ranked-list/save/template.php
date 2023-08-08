<div class="dbe-block wrapper-how-to-review <?= $howToReviewClass ?>">
  <ol class="ranked-list">
    <?php foreach ($lists as $index => $list) : ?>
    <li class="ranked-list-card" data-index="<?= $index ?>">
      <div class="ranked-list-image">
        <?php if (isset($list["imageurl"]) && $list["imageurl"] != "") : ?>
        <figure>
          <img class="ranked-list-image-img" src="<?= $list["imageurl"] ?>" />
        </figure>
        <?php else : ?>
        <div class="ranked-list-image-placeholder">
          <span class="ranked-list-image-placeholder-text">NO IMAGE</span>
        </div>
        <?php endif ?>

        <div class="ranked-list-image-overlay">
          <h4 class="ranked-list-image-overlay-index <?= isset($list["imageurl"]) && $list["imageurl"] != "" ? "text-white" : "" ?>">
            <?= $index + 1 ?>.&nbsp;
          </h4>
          <h4 class="ranked-list-image-overlay-title <?= isset($list["imageurl"]) && $list["imageurl"] != "" ? "text-white" : "" ?>">
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
      <div class="ranked-list-vote" data-voted="<?= $userVoted ?>">
        <button type="button" class="ranked-list-vote-button <?= in_array(get_current_user_id(), $list["likes"]) ? "voted-like" : "" ?> <?= in_array(get_current_user_id(), $list["dislikes"]) ? "voted-dislike" : "" ?>"
          data-action="like">
          <p class="ranked-list-vote-button-text">
            <?= count($list["likes"]) ?? 0 ?>
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" class="ranked-list-vote-button-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
        </button>
        <button type="button" class="ranked-list-vote-button ranked-list-vote-button <?= in_array(get_current_user_id(), $list["dislikes"]) ? "voted-dislike" : "" ?> <?= in_array(get_current_user_id(), $list["likes"]) ? "voted-like" : "" ?>"
          data-action="dislike">
          <svg xmlns="http://www.w3.org/2000/svg" class="ranked-list-vote-button-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
          </svg>
          <p class="ranked-list-vote-button-text">
            <?= count($list["dislikes"]) ?? 0 ?>
          </p>
        </button>
      </div>

      <?php if (isset($list["description"])) : ?>
      <div class="ranked-list-description">
        <p class="ranked-list-description-text">
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
