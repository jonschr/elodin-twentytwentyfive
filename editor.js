//* Remove unused blocks entirely (commented ones are ones we're keeping)
// Use this in console to see list of blocks that haven't been unregistered

wp.domReady(() => {
	// wp.blocks.unregisterBlockType('core/rss');
	// wp.blocks.unregisterBlockType('core/tag-cloud');
	// wp.blocks.unregisterBlockType('core/text-columns');
	// wp.blocks.unregisterBlockType('core/verse');
	// wp.blocks.unregisterBlockType('core/columns');
	// wp.blocks.unregisterBlockType('core/column');
	// wp.blocks.unregisterBlockType('core/cover');
	// wp.blocks.unregisterBlockType('core/media-text');
	// wp.blocks.unregisterBlockType('generateblocks/button-container');
	// wp.blocks.unregisterBlockType('generateblocks/button');
});

//* Add alt styles
wp.domReady(() => {
	wp.blocks.registerBlockStyle('core/paragraph', [
		{
			name: 'default',
			label: 'Default',
			isDefault: true,
		},
		{
			name: 'kicker',
			label: 'Kicker',
		},
	]);

	wp.blocks.registerBlockStyle('core/list', [
		{
			name: 'default',
			label: 'Default',
			isDefault: true,
		},
		{
			name: 'checkmark',
			label: 'Checkmark',
		},
	]);

	// wp.blocks.registerBlockStyle('core/heading', [
	//     {
	//         name: 'default',
	//         label: 'Default',
	//         isDefault: true,
	//     },
	//     {
	//         name: 'red-line',
	//         label: 'Red line',
	//     },
	// ]);
});
