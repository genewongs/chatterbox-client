// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    App.fetch();
    setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      data = data.map(obj => {
        var cleanObj = {};
        for (var key in obj) {
          cleanObj[key] = filterXSS(obj[key]);
        }
        return cleanObj;
      });

      console.log(data);


      Messages.get(data);
      Rooms.get(data);
      Friends.get(data);

      //Create in ROOMS and in MESSAGES
      //a method that retreieves the data and renders the messages/room list


      callback();
      // Messages._data = messages;
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
