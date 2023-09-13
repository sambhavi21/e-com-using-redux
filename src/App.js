 
import { Provider} from 'react-redux'
import store from './components/Redux/store';
import {BrowserRouter,Routes,Route}   from 'react-router-dom'
import Homepage from './components/Homepage';
import ShopingCart from './components/ShopingCart';
import Contact from './components/Contact';
import ShopDetails from './components/ShopDetails';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
    <Routes>
   

      <Route path ='/' element={<Homepage/>}/>
     <Route path ='/cart' element={<ShopingCart/>}/>
     <Route path ='/contact' element={<Contact/>}/>
     <Route path ='/shopdetail' element={<ShopDetails/>}/>
     <Route path ='/shop' element={<Shop/>}/>
     <Route path ='/checkout' element={<Checkout/>}/>

     
    </Routes>
    </BrowserRouter>
   </Provider>  
     
  
  );
}

export default App;
