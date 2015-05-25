if (Meteor.isClient) {
  Meteor.startup(function() {
    // console.log("Meteor startup");
    Session.setDefault('currentFilter', {});
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}