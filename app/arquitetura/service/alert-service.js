/**
 * Created by luizandre on 14/01/16.
 */
angular.module('delta')
    .service('AlertService',AlertService);
AlertService.$inject=['toastr'];
function  AlertService(toastr){
    this.showSuccess=showSuccess; //para acessar no html

    function showSuccess(mensagem,titulo){
        if(!titulo){
            titulo = 'Ok';
        }
        toastr.success(mensagem,titulo,{progressBar:true});
    }
}
