/**
 * Created by luizandre on 11/01/16.
 */
angular.module('delta')
    .controller('IndexController',IndexController);
IndexController.$inject=['$scope']; // sera necessario para mimificacao, se tiver mais de um paramentro na funcao
                                    // IndexController.$inject=['$scope','outroParametro'];
function IndexController($scope){
    $scope.nome="luiz";
    $scope.testeFuncao = testeFuncao; // para a função ser vista pelo html
    function testeFuncao(){
        alert('Ola ' + $scope.nome);
    }
}

$scope.$watch("nome",onChange());  //escuta o campo, se alterar escuta uma acao
// quando altera a variavel nome, executa a funcao onChange
//function onChange
//http://javascript-minifier.com