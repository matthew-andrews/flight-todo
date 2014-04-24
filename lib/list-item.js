define(function (require) {
  return flight.component(function() {
    this.after('initialize', function() {
      this.on('.list-item__close-button', 'click', function(event) {
        this.$node.remove();
      });
    });
  });
});
