import React, {useState} from 'react';

// import components
import Form from './Components/Form' 

function App() {
  const [members, setMembers] = useState([])
  const [memberToEdit, setMemberToEdit] = useState([])

  return (
    <div className="App">
      <Form members={members} setMembers={setMembers} memberToEdit={memberToEdit} />   
      {members.map((member, index) => (
        <>
        <div className="member-name">{member.name}</div>
        <div className="member-email">{member.email}</div>
        <div className="member-role">{member.role}</div>
        <button className="edit-btn" onClick={() => setMemberToEdit(member)}>edit</button>
        </>
      ))}
    </div>
  );
}

export default App;
