Accounts.onCreateUser(function(options, user){
  user.username = user.emails[0].address.split("@")[0].split(".").join(" ");
  return user;
});

// Validate email, sending a specific error message on failure.
Accounts.validateNewUser(function (user) {
  var domain = user.emails[0].address.split("@")[1]
  if (domain === "livingsocial.com")
    return true;
  throw new Meteor.Error(403, "Email must be from an @livingsocial account");
});