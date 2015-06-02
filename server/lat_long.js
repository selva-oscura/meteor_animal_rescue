Meteor.methods({
	fetchLatLong: function(locale, country){
		// pull latitude/longitude data
		var query = locale+" "+country;
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);
		console.log(locale, country);
		coordinates={};
		if(geoResult.length===1){
			coordinates.latitude = geoResult[0].latitude;
			coordinates.longitude = geoResult[0].longitude;
			console.log(coordinates);
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

		// update user profile address 
		var data={};
		data.address = _.extend(addressAttributes,{
			latitude: geoResult[0].latitude,
			longitude: geoResult[0].longitude
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
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);

		// update user profile address 
		var data={};
		data = _.extend(addressAttributes,{
			latitude: geoResult	[0].latitude,
			longitude: geoResult[0].longitude
		});
		var updated = Animals.update(
			{_id: animalId},
			{$set: {address: data, updated_at: new Date()}}
		);
		console.log('putLatLongInAnimal updated?', updated);
		if(!updated){
			throw new Meteor.Error(500, "Erk....  Failure to update?.")
		}else{
			return;
		}
	},
	getDistance: function(userCoordinates, animal){
		console.log('received userCoordinates',userCoordinates);
		currentAnimal=Animals.findOne(animal._id);
		if(currentAnimal.address.longitude){
			console.log(currentAnimal.name, currentAnimal.address.city);
			var animalCoordinates = {
				longitude: currentAnimal.address.longitude,
				latitude: currentAnimal.address.latitude
			}
			getDistanceResult={};
			calcHaversineOutput=Meteor.call('calcHaversine',userCoordinates, animalCoordinates, function(error, result){
				console.log('result in getDistanceResult', result);
				if(result>=0){
					getDistanceResult = {
						_id: currentAnimal._id,
						name: currentAnimal.name,
						distance: result
					}
					console.log('getDistanceResult',getDistanceResult);
					return getDistanceResult;
				}else{
					throw new Meteor.Error(500, "Error getting distance between locations.");						
				}
			});
			if(calcHaversineOutput>=0){
				console.log('86', calcHaversineOutput);
				return calcHaversineOutput;
			}
		}
	},
	calcHaversine: function(userCoordinates, animalCoordinates){
		console.log('in Haversine');
		console.log('userCoordinates',userCoordinates);
		console.log('animalCoordinates',animalCoordinates);
		Number.prototype.toRad = function() {
		   return this * Math.PI / 180;
		}
		var R = 3958.75; //miles
		var latDiff = userCoordinates.latitude - animalCoordinates.latitude;
		var dLat = latDiff.toRad();
		var longDiff = userCoordinates.longitude - animalCoordinates.longitude;
		var dLon = longDiff.toRad();
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(userCoordinates.latitude.toRad()) * Math.cos(animalCoordinates.latitude.toRad()) * Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		output = R * c;
		console.log("calcHaversine output", output);
		if(output>=0){
			return output;
		}else{
			throw new Meteor.Error(500, "Error calculating distance between locations.");
		}
	}
});