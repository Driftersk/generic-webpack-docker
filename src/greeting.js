import React from 'react';

export default class Greeting extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (  
      <div className='greeting'>
        Hello, {this.props.name}!
        <img src="images/electronics/image.jpg" width={64}/>
      </div>
    );
  }
}