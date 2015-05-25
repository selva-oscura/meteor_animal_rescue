// events
Template.animalProfile.events({
	'click .delete': function(){
		var targetAnimal = this;
		console.log('detected delete request for',targetAnimal);
		if(confirm('Remove '+targetAnimal.name+' from your listings?')){
			// console.log('removal confirmed by user');
			Meteor.call('animalDelete', targetAnimal._id, function(error, result){
				if(error){
					// console.log(error.reason);
					return throwError(error.reason);
				}else{
					window.location.href="/my_listings";
				}
			});
		}
	}
});
