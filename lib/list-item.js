define(function (require) {
  return flight.component(function() {
    this.after('initialize', function() {
      this.$node.on('click', '.list-item__close-button', function(event) {
        this.$node.remove();
      }.bind(this));
    });
  });
});
