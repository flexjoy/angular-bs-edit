/**
 * Angular directives for inline editing v0.0.1 (https://github.com/flexjoy/angular-bs-edit)
 *
 * Copyright 2016 Sergey Cherepanov
 * Licensed under the MIT license (https://opensource.org/licenses/mit-license.php)
 */

'use strict';

var app = angular.module('bs-edit', []);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// bseText directive
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.directive('bseText', function() {
	return {
		restrict: 'A',
		scope: {
			value: '=bseText',
			empty: '=?'
		},
		template: '<input ng-model="newValue" class="form-control"><span class="form-control" ng-class="{\'bse-empty\' : !value}" ng-bind="value || empty"></span>',
		link: function(scope, element) {

			scope.empty = scope.empty ? scope.empty : 'empty';
			element.addClass('edit-in-place');
			var inputElement = angular.element(element.children()[0]);

			element.bind('click', function () {
				scope.newValue = angular.copy(scope.value);
				scope.$apply();
				element.addClass('active');
				inputElement[0].focus();
			});

			inputElement.bind('blur', function() {
				scope.value = scope.newValue;
				scope.$apply();
				element.removeClass('active');
			});

			inputElement.bind('keydown', function (event) {
				if(event.which === 13) {
					this.blur();
					event.preventDefault();
				}

				if(event.which === 27) {
					scope.newValue = scope.value;
					this.blur();
					event.preventDefault();
				}
			});
		}
	};
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// bseSelect directive
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.directive('bseSelect', function() {
	var showDropdown = function (element) {
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		setTimeout(function(){
			element.dispatchEvent(event);
		}, 1);
	};
	return {
		restrict: 'A',
		scope: {
			value: '=bseSelect',
			onshow: '&',
			empty: '=?'
		},
		template: '<select ng-model="value" class="form-control" ng-options="v.name for v in values track by v.id"></select><span class="form-control" ng-class="{\'bse-empty\' : !value}" ng-bind="value.name || empty"></span>',
		link: function(scope, element) {
			
			scope.empty = scope.empty ? scope.empty : 'empty';
			element.addClass('edit-in-place');
			var inputElement = angular.element(element.children()[0]);
			var spanElement = angular.element( element.children()[1]);
			
			spanElement.bind('click', function () {
				scope.onshow().then(
					function (data){
						scope.values = data;
						element.addClass('active');
						inputElement[0].focus();
						showDropdown(inputElement[0]);
					}
				);
			});
			
			inputElement.bind('blur', function() {
				scope.$apply();
				element.removeClass('active');
			});
			
			inputElement.bind('change', function(event) {
				this.blur();
				event.preventDefault();
			});
			
			inputElement.bind('keydown', function (event) {
				if(event.which === 27) {
					this.blur();
					event.preventDefault();
				}
			});
		}
	};
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// bseTextarea directive
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.directive('bseTextarea', function() {
	return {
		restrict: 'A',
		scope: {
			value: '=bseTextarea',
			empty: '=?'
		},
		template: '<textarea ng-model="newValue" class="form-control"></textarea><pre ng-class="{\'bse-empty\' : !value}" ng-bind="value || empty"></pre>',
		link: function(scope, element) {

			scope.empty = scope.empty ? scope.empty : 'empty';
			element.addClass('edit-in-place');
			var inputElement = angular.element( element.children()[0]);
			var preElement = angular.element( element.children()[1]);

			preElement.bind('click', function () {
				inputElement[0].style.height = element[0].offsetHeight + 'px';
				scope.newValue = angular.copy(scope.value);
				scope.$apply();
				element.addClass('active');
				inputElement[0].focus();
			});

			inputElement.bind('blur', function() {
				scope.value = scope.newValue;
				scope.$apply();
				element.removeClass('active');
			});

			inputElement.bind('keydown', function (event) {
				if(event.which === 13) {
					var h = inputElement[0].offsetHeight + 20;
					inputElement[0].style.height = h + 'px';
				}

				if(event.which === 27) {
					scope.newValue = scope.value;
					this.blur();
					event.preventDefault();
				}
			});
		}
	};
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// bseDate directive
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.directive('bseDate', function() {
	return {
		restrict: 'A',
		scope: {
			value: '=bseDate',
			empty: '=?'
		},
		template: '<input class="form-control datepicker" readonly><span class="form-control" ng-class="{\'bse-empty\' : !value}">{{(value | date: "dd MMMM yyyy") || empty}}</span>',
		
		link: function(scope, element) {
			
			scope.empty = scope.empty ? scope.empty : 'empty';
			element.addClass('edit-in-place');
			var inputElement = angular.element( element.children()[0]);

			inputElement.datepicker({
				format: "dd MM yyyy",
				orientation: "bottom auto",
				todayHighlight: true,
				autoclose: true,
				clearBtn: true
			});

			inputElement.on('changeDate', function(res) {
				scope.value = res.date;
				scope.$apply();
			});
			
			element.bind('click', function () {
				inputElement.datepicker('setDate', scope.value);
				element.addClass( 'active' );
				inputElement[0].focus();
			});
			
			inputElement.bind('hide', function() {
				element.removeClass( 'active' );
			});
		}
	};
});
