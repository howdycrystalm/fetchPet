angular.module('app')
  .controller('shelterCtrl', function($scope, $stateParams) {
    $scope.shelterId = $stateParams.id;
    
  })