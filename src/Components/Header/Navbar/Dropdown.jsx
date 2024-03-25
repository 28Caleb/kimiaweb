import React, {useState} from 'react'
import { dropdownMenu } from '../../../Data/Navitems'
import {Link} from 'react-router-dom'
import './Navbar.css'
import './dropdown.css'
// import { TbTruckDelivery, TbBuildingStore } from 'react-icons/tb';
import { GiAmpleDress } from "react-icons/gi";
import { FcInTransit, FcShop} from "react-icons/fc";


const getIconForTitle = (title) => {
    switch (title) {
      case 'Dropshipping':
        return <FcInTransit />;
      case 'Supermarché':
        return <FcShop />;
      case 'Mode femme':
        return <GiAmpleDress />;
    //   case 'Mode Homme':
    //     return <FaMale />;
    //   case 'Beauté et Hygiene':
    //     return <FaUtensils />;
    //   case 'Produits pour bébé':
    //     return <FaBabyCarriage />;
    //   case 'Informatique':
    //     return <FaLaptop />;
    //   case 'Electroniques':
    //     return <FaTv />;
    //   case 'Téléphone et Tablettes':
    //     return <FaMobileAlt />;
    //   case 'Maison et bureau':
    //     return <FaHome />;
    //   case 'Autres catégories':
    //     return <FaEllipsisH />;
      default:
        return null; // Retourne null si aucun titre correspondant n'est trouvé
    }
  };


const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <ul className= {dropdown ? 'submenu cliked' : 'submenu'} onClick={() => setDropdown(!dropdown)}>
        {dropdownMenu.map((item) => {
            return (
                <li key={item.id} >
                    <Link to={item.path} className={item.className}
                    onClick={() => setDropdown(false)}>
                    {getIconForTitle(item.title)}
                        {item.title}
                    </Link>
                </li>
            )
        })}
      </ul>
    </>
  )
}

export default Dropdown
