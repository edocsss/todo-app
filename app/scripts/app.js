'use strict';

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('TodoListApp', [
    'ionic',
    'ion-datetime-picker'
])
.config(function ($stateProvider, $urlRouterProvider) {
    /*
        If we are using a TAB VIEW later, we need an ABSTRACT STATE to render the TAB VIEW

        Inside the TAB VIEW, there should be some <nav-view> directives where the content for each
        tab is rendered

        By using an ABSTRACT STATE, we can have the TAB VIEW as a template and so we do not need
        to re-write the tab styling and all that again and again when we move to another tab

        And when in a particular tab, we are going to change the view, we change the template of that
        particular <nav-view> directive of that particular tab too unless the next view is a child again


        Basically, we can see a template as a hierarchy (nested views) and we can build the state hierarchy
        based on that
    */

    // Currently, the app is NOT USING a TAB, so I am not using a nested / hierarchical state
    $stateProvider
        .state('todo-list', {
            url: '',
            templateUrl: 'templates/todo-list.html',
            controller: 'TodoListCtrl'
        })
        .state('todo-details', {
            url: '/todo/:todoId',
            templateUrl: 'templates/todo-details.html',
            controller: 'TodoDetailsCtrl'
        });

    $urlRouterProvider.otherwise('');
})
.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});