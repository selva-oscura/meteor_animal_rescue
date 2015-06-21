Router.configure({
  layoutTemplate: 'layout', 
  loadingTemplate: 'loading'
});

Router.route('/',{
  name: 'animalList',
  waitOn: function(){
    var range = Session.get('range');
    var user_coordinates = Session.get("userCoordinates");
    return Meteor.subscribe('animals', user_coordinates, range);
},
  data: function(){
    return Animals.find();
  }
});


Router.route('/animal/new', function(){
  this.render('animalCreate');
},{
  name: 'animalCreate'
});

Router.route('/my_listings',{
  name: 'myListings',
  waitOn: function(){
    return Meteor.subscribe('myAnimals');
},
  data: function(){
    return Animals.find();
  }
});

Router.route('/my_profile',{
  name: 'humanProfile'
})

Router.route('/my_profile/edit',{
  name: 'humanProfileEdit'
})

Router.route('/animal/:_id',{
  name: 'animalProfile',
  waitOn: function(){
    return Meteor.subscribe('animal', this.params._id);
},
  data: function(){
    return Animals.findOne(this.params._id);
  }
});

Router.route('/animal/:_id/edit', {
  name: 'animalEdit',
  waitOn: function(){
    return Meteor.subscribe('myAnimal', this.params._id);
}, 
  data: function(){
    return Animals.findOne(this.params._id);
  }
})

var requireLogin = function() {
	if (! Meteor.user()) {
		if(Meteor.loggingIn()){
			this.render(this.loadingTemplate);
		}else{
	      	this.render('accessDenied');
		}
	}else {
  	this.next();
	}
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'animalCreate'});
Router.onBeforeAction(requireLogin, {only: 'animalEdit'});