<?php

function dbe_render_feature_box_block($attributes){
    extract($attributes);

    $column1 = '<div class="dbe_feature_1">
    <img class="dbe_feature_one_img" src="' . $imgOneURL . '" alt="' . $imgOneAlt . '"/>
    <p class="dbe_feature_one_title"'.($blockID===''?' style="text-align: '.$title1Align.';"':'').'>' . $columnOneTitle . '</p>
    <p class="dbe_feature_one_body"'.($blockID===''?' style="text-align: '.$body1Align.';"':'').'>' . $columnOneBody . '</p></div>';

    $column2 = '<div class="dbe_feature_2">
    <img class="dbe_feature_two_img" src="' . $imgTwoURL . '" alt="' . $imgTwoAlt . '"/>
    <p class="dbe_feature_two_title"'.($blockID===''?' style="text-align: '.$title2Align.';"':'').'>' . $columnTwoTitle . '</p>
    <p class="dbe_feature_two_body"'.($blockID===''?' style="text-align: '.$body2Align.';"':'').'>' . $columnTwoBody . '</p></div>';

    $column3 = '<div class="dbe_feature_3">
    <img class="dbe_feature_three_img" src="'.$imgThreeURL.'" alt="' . $imgThreeAlt . '"/>
    <p class="dbe_feature_three_title"'.($blockID===''?' style="text-align: '.$title3Align.';"':'').'>' . $columnThreeTitle . '</p>
    <p class="dbe_feature_three_body"'.($blockID===''?' style="text-align: '.$body3Align.';"':'').'>' . $columnThreeBody . '</p></div>';

    $columns = $column1;

    if((int)$column >= 2){
        $columns .= $column2;
    }
    if((int)$column >= 3){
        $columns .= $column3;
    }

    return '<div class="dbe_feature_box column_'.$column.(isset($className) ? ' ' . esc_attr($className) : '').'"'
        .($blockID===''?: ' id="dbe_feature_box_'.$blockID.'"').'>'.
    $columns.'</div>';
}

function dbe_register_feature_box_block() {
	if ( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
        register_block_type( 'dbe/feature-box-block', array(
            'attributes' => $defaultValues['dbe/feature-box-block']['attributes'],
			'render_callback' => 'dbe_render_feature_box_block'));
	}
}

add_action('init', 'dbe_register_feature_box_block');