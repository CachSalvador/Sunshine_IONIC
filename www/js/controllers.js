angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {  despues de 7 APPID=143ffc47ae963adf95c8e2a4ccf660e3&units=metrics&
  //});
  $scope.items=[];
//  $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=Mexico&cnt=7&lang=es&units=metric").then(function(response)
  $http.get("http://api.openweathermap.org/data/2.5/forecast?id=3531673&lang=sp&units=metric").then(function(response){
  $scope.items = response.data.list;
  console.log(response);
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
