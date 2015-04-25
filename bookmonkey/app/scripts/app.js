var bmApp = angular.module('bmApp', ['ngRoute']);

bmApp.config(function ($routeProvider){
	$routeProvider
		.when('/books/:isbn', {
			templateUrl: 'templates/book_details.html',
			controller: 'BookDetailsCtrl'
		})
		.when('/books', {
			templateUrl: 'templates/book_list.html',
			controller: 'BookListCtrl'
		})
		.when('/admin/books', {
			templateUrl: 'templates/book_list.html',
			controller: 'AdminBookListCtrl'
		})
		.when('/admin/books/new', {
			templateUrl: 'templates/admin/book_form.html',
			controller: 'AdminNewBookCtrl'
		})
		.otherwise({
			redirectTo: '/books'
		});
});