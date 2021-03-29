import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { PersonTable } from "./PersonTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      date: new Date().toString()
    }
    console.warn('props', props);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toString()
      })
    }, 60000);

    this.load();
  }

  load() {
    
  }

  add(person) {
    console.warn('person', person);
    document.getElementById('main-form').reset();

    fetch("http://localhost:3000/team-json/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(person)
    })
      .then(res => res.json())
      .then(r => {
        console.warn(r);
        if (r.success) {
          team.id = r.id;
          const person = this.state.person.concat(person);
          this.setState({
           persons
          });
          //this.load();
        }
      });
  }

  remove(id) {
    fetch("http://localhost:3000/teams-json/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(r => r.json()).then(status => {
      this.load();
    });
  }
  
  render() {
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <TeamsTable 
          persons={this.props.persons}
          border={1}
          onSubmit={team => {
            this.add(team);
          }}
          onDelete={id => {
            this.remove(id);
          }}
        />
        <div>{this.state.date}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.info('map state to props', state);
  return {
    persons: state.persons
  }
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;