// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

//transform data into HTML

var MessagesView = {

  $chats: $('#chats'),
  $users: $('.username'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(property, targetProperty) {
    // TODO: Render _all_ the messages.
    //{username: alskdjf, text: laskdfjs, room: kajsdfks}
    property = property || undefined;
    var messages = Messages._data;

    MessagesView.$chats.html('');

    //check if roomname
    if (property) {
      var filtered = messages.filter(current => {
        return current[property] === targetProperty;
      });
      filtered.forEach( message => {
        MessagesView.renderMessage(message);
      });
    } else {
      messages.forEach(message => {
        MessagesView.renderMessage(message);
      });
    }

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //validation for message + username

    let $mainDiv = $('<div class="chat"></div>');
    let $usernameDiv = $('<a href="#"><div class="username"></div></a>');
    $usernameDiv.text(message.username);
    $usernameDiv.on('click', MessagesView.handleClick);
    let $messageDiv = $('<div class="message"></div>');

    $messageDiv.text(message.text);

    $mainDiv.append($usernameDiv);
    $mainDiv.append($messageDiv);

    MessagesView.$chats.append($mainDiv);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    let username = event.target.text;
    Friends.addFriend(username);
    Friends.toggleStatus(username);
  },

};





//set a var called message = messageview.render
//chats.prepend
//.prepend, .append
// let temp = MessageView.render;
// temp({username: 'test'});
// temp({message: 'test test test'});
// $chats.prepend(temp);