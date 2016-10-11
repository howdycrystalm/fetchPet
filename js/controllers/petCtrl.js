angular.module('app')
  .controller('petCtrl', function($scope, $location, $anchorScroll, $state, petService) {
    
      petService.getRandom().then(function(response) {
        console.log(response)
          $scope.randomPets = response.data; 
  
      });
      
      $(function() {
      // Select link by id and add click event
      $('#anchor1').click(function() {

        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $(".tint").offset().top }, // Tell it to scroll to the top #bottom
          1000 // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
      });
    });
      $(function() {
      // Select link by id and add click event
      $('#anchor2').click(function() {

        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $(".profile-container").offset().top }, // Tell it to scroll to the top #bottom
          1000 // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
      });
    });
      
      $scope.scrollTo = function(scrollLocation){
        $location.hash(scrollLocation);
        $anchorScroll();
      }  
    $scope.reloadRoute = function() {
      $state.reload();
    };
  })
  