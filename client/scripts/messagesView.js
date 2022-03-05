// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

//transform data into HTML

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    App.fetch(MessagesView.render);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    var messages = Messages._data;
    console.log(messages);

    for (let message of messages) {
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //validation for message + username

    let $mainDiv = $('<div class="chat"></div>');
    let $usernameDiv = $('<div class="username"></div>');
    $usernameDiv.text(message.username);
    let $messageDiv = $('<div class="message"></div>');

    $messageDiv.text(message.text);

    $mainDiv.append($usernameDiv);
    $mainDiv.append($messageDiv);

    MessagesView.$chats.append($mainDiv);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },

};





//set a var called message = messageview.render
//chats.prepend
//.prepend, .append
// let temp = MessageView.render;
// temp({username: 'test'});
// temp({message: 'test test test'});
// $chats.prepend(temp);