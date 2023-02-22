import { useState, useEffect } from "react";

import "./Form.css";

const Form = () => {
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <form>
      <input
        className="form"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        aria-label="NAME"
      />
    </form>
  );
};

export default Form;
