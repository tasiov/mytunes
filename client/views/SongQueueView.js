// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    console.log('collection!',this, this.$el);
    this.$el.children().detach();

    //this.$el.html('<th>Song Queue</th>').append('<div></div>');
    // console.log('after', this.$el);
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    //return this.$el;
  }

});
