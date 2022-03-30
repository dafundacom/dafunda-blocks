<?php

function dbe_render_testimonial_block($attributes){
    extract($attributes);
    return '<div>
    <div class="testimonial'.(isset($className) ? ' ' . esc_attr($className) : '').
            '"'.($blockID === '' ? 'style= "background-color: ' . $backgroundColor . '; color: ' . $textColor . ';"'
                :' id="testimonial_' . $blockID . '"') . '>
        <div class="testimonial_img">
            <img src="' . $imgURL . '" alt="' . $imgAlt . '" height="100" width="100" />
        </div>
        <div class="testimonial_content">
            <p class="testimonial_text"'.
                ($blockID === '' ? ' style="font-size: ' . $textSize.'px; text-align: ' . $textAlign . ';"' : '') . '>'.
                $dbe_testimonial_text . '</p>
        </div>
        <div class="testimonial_sign">
            <p class="testimonial_author"'.
                ($blockID === '' ? ' style="font-size: ' . $textSize . 'px; text-align: ' . $authorAlign.';"' : '') . '>'.
                $dbe_testimonial_author.'</p>
            <p class="testimonial_author_role"'.
                ($blockID === '' ? ' style="font-size: ' . $textSize . 'px; text-align: ' . $authorRoleAlign . ';"' : '') . '>'.
                $dbe_testimonial_author_role . '</p>
        </div>
    </div>
</div>';
}

function dbe_register_testimonial_block() {
	if( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
		register_block_type( 'dbe/testimonial', array(
            'attributes' =>$defaultValues['dbe/testimonial']['attributes'],
            'render_callback' => 'dbe_render_testimonial_block'));
    }
}

add_action('init', 'dbe_register_testimonial_block');