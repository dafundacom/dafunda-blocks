<?php
$schemejson = [
	"@context" => "http://schema.org",
	"@type" => "SoftwareApplication",
];

$schemejson = json_encode(
  $schemejson,
  JSON_UNESCAPED_UNICODE |
    JSON_PRETTY_PRINT |
    JSON_UNESCAPED_SLASHES |
    JSON_HEX_TAG |
    JSON_HEX_AMP |
    JSON_HEX_APOS |
    JSON_HEX_QUOT
);
?>

<script type="application/ld+json">
    <?= $schemejson ?>
</script>
