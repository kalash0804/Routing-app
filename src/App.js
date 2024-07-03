import logo from './logo.svg';
import './App.css';
import UseEffectCheck from './components/UseEffectCheck';
import UseEffectReturnCheck from './components/UseEffectReturnCheck';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <UseEffectCheck/>} />
      <Route path="/return" element={<UseEffectReturnCheck/>} />


      </Routes>
       
     
    </div>
  );
}


export default App;

