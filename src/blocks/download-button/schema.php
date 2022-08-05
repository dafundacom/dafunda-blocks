<?php 

$SCHEMEJSON = [
  "@context" => "http://schema.org",
  "@type" => "SoftwareApplication",
  "name" => $title,
];
if(isset($system) && $system != "") $SCHEMEJSON["operatingSystem"] = $system;
if(isset($schemaApplicationCategory) && $schemaApplicationCategory != "") $SCHEMEJSON["applicationCategory"] = $schemaApplicationCategory;
if(isset($system) && $system != "") $SCHEMEJSON["operatingSystem"] = $system;

$SCHEMEJSON = json_encode(
  $SCHEMEJSON,
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
  <?= $SCHEMEJSON ?>
</script>
