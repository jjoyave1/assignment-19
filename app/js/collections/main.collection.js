var ContactGroup = Backbone.Collection.extend({

  model: Contact,

  url: 'http://tiy-515.herokuapp.com/collections/joyave_contacts',

  sort_key: '_id', // default sort key

  comparator: function(item) {
    return item.get(this.sort_key);
  },

  sortByField: function(fieldName) {
    this.sort_key = fieldName;
    this.sort();
  }

});
