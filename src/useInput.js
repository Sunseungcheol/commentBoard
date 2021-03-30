import { useState } from "react";

function useInputs(initialform) {
  const [inputs, setInputs] = useState(initialform);
  const onChange = (e) => {
    const { name, value } = e.target;
    //console.log("네임 = " + name, "벨류 = " + value);
    setInputs((form) => ({
      ...form,
      [name]: value,
    }));
  };
  return [inputs, setInputs, onChange];
}

export default useInputs;
