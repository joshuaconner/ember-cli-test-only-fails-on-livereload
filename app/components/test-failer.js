import Ember from 'ember';

export default Ember.Component.extend({
  setComponentRefOnEventManager: function () {
      this.get('eventManager').set('component', this);
  }.on('init'),

  eventManager: Ember.Object.create({
      focusOut: function (/*jqEvt, view*/) {
          this.get('component').sendAction('action');
      }
  })
});
