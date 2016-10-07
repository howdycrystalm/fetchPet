angular.module('app')
  .controller('petCtrl', function($scope, petService) {
    
      petService.getRandom().then(function(response) {
        console.log(response)
          $scope.randomPets = response.data; 
  
      });
    
  })