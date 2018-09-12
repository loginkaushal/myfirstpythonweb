(function(angular) {
  'use strict';
var app = angular.module('myApp',[]);
app.controller('myCtrl',[ '$scope', '$http', function($scope, $http){
 console.log("in controller");
	$scope.submitMyForm=function(){
	 
	 console.log("in submit function");
  var data = $scope.data;
  console.log(data);
  var res = $http.post("https://nxkglphqna.execute-api.us-east-1.amazonaws.com/test", data);
  
		res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});		
 }

}]);
})(window.angular);