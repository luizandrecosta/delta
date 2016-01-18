/**
 * Created by luizandre on 14/01/16.
 */
angular.module('delta').
    filter('maiusculo',maiusculo)
     function maiusculo() {
         return function (input) {
             if(input && (typeof input === 'string')){
                 return input.toUpperCase();
             }
             return input;
         }
     }