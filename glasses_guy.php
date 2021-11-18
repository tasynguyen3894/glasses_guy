<?php

/**
 * Plugin Name: Glasses guy
 * Plugin URI:  https://github.com/your-git/your-block-git
 * Description: Show glasses guy
 * Version:     0.1.0
 * Author:      Sang Nguyen
 * Author URI:  https://sangnguyen.dev
 * License:     MIT License
 * Domain Path: /resources/lang
 **/

if( ! function_exists( 'register_meta_glasses_guy' ) ) {
    function register_meta_glasses_guy() {
        register_post_meta(
            'post',
            'who_wear_glasses',
            [
                'show_in_rest' => true,
                'single'       => true,
                'type'         => 'string',
            ]
        );
    }
    add_action( 'init', 'register_meta_glasses_guy' );
}

if( ! function_exists( 'register_glasses_guy_block' ) ) {
    function register_glasses_guy_block() {
        wp_register_script(
            'glasses-guy-block-js',
            plugin_dir_url(__FILE__) .'dist/block.js', 
            [
                'wp-element',
                'wp-i18n',
                'wp-blocks',
                'wp-components',
                'wp-block-editor',
                'wp-edit-post'
            ],
            '',
            null,
            true
        );

        register_block_type(
            'glassesguy/block', [
                'editor_script' => 'glasses-guy-block-js'
            ]
        );
    }

    add_action( 'init', 'register_glasses_guy_block' );
}