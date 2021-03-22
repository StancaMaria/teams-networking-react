import logo from './logo.svg';
import { PersonTable } from './PersonTable';
import './App.css';

const teams = [
  {
      id: "a123",
      firstName: "Stanca",
      lastName: "Stirb",
      gitHub: "StancaMaria"
  }, 
  {
      id:"b564",
      firstName:"Matei",
      lastName:"Nicolae",
      gitHub: "nmatei",
   }
];

function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
    <PersonTable teams={teams} />
    </div>
  );
}

export default App;
