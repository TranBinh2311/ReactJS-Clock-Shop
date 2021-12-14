import Header from "./component/Header";
import Products from "./component/Products";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from "./component/DataProvider"
import Detail from "./component/Detail";
function App() {
  return (
    <DataProvider>
       <div className="App">
          <Router>
              <Header/>

              <section>
                <Routes>
                  <Route path= "products" element = {<Products/>}/>
                  <Route path= "products/:id" element = {<Detail/>}/>
                </Routes>
              </section>

          </Router>
        </div>
    </DataProvider>
   
  );
}

export default App;
