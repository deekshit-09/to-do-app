
import {Routes, Route} from "react-router-dom"
import Categories from "./categories";
import All from "./all"

function App() {
  return (
    <div>
      
      <Routes>
      
      {/* <Route path='/' element= {<Note />}> </Route> */}
      <Route path='/' element= {<Categories />} > </Route>
      <Route path='/all' element= {<All />} > </Route>
      {/* <CheckboxComponent/> */}
      </Routes>
    </div>
  );
}

export default App;
