import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('test-failer', 'TestFailerComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('trigger external action when its input is blurred', function() {
  expect(1);

  // setup
  var component = this.subject();
  var $component = this.append();
  var targetObject = {
    action: function(){
      // verify
      ok(true, 'Action was called!');
    }
  };
  component.set('action', 'action');
  component.set('targetObject', targetObject);

  // exercise
  var $input = $component.find('input');
  Ember.run(function () {
    $input.focus();
  });
  Ember.run(function () {
    $input.blur();
  });
});
