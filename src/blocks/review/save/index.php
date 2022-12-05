<?php


if (!function_exists("dbe_generatePercentageBar")) {
    function dbe_generatePercentageBar($value, $id, $activeColor, $inactiveColor)
    {
        $percentBar = "M 0.5,0.5 L 99.5,0.5";
        return '<div class="review_percentage">
            <svg class="review_percentage_bar w-full" viewBox="0 0 100 1" preserveAspectRatio="none" height="10">
                <path
                    class="review_percentage_bar_trail"
                    d="' .
    $percentBar .
    '" stroke="' .
    $inactiveColor .
    '"
                    stroke-width="1"
                ></path>
                <path
                    class="review_percentage_bar_path"
                    d="' .
    $percentBar .
    '" stroke="' .
    $activeColor .
    '"
                    stroke-width="1" stroke-dashoffset="' .
    (100 - $value) .
    'px"
                ></path>
            </svg>
            <div>' .
    $value .
    '%</div>
    </div>';
    }
}


if (!function_exists("dbe_filterJsonldString")) {
    function dbe_filterJsonldString($string)
    {
        return str_replace("\'", "'", wp_filter_nohtml_kses($string));
    }
}


require __DIR__ . "/template.php";
require __DIR__ . "/schema.php";
