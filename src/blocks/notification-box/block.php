<?php

function dbe_render_notification_box_block($attributes){
    extract($attributes);
    return '<div>
    <div class="wp-block-notification-box '.$selected_notify.
        (isset($className) ? ' ' . esc_attr($className) : '').'"'.($blockID===''? :' id="notification-box-'.$blockID.'"').'>
        <p class="notify_text"'.($blockID===''?' style="text-align: '.$align.';"':'').'>'.$notify_info.'</p>
    </div>
</div>';
}

function dbe_register_notification_box_block() {
	if ( function_exists( 'register_block_type' ) ) {
        require dirname(dirname(__DIR__)) . '/defaults.php';
        register_block_type( 'dbe/notification-box-block', array(
            'attributes' => $defaultValues['dbe/notification-box-block']['attributes'],
			'render_callback' => 'dbe_render_notification_box_block'));
	}
}

add_action('init', 'dbe_register_notification_box_block');