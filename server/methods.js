Meteor.methods({
	clickerAdd:function(){
		console.log(1)
		ClickerDB.insert({_id:'clicker',count:0},function(){
			let c = ClickerDB.findOne({_id:'clicker'}).count;
			ClickerDB.update({_id:'clicker'},{
				$set:{count:c+1}
			});
		})
	}
});