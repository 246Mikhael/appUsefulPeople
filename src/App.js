import React from "react"
import ShowFillingForm from "./container/ShowFillingForm";
import ShowButtons from "./container/ShowButtons";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";


function App() {


  return (
    <div>
        <Header/>
        <ShowButtons/>
        <ShowFillingForm/>
    </div>
  );
}

export default App;
