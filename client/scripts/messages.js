// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],
  roomSelected: false,

  get: function(data) {
    if (Messages.roomSelected === false) {
      //code below gives a default value to rooms after next get cycle.
      if (Rooms._data.size !== 0) {
        //first value in the room set = rooms.selected, which evaluates to true.
        Rooms.selected = Rooms._data.values().next().value;
        Messages.roomSelected = true;
        Friends.roomSelected = true;
        Messages.get(data);
      }

      Messages._data = [];

      for (let i = 0; i < data.length; i++) {
        Messages._data.push(data[i]);
      }

      MessagesView.render();
    }

    //filter by room
    if (Messages.roomSelected) {
      Messages._data = [];
      data.forEach(message => {
        if (message.roomname === Rooms.selected) {
          Messages._data.push(message);
        }
      });
      MessagesView.render();
    }
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.


  //methods should be put here to interact with this data

};