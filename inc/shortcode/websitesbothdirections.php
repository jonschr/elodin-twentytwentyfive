<?php

add_image_size( 'websites-thumbnail', 600, 400, array( 'center', 'top' ) );


function websites_each() {
		
	the_post_thumbnail( 'websites-thumbnail' );
	
	// printf( '<h2 class="websites-title"><a href="%s">%s</a></h2>', esc_url( get_permalink() ), get_the_title() );
	
}
add_action( 'websites_do_each', 'websites_each' );

// [websitesbothdirections foo="foo-value"]
function websitesbothdirections_func( $atts ) {
	ob_start();
	
	echo '<div class="websites-wrap">';
	
		$args = array(
			'post_type' => 'websites',
			'posts_per_page' => '20',
		);

		// The Query
		$custom_query = new WP_Query( $args );

		// The Loop
		if ( $custom_query->have_posts() ) {
			
			echo '<div class="websites-container websites-left">';

			while ( $custom_query->have_posts() ) {
				
				$custom_query->the_post();

				printf( '<div class="%s">', esc_attr( implode( ' ', get_post_class() ) ) );
							
					do_action( 'websites_do_each' );

				echo '</div>';

			}
			
			echo '</div>';
			
			// Restore postdata
			wp_reset_postdata();

		}
		
		$args = array(
			'post_type' => 'websites',
			'posts_per_page' => '20',
			'offset' => 20,
		);

		// The Query
		$custom_query = new WP_Query( $args );

		// The Loop
		if ( $custom_query->have_posts() ) {
			
			echo '<div class="websites-container websites-right">';

			while ( $custom_query->have_posts() ) {
				
				$custom_query->the_post();

				printf( '<div class="%s">', esc_attr( implode( ' ', get_post_class() ) ) );
							
					do_action( 'websites_do_each' );

				echo '</div>';

			}
			
			echo '</div>';
			
			// Restore postdata
			wp_reset_postdata();

		}
		
	echo '</div>'; // .websites-wrap

	return ob_get_clean();
}
add_shortcode( 'websitesbothdirections', 'websitesbothdirections_func' );