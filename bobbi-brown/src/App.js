import './App.css';
import FixedNavbar from './NavbarPart/FixedNavbar';
import SubMainFixedNavbar from './NavbarPart/SubMainFixedNavbar';
import ToggleSubMainFixedNavbar from './NavbarPart/ToggleSubMainFixedNavbar';

function App() {
  return (
    
    <div className="App">
      <FixedNavbar/>
      <SubMainFixedNavbar/>
      <ToggleSubMainFixedNavbar/>
    </div>
  );
}

export default App;
