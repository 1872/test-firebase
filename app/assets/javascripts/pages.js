/* global angular, Firebase */
(function() {
  angular.module('app').controller('pagesCtrl', function($scope, $timeout) {
    var myDataRef = new Firebase('https://incandescent-fire-3510.firebaseio.com/');
    
    $scope.setup = function() {
      $scope.messages = [];
      myDataRef.on('child_added', function(snapshot) {
        $timeout(function() {
          $scope.messages.push(snapshot.val());
        });
      });
    };

    $scope.createMessage = function(inputText) {
      myDataRef.push({name: "Peter Jang", text: inputText});
      $scope.newMessageText = '';
    };

    window.$scope = $scope;
  });
})();
