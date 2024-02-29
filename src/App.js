import './App.css';
import Navbar from './Components/Header/Navbar/Navbar.jsx';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import ThriftShop from './Pages/ThriftShop.jsx';
import Account from './Pages/Account.jsx';

function App() {
  return (
    <>
    {/* Navbar est un composant qui regroupe uniquement la barre de navigation */}
    <Navbar/>
    {/* Routes me permet de créer les chemins par lequel je vais naviguer sans faire appel au serveur en utilisant react-router-dom ensuite il faut utiliser BrowserRoute dans le fichier index.js qui va contenir le composant App */}
      <Routes>
      {/* Route définit un route ou lien particulier */}
        <Route index path='/' element={<Home />}/>
        <Route index path='/shop' element={<Shop />}/>
        <Route index path='/account' element={<Account />}/>
        <Route index path='/thriftshop' element={<ThriftShop />}/>
        <Route index path='/about' element={<About />}/>
        <Route index path='/contact' element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
