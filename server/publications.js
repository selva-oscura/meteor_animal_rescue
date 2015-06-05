Meteor.publish('animals', function(options){
	// check(options, {
	// 	sort: Object,
	// 	limit:Number
	// });
	return Animals.find({}, {fields: {_id:1, name:1, type:1, age:1, sex:1, size:1, breed:1, color:1, personality:1, kid_friendly:1, health_issues:1, comments:1, offererEmail:1, created_at:1, img_path:1}}, options);
});

Meteor.publish('animal', function(id){
	return id && Animals.find(id, {fields: {_id:1, name:1, type:1, age:1, sex:1, size:1, breed:1, color:1, personality:1, kid_friendly:1, health_issues:1, comments:1, offererEmail:1, offererId:1, created_at:1, img_path:1}});
});

Meteor.publish('myAnimals', function(){
	return Animals.find({offererId: this.userId});
});

Meteor.publish('myAnimal', function(id){
	return id && Animals.find({_id:id, offererId: this.userId});
});

Meteor.publish('full_animal_details', function(options){
	// check(options, {
	// 	sort: Object,
	// 	limit:Number
	// });
	return Animals.find({}, {fields: {_id:1, name:1, type:1, age:1, sex:1, size:1, breed:1, color:1, personality:1, kid_friendly:1, health_issues:1, comments:1, offererEmail:1, created_at:1, img_path:1, address:1}}, options);
});

// Meteor.publish('localAnimals', function(coordinates, options){

// })