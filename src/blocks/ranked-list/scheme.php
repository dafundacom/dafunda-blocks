<?php
function dbeRankedListScheme($attributes)
{
  extract($attributes);

  $SCHEMEJSON = [
    "@context" => "http://schema.org",
    "@type" => "HowTo",
    "name" => str_replace("\'", "'", wp_filter_nohtml_kses($title)),
    "description" => str_replace(
      "\'",
      "'",
      wp_filter_nohtml_kses($introduction)
    ),
  ];

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
  $SCHEMEJSON =
    PHP_EOL .
    '<script type="application/ld+json">' .
    PHP_EOL .
    $SCHEMEJSON .
    PHP_EOL .
    "</script>";

  return $SCHEMEJSON;
}
