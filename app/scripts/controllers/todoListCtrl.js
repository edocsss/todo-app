'use strict';

angular.module('TodoListApp').controller('TodoListCtrl', ['$scope', '$state', '$ionicModal', '$ionicListDelegate', 'TodoListFactory', 'CONSTANTS',
    function ($scope, $state, $ionicModal, $ionicListDelegate, TodoListFactory, CONSTANTS) {
        $ionicModal.fromTemplateUrl('templates/new-task-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.addNewTaskModal = modal;
        });

        $scope.CONSTANTS = CONSTANTS;
        $scope.newTask = {};
        $scope.todoList = TodoListFactory.getTodoList();
        $scope.showNewTaskModal = function () {
            $scope.addNewTaskModal.show();
        };

        $scope.hideNewTaskModal = function () {
            $scope.addNewTaskModal.hide().then(function success () {
                $scope.newTask = {};
            });
        };

        $scope.getTaskStatusIcon = function () {
            if (this.taskItem.status === CONSTANTS.TASK.STATUS.COMPLETED) {
                return 'ion-checkmark-round';
            } else if (this.taskItem.status === CONSTANTS.TASK.STATUS.NOT_STARTED) {
                return 'ion-android-alarm-clock';
            }
        };

        $scope.addNewTask = function () {
            TodoListFactory.addTask($scope.newTask);
            $scope.hideNewTaskModal();
        };

        // This refers to the ng-repeat instance scope (which is a child of the scope defined in the TodoListCtrl) --> prototype chain
        // I can access this.todoList OR this.todoItem because those two properties are in the parents' scope
        // The ngRepeat directive instantiates a template once per item from a collection. Each template instance gets its own scope,
        // where the given loop variable is set to the current collection item **which is todoItem in this case**, and $index is set to the item index or key.
        $scope.openTaskDetails = function () {

        };

        // "this" consists of the (taskId, taskItem) as defined in the ng-repeat --> accessible through "this"
        $scope.setTaskStatus = function (status) {
            TodoListFactory.setTaskStatus(this.taskId, status);
            $ionicListDelegate.closeOptionButtons();
        };

        $scope.deleteTask = function () {
            TodoListFactory.removeTask(this.taskId);
        };
    }
]);