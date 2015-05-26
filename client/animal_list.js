//helpers
Template.animalList.helpers({
	results: function(){
		var filter_data = Session.get("currentFilter");
		// console.log("Changed filter", JSON.stringify(filter_data));
		var query={};
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
	return Animals.find(query, {sort: {created_at: -1}});
	}
});

// events
Template.animalList.events({
	'submit .filter': function(e){
		e.preventDefault();
		var filter_data={};

		// get location data
		var postal_code = $(e.target).find('[name=postal_code]').val();
		var country = $(e.target).find('[name=country]').val();
		if(postal_code && country){
			console.log(country, ' - ', postal_code);
			Meteor.call('fetchLatLong', postal_code, country);
		}

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
		  for (var i=0; i<checkboxes.length; i++) {
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
	}
});