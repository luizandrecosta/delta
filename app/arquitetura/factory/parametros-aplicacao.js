/**
 * Created by luizandre on 14/01/16.
 */
angular.module('delta').factory('ParametrosAplicacao',ParametrosAplicacao);

function ParametrosAplicacao(){
    return {
        nomeUsuario: '',
        email: '',
        logado: false
    };
}