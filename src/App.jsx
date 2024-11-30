import { Link } from "react-router-dom";
import "./App.css";
// import Pokedex from "./Components/Pokedex/Pokedex.jsx";
import CustomRoutes from "./routes/CustomRoutes.jsx";

function App() {

  return (
    
    <>

      <div className="pokedex-text">
          <Link to="/">
          Pokedex!
          </Link>
      </div>


      {/* <Pokedex/> */}
      <CustomRoutes/>
    </>
  )
}

export default App



