import './App.css';
import FaceProductMapping from './components/All Pages/FaceProductMapping';
import MakeupMini from './components/All Pages/MakeupMini';
import NewProductMapping from './components/All Pages/NewProductMapping';
import ShopAllBestsellers from './components/All Pages/ShopAllBestsellers';
import SkincareMapping from './components/All Pages/SkincareMapping';
import { MainRoutes } from './Routes/MainRoutes';


function App() {
  return (
    
    <div className="App">
      <MainRoutes/>
      {/* <ShopAllBestsellers/> */}
      {/* <FaceProductMapping/> */}
      {/* <NewProductMapping/> */}
      {/* <MakeupMini/> */}
      {/* <SkincareMapping/> */}
    </div>
  );
}

export default App;
