import './App.css';
import MothersMapping from './components/All Pages/MothersMapping';
import Offers from './components/All Pages/Offers/Offers';
import SingleProductPage from './components/All Pages/SingleProductPage/SingleProductPage';
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (    
    <div className="App">
      <MainRoutes/>
      {/* <MothersMapping/> */}
      {/* <Offers/> */}
      {/* <SingleProductPage/> */}
    </div>
  );
}

export default App;
