// Local (client-only) collection
Errors = new Meteor.Collection(null);

throwError = function(message){
	console.log('in the throw error', message);
	Errors.insert({message: message});
}