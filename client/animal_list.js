//helpers
Template.filterAnimals.helpers({
	currentLocale: function(){
		var currentLocale = Session.get("currentLocale");
		return currentLocale;
	},currentCountry: function(code){
		var currentCountry = Session.get("currentCountry");
		if(currentCountry===code){
			return "selected";
		}
	},currentRange: function(){
		var range = Session.get("currentRange");
		if(!range){
			range=4;
		}
		return range;
	},currentFilters: function(param, value){
		var currentFilter = Session.get("currentFilter");
		if(currentFilter[param]){
			// console.log(param, currentFilter[param]);
			for(var i = 0; i<currentFilter[param].length; i++){
				if(currentFilter[param][i]==value){
					return "checked";
				}
			}
		}
	}
});

//helpers
Template.animalList.helpers({
	results: function(){
		var filter_data = Session.get("currentFilter");
		var user_data = Session.get("userCoordinates");
		var range_data = Session.get("range");
		// console.log('filter_data', filter_data, 'user_data', user_data, 'range_data', range_data);
		var query={};
		var distanceQuery={};
		var andArray = [];
		for(var key in filter_data){
			var orArray = [];
			var field = filter_data[key];
			for(var content in field){
				keyObj = {};
				keyObj[key]=field[content];
				orArray.push(keyObj);
			}
			if(orArray.length===1){
				andArray.push(orArray[0]);
			}else{
				andArray.push({$or: orArray});
			}
		}
		if(andArray[0]){
			query['$and'] = andArray;
		}
		// console.log('query', JSON.stringify(query));
		// console.log('session.userCoordinates', user_data);
		return Animals.find(query, {sort: {created_at: -1}});
	},userCoordinates: function(){
		var check=Session.get('userCoordinates');
		if(!check){
			check=false;
		}
		return check;
	}
});

// events
Template.animalList.events({
	'submit .filterLocation': function(e){
		e.preventDefault();		
		// get location data
		var locale = $(e.target).find('[name=locale]').val();
		Session.set('currentLocale', locale);
		var country = $(e.target).find('[name=country]').val();
		Session.set('currentCountry', country);
		var range;
		var range_raw = $(e.target).find('[name=range]').val();
		if(range_raw){
			if(range_raw==1){ range=5; }
			else if(range_raw==2){ range=10; }
			else if(range_raw==3){ range=15; }
			else if(range_raw==4){ range=25; }
			else if(range_raw==5){ range=50; }
			else if(range_raw==6){ range=100; }
		}
		Session.set('range', range);
		if(locale && country && range){
			console.log(country, ' - ', locale, ' - ', range, 'miles');
			Meteor.call('fetchLatLong', locale, country, function(error, result){
				if(result == "error" || !result){
					return throwError('Unable to computer your longitude and latitude.  Please check your internet connection or your city/postal code and country combination.');
				}else{
					console.log('got coordinates?', result);
					// var coordinates = [result.longitude, result.latitude];
					Session.set('userCoordinates', result);
					// var userCoordinates = result;
					// var all_animals = this.Animals._collection.queries[1].results;
					// var animalDistances = Meteor.call('getDistance', userCoordinates, all_animals, function(error, result){
					// 	console.log('error',error, 'result', result);
					// 	// return result;
					// 	for(var i = 0; i< result.length; i++){
					// 		localAnimalCreate(result[i], function(error,result){
					// 			if(error){
					// 				console.log(error.reason);
					// 			}
					// 		});
					// 	}
					// });
				}
			});
		}
	},
	'submit .filter': function(e){
		e.preventDefault();
		var filter_data={};

		// get radio data
		var type = $(e.target).find('[name=type]:checked').val();
		if((type!=-99)&&(type!=undefined)){
			filter_data.type = type;
		}
		var health_issues = $(e.target).find('[name=health_issues]:checked').val();
		if((health_issues!=-99)&&(health_issues!=undefined)){
			filter_data.health_issues = health_issues;
		}
		var kid_friendly = $(e.target).find('[name=kid_friendly]:checked').val();
		if((kid_friendly!=-99)&&(kid_friendly!=undefined)){
			filter_data.kid_friendly = kid_friendly;
		}

		//get checkbox data
		function getCheckedBoxes(checkboxName) {
		  	//get all checkboxes with the passed name
			var checkboxes = document.getElementsByName(checkboxName);
			var checkboxesChecked = [];
		  	// loop over them all
			for(var i=0; i<checkboxes.length; i++) {
				// And stick the checked ones onto an array...
				if (checkboxes[i].checked) {
					checkboxesChecked.push(checkboxes[i].value);
				}
			}
			// Return the array if it is non-empty, or null
			return checkboxesChecked.length > 0 ? checkboxesChecked : null;
		}
		var personality = getCheckedBoxes("personality");
		if(personality!=null){filter_data.personality = personality;}
		var age = getCheckedBoxes("age");
		if(age!=null){filter_data.age = age;};
		var size = getCheckedBoxes("size");
		if(size!=null){filter_data.size = size;}

		// Save filter_data array to Session
		Session.set("currentFilter", filter_data);
	},
	'change input': function(){
		$('.filter').submit();
	},
	'change select': function(){
		$('.filter').submit();
	},
	'change #range': function(){
		var range = $('input[name=range]').val();
		Session.set("currentRange", range);
	}
});