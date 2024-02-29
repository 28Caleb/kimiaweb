import React, {useState}from 'react';
import {Link} from 'react-router-dom'
import { RiHeart3Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
// le useNavigation est utilisé pour naviguer
import {useNavigate} from "react-router-dom"


const NavTop = () => {

    const [isLike, setIsLike] = useState(false);
    // la constante navigate utilise la function useNavigate d
    const navigate = useNavigate();
  
  const handleIconClick = () => {
    // Redirect to the target page
    // cette function me permet également de faire une rédirection 
    navigate('/account');
    setIsLike(!isLike);
  }
    return (
      // j'ai enlevé la class d-none pour que cela s'affiche également sur les petits périphériques 
        <div className='bg-dark navdark d-md-block'>
            <nav className="navbar navbar-white bg-white">
              <div className="container-fluid navtop">
                <span className='square'></span>
                <span className='square2'></span>
                <Link className="navbar-brand text-decoration-none link"><span className='fw-bold fs-3 logo'>Kimia </span><span className='text-dark fw-bold fs-5 logo_shop'>Shop</span></Link>
                
                <div className='form'>
                  <form className="d-flex">
                    <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
                
                <div className='d-flex d-none d-sm-flex navtop_left justify-content-around'>
                  <span className='heart'>
                    <RiHeart3Line size={25} color="black" opacity={0.5} onClick={handleIconClick} style={{cursor: 'pointer'}}/>
                    {/* <span className=''>{isLike? 'Aimé!!': 'Pas encore ' }</span> */}
                  </span>
                  
                  <div className='user d-flex'>
                    <span className=''>
                        <BsPerson size={25} color="black" opacity={0.5}/>
                    </span>
                    {/* <span className='account'>
                        <p className=''><span className='text-muted'></span>Hello, Sign in<br/><span className='fw-bold'></span>Mon Compte</p>
                    </span> */}
                  </div>

                  <div className='basket d-flex'>
                    <span className='back_basket'></span>
                    <span className=''>
                        <BsCart3 size={25} color="black" opacity={0.5}/>
                    </span>
                    <span class="uk-badge badge">5</span>
                    {/* <span className='basket_text'>
                        <p className=''><span className='text-muted'></span>Hello, Sign in<br/><span className='fw-bold'></span>Mon Compte</p>
                    </span> */}
                    
                  </div>
                </div>
              </div>
            </nav>
          </div>
    );
}

export default NavTop;
