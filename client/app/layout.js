Template.header.helpers({
 	activeRouteClass: function(/* route names */) {
		var args = Array.prototype.slice.call(arguments, 0);
		args.pop();
		var active = _.any(args, function(name) {
			return Router.current() && Router.current().route.getName() === name
		});
		return active && 'active';
  	}
});

// 'showNotice' determines if the banner at the top of the site stating that this app is a protoype shows or not
Meteor.startup(function(){
  Session.setDefault('showNotice', true);
});

Template.prototypeNotice.helpers({
  showNotice: function(){
    return Session.equals('showNotice', true);
  }
});

Template.prototypeNotice.events({
  'click .removeNotice': function(){
    Session.set('showNotice', false);
    console.log("clicked removeNotice!");
  }
});
