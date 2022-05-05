import './App.css';
import FixedNavbar from './NavbarPart/FixedNavbar';
import MainNavbar from './NavbarPart/MainNavbar';
import SubMainFixedNavbar from './NavbarPart/SubMainFixedNavbar';
import SubNavbar from './NavbarPart/SubNavbar';

function App() {
  return (
    
    <div className="App">
      {/* <MainNavbar/> */}
      {/* <SubNavbar/> */}
      <FixedNavbar/>
      <SubMainFixedNavbar/>
    </div>
  );
}

export default App;
