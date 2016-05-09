import React from 'react';
import { Meteor } from 'meteor/meteor';
import ClickerContainer from './ClickerContainer';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks:0}

    this.randomSeed = Math.random();

  }

  componentDidMount(){

    let sub = Meteor.subscribe('Clicker',()=>{
        let c = ClickerDB.findOne({'_id':'clicker'}).count
        this.setState({
          clicks: c
        })
     });
  }

  render() {
    return (
      <div>
        <h2>Esse aqui é o Dashboard - {this.randomSeed}</h2>  
        <ClickerContainer />
        <input type="button"  value="+1" onClick={()=>{Meteor.call('clickerAdd') }}/>

      </div>
    );
  }
}