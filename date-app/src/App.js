import logo from './logo.svg';
import './App.css';
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();
function App() {
  return(
  <>
  <h1>Hello,Welcome to the geekyants</h1>
  <p>
    current date is={currdate}
    </p>
    <p>
    current time is={currtime}
  </p>
  
  </>
  );
}


export default App;
