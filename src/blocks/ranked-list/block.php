<?php
require_once('api.php');

function dbe_render_ranked_list_block($attributes)
{
	extract($attributes);
	ob_start();
?>
	<div class="ranked-list " id="ranked-list-<?= $blockID ?>">
		<ol class="ranked-list p-0">
			<?php foreach ($lists as $index => $list) : ?>
				<li class="ranked-list-card flex flex-wrap p-0 relative mb-6" data-index="<?= $index ?>">
					<div class="relative h-fit w-fit">
						<div class="absolute left-0 top-[25%] translate-y-[-25%] translate-x-[-15%] md:translate-x-[-50%] rounded-lg flex items-center justify-center aspect-square w-12 md:w-16 text-2xl md:text-4xl bg-white/90 shadow-xl font-bold">
							<?= $index + 1 ?>
						</div>
						<?php if (isset($list["imageurl"]) && $list["imageurl"] != "") : ?>
							<img src="<?= $list["imageurl"] ?>" alt="<?= $list["imagealt"] ?>" class="rounded-xl aspect-square h-fit w-24 md:w-48 object-cover object-center">
						<?php else : ?>
							<div class="rounded-xl aspect-square h-fit w-24 md:w-48 object-cover object-center bg-gray-200 flex justify-center items-center">
								<span class="text-lg font-bold">NO IMAGE</span>
							</div>
						<?php endif ?>
					</div>
					<div class="flex flex-[1] flex-wrap flex-col">
						<p class="font-normal text-[1.3rem] md:text-2xl ml-3 mr-3 w-full mb-3 break-all pr-3">
							<?= $list["title"] ?>
						</p>

						<!-- Vote Form -->
						<div class="ranked-list-vote ml-6 mt-auto">
							<a class="button plus md:w-14 mr-4 inline-block <?= in_array(get_current_user_id(), $list["likes"]) ? "active" : "" ?> <?= in_array(get_current_user_id(), $list["dislikes"]) ? "disable" : "" ?>" href="javascript:;" data-action="like">
								<span class="bg" id="plus"></span>
								<div class="w-10 h-10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
									</svg>
								</div>

								<div class="rankedlist-count <?= count($list["likes"]) == 0 ? "hidden" : "" ?>">
									<p><?= count($list["likes"]) ?></p>
								</div>
							</a>
							<a class="button minus md:w-14 inline-block <?= in_array(get_current_user_id(), $list["dislikes"]) ? "active" : "" ?> <?= in_array(get_current_user_id(), $list["likes"]) ? "disable" : "" ?>" href="javascript:;" data-action="dislike">
								<span class="bg" id="minus"></span>
								<div class="h-10 w-10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
									</svg>
								</div>
								<div class="rankedlist-count <?= count($list["dislikes"]) == 0 ? "hidden" : "" ?>">
									<p><?= count($list["dislikes"]) ?></p>
								</div>
							</a>
						</div>
						<!-- Vote Form END -->
					</div>

					<!-- <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-fit" type="button" data-modal-target="ranked-list-modal-<?= $index ?>">
						Toggle modal
					</button> -->

					<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mt-1 text-gray-500 hover:text-gray-700 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" data-modal-target="ranked-list-modal-<?= $index ?>" />
					</svg>
				</li>
				<div class="relative modal" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="ranked-list-modal-<?= $index ?>">
					<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity modal-backdrop"></div>

					<div class="fixed z-10 inset-0 overflow-y-auto">
						<div class="modal-panel-wrapper flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-modal='close'>
							<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
							<div class="modal-panel relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
								<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div class="sm:flex sm:items-start">
										<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title"><?= $list["title"] ?></h3>
											<div class="mt-2">
												<?php if (isset($list["description"]) && $list["description"] != "") : ?>
													<p class="text-sm text-gray-500"><?= $list["description"] ?></p>
												<?php else : ?>
													<p class="text-sm text-gray-500"><?= __("No description provided") ?></p>
												<?php endif; ?>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			<?php endforeach; ?>
		</ol>
	</div>


	<script>
		document.querySelectorAll("[data-modal-target]").forEach((el, index) => {
			el.addEventListener("click", (e) => {
				let targetId = e.target.getAttribute("data-modal-target")
				let modal = document.getElementById(targetId)
				modal.classList.toggle("show")
			})
		})

		document.querySelectorAll("[data-modal='close']").forEach((el, index) => {
			el.addEventListener("click", (e) => {
				if ((e.target.tagName == "DIV" && e.target.classList.contains("modal-panel-wrapper")) || e.target.tagName == "BUTTON") {
					if (e.target.closest(".modal.show")) e.target.closest(".modal.show").classList.remove("show")
				}
			})
		})
	</script>



	<?php if (is_user_logged_in()) :  ?>
		<script>
			document.querySelectorAll(".ranked-list-vote .button").forEach((el, index) => {
				el.addEventListener("click", (e) => {
					e.preventDefault()
					e.stopPropagation()
					let parent = e.target.closest(".ranked-list-vote")
					let button = e.target.closest("a")

					if (button.classList.contains("active")) return false

					let action = button.getAttribute("data-action")
					let countDiv = button.querySelector(".rankedlist-count")
					let countP = button.querySelector(".rankedlist-count p")
					let count = parseInt(countP.innerText) ?? 0
					count++
					countP.innerText = count
					if (count == 0 && !countDiv.classList.contains("hidden")) countDiv.classList.add("hidden")
					if (count > 0 && countDiv.classList.contains("hidden")) countDiv.classList.remove("hidden")

					let s_button = action == "like" ? button.nextElementSibling : button.previousElementSibling

					let s_countDiv = s_button.querySelector(".rankedlist-count")
					let s_countP = s_button.querySelector(".rankedlist-count p")
					let s_count = parseInt(s_countP.innerText) ?? 0
					if (s_count > 0) s_count--
					s_countP.innerText = s_count
					if (s_count == 0 && !s_countDiv.classList.contains("hidden")) s_countDiv.classList.add("hidden")

					parent.querySelectorAll(".button.active").forEach(el => el.classList.remove("active"))
					parent.querySelectorAll(".button.disable").forEach(el => el.classList.remove("disable"))

					button.classList.toggle("active")
					parent.querySelector(".button:not(.active)").classList.add("disable")

					let body = {
						post_id: <?= get_the_ID() ?>,
						post_type: "POST",
						block_id: <?= "'{$blockID}'" ?>,
						index: parseInt(el.closest("li").getAttribute("data-index")),
						action
					}

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
					// 	console.log("res ", res);
					// })

				})
			})
		</script>


	<?php endif ?>
<?php return ob_get_clean();
}
function dbe_register_ranked_list_block()
{
	if (function_exists("register_block_type")) {
		require dirname(dirname(__DIR__)) . "/defaults.php";
		register_block_type("dbe/ranked-list", [
			"attributes" => $defaultValues["dbe/ranked-list"]["attributes"],
			"render_callback" => "dbe_render_ranked_list_block",
		]);
	}
}
add_action("init", "dbe_register_ranked_list_block");
