import './app.scss';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
      {/* <Landing/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
