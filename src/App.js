import { Component } from 'react';
import './App.css';
import { PersonTable } from "./PersonTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      date: new Date().toString()
    }
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
    fetch("http://localhost:3000/persons-json")
      .then(res => res.json())
      .then(persons => {
        this.setState({
          persons
        });
      });
  }

  add(persons) {
    console.warn('team', team);
    document.getElementById('main-form').reset();

    fetch("http://localhost:3000/persons-json/create", {
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
          person.id = r.id;
          const teams = this.state.persons.concat(persons);
          this.setState({
            persons
          });
          //this.load();
        }
      });
  }

  remove(id) {
    fetch("http://localhost:3000/persons-json/delete", {
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
    console.debug(this.state.persons);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable 
          persons={this.state.persons}
          border={1}
          onSubmit={person => {
            this.add(person);
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

export default App;