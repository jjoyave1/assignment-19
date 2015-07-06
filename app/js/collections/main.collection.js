;(function(){
  'use strict';

  app.Collections.ContactCollection = Backbone.Collection.extend({

    model: app.Models.Contact,

    url: 'http://tiy-515.herokuapp.com/collections/joyave_contacts',

    comparator: function(item) {
    // return item.get(this.sort_key);
    },

    sortByField: function(fieldName) {
    // this.sort_key = fieldName;
    // this.sort();
    }

  });

}());
