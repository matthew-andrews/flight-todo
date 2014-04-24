define(function (require) {
  var defineComponent = require('bower_components/flight/lib/component');
  var listItem = require('lib/list-item');

  return defineComponent(function() {
    this.after('initialize', function() {
      this.on(document, 'ui-add-item', function(event, payload) {
        var node = jQuery('<div class="list-item"><input class="list-item__checkbox" type="checkbox">'+payload.value+'<div class="list-item__close-button">×</div></div>');
        this.$node.append(node);
        listItem.attachTo(node);
      });
    });
  });
});