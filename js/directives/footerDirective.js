angular.module('app')
  .directive('footerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './views/footerTmpl.html'
    }
  })