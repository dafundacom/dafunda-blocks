<?php
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://github.com/dafundacom/dafunda-blocks/
 * @since    0.0.1
 *
 * @package    dafunda_blocks
 * @subpackage dafunda_blocks/admin/templates/menus/main-menu
 */

?>

<div id="dbe__main-menu">

	<div id="dbe__main-menu__header">
		<div class="dbe__header-container">
			<h1>Dafunda Blocks</h1>
			<div class="dbe_collection_filter">
				<span class="filter-action active" data-filter-status="all"><?php esc_html_e( 'All', 'dafunda-blocks' ); ?></span>
				<span class="filter-action" data-filter-status="enabled"><?php esc_html_e( 'Enabled', 'dafunda-blocks' ); ?></span>
				<span class="filter-action" data-filter-status="disabled"><?php esc_html_e( 'Disabled', 'dafunda-blocks' ); ?></span>
			</div>
		</div>
	</div>

	<div id="dbe__main-menu__body">

		<div class="dbe__collection <?php echo count( get_option( 'dafunda_blocks', [] ) ) === 0 ? 'empty' : ''; ?>">

			<?php foreach ( get_option( 'dafunda_blocks', array() ) as $block ) : ?>
				<div class="dbe__collection__item <?php echo $block['active'] ? 'active' : ''; ?> " data-id="<?php echo esc_html( $block['name'] ); ?>">
					<div class="dbe__collection__item__header">
						<h3 class="dbe__collection__item__title"><?php printf( esc_html__( '%s', 'dafunda-blocks' ), $block['label'] ); ?></h3>
						<label class="dbe-switch-input">
							<input type="checkbox" name="block_status" <?php echo $block['active'] ? 'checked' : ''; ?>>
							<span class="dbe-switch-input-slider"></span>
						</label>
					</div>
				</div>
			<?php endforeach; ?>

		</div>
		<input type="hidden" name="dafunda_blocks_nonce" value="<?php echo esc_html( wp_create_nonce( 'toggle_block_status' ) ); ?>">
		<input type="hidden" name="dafunda_blocks_ajax_url" value="<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>">
	</div>

</div>
