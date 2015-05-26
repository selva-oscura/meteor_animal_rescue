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
			longitude: geoResult[0].longitude,
			updated_at: new Date()
		});
		var updated = Meteor.users.update(
			{_id: id},
			{$set: {"profile": data}}
		);
		if(!updated){
			throw new Meteor.Error(500, "Erk....  Failure to update?.")
		}
	}
});