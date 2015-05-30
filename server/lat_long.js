Meteor.methods({
	fetchLatLong: function(locale, country){
		// pull latitude/longitude data
		var query = locale+" "+country;
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);
		console.log(locale, country);
		// console.log(geoResult.length);
		// console.log(geoResult);
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
	calcDistance: function(userCoordinates){
		console.log('received userCoordinates',userCoordinates);
		// allAnimals = Animals.find({},{});

		// haversine with userCoordinates and targetAnimalCoordinates & return the distance

// Number.prototype.toRad = function() {
//    return this * Math.PI / 180;
// }

// var lat2 = 42.741; 
// var lon2 = -71.3161; 
// var lat1 = 42.806911; 
// var lon1 = -71.290611; 

// var R = 6371; // km 
// //has a problem with the .toRad() method below.
// var x1 = lat2-lat1;
// var dLat = x1.toRad();  
// var x2 = lon2-lon1;
// var dLon = x2.toRad();  
// var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
//                 Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
//                 Math.sin(dLon/2) * Math.sin(dLon/2);  
// var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
// var d = R * c; 

// alert(d);
	}
});