import { Card } from "@mui/material";
import Generator from "../components/generator";
import "./index.css";

function Home() {
  return (
    <>
      <h1>D&D 5e Item Generator</h1>

      <Card className="card">
        <Generator />
      </Card>
    </>
  );
}

export default Home;
