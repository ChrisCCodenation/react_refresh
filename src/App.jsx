import "./App.css";
import Box from "./assets/box";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState("Harry");
  const characterArray = [
    { name: "Harry" },
    { name: "George" },
    { name: "Hermione" },
    { name: "Percy" },
  ];

  for (let index = 0; index < characterArray.length; index++) {
    console.log(characterArray[index]);
  }

  //Fetch API
  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(data);
  };
  getImages();

  return (
    <div className="App">
      <img src="https://picsum.photos/300/300" alt="A random photo" />
      <br />

      <input onChange={(event) => setUser(event.target.value)} />
      {/* CONDITIONAL RENDERING */}
      {user && <Box name={user} />}
      {/* the {} allows use to inject JavaScript
       The && acts as an if statement so if use exists display what is to the right of the && and if user doesn't exist display nothing. */}
      {user == "Mark" ? <Box name={user} /> : <h1>Nothing typed in</h1>}
      {/* ? and : act as an if then else statement.  */}
      <Box name="Mark" />
      {characterArray.map((item, index) => {
        return (
          <div>
            <Box name={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default App;