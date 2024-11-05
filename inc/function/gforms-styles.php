<?php

function edi_gforms_styles() {
	return '{
		"theme":"",
		"inputSize":"lg",
		"inputBorderRadius":"3",
		"inputBorderColor":"",
		"inputBackgroundColor":"#fff",
		"inputColor":"var( --contrast)",
		"inputPrimaryColor":"var( --accent )",
		"labelFontSize":"16",
		"labelColor":"var( --contrast )",
		"descriptionColor":"var( --contrast)",
		"buttonPrimaryBackgroundColor":"var( --accent )",
		"buttonPrimaryColor":"#fff"
	}';
}
// add_filter( 'gform_default_styles', 'edi_gforms_styles' );