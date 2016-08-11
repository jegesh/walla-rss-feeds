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
    template: '<btn ng-class="{\'activeFeed\': item.key == selected.key}" class="btn btn-default"><h5 class="pull-left">{{item.feedUrl}}</h5><span ng-click="removeFeed()" class="glyphicon glyphicon-remove pull-right"></span></btn>'
  };
}]);

angular.module('rssAppApp').directive('feedItem', [function() {
  return {   
  	template: '<div class=" panel panel-primary"><h2 class="" >{{item.title}}</h2><p class="">Date: {{item.publishedDate}}</p><p class="" ><small ng-bind-html="item.contentSnippet"></small></p></div>'
  };
}]);