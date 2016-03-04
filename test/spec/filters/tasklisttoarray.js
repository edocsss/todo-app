'use strict';

describe('Filter: TaskListToArray', function () {

  // load the filter's module
  beforeEach(module('todoAppApp'));

  // initialize a new instance of the filter before each test
  var TaskListToArray;
  beforeEach(inject(function ($filter) {
    TaskListToArray = $filter('TaskListToArray');
  }));

  it('should return the input prefixed with "TaskListToArray filter:"', function () {
    var text = 'angularjs';
    expect(TaskListToArray(text)).toBe('TaskListToArray filter: ' + text);
  });

});
