<?php
$schemejson = [
	"@context" => "http://schema.org",
	"@type" => "SoftwareApplication",
	"name" => $title,
];

if ( isset($system) && $system != "" ) {
    $schemejson["operatingSystem"] = $system;
}
if ( isset($schema_application_category) && $schema_application_category != "" ) {
    $schemejson["applicationCategory"] = $schema_application_category;
}

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
