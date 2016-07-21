/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

class PokeViewer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-6'>
            <h1>{this.props.poke.name}</h1>
            <img src={`${this.props.poke.picURL}`} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default PokeViewer;
