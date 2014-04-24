define(function (require) {
  var defineComponent = require('bower_components/flight/lib/component');

  return defineComponent(function() {
    this.after('initialize', function() {
      this.on('.list-item__close-button', 'click', function(event) {
        this.$node.remove();
      });
    });
  });
});
