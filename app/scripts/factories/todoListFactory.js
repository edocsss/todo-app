'use strict';

angular.module('TodoListApp').factory('TodoListFactory', ['CONSTANTS',
    function (CONSTANTS) {
        var taskId = 2;
        var todoList = {
            0: {
                title: 'Task 1',
                date: '23 January 2016',
                time: '23:59',
                status: CONSTANTS.TASK.STATUS.NOT_STARTED
            },

            1: {
                title: 'Asd 2',
                date: '25 January 2016',
                time: '22:00',
                status: CONSTANTS.TASK.STATUS.NOT_STARTED
            }
        };

        return {
            getTodoList: function () {
                return todoList;
            },

            getTaskByTaskId: function (taskId) {
                return todoList[taskId];
            },

            addTask: function (task) {
                todoList[taskId++] = {
                    title: task.title,
                    date: task.date,
                    time: task.time,
                    description: task.description,
                    status: CONSTANTS.TASK.STATUS.NOT_STARTED
                };
            },

            removeTask: function (taskId) {
                delete todoList[taskId];
            },

            setTaskStatus: function (taskId, status) {
                todoList[taskId].status = status;
            }
        };
    }
]);