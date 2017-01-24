angular.module('app')
    .service('petService', function($http) {

      var baseUrl = "http://api.petfinder.com/pet.getRandom?key=c070f97673649ee094e65de6e57d08a4&format=json&output=basic";

      this.getRandom = function() {
        return $http({
          method: 'GET',
          url: baseUrl
        })
      }


    })

// angular.module('app')
//     .service('petService', function($http) {
//
//       var baseUrl = $http.jsonp "http://api.petfinder.com/pet.getRandom?key=c070f97673649ee094e65de6e57d08a4&callback=JSON_CALL";
//
//
//       this.getRandom = function() {
//         return $http({
//           method: 'GET',
//           url: baseUrl
//         })
//       }
//
//
//     })
