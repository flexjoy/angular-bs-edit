'use strict';

var app = angular.module('test-app', ['bs-edit']);

app.controller('Ctrl', function($scope, $q) {
	var data = {
		text: 'This is a sample text',
		select: { id: 3, name: 'London'},
		textarea: 'Lorem ipsum dolor sit amet',
		date: 1465592400000,
		checkbox: true
	};

	var list = [
		{id: 1, name: 'Moscow'},
		{id: 2, name: 'New-York'},
		{id: 3, name: 'London'},
		{id: 4, name: 'Paris'}
	];

	$scope.invalid = function() {
		$scope.testForm.text.$invalid = true;
		$scope.testForm.select.$invalid = true;
		$scope.testForm.textarea.$invalid = true;
		$scope.testForm.date.$invalid = true;
		$scope.testForm.checkbox.$invalid = true;
	};

	$scope.valid = function() {
		$scope.testForm.text.$invalid = false;
		$scope.testForm.select.$invalid = false;
		$scope.testForm.textarea.$invalid = false;
		$scope.testForm.date.$invalid = false;
		$scope.testForm.checkbox.$invalid = false;
	};
	
	$scope.clear = function () {
		$scope.data.text = '';
		$scope.data.select = '';
		$scope.data.textarea = '';
		$scope.data.date = '';
		$scope.data.checkbox = null;
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
