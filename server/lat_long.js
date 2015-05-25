Meteor.methods({
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