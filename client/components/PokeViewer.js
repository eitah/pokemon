/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

export default (props) => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-3'>
          <h2>{props.poke.name}</h2>
        </div>
        <div className='col-xs-3'>
          <img className="img-responsive" src={`${props.poke.picURL}`} alt='' />
        </div>
      </div>
    </div>
  );
};
