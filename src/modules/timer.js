/**
 * timer.js - a timer module that will create a repetative timer on an element
 * @returns {void}
 */
define( function() {

   //
   function handle() {
     this.innerHTML += " (timer active)";
   }

   return {
        handle: handle
   };
} );
