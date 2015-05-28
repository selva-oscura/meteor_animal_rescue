//helpers
Template.animalCreate.helpers({
	useDifferentAddress: function(){
		var check=Session.get("useDifferentAddress");
		if(!check){
			check=false;
		}
		return check;
	}
})

// events
Template.animalCreate.events({
	'submit form': function(e){
		e.preventDefault();
		var animal = {
			name:$(e.target).find('[name=name]').val(),
			type:$(e.target).find('[name=type]:checked').val(),
			sex:$(e.target).find('[name=sex]:checked').val(),
			age:$(e.target).find('[name=age]').val(),
			size:$(e.target).find('[name=size]').val(),
			breed:$(e.target).find('[name=breed]').val(),
			color:$(e.target).find('[name=color]').val(),
			personality:$(e.target).find('[name=personality]').val(),
			kid_friendly:$(e.target).find('[name=kid_friendly]').val(),
			health_issues:$(e.target).find('[name=health_issues]').val(),
			comments:$(e.target).find('[name=comments]').val(),
			img_path:$(e.target).find('[name=img_path]').val()
		}
		var userAddressPresent = $(e.target).find('[name=userAddressPresent]').val();
		if(userAddressPresent == "true"){
			Meteor.call('animalCreateExistingAddress', animal, function(error, result){
				if(error){
					console.log(error.reason);
					return throwError(error.reason);
				}
				Router.go('animalProfile', {_id: result._id});
			});
		}else{
			var address = {
				street_address:$(e.target).find('[name=street_address]').val(),
				city:$(e.target).find('[name=city]').val(),
				state:$(e.target).find('[name=locale]').val(),
				postal_code:$(e.target).find('[name=postal_code]').val(),
				country:$(e.target).find('[name=country]').val()
			}			
			if((address.street_address==="")||(address.city==="")||(address.state==="")){
				if(confirm('You are submitting an incomplete address.  Complete address information helps us more accurately determine distance between offerers of animals for adoption and people seeking animal companions.  Are you sure you want to submit an incomplete address?')){
					Meteor.call('animalCreateNewAddress', animal, address, function(error, result){
						if(error){
							console.log(error.reason);
							return throwError(error.reason);
						}
						Router.go('animalProfile', {_id: result._id});
					});
				}
			}else{		
				Meteor.call('animalCreateNewAddress', animal, address, function(error, result){
					if(error){
						console.log(error.reason);
						return throwError(error.reason);
					}
					Router.go('animalProfile', {_id: result._id});
				});
			}
		}
	},
	'change #differentAddress': function(){
		var checked = document.getElementById('differentAddress').checked;
		// console.log(checked);
		Session.set('useDifferentAddress', checked);
	},
	// 'change #range': function(){
	// 	var range = $('input[name=range]').val();
	// 	console.
	// 	Session.set("currentRange", range);
	// }
	'click .cancel': function(){
		window.location.href = "/";
	}
});