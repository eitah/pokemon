/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';
import PokeCreator from './PokeCreator';
import PokeViewer from './PokeViewer';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: [] };
    this.catch = this.catch.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  refresh() {
    fetch('/api/pokemon')
    .then(r => r.json())
    .then(j => {
      this.setState({ pokemon: j.pokemon });
    });
  }
  catch(e) {
    const name = this.refs.pokemon.refs.name.value;
    const picURL = this.refs.pokemon.refs.picURL.value;
    const body = JSON.stringify({ name, picURL });

    fetch('/api/pokemon', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => this.refresh());

    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-4'>
            <PokeCreator ref='pokemon' create={this.catch} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>Pokedex</h1>
          {this.state.pokemon.map(s => <PokeViewer key={s._id} poke={s} />)}
          </div>
        </div>
      </div>
   );
  }
}

export default Pokemon;
