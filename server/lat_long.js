Meteor.methods({
	fetchLatLong: function(locale, country){
		// pull latitude/longitude data
		var query = locale+" "+country;
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);
		console.log(locale, country);
		coordinates=[];
		if(geoResult.length===1){
			coordinates.push(geoResult[0].longitude);
			coordinates.push(geoResult[0].latitude);
			console.log('geoResult',geoResult);
			console.log('fetchLatLong', coordinates);
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
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);

		// update user profile address 
		var data={};
		data = _.extend(addressAttributes,{
			coordinates: [geoResult[0].longitude, geoResult[0].latitude]
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
	}
	// ,
// 	getDistance: function(userCoordinates, animals){
// 		console.log('received userCoordinates',userCoordinates);
// 		animalDistances = [];
// 		for(animal in animals){		
// 			currentAnimal=Animals.findOne(animals[animal]._id);
// 			if(currentAnimal.address.coordinates){
// 				console.log(currentAnimal.name, currentAnimal.address.city);
// 				var animalCoordinates = {
// 					coordinates: userCoordinates
// 				}
// 				Meteor.call('calcHaversine',userCoordinates, animalCoordinates, function(error, result){
// 					console.log('result in getDistanceResult', result);
// 					if(result>=0){
// 						getDistanceResult = {
// 							animalId: currentAnimal._id,
// 							name: currentAnimal.name,
// 							distance: result



// // for(animal in animals){
// // 	for (var key in currentAnimal){
// // 		if(animals[animal].hasOwnProperty(key)){
// // 			if(key=="_id"){
// // 				console.log(key, 'is', currentAnimal[key]);
// // 				var currentAnimal=Animals.findOne(animals[animal]._id);
// // 			}
// // 		};
// // 	}
// // }

// 						}
// 						console.log('getDistanceResult',getDistanceResult);
// 						animalDistances.push(getDistanceResult);
// 						// return getDistanceResult;
// 					}else{
// 						throw new Meteor.Error(500, "Error getting distance between locations.");						
// 					}
// 				});
// 			}else{
// 				throw new Meteor.Error(500, "Error finding the Animal");
// 			}
// 		}
// 		console.log('animalDistances', animalDistances);
// 		return animalDistances;
// 	},

	// getDistance: function(userCoordinates, animal){
	// 	console.log('received userCoordinates',userCoordinates);
	// 	currentAnimal=Animals.findOne(animal._id);
	// 	if(currentAnimal.address.longitude){
	// 		console.log(currentAnimal.name, currentAnimal.address.city);
	// 		animalDistances = [];
	// 		var animalCoordinates = {
	// 			longitude: currentAnimal.address.longitude,
	// 			latitude: currentAnimal.address.latitude
	// 		}
	// 		Meteor.call('calcHaversine',userCoordinates, animalCoordinates, function(error, result){
	// 			console.log('result in getDistanceResult', result);
	// 			if(result>=0){
	// 				getDistanceResult = {
	// 					_id: currentAnimal._id,
	// 					name: currentAnimal.name,
	// 					distance: result
	// 				}
	// 				console.log('getDistanceResult',getDistanceResult);
	// 				return getDistanceResult;
	// 			}else{
	// 				throw new Meteor.Error(500, "Error getting distance between locations.");						
	// 			}
	// 		});
	// 		animalDistances.push(animalCoordinates);
	// 	}else{
	// 		throw new Meteor.Error(500, "Error finding the Animal");
	// 	}
	// },
	// calcHaversine: function(userCoordinates, animalCoordinates){
	// 	console.log('in Haversine');
	// 	console.log('userCoordinates',userCoordinates);
	// 	console.log('animalCoordinates',animalCoordinates);
	// 	Number.prototype.toRad = function() {
	// 	   return this * Math.PI / 180;
	// 	}
	// 	var R = 3958.75; //miles
	// 	var latDiff = userCoordinates.latitude - animalCoordinates.latitude;
	// 	var dLat = latDiff.toRad();
	// 	var longDiff = userCoordinates.longitude - animalCoordinates.longitude;
	// 	var dLon = longDiff.toRad();
	// 	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(userCoordinates.latitude.toRad()) * Math.cos(animalCoordinates.latitude.toRad()) * Math.sin(dLon/2) * Math.sin(dLon/2);
	// 	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	// 	output = R * c;
	// 	if(output>=0){
	// 		return output;
	// 	}else{
	// 		throw new Meteor.Error(500, "Error calculating distance between locations.");
	// 	}
	// }
});