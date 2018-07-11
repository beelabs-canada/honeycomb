/**
 * Debug tools
 */
define( [ "modules/core/time" ], function( lTime ) {
	"use strict"

	function log( message ) {
		console.log( "[ " + lTime.stamp() + " ] " + message );
    }

    return {
        log : log
    }

} );
