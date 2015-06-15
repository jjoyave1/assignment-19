//input box cursor handler - moves cursor to next input when max length string is entered
$("input").on('input' ,function () {
    if ( $(this).val().length == $(this).attr('maxlength')) {
        jQuery(this).next("input").focus();
    }
});

// Get all contacts from API
var allContacts = new ContactGroup();

allContacts.fetch().done (function() {
  allContacts.each (function(x) {
    addContactToHTML(x.attributes);
  });
});

// contact object builder, sends to API
var addContact = function(a) {

  a.preventDefault();

  var contactName = $('#first-name').val() + " ";
      contactName += $('#last-name').val();

  var contactPhone = $('#area-code').val();
      contactPhone += "-" + $('#first-digits').val();
      contactPhone += "-" + $('#last-digits').val();

  var contactEmail = $('#contact-email').val();

  var contactLastName = $('#last-name').val();

  var contactFirstName = $('#first-name').val();

  var c = new Contact({

    name: contactName,
    phone: contactPhone,
    email: contactEmail,
    lastName: contactLastName,
    firstName: contactFirstName

  });
  console.log(c);
  allContacts.add(c).save().success( function(data) {
    addContactToHTML(data);
  });

  this.reset();

};

// Remove a contact

var url = 'http://tiy-515.herokuapp.com/collections/joyave_contacts';

var deleteContact = function(a) {
  var contactToDelete = $(this).parent().parent(),
      id2Delete = contactToDelete.attr('id');

  $.ajax({
    url: url + "/" + id2Delete,
    type: "DELETE"
  }).done(function() {
    contactToDelete.fadeOut();
  });


};

// Adding contact to page
var addContactToHTML = function (contact) {
  var contactHTML = "<li id='" + contact._id + "'>";
      contactHTML += "<div class='contactWrap'>";
      contactHTML += "<span class ='contactName'>" + contact.name + "</span>";
      contactHTML += "<span class ='contactPhone'>" + "<a href='#'>" + contact.phone + "</a>" + "</span>";
      contactHTML += "<span class ='contactEmail'>" + "<a href='#'>" + contact.email + "</a>" + "</span>";
      contactHTML += "<span id='del-btn' class='hidden delBtn'>&nbsp;&times;&nbsp;</span>";
      contactHTML += "</div>";
      contactHTML += "</li>";

  $('#contacts').prepend(contactHTML);
};

// adding after sort
var addContactSort = function (contact) {
  var contactHTML = "<li id='" + contact._id + "'>";
      contactHTML += "<div class='contactWrap'>";
      contactHTML += "<span class ='contactName'>" + contact.name + "</span>";
      contactHTML += "<span class ='contactPhone'>" + "<a href='#'>" + contact.phone + "</a>" + "</span>";
      contactHTML += "<span class ='contactEmail'>" + "<a href='#'>" + contact.email + "</a>" + "</span>";
      contactHTML += "<span id='del-btn' class='hidden delBtn'>&nbsp;&times;&nbsp;</span>";
      contactHTML += "</div>";
      contactHTML += "</li>";

  $('#contacts').append(contactHTML);
};
// sort handlers
$('#sort-by-last').on('click', function() {

  allContacts.sortByField('lastName');

  $('#contacts').html('');

  allContacts.each (function(x) {
    addContactSort(x.attributes);
  });

});

$('#sort-by-first').on('click', function() {

  allContacts.sortByField('firstName');

  console.log(allContacts);

  $('#contacts').html('');

  allContacts.each (function(x) {
    addContactSort(x.attributes);
  });

});


 // Submit Handler
$('#add-contact').on('submit', addContact);

// Delete Handlers
$('#contacts').on('click', '#del-btn', deleteContact);

$('#delete-radio').on('click', function() {
  radioValues.each(function () {
    if (radioValues.is('checked') === true) {
      console.log(this.parent());
    }
  });
});

// Link handlers
$("#sort-by-last").on('click', function() {
  $(this).addClass('clicked');
  $("#sort-by-first").removeClass('clicked');
});
$("#sort-by-first").on('click', function() {
  $(this).addClass('clicked');
  $("#sort-by-last").removeClass('clicked');
});

// Hovers
$('#contacts').on('mouseenter', 'div', function(){
  $(this).find('span:nth-child(4)').removeClass('hidden');
  $(this).parent().on('mouseleave', function(){
    $(this).find('span:nth-child(4)').addClass('hidden');
  });
});
