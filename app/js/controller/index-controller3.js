/**
 * Created by luizandre on 11/01/16.
 */
angular.module('delta')
    .controller('IndexController3',IndexController3);
IndexController3.$inject=['$scope','$timeout','AlertService']; // sera necessario para mimificacao, se tiver mais de um paramentro na funcao
 function IndexController3($scope,$timeout,AlertService){
     $scope.listaDePessoas = [];
     $scope.entidade = {};
     $scope.salvar = salvar;
     $scope.limpar = limpar;
     $scope.myClass='';
     $scope.onClickEditar=onClickEditar;
     $scope.getRowStyle=getRowStyle;
     iniciar();



     function iniciar(){
         $scope.gridOptions = {
             data: 'listaDePessoas',
             columnDefs :[
                {field:'nome', displayName: 'Nome', width: 200},
                 {field:'sobrenome', displayName: 'Sobrenome'},
                 {field:'nascimento', displayName: 'Data Nascimento', width: 200,
                    cellTemplate: 'app/templates/cell-template-data.html'},
                 {field:'editar', displayName: '', width: 50,
                     cellTemplate: 'app/templates/cell-template-editar.html'}
             ],
             rowTemplate: 'app/templates/row-template.html'
         }
     }

     function salvar(){

         AlertService.showSuccess('registro salvo');
         //$scope.myClass="has-error";
         //setTouched();
         if ($scope.formPessoa.$invalid){
             //alert('Prencha os campos');
             AlertService('verifique os campos');
             //var data = $scope.entidade.nascimento;
             //$scope.ultimaDataCadasreada = $filter('date')(data,'dd/MM/yyyy');
             return
         }
         $scope.listaDePessoas.push($scope.entidade);

         limpar();

     }
     function limpar(){
         $scope.entidade={};
         $timeout(function(){
             unsetTouched();
         },120)


     }
     function setTouched() {
         angular.forEach($scope.formPessoa.$error, function (error) {
            angular.forEach(error,function(field){
                field.$setTouched();
            })
         })
     };
     function unsetTouched() {

         angular.forEach($scope.formPessoa.$error, function (error) {
             angular.forEach(error,function(field){
                 field.$setUntouched();
             })
         })
     };
    function onClickEditar(entidadeSelecionada){
        this.entidade = entidadeSelecionada;
    }
    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor=linhaSelecionada.cor;
        style.color = 'white';
        return style;
    }
 }

