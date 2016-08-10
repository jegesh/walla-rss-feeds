/**
 * directives for the rss app
 */

'use strict';

angular.module('rssAppApp').directive('rssItem', ['$location', function($location) {
  return {
  	scope: true,
  	link: function(scope){
  		scope.removeFeed = function removeFeed(){
  			scope.feeds.splice(scope.$index, 1);
  			$location.search(scope.item.key, null);
  		};
  	},
    template: '<div class="btn btn-default rss-item"><h5 class="col-lg-10 col-med-9">{{item.feedUrl}}</h5><span ng-click="removeFeed()" class="glyphicon glyphicon-remove col-md-3 col-lg-2"></span></div>'
  };
}]);

angular.module('rssAppApp').directive('feedItem', [function() {
  return {   
  	template: '<div class=" panel panel-primary"><h2 class="" >{{item.title}}</h2><p class="">Date: {{item.publishedDate}}</p><p class=""><small>{{item.contentSnippet}}</small></p></div>'
  };
}]);