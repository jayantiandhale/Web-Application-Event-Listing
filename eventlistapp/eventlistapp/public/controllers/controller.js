var myApp=angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log("hello world from controller");
	$scope.addNew=false;

	$scope.addRemove=false;
	$scope.addUpdate=false;

	var refresh=function(){
		$http.get('/eventlist').success(function(response){
			console.log("I got requested data");
			$scope.eventlist=response;
			$scope.event='';
			$scope.addNew=false;
			//$scope.addRemove=true;
			//$scope.addUpdate=true;
		});
	};	
	refresh();

	$scope.showAddNew=function(){
			$scope.addNew=true;
			$scope.addUpdate=false;
			$scope.addRemove=true;
			//refresh();
	};
	$scope.isNew=function(){
		console.log("is new value is "+ $scope.isNew);
		return $scope.addNew;
	};
	$scope.addEvent=function(){
		
		console.log($scope.event);

		$http.post('/eventlist',$scope.event).success(function(response){
			console.log(response);
			
			refresh();
		})
	};
	$scope.remove=function(id){
		console.log(id);
		$http.delete('/eventlist/'+ id).success(function(response){
			refresh();
		})

	};
	$scope.edit=function(id){
		console.log(id);
		$scope.addNew=true;
		$scope.addRemove = false;
		$scope.addUpdate=true;
		$http.get('/eventlist/'+id).success(function(response){
			$scope.event=response;
			//refresh();
		})
	};
	$scope.update=function(){
		console.log($scope.event._id);
		$http.put('/eventlist/'+$scope.event._id,$scope.event).success(function(response){
			refresh();
		})
	};
	$scope.deselect=function(){
		$scope.event='';
	}
//	$scope.eventlist=eventlist;
}]);
