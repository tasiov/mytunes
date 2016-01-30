// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'change': function() {
      console.log('change!');
      // this.model.play();
    }
  },

  render: function(){
    // console.log('hi', this.$el.html(this.template(this.model.attributes)));
    return this.$el.html(this.template(this.model.attributes));
  }
});
