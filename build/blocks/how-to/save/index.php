<?php
// require_once DAFUNDA_BLOCKS_PATH . "/includes/class-dafunda-blocks-util.php";

use GB\Helper;

if ( function_exists("generate_iso_duration_code") === false ) {
    function generate_iso_duration_code( $rawInput ) {
        if ( is_array($rawInput) ) {
            $inputArr = $rawInput;
        } else {
            $inputArr = array_fill(0, 7, 0);

            $inputArr[3] = ($rawInput - ($rawInput % 86400)) / 86400;
            $inputArr[4] = (($rawInput - ($rawInput % 3600)) / 3600) % 24;
            $inputArr[5] = (($rawInput - ($rawInput % 60)) / 60) % 60;
            $inputArr[6] = $rawInput % 60;
        }

        $tIsAbsent = true;
        $output = "P";
        $unitLetters = [ "Y", "M", "W", "D", "H", "M", "S" ];

        if (
            $inputArr[2] > 0 &&
            count(
                array_filter($inputArr, function ( $item ) {
                    return $item > 0;
                })
            ) > 1
        ) {
            $inputArr[3] += $inputArr[2] * 7;
            $inputArr[2] = 0;
        }

        foreach ( $inputArr as $i => $t ) {
            if ( $i > 3 && $tIsAbsent ) {
                $output .= "T";
                $tIsAbsent = false;
            }
            if ( $t > 0 ) {
                $output .= round($t) . $unitLetters[ $i ]; //decimal values for time aren't recognized
            }
        }
        return $output;
    }
}

if ( function_exists("dbe_convert_to_paragraphs") === false ) {
    function dbe_convert_to_paragraphs( $string ) {
        if ( $string === "" ) {
            return "";
        } else {
            $string = explode("<br>", $string);
            $string = array_map(function ( $p ) {
                return $p;
            }, $string);
            return implode("", $string);
        }
    }
}

if ( function_exists("dbe_render_how_to_supply") === false ) {
    function dbe_render_how_to_supply(
        $advancedMode,
        $includeSuppliesList,
        $secondLevelTag,
        $suppliesIntro,
        $suppliesListStyle,
        $supplies,
        $tools,
        $includeToolsList,
        $toolsIntro,
        $toolsListStyle
    ) {
            if ( $advancedMode && $includeSuppliesList ) {
			ob_start(); ?>
            <hr>
            <<?= $secondLevelTag ?> class="mt-0">
                    <?= $suppliesIntro ?>
            </<?= $secondLevelTag ?>>
                <?php $suppliesListStyleTag = $suppliesListStyle === "ordered" ? "ol" : "ul"; ?>
                <?php if ( isset($supplies) && count($supplies) > 0 ) : ?>
                <<?= $suppliesListStyleTag ?> class="howto-supplies-list pl-0">
                    <?php foreach ( $supplies as $i => $s ) : ?>
                        <li class="howto-card p-3">
                            <p class="text-md mb-3"><?= $i + 1 ?> . <?= $s["name"] ?></p>
                            <?php if ( $s["imageURL"] == "" ) : ?>
                                <div class="max-h-[1000px] md:max-h-[1600px] mx-auto">
                                    <figure class="w-full">
                                        <img src="<?= $s["imageURL"] ?>" class="mx-auto rounded-xl overflow-hidden" />
                                    </figure>
                                </div>
                            <?php endif; ?>
                        </li>
    
                    <?php endforeach; ?>
    
                </<?= $suppliesListStyleTag ?>>
            <?php endif; ?>
            <?php
            return ob_get_clean();
                } else {
		return "";
                }
    }
}

if ( function_exists("dbe_render_how_to_tool") === false ) {
    function dbe_render_how_to_tool(
        $advancedMode,
        $includeSuppliesList,
        $secondLevelTag,
        $suppliesIntro,
        $suppliesListStyle,
        $supplies,
        $tools,
        $includeToolsList,
        $toolsIntro,
        $toolsListStyle
    ) {
            if ( $advancedMode && $includeToolsList ) {
			ob_start();
			?>
            <hr>
            <<?= $secondLevelTag ?> class="mt-0">
			<?= $toolsIntro ?>
            </<?= $secondLevelTag ?>>
            <?php if ( isset($tools) && count($tools) > 0 ) : ?>
                <?php $toolsListStyleTag = $toolsListStyle === "ordered" ? "ol" : "ul"; ?>
                <<?= $toolsListStyleTag ?> class="howto-tools-list pl-0">
                    <?php foreach ( $tools as $i => $t ) : ?>
                        <li class="howto-card p-3">
                            <p class="text-md mb-3"><?= $i + 1 ?> . <?= $t["name"] ?></p>
                            <?php if ( $t["imageURL"] !== "" ) : ?>
                                <div class="max-h-[1000px] md:max-h-[1600px] mx-auto">
                                    <figure class="w-full">
                                        <img src="<?= $t["imageURL"] ?>" class="mx-auto rounded-xl overflow-hidden" />
                                    </figure>
                                </div>
                            <?php endif; ?>
                        </li>

                    <?php endforeach; ?>

                </<?= $toolsListStyleTag ?>>
            <?php endif; ?>
            <?php
            return ob_get_clean();
                } else {
		return "";
                }
    }
}

$dbe_device_id = Helper::get_device_id();

$timeUnits = [ "Detik", "Menit", "Jam", "Hari", "Minggu", "Bulan", "Tahun" ];

$header = "";
if ( isset($supplies) && count($supplies) > 0 ) {
    $header .= dbe_render_how_to_supply(
        $advancedMode,
        $includeSuppliesList,
        $secondLevelTag,
        $suppliesIntro,
        $suppliesListStyle,
        $supplies,
        $tools,
        $includeToolsList,
        $toolsIntro,
        $toolsListStyle
    );
}

if ( isset($tools) && count($tools) > 0 ) {
    $header .= dbe_render_how_to_tool(
        $advancedMode,
        $includeSuppliesList,
        $secondLevelTag,
        $suppliesIntro,
        $suppliesListStyle,
        $supplies,
        $tools,
        $includeToolsList,
        $toolsIntro,
        $toolsListStyle
    );
}
$costDisplay = $showUnitFirst
    ? $costCurrency . " " . $cost
    : $cost . " " . $costCurrency;


$totalTimeDisplay = "";

foreach ( $totalTime as $i => $t ) {
    if ( $t > 0 ) {
        $text = $timeUnits[ 6 - $i ];
        $totalTimeDisplay .= $t . " " . $text . " ";
    }
}
$timeDisplay = "";
if ( $totalTimeDisplay ) {
    $timeDisplay .= "<div>";
    $timeDisplay .= "<p class=\"mb-0\"> Sekitar " . $totalTimeDisplay . "</p>";
    $timeDisplay .= "</div>";
}

$ISOTotalTime = generate_iso_duration_code($totalTime);

$clips = "";

require __DIR__ . "/tamplate.php";
require __DIR__ . "/schema.php";
