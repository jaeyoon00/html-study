import { useState } from "react";
import Person from "./Person";

const Persons = () => {
    const [age, setAge] = useState(10);
    return (
      <>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <br />
        <Person age={age} />
        <Person age={age} />
        <Person age={age} />
      </>
    );
  };
  
  export default Persons;