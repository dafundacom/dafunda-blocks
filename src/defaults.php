<?php

$defaultValues = [
	"dbe/advanced-heading" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"anchor" => [
				"type" => "string",
				"default" => "",
			],
			"content" => [
				"type" => "string",
				"default" => "",
			],
			"level" => [
				"type" => "string",
				"default" => "h1",
			],
			"alignment" => [
				"type" => "string",
				"default" => "none",
			],
			"textColor" => [
				"type" => "string",
				"default" => "",
			],
			"backgroundColor" => [
				"type" => "string",
				"default" => "",
			],
			"fontSize" => [
				"type" => "number",
				"default" => 0,
			],
			"letterSpacing" => [
				"type" => "number",
				"default" => 0,
			],
			"textTransform" => [
				"type" => "string",
				"default" => "None",
			],
			"fontFamily" => [
				"type" => "string",
				"default" => "",
			],
			"fontWeight" => [
				"type" => "string",
				"default" => "Bold",
			],
			"lineHeight" => [
				"type" => "number",
				"default" => 0,
			],
			"highlightBgColor" => [
				"type" => "string",
				"default" => "None",
			],
		],
	],
	"dbe/advanced-video" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"videoId" => [
				"type" => "integer",
				"default" => -1,
			],
			"videoSource" => [
				"type" => "string",
				"default" => "",
			],
			"url" => [
				"type" => "string",
				"default" => "",
			],
			"playerStyle" => [
				//custom border styles placed outside embedded player
				"type" => "string",
				"default" => "",
			],
			"vimeoShowDetails" => [
				//vimeo only
				"type" => "boolean",
				"default" => true,
			],
			"vimeoShowLogo" => [
				//vimeo only
				"type" => "boolean",
				"default" => true,
			],
			"enableYoutubeCookies" => [
				"type" => "boolean",
				"default" => false,
			],
			"autoplay" => [
				//applies to: videopress, vimeo, dailymotion, youtube
				"type" => "boolean",
				"default" => false,
			],
			"loop" => [
				//applies to youtube, vimeo, videopress
				"type" => "boolean",
				"default" => false,
			],
			"mute" => [
				//applies to youtube, dailymotion, vimeo
				"type" => "boolean",
				"default" => false,
			],
			"showPlayerControls" => [
				//applies to dailymotion, youtube
				"type" => "boolean",
				"default" => true,
			],
			"playInline" => [
				"type" => "boolean",
				"default" => true,
			],
			"thumbnail" => [
				//replaces embed code, click through thumbnail before seeing embedded player in youtube
				"type" => "string",
				"default" => "",
			],
			"videoEmbedCode" => [
				"type" => "string",
				"default" => "",
			],
			"startTime" => [
				//applies to youtube, dailymotion, videopress, vimeo
				"type" => "number",
				"default" => 0,
			],
			"height" => [
				"type" => "number",
				"default" => 0,
			],
			"width" => [
				"type" => "number",
				"default" => 0,
			],

			//begin border attributes for each side
			"topBorderSize" => [
				"type" => "number",
				"default" => 0,
			],
			"rightBorderSize" => [
				"type" => "number",
				"default" => 0,
			],
			"bottomBorderSize" => [
				"type" => "number",
				"default" => 0,
			],
			"leftBorderSize" => [
				"type" => "number",
				"default" => 0,
			],

			"topBorderStyle" => [
				"type" => "string",
				"default" => "",
			],
			"rightBorderStyle" => [
				"type" => "string",
				"default" => "",
			],
			"bottomBorderStyle" => [
				"type" => "string",
				"default" => "",
			],
			"leftBorderStyle" => [
				"type" => "string",
				"default" => "",
			],

			"topBorderColor" => [
				"type" => "string",
				"default" => "",
			],
			"rightBorderColor" => [
				"type" => "string",
				"default" => "",
			],
			"bottomBorderColor" => [
				"type" => "string",
				"default" => "",
			],
			"leftBorderColor" => [
				"type" => "string",
				"default" => "",
			],
			//end border attributes for each side

			//begin corner attributes
			"topLeftRadius" => [
				"type" => "number",
				"default" => 0,
			],
			"topRightRadius" => [
				"type" => "number",
				"default" => 0,
			],
			"bottomLeftRadius" => [
				"type" => "number",
				"default" => 0,
			],
			"bottomRightRadius" => [
				"type" => "number",
				"default" => 0,
			],
			//end corner attributes

			"showInDesktop" => [
				"type" => "boolean",
				"default" => true,
			],
			"showInTablet" => [
				"type" => "boolean",
				"default" => true,
			],
			"showInMobile" => [
				"type" => "boolean",
				"default" => true,
			],
		],
	],
	"dbe/button" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"buttonText" => [
				"type" => "string",
				"default" => "Button Text",
			],
			"align" => [
				"type" => "string",
				"default" => "",
			],
			"url" => [
				"type" => "string",
				"default" => "",
			],
			"size" => [
				"type" => "string",
				"default" => "medium",
			],
			"buttonColor" => [
				"type" => "string",
				"default" => "#313131",
			],
			"buttonHoverColor" => [
				"type" => "string",
				"default" => "#313131",
			],
			"buttonTextColor" => [
				"type" => "string",
				"default" => "#ffffff",
			],
			"buttonTextHoverColor" => [
				"type" => "string",
				"default" => "#ffffff",
			],
			"buttonRounded" => [
				"type" => "boolean",
				"default" => false,
			],
			"chosenIcon" => [
				"type" => "string",
				"default" => "",
			],
			"iconPosition" => [
				"type" => "string",
				"default" => "left",
			],
			"buttonIsTransparent" => [
				"type" => "boolean",
				"default" => false,
			],
			"addNofollow" => [
				"type" => "boolean",
				"default" => true,
			],
			"openInNewTab" => [
				"type" => "boolean",
				"default" => true,
			],
			"buttonWidth" => [
				"type" => "string",
				"default" => "fixed",
			],
		],
	],
	"dbe/call-to-action-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"dbe_call_to_action_headline_text" => [
				"type" => "string",
				"default" => "",
			],
			"dbe_cta_content_text" => [
				"type" => "string",
				"default" => "",
			],
			"dbe_cta_button_text" => [
				"type" => "string",
				"default" => "",
			],
			"headFontSize" => [
				"type" => "number",
				"default" => 30,
			],
			"headColor" => [
				"type" => "string",
				"default" => "",
			],
			"headAlign" => [
				"type" => "string",
				"default" => "center",
			],
			"contentFontSize" => [
				"type" => "number",
				"default" => 15,
			],
			"contentColor" => [
				"type" => "string",
				"default" => "",
			],
			"buttonFontSize" => [
				"type" => "number",
				"default" => 14,
			],
			"buttonColor" => [
				"type" => "string",
				"default" => "#E27330",
			],
			"buttonTextColor" => [
				"type" => "string",
				"default" => "",
			],
			"buttonWidth" => [
				"type" => "number",
				"default" => 250,
			],
			"ctaBackgroundColor" => [
				"type" => "string",
				"default" => "#f8f8f8",
			],
			"ctaBorderColor" => [
				"type" => "string",
				"default" => "#ECECEC",
			],
			"ctaBorderSize" => [
				"type" => "number",
				"default" => 2,
			],
			"url" => [
				"type" => "string",
				"default" => "",
			],
			"contentAlign" => [
				"type" => "string",
				"default" => "center",
			],
			"addNofollow" => [
				"type" => "boolean",
				"default" => false,
			],
			"openInNewTab" => [
				"type" => "boolean",
				"default" => false,
			],
			"linkIsSponsored" => [
				"type" => "boolean",
				"default" => false,
			],
			"useHeadingTag" => [
				"type" => "boolean",
				"default" => false,
			],
			"selectedHeadingTag" => [
				"type" => "string",
				"default" => "h2",
			],
		],
	],
	"dbe/click-to-tweet" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"ubTweet" => [
				"type" => "string",
				"default" => "",
			],
			"tweetFontSize" => [
				"type" => "number",
				"default" => 20,
			],
			"tweetColor" => [
				"type" => "string",
				"default" => "",
			],
			"borderColor" => [
				"type" => "string",
				"default" => "#CCCCCC",
			],
		],
	],
	"dbe/content-filter-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			/*COMMENTED OUT TO PREVENT PHP ERRORS
            'filterArray' => array(
                'type' => 'array',
                'default' => array()
            ),*/
			"buttonColor" => [
				"type" => "string",
				"default" => "#eeeeee",
			],
			"buttonTextColor" => [
				"type" => "string",
				"default" => "",
			],
			"activeButtonColor" => [
				"type" => "string",
				"default" => "#fcb900",
			],
			"activeButtonTextColor" => [
				"type" => "string",
				"default" => "",
			],
			"initiallyShowAll" => [
				"type" => "boolean",
				"default" => true,
			],
			"matchingOption" => [
				"type" => "string",
				"default" => "",
			],
		],
	],
	"dbe/content-toggle-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"hasFAQSchema" => [
				"type" => "boolean",
				"default" => false,
			],
			"theme" => [
				"type" => "string",
				"default" => "",
			],
			"collapsed" => [
				"type" => "boolean",
				"default" => false,
			],
			"collapsedOnMobile" => [
				"type" => "boolean",
				"default" => false,
			],
			"titleColor" => [
				"type" => "string",
				"default" => "",
			],
			"titleLinkColor" => [
				"type" => "string",
				"default" => "",
			],
			"preventCollapse" => [
				"type" => "boolean",
				"default" => false,
			],
			"showOnlyOne" => [
				"type" => "boolean",
				"default" => false,
			],
		],
	],
	"dbe/content-toggle-panel-block" => [
		"attributes" => [
			"index" => [
				"type" => "number",
				"default" => 0,
			],
			"parentID" => [
				"type" => "string",
				"default" => "",
			],
			"theme" => [
				"type" => "string",
				"default" => "",
			],
			"collapsed" => [
				"type" => "boolean",
				"default" => false,
			],
			"titleColor" => [
				"type" => "string",
				"default" => "",
			],
			"titleLinkColor" => [
				"type" => "string",
				"default" => "",
			],
			"panelTitle" => [
				"type" => "string",
				"default" => "",
			],
			"titleTag" => [
				"type" => "string",
				"default" => "p",
			],
			"preventCollapse" => [
				"type" => "boolean",
				"default" => false,
			],
			"toggleLocation" => [
				"type" => "string",
				"default" => "right",
			],
			"toggleColor" => [
				"type" => "string",
				"default" => "#000000",
			],
			"toggleIcon" => [
				"type" => "string",
				"default" => "chevron",
			],
			"toggleID" => [
				"type" => "string",
				"default" => "",
			],
			"border" => [
				"type" => "boolean",
				"default" => true,
			],
			"showOnlyOne" => [
				"type" => "boolean",
				"default" => false,
			],
		],
	],
	"dbe/countdown" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"endDate" => [
				"type" => "number",
				"default" => time() + 86400,
			],
			"style" => [
				"type" => "string",
				"default" => "Odometer",
			],
			"expiryMessage" => [
				"type" => "string",
				"default" => "Timer expired",
			],
			"messageAlign" => [
				"type" => "string",
				"default" => "left",
			],
			"circleColor" => [
				"type" => "string",
				"default" => "#2DB7F5",
			],
			"circleSize" => [
				"type" => "number",
				"default" => 70,
			],
			"largestUnit" => [
				"type" => "string",
				"default" => "week",
			],
			"smallestUnit" => [
				"type" => "string",
				"default" => "second",
			],
		],
	],
	"dbe/divider" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"borderSize" => [
				"type" => "number",
				"default" => 2,
			],
			"borderStyle" => [
				"type" => "string",
				"default" => "solid",
			],
			"borderColor" => [
				"type" => "string",
				"default" => "#ccc",
			],
			"borderHeight" => [
				"type" => "number",
				"default" => 20,
			],
		],
	],
	"dbe/expand" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"initialShow" => [
				"type" => "boolean",
				"default" => false,
			],
			"toggleAlign" => [
				"type" => "string",
				"default" => "left",
			],
		],
	],
	"dbe/expand-portion" => [
		"attributes" => [
			"clickText" => [
				"type" => "string",
				"default" => "",
			],
			"displayType" => [
				"type" => "string",
				"default" => "",
			],
			"isVisible" => [
				"type" => "boolean",
				"default" => false,
			],
			"parentID" => [
				"type" => "string",
				"default" => "",
			],
		],
	],
	"dbe/feature-box-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"column" => [
				"type" => "string",
				"default" => "2",
			],
			"columnOneTitle" => [
				"type" => "string",
				"default" => "Title One",
			],
			"title1Align" => [
				"type" => "string",
				"default" => "center",
			],
			"columnTwoTitle" => [
				"type" => "string",
				"default" => "Title Two",
			],
			"title2Align" => [
				"type" => "string",
				"default" => "center",
			],
			"columnThreeTitle" => [
				"type" => "string",
				"default" => "Title Three",
			],
			"title3Align" => [
				"type" => "string",
				"default" => "center",
			],
			"columnOneBody" => [
				"type" => "string",
				"default" =>
					"Gutenberg is really awesome! Dafunda Blocks makes it more awesome!",
			],
			"body1Align" => [
				"type" => "string",
				"default" => "left",
			],
			"columnTwoBody" => [
				"type" => "string",
				"default" =>
					"Gutenberg is really awesome! Dafunda Blocks makes it more awesome!",
			],
			"body2Align" => [
				"type" => "string",
				"default" => "left",
			],
			"columnThreeBody" => [
				"type" => "string",
				"default" =>
					"Gutenberg is really awesome! Dafunda Blocks makes it more awesome!",
			],
			"body3Align" => [
				"type" => "string",
				"default" => "left",
			],
			"imgOneURL" => [
				"type" => "string",
				"default" => "",
			],
			"imgOneID" => [
				"type" => "number",
				"default" => -1,
			],
			"imgOneAlt" => [
				"type" => "string",
				"default" => "",
			],
			"imgTwoURL" => [
				"type" => "string",
				"default" => "",
			],
			"imgTwoID" => [
				"type" => "number",
				"default" => -1,
			],
			"imgTwoAlt" => [
				"type" => "string",
				"default" => "",
			],
			"imgThreeURL" => [
				"type" => "string",
				"default" => "",
			],
			"imgThreeID" => [
				"type" => "number",
				"default" => -1,
			],
			"imgThreeAlt" => [
				"type" => "string",
				"default" => "",
			],
		],
	],
	"dbe/how-to" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"title" => [
				"type" => "string",
				"default" => "",
			],
			"introduction" => [
				"type" => "string",
				"default" => "",
			],
			"advancedMode" => [
				"type" => "boolean",
				"default" => false,
			],
			"includeToolsList" => [
				"type" => "boolean",
				"default" => false,
			],
			"addToolImages" => [
				"type" => "boolean",
				"default" => false,
			],
			"toolsIntro" => [
				"type" => "string",
				"default" => __("Required tools"),
			],
			/*COMMENTED OUT TO PREVENT PHP ERRORS
            'tools' => array(
                'type' => 'array',
                'default' => array(),
            ),*/
			"toolsListStyle" => [
				"type" => "string",
				"default" => "none",
			],
			"addSupplyImages" => [
				"type" => "boolean",
				"default" => false,
			],
			"includeSuppliesList" => [
				"type" => "boolean",
				"default" => false,
			],
			"suppliesIntro" => [
				"type" => "string",
				"default" => __("Required supplies"),
			],
			/*COMMENTED OUT TO PREVENT PHP ERRORS
            'supplies' => array(
                'type' => 'array',
                'default' => array(),
            ),*/
			"suppliesListStyle" => [
				"type" => "string",
				"default" => "none",
			],
			/* COMMENTED OUT TO PREVENT PHP ERRORS
            'section' => array(
                'type' => 'array',
                'default' => array()
            ),*/
			"sectionListStyle" => [
				"type" => "string",
				"default" => "none",
			],
			"timeIntro" => [
				"type" => "string",
				"default" => __("Duration"),
			],
			"totalTime" => [
				"type" => "array",
				"default" => array_fill(0, 7, 0),
				"items" => [
					"type" => "number",
				],
			],
			"totalTimeText" => [
				"type" => "text",
				"default" => __("Total time: "),
			],
			"cost" => [
				"type" => "number",
				"default" => 0,
			],
			"costCurrency" => [
				"type" => "string",
				"default" => "USD",
			],
			"costDisplayText" => [
				"type" => "string",
				"default" => __("Total cost: "),
			],
			"showUnitFirst" => [
				"type" => "boolean",
				"default" => true,
			],
			"howToYield" => [
				"type" => "string",
				"default" => "",
			],
			"howToRatingValue" => [
				"type" => "string",
				"default" => "5",
			],
			"howToWorstRating" => [
				"type" => "string",
				"default" => "0",
			],
			"howToBestRating" => [
				"type" => "string",
				"default" => "5",
			],
			"howToRatingCount" => [
				"type" => "string",
				"default" => "1",
			],
			"videoURL" => [
				"type" => "string", //videoobject
				"default" => "", //url
			],
			"videoThumbnailURL" => [
				"type" => "string",
				"default" => "",
			],
			"videoName" => [
				"type" => "string",
				"default" => "",
			],
			"videoDescription" => [
				"type" => "string",
				"default" => "",
			],
			"videoUploadDate" => [
				"type" => "number",
				"default" => 0,
			],
			"videoEmbedCode" => [
				"type" => "string",
				"default" => "",
			],
			"videoDuration" => [
				"type" => "number",
				"default" => 0,
			],
			"useSections" => [
				"type" => "boolean",
				"default" => false,
			],
			"resultIntro" => [
				"type" => "string",
				"default" => __("Result"),
			],
			"finalImageID" => [
				"type" => "number",
				"default" => -1,
			],
			"finalImageAlt" => [
				"type" => "string",
				"default" => "",
			],
			"finalImageURL" => [
				"type" => "string",
				"default" => "",
			],
			"finalImageCaption" => [
				"type" => "string",
				"default" => "",
			],
			"finalImageWidth" => [
				"type" => "number",
				"default" => 0,
			],
			"finalImageFloat" => [
				"type" => "string",
				"default" => "none",
			],
			"firstLevelTag" => [
				"type" => "string",
				"default" => "h2",
			],
			"secondLevelTag" => [
				"type" => "string",
				"default" => "h3",
			],
			"thirdLevelTag" => [
				"type" => "string",
				"default" => "h4",
			],
		],
	],
	"dbe/image-slider" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			//retained for reverse compatibility
			"images" => [
				"type" => "string",
				"default" => "[]",
			],
			/*COMMENTED OUT TO PREVENT PHP ERRORS
            'pics' => array(
                'type' => 'array',
                'default' => array()
            ),*/
			//retained for reverse compatibility
			"captions" => [
				"type" => "string",
				"default" => "[]",
			],
			/*COMMENTED OUT TO PREVENT PHP ERRORS
            'descriptions' => array(
                'type' => 'array',
                'default' => array()
            ),*/
			"wrapsAround" => [
				"type" => "boolean",
				"default" => true,
			],
			"isDraggable" => [
				"type" => "boolean",
				"default" => false,
			],
			"autoplays" => [
				"type" => "boolean",
				"default" => false,
			],
			"autoplayDuration" => [
				"type" => "number",
				"default" => 3,
			],
			"sliderHeight" => [
				"type" => "number",
				"default" => 250,
			],
			"showPageDots" => [
				"type" => "boolean",
				"default" => true,
			],
			"usePagination" => [
				"type" => "boolean",
				"default" => true,
			],
			"paginationType" => [
				"type" => "string",
				"default" => "",
			],
			"transition" => [
				"type" => "string",
				"default" => "slide",
			],
			//for cube, coverflow and flip
			"slideShadows" => [
				"type" => "boolean",
				"default" => true,
			],
			//exclusive for coverflow
			"rotate" => [
				"type" => "number",
				"default" => 50, //degrees
			],
			"stretch" => [
				"type" => "number",
				"default" => 0, //pixels
			],
			"depth" => [
				"type" => "number",
				"default" => 100, //pixels, z-axis
			],
			"modifier" => [
				"type" => "number",
				"default" => 1, //effect multiplier
			],
			//exclusive for flip
			"limitRotation" => [
				"type" => "boolean",
				"default" => true,
			],
			//exclusive for cube
			"shadow" => [
				"type" => "boolean",
				"default" => true,
			],
			"shadowOffset" => [
				"type" => "number",
				"default" => 20,
			],
			"shadowScale" => [
				"type" => "number",
				"default" => 0.94,
			],
		],
	],
	"dbe/notification-box-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"dbe_selected_notify" => [
				"type" => "string",
				"default" => "dbe_notify_info",
			],
			"dbe_notify_info" => [
				"type" => "string",
				"default" => "",
			],
			"align" => [
				"type" => "string",
				"default" => "left",
			],
		],
	],
	"dbe/number-box-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"column" => [
				"type" => "string",
				"default" => "2",
			],
			"columnOneNumber" => [
				"type" => "string",
				"default" => "",
			],
			"columnOneTitle" => [
				"type" => "string",
				"default" => "",
			],
			"title1Align" => [
				"type" => "string",
				"default" => "center",
			],
			"columnTwoNumber" => [
				"type" => "string",
				"default" => "",
			],
			"columnTwoTitle" => [
				"type" => "string",
				"default" => "",
			],
			"title2Align" => [
				"type" => "string",
				"default" => "center",
			],
			"columnThreeNumber" => [
				"type" => "string",
				"default" => "",
			],
			"columnThreeTitle" => [
				"type" => "string",
				"default" => "",
			],
			"title3Align" => [
				"type" => "string",
				"default" => "center",
			],
			"columnOneBody" => [
				"type" => "string",
				"default" => "",
			],
			"body1Align" => [
				"type" => "string",
				"default" => "left",
			],
			"columnTwoBody" => [
				"type" => "string",
				"default" => "",
			],
			"body2Align" => [
				"type" => "string",
				"default" => "left",
			],
			"columnThreeBody" => [
				"type" => "string",
				"default" => "",
			],
			"body3Align" => [
				"type" => "string",
				"default" => "left",
			],
			"numberBackground" => [
				"type" => "string",
				"default" => "#CCCCCC",
			],
			"numberColor" => [
				"type" => "string",
				"default" => "#000000",
			],
			"borderColor" => [
				"type" => "string",
				"default" => "#CCCCCC",
			],
		],
	],
	"dbe/post-grid" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"wrapAlignment" => [
				"type" => "string",
				"default" => "",
			],
			"categories" => [
				"type" => "string",
				"default" => "",
			],
			"categoryArray" => [
				"type" => "array",
				"default" => [],
			],
			"className" => [
				"type" => "string",
				"default" => "",
			],
			"amountPosts" => [
				"type" => "number",
				"default" => 6,
			],
			"checkPostDate" => [
				"type" => "boolean",
				"default" => true,
			],
			"checkPostExcerpt" => [
				"type" => "boolean",
				"default" => true,
			],
			"checkPostAuthor" => [
				"type" => "boolean",
				"default" => true,
			],
			"checkPostImage" => [
				"type" => "boolean",
				"default" => true,
			],
			"postImageWidth" => [
				"type" => "number",
				"default" => 600,
			],
			"preservePostImageAspectRatio" => [
				"type" => "boolean",
				"default" => true,
			],
			"postImageHeight" => [
				"type" => "number",
				"default" => 400,
			],
			"checkPostLink" => [
				"type" => "boolean",
				"default" => true,
			],
			"checkPostTitle" => [
				"type" => "boolean",
				"default" => true,
			],
			"postLayout" => [
				"type" => "string",
				"default" => "grid",
			],
			"columns" => [
				"type" => "number",
				"default" => 2,
			],
			"width" => [
				"type" => "string",
				"default" => "wide",
			],
			"order" => [
				"type" => "string",
				"default" => "desc",
			],
			"orderBy" => [
				"type" => "string",
				"default" => "date",
			],
			"readMoreText" => [
				"type" => "string",
				"default" => "Continue Reading",
			],
			"offset" => [
				"type" => "number",
				"default" => 0,
			],
			"excerptLength" => [
				"type" => "number",
				"default" => 55,
			],
			"postTitleTag" => [
				"type" => "string",
				"default" => "h2",
			],
			"tagArray" => [
				"type" => "array",
				"default" => [],
				"items" => [
					"type" => "number",
				],
			],
			"authorArray" => [
				"type" => "array",
				"default" => [],
				"items" => [
					"type" => "number",
				],
			],
		],
	],
	"dbe/progress-bar" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"percentage" => [
				"type" => "number",
				"default" => 25,
			],
			"barType" => [
				"type" => "string",
				"default" => "linear",
			],
			"detail" => [
				"type" => "string",
				"default" => "",
			],
			"detailAlign" => [
				"type" => "string",
				"default" => "left",
			],
			"barColor" => [
				"type" => "string",
				"default" => "#2db7f5",
			],
			"barThickness" => [
				"type" => "number",
				"default" => 1,
			],
			"labelColor" => [
				"type" => "string",
				"default" => "",
			],
		],
	],
	"dbe/review" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"authorName" => [
				"type" => "string",
				"default" => "",
			],
			"itemName" => [
				"type" => "string",
				"default" => "",
			],
			"itemPage" => [
				"type" => "string",
				"default" => "",
			],
			"itemType" => [
				"type" => "string",
				"default" => "Product",
			],
			"itemSubtype" => [
				"type" => "string",
				"default" => "",
			],
			"itemSubsubtype" => [
				"type" => "string",
				"default" => "",
			],
			"valueType" => [
				"type" => "string",
				"default" => "star",
			],
			"description" => [
				"type" => "string",
				"default" => "",
			],
			"enableDescription" => [
				"type" => "boolean",
				"default" => false,
			],
			"descriptionAlign" => [
				"type" => "string",
				"default" => "left",
			],
			"imgPosition" => [
				"type" => "string",
				"default" => "right",
			],
			"imgURL" => [
				"type" => "string",
				"default" => "",
			],
			"imgID" => [
				"type" => "number",
				"default" => -1,
			],
			"imgAlt" => [
				"type" => "string",
				"default" => "",
			],
			"enableImage" => [
				"type" => "boolean",
				"default" => false,
			],
			"items" => [
				"type" => "string",
				"default" => '[{"label": "", "value": 0}]',
			],
			"starCount" => [
				"type" => "number",
				"default" => 5,
			],
			"useSummary" => [
				"type" => "boolean",
				"default" => true,
			],
			"summaryTitle" => [
				"type" => "string",
				"default" => "Summary",
			],
			"summaryDescription" => [
				"type" => "string",
				"default" => "",
			],
			"callToActionText" => [
				"type" => "string",
				"default" => "",
			],
			"callToActionFontSize" => [
				"type" => "number",
				"default" => 0,
			],
			"callToActionURL" => [
				"type" => "string",
				"default" => "",
			],
			"callToActionBackColor" => [
				"type" => "string",
				"default" => "#34495E",
			],
			"callToActionBorderColor" => [
				"type" => "string",
				"default" => "#ffffff",
			],
			"callToActionForeColor" => [
				"type" => "string",
				"default" => "#ffffff",
			],
			"inactiveStarColor" => [
				"type" => "string",
				"default" => "#888888",
			],
			"activeStarColor" => [
				"type" => "string",
				"default" => "",
			],
			"activePercentBarColor" => [
				"type" => "string",
				"default" => "",
			],
			"percentBarColor" => [
				"type" => "string",
				"default" => "",
			],
			//retained for backwards compatibility
			"selectedStarColor" => [
				"type" => "string",
				"default" => "#ffff00",
			],
			"titleAlign" => [
				"type" => "string",
				"default" => "left",
			],
			"authorAlign" => [
				"type" => "string",
				"default" => "left",
			],
			"enableCTA" => [
				"type" => "boolean",
				"default" => true,
			],
			"ctaNoFollow" => [
				"type" => "boolean",
				"default" => true,
			],
			"ctaOpenInNewTab" => [
				"type" => "boolean",
				"default" => true,
			],
			"ctaIsSponsored" => [
				"type" => "boolean",
				"default" => false,
			],
			"ctaAlignment" => [
				"type" => "string",
				"default" => "left",
			],
			"enableReviewSchema" => [
				"type" => "boolean",
				"default" => true,
			],
			"starOutlineColor" => [
				"type" => "string",
				"default" => "",
			],
			"imageSize" => [
				"type" => "number",
				"default" => 100,
			],
			"brand" => [
				"type" => "string",
				"default" => "",
			],
			"sku" => [
				"type" => "string",
				"default" => "",
			],
			"identifier" => [
				"type" => "string",
				"default" => "",
			],
			"identifierType" => [
				"type" => "string",
				"default" => "gtin",
			],
			"offerType" => [
				"type" => "string",
				"default" => "Offer",
			],
			"offerStatus" => [
				"type" => "string",
				"default" => "InStock",
			],
			"offerHighPrice" => [
				"type" => "number",
				"default" => 0,
			],
			"offerLowPrice" => [
				"type" => "number",
				"default" => 0,
			],
			"offerCount" => [
				"type" => "number",
				"default" => 1,
			],
			"offerPrice" => [
				"type" => "number",
				"default" => 0,
			],
			"offerCurrency" => [
				"type" => "string",
				"default" => "USD",
			],
			"offerExpiry" => [
				"type" => "number",
				"default" => 0,
			],
			//BEGIN SOFTWAREAPPLICATION ATTRIBUTES
			"appCategory" => [
				"type" => "string",
				"default" => "",
			],
			"operatingSystem" => [
				"type" => "string",
				"default" => "",
			],
			//END SOFTWAREAPPLICATION ATTRIBUTES
			"servesCuisine" => [
				//FOR FOODESTABLISHMENT AND SUBTYPES ONLY
				"type" => "array",
				"default" => [],
				"items" => [
					"type" => "string",
				],
			],
			//BEGIN LOCALBUSINESS/ORGANIZATION ATTRIIBUTES
			"telephone" => [
				"type" => "string",
				"default" => "",
			],
			"addressName" => [
				"type" => "string",
				"default" => "",
			],
			"address" => [
				"type" => "string",
				"default" => "",
			],
			"priceRange" => [
				"type" => "string",
				"default" => "",
			],
			//END LOCALBUSINESS/ORGANIZATION ATTRIBUTES
			//BEGIN BOOK ATTRIBUTES
			"bookAuthorName" => [
				"type" => "string",
				"default" => "",
			],
			"isbn" => [
				"type" => "string",
				"default" => "",
			],
			"reviewPublisher" => [
				"type" => "string",
				"default" => "",
			],
			"publicationDate" => [
				"type" => "number",
				"default" => time(),
			],
			//END BOOK ATTRIBUTES
			//BEGIN EVENT ATTRIBUTES
			"eventStartDate" => [
				"type" => "number",
				"default" => time() + 86400,
			],
			"eventEndDate" => [
				"type" => "number",
				"default" => 0,
			],
			"usePhysicalAddress" => [
				"type" => "boolean",
				"default" => true,
			],
			"eventPage" => [
				"type" => "string",
				"default" => "",
			],
			"organizer" => [
				"type" => "string",
				"default" => "",
			],
			"performer" => [
				"type" => "string",
				"default" => "",
			],
			//END EVENT ATTRIBUTES
			//BEGIN VIDEO OBJECT ATTRIBUTES
			"videoUploadDate" => [
				"type" => "number",
				"default" => time(),
			],
			"videoURL" => [
				"type" => "string",
				"default" => "",
			],
			//END VIDEO OBJECT ATTRIBUTES
		],
	],
	"dbe/social-share" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"showFacebookIcon" => [
				"type" => "boolean",
				"default" => true,
			],
			"facebookCaption" => [
				"type" => "string",
				"default" => "share",
			],
			"showTwitterIcon" => [
				"type" => "boolean",
				"default" => true,
			],
			"twitterCaption" => [
				"type" => "string",
				"default" => "tweet",
			],
			"showLinkedInIcon" => [
				"type" => "boolean",
				"default" => true,
			],
			"linkedInCaption" => [
				"type" => "string",
				"default" => "share",
			],
			"showPinterestIcon" => [
				"type" => "boolean",
				"default" => true,
			],
			"pinterestCaption" => [
				"type" => "string",
				"default" => "pin",
			],
			"showRedditIcon" => [
				"type" => "boolean",
				"default" => true,
			],
			"redditCaption" => [
				"type" => "string",
				"default" => "post",
			],
			"showGooglePlusIcon" => [
				"type" => "boolean",
				"default" => true,
			],
			"showTumblrIcon" => [
				"type" => "boolean",
				"default" => true,
			],
			"tumblrCaption" => [
				"type" => "string",
				"default" => "share",
			],
			"iconSize" => [
				"type" => "string",
				"default" => "normal",
			],
			"iconShape" => [
				"type" => "string",
				"default" => "circle",
			],
			"align" => [
				"type" => "string",
				"default" => "left",
			],
			"iconOrder" => [
				"type" => "array",
				"default" => [
					"facebook",
					"twitter",
					"linkedin",
					"pinterest",
					"reddit",
					"tumblr",
				],
				"items" => [
					"type" => "string",
				],
			],
			"buttonColor" => [
				"type" => "string",
				"default" => "",
			],
			"useCaptions" => [
				"type" => "boolean",
				"default" => false,
			],
			"addOutline" => [
				"type" => "boolean",
				"default" => false,
			],
		],
	],
	"dbe/star-rating-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"starCount" => [
				"type" => "number",
				"default" => 5,
			],
			"starSize" => [
				"type" => "number",
				"default" => 20,
			],
			"starColor" => [
				"type" => "string",
				"default" => "#ffff00",
			],
			"selectedStars" => [
				"type" => "number",
				"default" => 0,
			],
			"reviewText" => [
				"type" => "string",
				"default" => "",
			],
			"reviewTextAlign" => [
				"type" => "string",
				"default" => "left",
			],
			"reviewTextColor" => [
				"type" => "string",
				"default" => "",
			],
			"starAlign" => [
				"type" => "string",
				"default" => "left",
			],
		],
	],
	"dbe/styled-box" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"mode" => [
				"type" => "string",
				"default" => "",
			],
			"title" => [
				"type" => "array",
				"default" => [""],
				"items" => [
					"type" => "string",
				],
			],
			"titleAlign" => [
				"type" => "array",
				"default" => ["center"],
				"items" => [
					"type" => "string",
				],
			],
			"text" => [
				"type" => "array",
				"default" => [""],
				"items" => [
					"type" => "string",
				],
			],
			"textAlign" => [
				"type" => "array",
				"default" => ["left"],
				"items" => [
					"type" => "string",
				],
			],
			"number" => [
				"type" => "array",
				"default" => ["1", "2", "3"],
				"items" => [
					"type" => "string",
				],
			],
			/* COMMENTED OUT TO PREVENT PHP ERRORS
            'image' => array(
                'type' => 'array',
                'default' => array(
                    array(
                        'id' => null,
                        'alt' => null,
                        'url' => null
                    )
                )
            ),*/
			"foreColor" => [
				"type" => "string",
				"default" => "#000000",
			],
			"backColor" => [
				"type" => "string",
				"default" => "#CCCCCC",
			],
			"boxColor" => [
				"type" => "string",
				"default" => "",
			],
			"outlineColor" => [
				"type" => "string",
				"default" => "#000000",
			],
			"outlineStyle" => [
				"type" => "string",
				"default" => "solid",
			],
			"outlineThickness" => [
				"type" => "number",
				"default" => 1,
			],
			"outlineRoundingRadius" => [
				"type" => "number",
				"default" => 0,
			],
			"outlineRadiusUnit" => [
				"type" => "string",
				"default" => "percent",
			],
		],
	],
	"dbe/styled-list" => [
		"attributes" => [
			"alignment" => [
				"type" => "string",
				"default" => "left",
			],
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"list" => [
				"type" => "text",
				"default" => "<li>Item 1</li><li>Item 2</li><li>Item 3</li>",
			],
			"listItem" => [
				"type" => "array",
				"default" => array_fill(0, 3, [
					"text" => "",
					"selectedIcon" => "check",
					"indent" => 0,
				]),
			],
			"selectedIcon" => [
				"type" => "string",
				"default" => "check",
			],
			"iconColor" => [
				"type" => "string",
				"default" => "#000000",
			],
			"iconSize" => [
				"type" => "number",
				"default" => 5,
			],
			"fontSize" => [
				"type" => "number",
				"default" => 0,
			],
			"itemSpacing" => [
				"type" => "number",
				"default" => 0,
			],
			"columns" => [
				"type" => "number",
				"default" => 1,
			],
			"maxMobileColumns" => [
				"type" => "number",
				"default" => 2,
			],
		],
	],
	"dbe/tab-block" => [
		"attributes" => [
			"index" => [
				"type" => "number",
				"default" => 0,
			],
			"isActive" => [
				"type" => "boolean",
				"default" => true,
			],
			"parentID" => [
				"type" => "string",
				"default" => "",
			],
		],
	],
	"dbe/tabbed-content-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"activeTab" => [
				"type" => "number",
				"default" => 0,
			],
			"theme" => [
				"type" => "string",
				"default" => "#eeeeee",
			],
			"normalColor" => [
				"type" => "string",
				"default" => "",
			],
			"titleColor" => [
				"type" => "string",
				"default" => "", //should be empty
			],
			"normalTitleColor" => [
				"type" => "string",
				"default" => "",
			],
			"borderColor" => [
				"type" => "string",
				"default" => "#d3d3d3",
			],
			"tabsAlignment" => [
				"type" => "string",
				"default" => "left",
			],
			"tabsTitle" => [
				"type" => "array",
				"default" => [],
				"items" => [
					"type" => "string",
				],
			],
			"tabsAnchor" => [
				"type" => "array",
				"default" => [],
				"items" => [
					"type" => "string",
				],
			],
			"useAnchors" => [
				"type" => "boolean",
				"default" => false,
			],
			"tabsTitleAlignment" => [
				"type" => "array",
				"default" => [],
				"items" => [
					"type" => "string",
				],
			],
			"tabVertical" => [
				"type" => "boolean",
				"default" => false,
			],
			"tabletTabDisplay" => [
				"type" => "string",
				"default" => "horizontaltab",
			],
			"mobileTabDisplay" => [
				"type" => "string",
				"default" => "horizontaltab",
			],
			"tabStyle" => [
				"type" => "string",
				"default" => "tabs",
			],
		],
	],
	"dbe/table-of-contents-block" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"title" => [
				"type" => "string",
				"default" => "",
			],
			"allowedHeaders" => [
				"type" => "array",
				"default" => array_fill(0, 6, true),
				"items" => [
					"type" => "boolean",
				],
			],
			"links" => [
				"type" => "string",
				"default" => "",
			],
			"allowToCHiding" => [
				"type" => "boolean",
				"default" => false,
			],
			"hideOnMobile" => [
				"type" => "boolean",
				"default" => false,
			],
			"showList" => [
				"type" => "boolean",
				"default" => true,
			],
			"numColumns" => [
				"type" => "number",
				"default" => 1,
			],
			"listStyle" => [
				"type" => "string",
				"default" => "bulleted",
			],
			"enableSmoothScroll" => [
				"type" => "boolean",
				"default" => false,
			],
			"titleAlignment" => [
				"type" => "string",
				"default" => "left",
			],
			"gaps" => [
				"type" => "array",
				"default" => [],
				"items" => [
					"type" => "number",
				],
			],
			"removeDiacritics" => [
				"type" => "boolean",
				"default" => false,
			],
			"scrollOption" => [
				"type" => "string",
				"default" => "auto", //other options: namedelement, fixedamount, off
			],
			"scrollOffset" => [
				"type" => "number",
				"default" => 0,
			],
			"scrollTarget" => [
				"type" => "string",
				"default" => "",
			],
			"scrollTargetType" => [
				"type" => "string",
				"default" => "id", //other types: class, element
			],
			"titleColor" => [
				"type" => "string",
				"default" => "",
			],
			"titleBackgroundColor" => [
				"type" => "string",
				"default" => "",
			],
			"listColor" => [
				"type" => "string",
				"default" => "",
			],
			"listBackgroundColor" => [
				"type" => "string",
				"default" => "",
			],
			"listIconColor" => [
				"type" => "string",
				"default" => "",
			],
		],
	],
	"dbe/testimonial" => [
		"attributes" => [
			"blockID" => [
				"type" => "string",
				"default" => "",
			],
			"dbe_testimonial_text" => [
				"type" => "string",
				"default" => "",
			],
			"textAlign" => [
				"type" => "string",
				"default" => "justify",
			],
			"dbe_testimonial_author" => [
				"type" => "string",
				"default" => "",
			],
			"authorAlign" => [
				"type" => "string",
				"default" => "right",
			],
			"dbe_testimonial_author_role" => [
				"type" => "string",
				"default" => "",
			],
			"authorRoleAlign" => [
				"type" => "string",
				"default" => "right",
			],
			"imgURL" => [
				"type" => "string",
				"default" => "",
			],
			"imgID" => [
				"type" => "number",
				"default" => 0,
			],
			"imgAlt" => [
				"type" => "string",
				"default" => "",
			],
			"backgroundColor" => [
				"type" => "string",
				"default" => "#f4f6f6",
			],
			"textColor" => [
				"type" => "string",
				"default" => "",
			],
			"textSize" => [
				"type" => "number",
				"default" => 17,
			],
		],
	],
];
