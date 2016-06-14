'use strict';

app.controller('Ctrl', function($scope) {
	var data = {
		text: 'This is a sample text'
	};
	
	$scope.clear = function () {
		$scope.data.text = '';
	};
	
	$scope.fill = function () {
		$scope.data = angular.copy(data);
	};
	
	$scope.fill();
});
