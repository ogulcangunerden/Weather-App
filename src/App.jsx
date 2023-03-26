import { useState } from "react";
import Form from "./components/Form";
import Info from "./components/Info";

function App() {
  const [info, setInfo] = useState([]);
  return (
    <div className="App">
      <Form setInfo={setInfo} info={info} />
      <Info info={info} />
    </div>
  );
}

export default App;
