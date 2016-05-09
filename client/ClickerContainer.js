import { composeWithTracker } from 'react-komposer';
import Clicker from './Clicker';

function composer(props, onData) {

	const subscription = Meteor.subscribe('Clicker');
	
	if (subscription.ready()) {

		let clicks = ClickerDB.findOne({_id:"clicker"}).count;

		onData(null, { clicks });
	
	};
};


export default composeWithTracker(composer)(Clicker);