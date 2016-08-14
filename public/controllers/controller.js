var myApp = angular.module('contactListApp', []);


myApp.controller('AppCtrl', function rootController($scope,$http) {
	var  refresh = function(){
	$http.get('/contactList').success(function(response){
		console.log(response);
		$scope.contactList = response;
		$scope.contact = '';

	});
};
	
	
refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactList',$scope.contact).success(function(response){
			console.log(response);
			$scope.contactList =response;
			refresh();
		});
	};
	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactList/'+id).success(function(resp){
			refresh();	
		});
		
	};

	$scope.edit = function(id){
		console.log(id);

		$http.get('/contactList/'+id).success(function(response){
			$scope.contact = response;
		});
		
	};

	$scope.update = function(){

		$http.put('/contactList/'+$scope.contact._id,$scope.contact ).success(function(response){
			$scope.contact = '';
			refresh();
		});
		
	};

	$scope.deselect = function(){
		$scope.contact = '';
		
	};

	//
});