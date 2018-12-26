import React, { Component } from 'react';
import Aliens from './Aliens';
import AddAlien from './AddAlien';

class App extends Component {
  state = {
    aliens : [
      { name: 'Cale', age: 2000, rank:'Warrior' , id: 1},
      { name: 'Zennon', age: 1200, rank: 'Defender', id: 2},
      { name: 'Kougar', age: 120000, rank: 'Elder', id: 3}
    ]
  }
  addAlien = (alien) => {
    alien.id = Math.random();
    let aliens = [...this.state.aliens, alien]
    this.setState({
      aliens: aliens
    })
  }
  deleteAlien = (id) => {
    let aliens = this.state.aliens.filter(alien => {
      return alien.id !== id;
    });
    this.setState({
      aliens: aliens
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <h2>Welcome</h2>
        <Aliens aliens={ this.state.aliens } deleteAlien={this.deleteAlien} />
        <AddAlien addAlien={ this.addAlien } />
      </div>
    );
  }
}

export default App;
