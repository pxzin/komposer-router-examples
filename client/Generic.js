import React from 'react';

export default class Generic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        Esse aqui é o Generic
         {this.props.children}
      </div>
    );
  }
}