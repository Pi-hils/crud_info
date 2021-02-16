import React, { Fragment, useState } from "react";

const InputInfo = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

  return (
    <Fragment>
      <h1 className="text-center mt-4">Input Todo</h1>
      <form>
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