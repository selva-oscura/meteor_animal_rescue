Meteor.methods({
	fetchLatLong: function(locale, country){
		// pull latitude/longitude data
		var query = locale+" "+country;
		var geo = new GeoCoder();
		var geoResult = geo.geocode(query);
		console.log(locale, country);
		// console.log(geoResult.length);
		// console.log(geoResult);
		var coordinates={};
		if(geoResult.length===1){
			coordinates.latitude = geoResult[0].latitude;
			coordinates.longitude = geoResult[0].longitude;
			console.log(coordinates);
			// feed coordinates to session (or to user profile....though that won't work if not logged in.....)
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
	}
});