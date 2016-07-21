/* eslint-disable jsx-quotes, react/prop-types, no-useless-constructor */

import React from 'react';

class PokeCreator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Poke Creator</h1>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' ref='name' type='text' />
          </div>
          <div className='form-group'>
            <label>Image URL</label>
            <input className='form-control' ref='picURL' type='text' />
          </div>
          <button className='btn btn-primary' onClick={this.props.create}>Create</button>
        </form>
      </div>
    );
  }
}

export default PokeCreator;
