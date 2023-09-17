import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>D&D 5e Item Generator</h1>
      <div className="card">
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
