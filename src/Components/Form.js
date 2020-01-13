import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  function handleChange(event) {
    const updatedMember = {
      ...member,
      [event.target.name]: event.target.value
    };
    setMember(updatedMember);
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveMember(member);
  }

  const saveMember = () => {
    props.setMembers([...props.members, member]);
  };

  useEffect(() => {
    if (props.memberToEdit !== "") {
      setMember(props.memberToEdit);
    }
  }, [props.memberToEdit]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>TEAM MEMBER ENTRY FORM</legend>

        <div className="form-group name">
          <label for="name" className="form-label name">
            Name
          </label>
          <div className="input-wrapper name">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Member Name"
              value={member.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group email">
          <label for="email">Email</label>
          <div className="input-wrapper email">
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter Member Email"
              value={member.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group role">
          <label for="role">Role</label>
          <div className="input-wrapper role">
            <input
              type="text"
              className="form-control"
              name="role"
              placeholder="Enter Member Role"
              onChange={handleChange}
              value={member.role}
            />
          </div>
        </div>

        <button type="submit" className="form-btn">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
