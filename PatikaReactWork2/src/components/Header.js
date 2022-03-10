import React, { useState } from "react";

const Header = ({ addToList }) => {
  const [job, setJob] = useState("");

  return (
    <header className="header">
      <h1>todos</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setJob("");
          return job ? addToList(job) : console.log("bos");
        }}
      >
        <input
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
