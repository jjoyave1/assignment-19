var Contact = Backbone.Model.extend({

  initialize: function() {
    this.logLastName();
  },

  idAttribute: '_id',

  defaults: {
    name: '',
    phone: '',
    email: '',
    lastName: '',
    firstName: ''
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

  logLastName: function() {
    console.log(this.get('lastName'));
  }

});
