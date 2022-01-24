<?php

/**
 * Fired during plugin activation
 *
 * @link       https://github.com/dafundacom/dafunda-blocks/
 * @since    0.0.1
 *
 * @package    dafunda_blocks
 * @subpackage dafunda_blocks/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since    0.0.1
 * @package    dafunda_blocks
 * @subpackage dafunda_blocks/includes
 * @author     Imtiaz Rayhan <imtiazrayhan@gmail.com>
 */
class Dafunda_Blocks_Util {

	/**
	 * Get all Blocks.
	 *
	 * @since    0.0.1
	 * @return array
	 */
	public static function blocks() {

		return [
			array(
				'label'  => 'Advanced Heading',
				'name'   => 'dbe/advanced-heading',
				'active' => true,
			),
			array(
				'label'  => 'Advanced Video',
				'name'   => 'dbe/advanced-video',
				'active' => true,
			),
			array(
				'label'  => 'Button (Improved)',
				'name'   => 'dbe/button',
				'active' => true,
			),
			array(
				'label'  => 'Call To Action',
				'name'   => 'dbe/call-to-action-block',
				'active' => true,
			),
			array(
				'label'  => 'Click To Tweet',
				'name'   => 'dbe/click-to-tweet',
				'active' => true,
            ),
            array(
				'label'  => 'Content Filter',
				'name'   => 'dbe/content-filter-block',
				'active' => true,
            ),
			array(
				'label'  => 'Content Toggle',
				'name'   => 'dbe/content-toggle-block',
				'active' => true,
            ),
            array(
                'label'  => 'Countdown',
                'name'   => 'dbe/countdown',
                'active' => true,
            ),
			array(
				'label'  => 'Divider',
				'name'   => 'dbe/divider',
				'active' => true,
            ),
            array(
				'label'  => 'Expand',
				'name'   => 'dbe/expand',
				'active' => true,
			),
			array(
				'label'  => 'How To',
				'name'   => 'dbe/how-to',
				'active' => true,
			),
            array(
                'label'  => 'Image Slider',
                'name'   => 'dbe/image-slider',
                'active' => true,
            ),
            array(
                'label'  => 'Post Grid',
                'name'   => 'dbe/post-grid',
                'active' => true,
            ),
            array(
				'label'  => 'Progress Bar',
				'name'   => 'dbe/progress-bar',
				'active' => true,
            ),
            array(
                'label'  => 'Review',
                'name'   => 'dbe/review',
                'active' => true,
            ),
			array(
				'label'  => 'Social Share',
				'name'   => 'dbe/social-share',
				'active' => true,
            ),
            array(
				'label'  => 'Star Rating',
				'name'   => 'dbe/star-rating-block',
				'active' => true,
            ),
            array(
				'label'  => 'Styled Box',
				'name'   => 'dbe/styled-box',
				'active' => true,
			),
            array(
				'label'  => 'Styled List',
				'name'   => 'dbe/styled-list',
				'active' => true,
			),
			array(
				'label'  => 'Tabbed Content',
				'name'   => 'dbe/tabbed-content-block',
				'active' => true,
            ),
			array(
				'label'  => 'Table of Contents',
				'name'   => 'dbe/table-of-contents-block',
				'active' => true,
            ),
            array(
				'label'  => 'Testimonial',
				'name'   => 'dbe/testimonial',
				'active' => true,
			)
		];
	}

}
