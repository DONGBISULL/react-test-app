import React, { useState } from "react";

const AppForm = () => {
  const [form, setForm] = useState({name : '' , email :''});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름 : </label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="email">이메일 : </label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppForm;
