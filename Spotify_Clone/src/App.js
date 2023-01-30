import logo from './logo.svg';
import './App.css';
import { Leftmenu } from './Components/Leftmenu';
import { Main } from './Components/Main';
import { Rightmenu } from './Components/Rightmenu';

function App() {
  return (
   <div className='App'>
   <Leftmenu/>
   <Main/>
   <Rightmenu/>
   <div className='background'>
      

   </div>
   
   </div>
  );
}

export default App;
