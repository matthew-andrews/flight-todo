define(function (require) {
  var defineComponent = require('bower_components/flight/lib/component');

  return defineComponent(function() {
    this.after('initialize', function() {
      this.on('form', 'submit', function(event) {
        event.preventDefault();
        var field = this.$node.find('.strawberry__input');
        this.trigger(document, 'ui-add-item', { value: field.val() });
        field.val('');
      });
    });
  });
});
