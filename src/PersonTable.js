function getValues() {
    const firstName = document.querySelector("input[name=firstName]").value;
    const lastName = document.querySelector("input[name=lastName]").value;
    const gitHub= document.querySelector("input[name=gitHub]").value;
  
    const team = {
      firstName,
      lastName,
      gitHub
    };
    return person;
  }
  
  export const PersonTable = ({ teams, border, onSubmit, onDelete }) => (
    <form id="main-form" onSubmit={e => {
      e.preventDefault();
      const values = getValues();
      onSubmit(values);
    }}>
      <table border={border}>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>gitHub</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {person.map((person, index) => (
            <tr key={index}>
              <td>{person.members.split(/\s*,\s*/).join("<br>")}</td>
              <td>{person.name}</td>
              <td><a target="_blank" href={person.url}>Github</a></td>
              <td>
                <a href="#" className="delete-row" onClick={e => {
                  onDelete(person.id);
                }}>&#10006;</a>
                <a href="#" className="edit-row" data-id="{person.id}">&#9998;</a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td><input type="text" required name="members" placeholder="enter firstName" /></td>
            <td><input type="text" required name="name" placeholder="enter lastName" /></td>
            <td><input type="text" required name="url" placeholder="enter gitHub" /></td>
            <td><button type="submit">Save</button></td>
          </tr>
        </tfoot>
      </table>
    </form>
  );