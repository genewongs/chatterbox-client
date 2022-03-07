// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),
  count: 0,
  selected: null,
  friendSelected: false,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  get: function(data) {
    if (Rooms.friendSelected === false) {
      for (let i = 0; i < data.length; i++) {
        let message = data[i];
        if (message.roomname) {
          Rooms._data.add(message.roomname);
        }
      }
      if (Rooms._data.size > Rooms.count) {
        Rooms.count = Rooms._data.size;
        RoomsView.render();
      }
    } else {
      Friends.get(Friends._data);
    }
  },

  add: function(roomname) {
    //create an option, with value = roomname
    // console.log(selected);
    Rooms._data.add(roomname);
    Rooms.selectRoom(roomname);
    Friends.roomSelected = true;
    Rooms.friendSelected = false;
    if (Rooms._data.size > Rooms.count) {
      Rooms.count = Rooms._data.size;
      RoomsView.render();
    }
  },

  selectRoom: function(roomname) {
    Rooms.selected = roomname;
    Friends.roomSelected = true;
    Rooms.friendSelected = false;
    MessagesView.render('roomname', roomname);
    Messages.roomSelected = true;
  },

};