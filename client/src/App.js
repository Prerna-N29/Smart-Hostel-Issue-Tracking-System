import { useEffect } from "react";
import api from "./services/api";

function App() {

  useEffect(() => {
    api.get("/")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Smart Hostel System</h1>
      <p>Check your browser console 👀</p>
    </div>
  );
}

export default App;
