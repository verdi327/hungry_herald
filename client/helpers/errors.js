// client side only bc of the null
Errors = new Meteor.Collection(null);

throwError = function(message) {
  Errors.insert({message: message})
}
