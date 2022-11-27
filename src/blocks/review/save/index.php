<?php
if (function_exists("dbe_filterJsonldString") === false) {
    function dbe_filterJsonldString($string)
    {
        return str_replace("\'", "'", wp_filter_nohtml_kses($string));
    }
}

require __DIR__ . "/template.php";
// require __DIR__ . "/schema.php";
