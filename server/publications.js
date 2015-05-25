Meteor.publish('animals', function(options){
	// check(options, {
	// 	sort: Object,
	// 	limit:Number
	// });
	return Animals.find({}, options);
});

Meteor.publish('singleAnimal', function(id){
	return id && Animals.find(id);
});

Meteor.publish('myAnimals', function(){
	return Animals.find({offererId: this.userId});
});