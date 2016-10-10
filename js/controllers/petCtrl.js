angular.module('app')
  .controller('petCtrl', function($scope, $location, $anchorScroll, $state, petService) {
    
      petService.getRandom().then(function(response) {
        console.log(response)
          $scope.randomPets = response.data; 
  
      });
      
      $scope.scrollTo = function(scrollLocation){
        $location.hash(scrollLocation);
        $anchorScroll();
      }  
    $scope.reloadRoute = function() {
      $state.reload();
    };
  })
  