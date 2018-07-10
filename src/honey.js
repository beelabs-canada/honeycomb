
var polyfills = [];


requirejs.config = {


};


require( [ "modules/core" ].concat( polyfills ), function( Core ) {

    let docroot = document.documentElement;

    // Lets add JS cause we have JS working
    docroot.classList.add( "js" );

    for ( let node of docroot.querySelectorAll( "[data-hycb]" ) ) {
        let action = Core.parse( node.dataset.hycb );

        require( [ "modules/" + action.command ], function( Worker ) {
            Worker.handle.call( node, action.selector, action.options );
        } );

    }
} );
