

var allContacts = new ContactGroup();

allContacts.fetch().done (function() {
  allContacts.each (function(x) {
    addContactToHTML(x.attributes);
  });
});

var addContact = function(a) {

  a.preventDefault();

  var contactName = $('#first-name').val();
      contactName += $('#last-name').val();

  var contactPhone = $('#area-code').val();
      contactPhone += "-" + $('#first-digits').val();
      contactPhone += "-" + $('#last-digits').val();

  var contactEmail = $('#contact-email').val();

  var c = new Contact({

    name: contactName,
    phone: contactPhone,
    email: contactEmail

  });

  allContacts.add(c).save().success( function(data) {
    addContactToHTML(data);
  });

  this.reset();

};

var addContactToHTML = function (contact) {
  var contactHTML = "<li id='" + contact._id + "'>";
      contactHTML += contact.name + ", ";
      contactHTML += contact.phone + ", ";
      contactHTML += contact.email;
      contactHTML += "</li>";

  $('#contacts').prepend(contactHTML);
};

$('#add-contact').on('submit', addContact);
