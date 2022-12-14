import logo from './logo.svg';
import './App.css';
import { Leftmenu } from './Components/Leftmenu';
import { Main } from './Components/Main';
import { Rightmenu } from './Components/Rightmenu';

function App() {
  return (
   <>
   <Leftmenu/>
   <Main/>
   <Rightmenu/>
   <div className='background'></div>
   
   </>
  );
}

export default App;
