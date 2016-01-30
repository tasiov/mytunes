// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    // console.log('SongModel on play .. THIS', this);
    this.trigger('play', this);
  },

  queue: function() {
    console.log('SongModel on queue .. THIS', this);
    this.trigger('queue', this);
  }

});
