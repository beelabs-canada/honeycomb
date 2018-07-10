/**
 * core.js - the guts of honeycombs logic
 * @returns {object}   [[Description]]
 */
define( function() {

    function parse( text ) {
        var accessors = text.split( "@" ),
            command = { command: accessors.pop() };

        if ( accessors.length > 0 ) {
              command.selector = accessors.pop();
        }

        if ( accessors.length > 0 ) {
              command.options = JSON.parse( accessors.pop() );
        }

        return command;
    }


    return {
        parse: parse
    };
} );
