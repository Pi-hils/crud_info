import React, { Fragment, useState } from "react";

const InputInfo = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const head = { name };
      const body = { email };
      const response = await fetch("http://localhost/3001/info", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        head: JSON.stringify(head),
        body: JSON.stringify(body)
      })
      console.log(response);
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-4">Input Todo</h1>
      <form onSubmit={onSubmitForm}>
      <label>Name</label>
        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
        <label>Email</label>
        <input type="text" className="form-control mb-4" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputInfo;