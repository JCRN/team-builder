import React, { useState } from "react";
import { memberExpression } from "@babel/types";


export default function Form(props) {
  // Use an object to track multiple fields:
  const [member, setMember] = useState({ name: "", email: "", role: "" });
 
  function handleChange(event) {    
    const updatedMember = { ...member, [event.target.name]: event.target.value };
    setMember(updatedMember);
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveMember(member);
  }

  const saveMember = () => {
      props.setMembers([...props.members, member])
    // const addToMembers = props.addToMembers
    // addToMembers(member)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Team Member Entry</legend>
        <div className="form-group row">
          <label for="name" className="form-label name">
            Member Name
            <div className="input-wrapper name">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter member name"
                value={member.username}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <div className="input-wrapper email">
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter member email"
            value={member.email}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="form-group">
          <label for="role">Member Role</label>
          <div className="input-wrapper role">
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="role"
            onChange={handleChange}
            value={member.role}
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
