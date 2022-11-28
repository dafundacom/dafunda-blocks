<?php
$schemejson = [
    "@context" => "http://schema.org",
    "@type" => "SoftwareApplication",
//   "name" => str_replace("\'", "'", wp_filter_nohtml_kses($title)),
    // "description" => str_replace(
    //     "\'",
    //     "'",
    //     wp_filter_nohtml_kses($introduction)
    // ),
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
