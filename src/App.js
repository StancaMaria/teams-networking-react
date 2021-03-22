import { PersonTable } from './PersonTable';
import './App.css';
import { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []

    }
  }

  componentDidMount() {
    this.load();
  }


  load() {
    fetch("http://localhost:3000/teams-json")
        .then(res => res.json())
        .then(teams => {
          this.setState({
            teams
          })
        });
}

  render() {
    console.debug(this.state.teams)
    return (
      <div>
        <h1>Teams Networking</h1>
        <PersonTable teams={this.state.teams} border={10} />
      </div>
    );
  }
}

export default App;