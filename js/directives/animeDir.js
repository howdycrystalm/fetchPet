angular.module('app')
  .directive('animeDir', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        element.on("click", function(){
          $(".photo-container").animate({left: +="500"}, 2000);
        })
      }
    }
  })