/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle, arrow-body-style */

import React from 'react';

export default (props) => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-4'>
          <h2>{props.poke.name}</h2>
        </div>
        <div className='col-xs-4'>
          <img className="img-responsive" src={`${props.poke.picURL}`} alt='' />
        </div>
        <div className='col-xs-4'>
          <span>{props.poke.dateCreated}</span>
        </div>
      </div>
    </div>
  );
};
