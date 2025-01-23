<?php
/*
Plugin Name: Menu KSchool
Plugin URI: https://KSchool.com
Description: Plugin para mostrar un menú responsive con submenús dinámicos.
Version: 1.0
Author: Daniel Sanguino
Author URI: https://danisanguino.com
License: GPL2
*/


if ( ! defined( 'ABSPATH' ) ) {
    exit; 
}


include( plugin_dir_path( __FILE__ ) . 'includes/menu-functions.php' );


function responsive_menu_shortcode() {
    ob_start();
   
    responsive_menu_html();
    return ob_get_clean();
}
add_shortcode('responsive_menu', 'responsive_menu_shortcode');