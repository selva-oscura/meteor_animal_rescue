//helpers
Template.animalEdit.helpers({
	selectedShow: function(prop, value){
		var data = "selected";
		if(prop == value){
			return data;
		}
	},checkedShow: function(prop, value){
		var data = "checked";
		if(prop == value){
			return data;
		}
	}
});

// events
Template.animalEdit.events({
	'submit form': function(e){
		e.preventDefault();
		var targetAnimalId = this._id;
		var animal = {
			name:$(e.target).find('[name=name]').val(),
			type:$(e.target).find('[name=type]:checked').val(),
			sex:$(e.target).find('[name=sex]:checked').val(),
			age:$(e.target).find('[name=age]').val(),
			size:$(e.target).find('[name=size]').val(),
			breed:$(e.target).find('[name=breed]').val(),
			color:$(e.target).find('[name=color]').val(),
			personality:$(e.target).find('[name=personality]').val(),
			kid_friendly:$(e.target).find('[name=kid_friendly]').val(),
			health_issues:$(e.target).find('[name=health_issues]').val(),
			comments:$(e.target).find('[name=comments]').val(),
			img_path:$(e.target).find('[name=img_path]').val(),
		}
		Meteor.call('animalUpdate', targetAnimalId, animal, function(error, result){
			if(error){
				console.log(error.reason);
				return throwError(error.reason)
			}
			Router.go('animalProfile', {_id: result._id});
		});
	},
	'click .cancel': function(){
		var targetAnimalId = this._id;
		window.location.href = "/animal/"+targetAnimalId;
	}
});

