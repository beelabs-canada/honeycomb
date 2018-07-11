
// Polyfills
var polyfills = [];

// Configuration
requirejs.config = {};

// Main Logic
require( [ "modules/element" ].concat( polyfills ), function( lElement ) {

	let docroot = document.documentElement;

	// Lets add JS cause we have JS working
	docroot.classList.add( "js" );

	for ( let node of docroot.querySelectorAll( "[data-hycmb]" ) ) {
		let action = lElement.parse( node.dataset.hycmb );

		require( [ "modules/" + action.command ], function( Worker ) {
			Worker.handle.call( node, action.selector, action.options );
		} );

	}
} );
