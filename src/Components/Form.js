import React, { useState } from "react";
import App from '../App'

export default function Form() {
  // Use an object to track multiple fields:
  const [member, setMember] = useState({ name: "", email: "", role: "" });
 
  function handleChange(event) {
    
    const updatedUser = { ...member, [event.target.name]: event.target.value };
    setMember(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();
    return <App memberData={member} />    
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Team Member Entry</legend>
        <div className="form-group row">
          <label for="memberName" className="form-label member-name">
            Name
            <div className="input-wrapper member-name">
              <input
                type="text"
                className="form-control"
                name="memberName"
                placeholder="Enter team member name"
                value={member.username}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label for="memberEmail">Email address</label>
          <div className="input-wrapper email">
          <input
            type="email"
            className="form-control"
            name="memberEmail"
            aria-describedby="emailHelp"
            placeholder="Enter team member email"
            value={member.email}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="form-group">
          <label for="memberRole">Role</label>
          <div className="input-wrapper role">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={member.password}
          />
          </div>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
