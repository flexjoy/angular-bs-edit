'use strict';

app.controller('Ctrl', function($scope, $q) {
	var data = {
		text: 'This is a sample text',
		select: { id: 3, name: 'London'},
		textarea: 'Lorem ipsum dolor sit amet',
		date: new Date()
	};

	var list = [
		{id: 1, name: 'Moscow'},
		{id: 2, name: 'New-York'},
		{id: 3, name: 'London'},
		{id: 4, name: 'Paris'}
	];
	
	$scope.clear = function () {
		$scope.data.text = '';
		$scope.data.select = '';
		$scope.data.textarea = '';
		$scope.data.date = '';
	};

	$scope.getList = function() {
		console.log('called getList');
		var d = $q.defer();
		setTimeout(function() {
			d.resolve(list)
		}, 100);
		return d.promise;
	};
	
	$scope.fill = function () {
		$scope.data = angular.copy(data);
	};
	
	$scope.fill();
});
