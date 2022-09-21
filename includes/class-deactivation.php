<?php
namespace GB;

class Deactivation {
    public static function init()
    {
        register_deactivation_hook(
            __FILE__,
            function(){
                wp_die("Message from Deactivation class", "Deactivation");
            }
        );
    }
}
