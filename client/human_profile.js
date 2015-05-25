Template.userAddressDisplay.helpers({
	me: function(){
		return Meteor.user();
	}
})

// events
Template.humanProfile.events({
	'submit form': function(e){
		e.preventDefault();
		var address = {
			street_address:$(e.target).find('[name=street_address]').val(),
			city:$(e.target).find('[name=city]').val(),
			state:$(e.target).find('[name=locale]').val(),
			postal_code:$(e.target).find('[name=postal_code]').val(),
			country:$(e.target).find('[name=country]').val()
		}
		console.log(address);
		if((address.street_address==="")||(address.city==="")||(address.state==="")){
			if(confirm('You are submitting an incomplete address.  Complete address information helps us more accurately determine distance between offerers of animals for adoption and people seeking animal companions.  Are you sure you want to submit an incomplete address?')){
				Meteor.call('addressUpdate', address, function(error, result){
					if(error){
						console.log(error.reason);
						return throwError(error.reason);
					}
				});
			}
		}else{		
			Meteor.call('addressUpdate', address, function(error, result){
				if(error){
					console.log(error.reason);
					return throwError(error.reason);
				}
			});
		}
	}
});