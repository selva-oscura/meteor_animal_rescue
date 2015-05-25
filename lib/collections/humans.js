Meteor.methods({
	addressUpdate: function(addressAttributes){
		var now = new Date().getTime();
		var user = Meteor.user();
		if(!user){
			throw new Meteor.Error(401, "You need to log in to set or update your address.")
		}
		// ensure all fields are filled out
		// if(!addressAttributes.street){
		// 	throw new Meteor.Error(422, "Please fill in your Street Address.");
		// }
		// if(!addressAttributes.city){
		// 	throw new Meteor.Error(422, "Please fill in your City.");
		// }
		// if(!addressAttributes.state){
		// 	throw new Meteor.Error(422, "Please fill in your State/Province.");
		// }
		if(!addressAttributes.postal_code){
			throw new Meteor.Error(422, "Please fill in your Postal Code.");
		}
		if(!addressAttributes.country){
			throw new Meteor.Error(422, "Please select your Country.");
		}
		
		// prepare address to query meteor-geocoder package (server/latlong.js)
		var arrayForCoordinates = [];
		for(attribute in addressAttributes){
			if(addressAttributes[attribute].length>0){
				arrayForCoordinates.push(addressAttributes[attribute]);
			}
		}
		var query=arrayForCoordinates.join(" ");

		// pass query and data for updating address to putLatLongInUser method on server
		Meteor.call('putLatLongInUser', query, user._id, addressAttributes, function(error, results){
			if(error){
				console.log('error',error);
				return throwError(error);
			}else{
				return results;
			}
		});
	}
})
