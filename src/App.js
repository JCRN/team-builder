import React, {useState} from 'react';
import './App.css';

// import components
import Form from './Components/Form' 

function App() {
  const [members, setMembers] = useState([])

  // const addToMembers = member => {
  //   setMembers([...members, member])
  // }
  
  return (
    <div className="App">
      <Form members={members} setMembers={setMembers}     />   
      {members.map(member => (
        <div>
          {member.name} 
          {member.email} 
          {member.role}
        </div>
      ))}
    </div>
  );
}

export default App;
