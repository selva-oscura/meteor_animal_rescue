Animals = new Mongo.Collection('animals');
// AnimalAddresses = new Meteor.Collection('animaladdresses');
Meteor.methods({
	animalCreateNewAddress: function(animalAttributes, addressAttributes){
		var now = new Date().getTime();
		var user = Meteor.user();
		// ensure user is logged in
		if(!user){
			throw new Meteor.Error(401, "You need to log in to offer, edit, or remove an animal.")
		}
		// ensure all fields are filled out
		if(!animalAttributes.name){
			throw new Meteor.Error(422, "Please fill in the animal's name.");
		}
		if(!animalAttributes.type){
			throw new Meteor.Error(422, "Please fill in the animal's type.");
		}
		if(!animalAttributes.sex){
			throw new Meteor.Error(422, "Please fill in the animal's sex. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.age){
			throw new Meteor.Error(422, "Please fill in the animal's age. (Even an estimate helps people find the right animal for them, but there is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.size){
			throw new Meteor.Error(422, "Please fill in the animal's size. (Even a rough estimate helps people find the right animal for them, but there is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.breed){
			throw new Meteor.Error(422, "Please fill in the animal's breed. (Even a guess helps people find the right animal for them.)");
		}
		if(!animalAttributes.color){
			throw new Meteor.Error(422, "Please fill in the animal's coloring. (Even a rough generalization helps people find the right animal for them.)");
		}
		if(!animalAttributes.personality){
			throw new Meteor.Error(422, "Please fill in the animal's personality. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.kid_friendly){
			throw new Meteor.Error(422, "Please specify whether the animal is 'kid-friendly'. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.health_issues){
			throw new Meteor.Error(422, "Please specify whether the animal has health issues / special needs. (There is a 'don't know' option if you are unsure, and you can write more about this in comments.)");
		}
		if(!addressAttributes.postal_code){
			throw new Meteor.Error(422, "Please fill in your postal code.  This field is required.)");
		}
		if(!addressAttributes.country){
			throw new Meteor.Error(422, "Please specify your country.  This field is required.)");
		}
		var animal = _.extend(animalAttributes,{
			offererId: user._id,
			offererEmail: user.emails[0].address,
			address: addressAttributes,
			created_at: new Date()
		});
		var animalId = Animals.insert(animal);
		// console.log('returning', animalId);
		if(animalId){
			var arrayForCoordinates = [];
			for(attribute in addressAttributes){
				if(addressAttributes[attribute].length>0){
					arrayForCoordinates.push(addressAttributes[attribute]);
				}
			}
			var query=arrayForCoordinates.join(" ");
			// pass query and data for updating address to putLatLongInAnimal method on server
			Meteor.call('putLatLongInAnimal', query, animalId, addressAttributes, function(error, results){
				if(error){
					console.log('error',error);
					return throwError(error);
				}
			});
			return {
				_id: animalId
			};
		}else{
			throw new Meteor.Error(500, "Erk....  Database down and failed to create an entry for your animal.")
		}
	},
	animalCreateExistingAddress: function(animalAttributes){
		var now = new Date().getTime();
		var user = Meteor.user();
		// ensure user is logged in
		if(!user){
			throw new Meteor.Error(401, "You need to log in to offer, edit, or remove an animal.")
		}
		// ensure all fields are filled out
		if(!animalAttributes.name){
			throw new Meteor.Error(422, "Please fill in the animal's name.");
		}
		if(!animalAttributes.type){
			throw new Meteor.Error(422, "Please fill in the animal's type.");
		}
		if(!animalAttributes.sex){
			throw new Meteor.Error(422, "Please fill in the animal's sex. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.age){
			throw new Meteor.Error(422, "Please fill in the animal's age. (Even an estimate helps people find the right animal for them, but there is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.size){
			throw new Meteor.Error(422, "Please fill in the animal's size. (Even a rough estimate helps people find the right animal for them, but there is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.breed){
			throw new Meteor.Error(422, "Please fill in the animal's breed. (Even a guess helps people find the right animal for them.)");
		}
		if(!animalAttributes.color){
			throw new Meteor.Error(422, "Please fill in the animal's coloring. (Even a rough generalization helps people find the right animal for them.)");
		}
		if(!animalAttributes.personality){
			throw new Meteor.Error(422, "Please fill in the animal's personality. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.kid_friendly){
			throw new Meteor.Error(422, "Please specify whether the animal is 'kid-friendly'. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.health_issues){
			throw new Meteor.Error(422, "Please specify whether the animal has health issues / special needs. (There is a 'don't know' option if you are unsure, and you can write more about this in comments.)");
		}
		var addressAttributes = Meteor.user().profile.address;
		var animal = _.extend(animalAttributes,{
			offererId: user._id,
			offererEmail: user.emails[0].address,
			address: addressAttributes,
			created_at: new Date()
		});
		// console.log(animal);
		var animalId = Animals.insert(animal);
		if(animalId){
			return {
				_id: animalId
			};
		}else{
			throw new Meteor.Error(500, "Erk....  Database down and failed to create an entry for your animal.")
		}
	},
	animalUpdate: function(targetAnimalId, animalAttributes, addressAttributes){
		var now = new Date().getTime();
		var user = Meteor.user();
		// ensure user is logged in
		if(!user){
			throw new Meteor.Error(401, "You need to log in to offer, edit, or remove an animal.")
		}
		// ensure user is original offerer of animal
		var targetOwnerId = Animals.findOne(targetAnimalId).offererId;
		if(targetOwnerId !== user._id){
			throw new Meteor.Error(401, "You are not authorised to edit or remove this animal.")			
		}
		// ensure all fields are filled out
		if(!animalAttributes.name){
			throw new Meteor.Error(422, "Please fill in the animal's name.");
		}
		if(!animalAttributes.type){
			throw new Meteor.Error(422, "Please fill in the animal's type.");
		}
		if(!animalAttributes.sex){
			throw new Meteor.Error(422, "Please fill in the animal's sex. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.age){
			throw new Meteor.Error(422, "Please fill in the animal's age. (Even an estimate helps people find the right animal for them, but there is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.size){
			throw new Meteor.Error(422, "Please fill in the animal's size. (Even a rough estimate helps people find the right animal for them, but there is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.breed){
			throw new Meteor.Error(422, "Please fill in the animal's breed. (Even a guess helps people find the right animal for them.)");
		}
		if(!animalAttributes.color){
			throw new Meteor.Error(422, "Please fill in the animal's coloring. (Even a rough generalization helps people find the right animal for them.)");
		}
		if(!animalAttributes.personality){
			throw new Meteor.Error(422, "Please fill in the animal's personality. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.kid_friendly){
			throw new Meteor.Error(422, "Please specify whether the animal is 'kid-friendly'. (There is a 'don't know' option if you are unsure.)");
		}
		if(!animalAttributes.health_issues){
			throw new Meteor.Error(422, "Please specify whether the animal has health issues / special needs. (There is a 'don't know' option if you are unsure, and you can write more about this in comments.)");
		}
		// add updated date & time
		var animal = _.extend(animalAttributes,{
			updated_at: new Date()
		});

		//update
		var updated = Animals.update(
			{_id: targetAnimalId},
			{$set: animal}
		);
		if(updated){		
			var arrayForCoordinates = [];
			for(attribute in addressAttributes){
				if(addressAttributes[attribute].length>0){
					arrayForCoordinates.push(addressAttributes[attribute]);
				}
			}
			var query=arrayForCoordinates.join(" ");
			// pass query and data for updating address to putLatLongInAnimal method on server
			Meteor.call('putLatLongInAnimal', query, targetAnimalId, addressAttributes, function(error, results){
				if(error){
					console.log('error',error);
					throw new Meteor.Error(error);
				}
			});
			return {
				_id: targetAnimalId
			};
		}
		throw new Meteor.Error(500, "Update request failed....  erk....")
	},
	animalDelete: function(targetAnimalId){	
		var user = Meteor.user();
		// ensure user is logged in
		if(!user){
			throw new Meteor.Error(401, "You need to log in to offer, edit, or remove an animal.")
		}
		var animal = Animals.findOne(targetAnimalId);
		if(user._id!==animal.offererId){
			throw new Meteor.Error(422, "You were not the original offerer of this animal and are not authorised to remove this animal.");
		}
		var removed = Animals.remove(targetAnimalId);
		if(!removed){
			throw new Meteor.Error(500, "Removal request failed....  erk....")
		}
	}
});