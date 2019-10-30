import React from 'react';
import './App.css';

// import { Card, Icon, Image } from 'semantic-ui-react';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("First Render");
    fetch('https://api.github.com/users/ChristopherHernandezW22')
      .then(res => res.json())
      .then(data => this.setState({ user:data }));
    fetch('https://api.github.com/users/ChristopherHernandezW22/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers:data }));
  }

  componentDidUpdate () {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Card user={this.state.user} />
        {this.state.followers.map(follower => ( 
            <Card user={follower} key={follower.id} />
          ))}
    </div>
    );
  }
}

export default App;
