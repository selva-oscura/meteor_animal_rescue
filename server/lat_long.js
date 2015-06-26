Meteor.methods({
	fetchLatLong: function(locale, country){
		// pull latitude/longitude data
		var query = locale+" "+country;
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);

		// Send results back as coordinates=[longitude,latitude]
		var coordinates=[];
		if(geoResult.length===1){
			coordinates.push(geoResult[0].longitude);
			coordinates.push(geoResult[0].latitude);
			return coordinates;
		}else{
			var error = "error";
			return error;
		}
	},
	putLatLongInUser: function(query, id, addressAttributes){
		// pull latitude/longitude data
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);

		// update user profile address information to include coordinates
		var data={};
		data.address = _.extend(addressAttributes,{
			coordinates: [geoResult[0].longitude, geoResult[0].latitude]
		});
		var updated = Meteor.users.update(
			{_id: id},
			{$set: {profile: data, updated_at: new Date()}}
		);
		if(!updated){
			throw new Meteor.Error(500, "Erk....  Failure to update?.")
		}
	},
	putLatLongInAnimal: function(query, animalId, addressAttributes){
		// pull latitude/longitude data
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);

		// update animal address information to include coordinates
		var data={};
		data = _.extend(addressAttributes,{
			coordinates: [geoResult[0].longitude, geoResult[0].latitude]
		});
		var updated = Animals.update(
			{_id: animalId},
			{$set: {address: data, updated_at: new Date()}}
		);
		if(!updated){
			throw new Meteor.Error(500, "Erk....  Failure to update?.")
		}else{
			return;
		}
	},
	getDistance: function(userCoordinates, animals){
		var animalDistances = [];
		for(animal in animals){		
			currentAnimal=Animals.findOne(animals[animal]._id);
			if(currentAnimal.address.coordinates){
				var animalCoordinates = currentAnimal.address.coordinates;
				Meteor.call('calcHaversine',userCoordinates, animalCoordinates, function(error, result){
					if(result>=0){
						getDistanceResult = {
							animalId: currentAnimal._id,
							name: currentAnimal.name,
							distance: result.toFixed(1)
						}
						animalDistances.push(getDistanceResult);
					}else{
						throw new Meteor.Error(500, "Error getting distance between locations.");						
					}
				});
			}else{
				throw new Meteor.Error(500, "Error finding the Animal");
			}
		}
		return animalDistances;
	},
	calcHaversine: function(userCoordinates, animalCoordinates){
		//NOTE coordinates saved as [longitude, latitude]
		Number.prototype.toRad = function() {
		   return this * Math.PI / 180;
		}
		var R = 3958.75; //miles
		var latDiff = userCoordinates[1] - animalCoordinates[1];
		var dLat = latDiff.toRad();
		var longDiff = userCoordinates[0] - animalCoordinates[0];
		var dLon = longDiff.toRad();
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(userCoordinates[1].toRad()) * Math.cos(animalCoordinates[1].toRad()) * Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var output = R * c;
		if(output>=0){
			return output;
		}else{
			throw new Meteor.Error(500, "Error calculating distance between locations.");
		}
	}
});