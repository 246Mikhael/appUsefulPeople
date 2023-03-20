import React from "react"
import ShowFillingForm from "./container/ShowFillingForm";
import ShowCategoriesList from "./container/ShowCategoriesList";
import ShowButtons from "./container/ShowButtons";
import "./style.css";



function App() {


  return (
    <div>
    
      <div>
          <ShowCategoriesList />
      </div>
      <div>
         <ShowButtons/>
      </div>
   
      <ShowFillingForm/>
    </div>
  );
}

export default App;
