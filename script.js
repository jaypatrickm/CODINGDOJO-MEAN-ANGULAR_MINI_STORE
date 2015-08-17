$(document).ready(function() {

var customersModule = angular.module('myApp', ['ngRoute']);

customersModule.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/orders.html'
	})
	.when('/customers', {
		templateUrl: 'partials/customers.html'
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

customersModule.factory('customerFactory', function()
{
	var customers = [
		{name: 'Michael Choi', created_date: 'April 3rd, 2014'},
		{name: 'John Supsupin', created_date: 'April 3rd, 2014'},
		{name: 'Trey Villafane', created_date: 'April 1st, 2014'},
		{name: 'India Meisner', created_date: 'March 15th 2014'}
	];
	var factory = {};

	factory.getCustomers = function (callback)
	{
		callback(customers);
	}

	return factory;
});

customersModule.controller('customersController', function($scope, customerFactory)
{
	$scope.date = new Date();

	$scope.customers = [];
	customerFactory.getCustomers(function(data)
	{
		$scope.customers = data;
	})

	$scope.addCustomer = function() 
	{
		console.log($scope.customers);
		console.log($scope);
		console.log($scope.newCustomer);
		console.log($scope.date);
		var exists = false;
		for(var i=0; i < $scope.customers.length; i++)
		{
			if ($scope.customers[i].name == $scope.newCustomer.name)
			{
				console.log('name exists in list');
				$('#error').text('Name in use. Please enter different name.');
				exists = true;
			}
		}

		if (exists == false)
		{
			console.log('hello');
			var date = new Date($scope.date);
			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var month = monthNames[date.getMonth()];
			var day = date.getDate();
			var year = date.getFullYear();
			var newDate = month + ' ' + day + ' ' + year;

			$scope.customers.push({name: $scope.newCustomer.name, created_date: newDate});
			$scope.newCustomer = {};
		}

	}

	$scope.removeCustomer = function (customer)
	{
		$scope.customers.splice($scope.customers.indexOf(customer), 1);
	}
})

customersModule.controller('ordersController', function($scope, customerFactory)
{
	$scope.date = new Date();

	$scope.customers = [];
	customerFactory.getCustomers(function(data)
	{
		$scope.customers = data;
	})

})

})