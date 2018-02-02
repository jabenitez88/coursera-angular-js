(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope,
                       $filter,
                       $injector) {
  $scope.names = "";
  $scope.mensaje = "";
  $scope.calculateMenu = function () {
    var comma = ',';
    var i = 0;
    var totalNames = 0;

    //console.log($scope.names);
    if($scope.names.length > 0 && $scope.names !== "\"\""){
      var nombres = $scope.names.split(comma);
      $scope.mensajeClass = "green";
      for(i=0;i<nombres.length;i++){
        if(nombres[i].length > 0 && nombres.length != ",") totalNames++;
      }
      if(totalNames ==0){
        $scope.mensajeClass = "red";
        $scope.mensaje = 'Please enter data first';
      }else if(totalNames <= 3){
        //console.log('Enjoy!');
        $scope.mensaje = 'Enjoy!';
      }else{
        //console.log('Too much!');
        $scope.mensaje = 'Too much!';
      }
    }else{
      //console.log('Please enter data first');
      $scope.mensajeClass = "red";
      $scope.mensaje = 'Please enter data first';
    }
  };

  //console.log($injector.annotate(LunchCheckController));
}


//console.log(LunchCheckController.toString());


})();
