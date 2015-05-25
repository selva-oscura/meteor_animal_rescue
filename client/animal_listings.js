//helpers
Template.animalListings.helpers({
	myAnimalListings: function(){
		var user=Meteor.user();
		if(user){
			return myListings=Animals.find({offererId: user._id});
		}		
	}
});

// events
Template.animalListings.events({
	'click .delete': function(){
		var targetAnimal = this;
		console.log('detected delete request for',targetAnimal);
		if(confirm('Remove '+targetAnimal.name+' from your listings?')){
			console.log('removal confirmed by user');
			Meteor.call('animalDelete', targetAnimal._id, function(error, result){
				if(error){
					console.log(error.reason);
					return throwError(error.reason);
				}
			});
		}
	}
});
