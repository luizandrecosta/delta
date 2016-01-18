/**
 * Created by luizandre on 11/01/16.
 */
angular.module('delta')
    .controller('IndexController2',IndexController2);
IndexController2.$inject=['$scope']; // sera necessario para mimificacao, se tiver mais de um paramentro na funcao
                                    // IndexController.$inject=['$scope','outroParametro'];
function IndexController2($scope){
    $scope.nome="luiz";
    $scope.myStyle={};

    $scope.$watch('nome',onChangeName);
    function onChangeName(valorNovo,valorAntigo){
        if(valorNovo === valorAntigo){
            return;
        }

        if(valorNovo ==='delta'){
            $scope.myStyle.backgroundColor="red";
            $scope.myStyle.color="orange";
        }else{
            $scope.myStyle.backgroundColor = 'blue';
        }
    }
//
}

//$scope.$watch("nome",onChange());  //escuta o campo, se alterar escuta uma acao
// quando altera a variavel nome, executa a funcao onChange
//function onChange
//http://javascript-minifier.com