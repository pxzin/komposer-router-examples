Meteor.publish('Clicker',()=>{
	return ClickerDB.find();
});