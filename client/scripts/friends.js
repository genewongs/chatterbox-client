// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],
  list: new Set(),
  selected: null,
  roomSelected: false,

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  get: function(data) {
    if (Friends.roomSelected === false) {
      for (let i = 0; i < data.length; i++) {
        let message = data[i];
        if (message.username === Friends.selected) {
          Friends._data.push(message);
        }
      }
    } else {
      Rooms.get(Rooms._data);
    }
  },

  addFriend: function (username) {
    //should add friend
    Friends.list.add(username);
    Friends.selected = username;
    Rooms.friendSelected = true;
    Friends.roomSelected = false;
  },

  toggleStatus: function(username) {
    //should display all messages sent by this friend
    MessagesView.render('username', username);
    Rooms.friendSelected = true;
    Friends.roomSelected = false;
  }

};