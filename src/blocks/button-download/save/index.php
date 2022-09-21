<div class="download-button rounded-lg border border-slate-200 p-3 flex flex-wrap overflow-hidden">
		<div class="basis-2/12">
			<figure class="relative">
				<img class="w-full aspect-square rounded-lg  object-cover object-center" src="<?= $imageurl ?>" />
			</figure>
		</div>

		<div class="basis-auto md:basis-7/12 ml-3">
			<p class="m-0">
				<?= $title ?>
			</p>
			<p class="m-0 text-sm">
				<?= $description ?>
			</p>
		</div>

		<?php
		$downloadButtonRel = [];
		if ($addNofollow) array_push($downloadButtonRel, "nofollow");
		if ($addSponsored) array_push($downloadButtonRel, "sponsored");
		$downloadButtonRel = join(" ", $downloadButtonRel);

		$downloadButtonClass = [];
		if ($buttonAlign == "top") array_push($downloadButtonClass, "self-start");
		else if ($buttonAlign == "bottom") array_push($downloadButtonClass, "self-end");
		else array_push($downloadButtonClass, "self-center");

		if ($buttonRounded) array_push($downloadButtonClass, "rounded-lg");
		$downloadButtonClass = join(" ", $downloadButtonClass);
		?>

		<a href="<?= $url ?>" <?= $openInNewTab ? "target='_blank'" : '' ?> <?= $downloadButtonRel != "" ? "rel='$downloadButtonRel'" : "" ?> class="mt-3 md:mt-0 py-2 px-5 mx-auto md:ml-auto w-fit h-fit text-base font-bold <?= $downloadButtonClass ?>" style="background-color: <?= $buttonColor ?> !important; color: <?= $buttonTextColor ?> !important;" onMouseOver="this.style.cssText=`background-color: <?= $buttonHoverColor ?> !important; color: <?= $buttonTextHoverColor ?> !important;`" onMouseOut="this.style.cssText=`background-color: <?= $buttonColor ?> !important; color: <?= $buttonTextColor ?> !important;`">
			Download
		</a>
	</div>
