var Contact = Backbone.Model.extend({

  initialize: function() {
    this.logName();
  },

  idAttribute: '_id',

  defaults: {
    name: '',
    phone: '',
    email: ''
  },

  logName: function() {
    console.log(this.get('name'));
  },

  logPhone: function() {
    console.log(this.get('phone'));
  },

  logEmail: function() {
    console.log(this.get('email'));
  },

});
