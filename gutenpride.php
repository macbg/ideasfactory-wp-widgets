<?php
/**
 * Plugin Name:       Ideas Factory Widgets
 * Description:       A set of Gutenberg blocks designed for Ideas Factory.
 * Version:           0.1.0
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author:            Martina Peeva, Krasimir Markov
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenpride
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenpride_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_gutenpride_block_init' );
