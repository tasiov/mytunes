// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  events: {
     'change': function() {
      console.log('changing');
      if (this.collection.length === 1) {
        this.model.play();
      }
    }
  },

  render: function() {
    console.log('RENDERING!!!!!!', this, this.collection);
    // this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
