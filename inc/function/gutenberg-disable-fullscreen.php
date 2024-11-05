<?php

//* Disable fullscreen mode
add_action( 'enqueue_block_editor_assets', 'elodin_disable_fullscreen_mode' );
function elodin_disable_fullscreen_mode() {
	
	if ( !is_admin() )
		return;
		
	$script = "
		jQuery( window ).load(function() { 
			
			// disable fullscreenmode
			const isFullscreenMode = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fullscreenMode' ); 
			if ( isFullscreenMode ) { 
				wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fullscreenMode' ); 
			}
			
			// disable publish check
			wp.data.dispatch('core/editor').disablePublishSidebar();
		});
	";
	
	wp_add_inline_script( 'wp-blocks', $script );
	
}

