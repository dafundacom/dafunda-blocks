<?php
$buttonDownloadPrefix = "dbe-button-download";
?>
<div class="dbe-block <?= $buttonDownloadPrefix ?>-block">
  <div class="<?= $buttonDownloadPrefix ?>-image">
    <figure class="<?= $buttonDownloadPrefix ?>-figure">
      <img class="<?= $buttonDownloadPrefix ?>-img"
        src="<?= $imageurl ?>" />
    </figure>
  </div>

  <div class="<?= $buttonDownloadPrefix ?>-content">
    <p class="<?= $buttonDownloadPrefix ?>-title">
      <?= $title ?>
    </p>
    <p class="<?= $buttonDownloadPrefix ?>-description">
      <?= $description ?>
    </p>
  </div>

  <?php
    $downloadButtonRel = [];
if ($addNofollow) {
    array_push($downloadButtonRel, "nofollow");
}
if ($addSponsored) {
    array_push($downloadButtonRel, "sponsored");
}
$downloadButtonRel = join(" ", $downloadButtonRel);

$downloadButtonClass = [];
if ($buttonAlign == "top") {
    array_push($downloadButtonClass, "self-start");
} elseif ($buttonAlign == "bottom") {
    array_push($downloadButtonClass, "self-end");
} else {
    array_push($downloadButtonClass, "self-center");
}

if ($buttonRounded) {
    array_push($downloadButtonClass, "rounded-lg");
}
$downloadButtonClass = join(" ", $downloadButtonClass);
?>

  <a href="<?= $url ?>"
    <?= $openInNewTab ? "target='_blank'" : '' ?>
    <?= $downloadButtonRel != "" ? "rel='$downloadButtonRel'" : "" ?>
    class="<?= $buttonDownloadPrefix ?>-download"
    style="background-color: <?= $buttonColor ?> !important; color:
    <?= $buttonTextColor ?> !important;"
    onMouseOver="this.style.cssText=`background-color:
    <?= $buttonHoverColor ?> !important; color:
    <?= $buttonTextHoverColor ?> !important;`"
    onMouseOut="this.style.cssText=`background-color:
    <?= $buttonColor ?> !important; color:
    <?= $buttonTextColor ?> !important;`">
    Download
  </a>
</div>