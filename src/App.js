
import Counter from './Counter/Counter';
import {BrowserRouter,Routes,Route} from"react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path="/" element={<Counter/>}/>
     
     </Routes>
     </BrowserRouter> 
  );
}

export default App;
