// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    //iterate over the rooms set
    //for each room
    //call addRoom

    RoomsView.$select.html('');

    var data = Rooms._data;
    data.forEach( roomname => {
      RoomsView.renderRoom(roomname);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $option = $(`<option> ${roomname} </option>`);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var selected = event.target.value;
    if (selected) {
      Rooms.selectRoom(selected);
    }
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomInput = window.prompt('What is your room name?', '');

    if (roomInput) {
      Rooms.add(roomInput);
    }
  }

};
