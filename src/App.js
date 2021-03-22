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
    console.warn('mount');
    setTimeout(() => {
      console.warn("loaded");
      this.setState({
        teams: [
          {
          "id": "a123",
          "firstName": "Stanca",
          "lastName": "Stirb",
          "gitHub": "StancaMaria"
        },
        {
          "id": "b564",
          "firstName": "Matei",
          "lastName": "Nicolae",
          "gitHub": "nmatei",
          }
        ]
      })
     }, 2000);

  }

  render() {
    console.debug(this.state.teams)
    return (
      <div>
        <h1>Teams Networking</h1>
        <PersonTable teams={this.state.teams} border={1} />
      </div>
    );
  }
}

export default App;