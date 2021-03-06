'use strict';

/**
 * @ngdoc function
 * @name rssAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rssAppApp
 */
angular.module('rssAppApp')
  .controller('MainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    
    var _init = function(){
	    $scope.baseUrl = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=';
	    $scope.form = {};
	    $scope.feeds = [];
	    $scope.selected = {};
	    $scope.selectedFeed = '';
	    for(var key in $location.search()){
	    	if(key.indexOf("feed") > -1){
	    		getRssFeed($location.search()[key], key, function(myKey, obj){
	    			console.log(myKey);
	    			obj.key = myKey;
	    			$scope.feeds.push(obj);
	    			if(!$scope.selected.key){
	    				$scope.selected = obj;
	    			}
	    		});
	    	}
	    }
    };
    
    /**
     * function for downloading rss feed
     */
    var getRssFeed = function getRssFeed(feedUrl, key, callback){
    	$http.jsonp($scope.baseUrl + feedUrl + "&callback=JSON_CALLBACK"
			).then(function success(response) {
			// debugger;
			if(response.data.responseData){
				var obj = response.data.responseData.feed;
				callback(key, obj);
				
		   	}else{
		   		swal({
		   			title: "Error!",
		   			text: response.data.responseDetails,
		   			type: "error"
		   		});
		   	}
		  }, function error(response) {
		    console.log(response);
		    swal({
		   			title: "Error!",
		   			text: response.data.responseDetails,
		   			type: "error"
		   		});
			  });
		   };
    
    /**
	 * method for retrieving an rss feed when searched for in form
	 */
    $scope.getFeed = function getFeed(){
		getRssFeed($scope.form.search, function(obj){
			obj['key'] = "feed" + $scope.feeds.length;
		    $scope.feeds.push(obj);
		    $location.search(obj.key, obj.feedUrl);
		});
    };
    
    $scope.selectFeed = function selectFeed(selected){
    	$scope.selected = selected;
    	console.log(selected.key);
    };
    
    _init();
    
  }]);
