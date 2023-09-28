import { useEffect, useState } from 'react'
import "./header.scss"
import logo from "/images/logo.svg"
import menu from "/icons/menu.svg"
import close from "/icons/close.svg"
import Nav from '../nav/Nav'
import 'animate.css';
import { Link } from 'react-router-dom'

const Header = ({ setMenuMobileActive }) => {

  const [desktopMenu, setDesktopMenu] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [btnMobile, setBtnMobile] = useState(true)
  const [btnClose, setBtnClose] = useState(false)

  useEffect(() => {
    handleDesktopMenu()

    window.addEventListener('resize', handleDesktopMenu);

    return () => {
      window.removeEventListener('resize', handleDesktopMenu);
    };

  }, [])

  const handleDesktopMenu = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 600) {
      setDesktopMenu(true)
      setBtnMobile(false)
    } else {
      setDesktopMenu(false)
      setBtnMobile(true)
    }
  }

  const handleMobileMenu = (isActive) => {
    if (isActive) {
      setMobileMenu(true)
      setMenuMobileActive(true)
      setBtnMobile(false)
      setBtnClose(true)
    } else {
      setMobileMenu(false)
      setMenuMobileActive(false)
      setBtnMobile(true)
      setBtnClose(false)
    }
  }

  return (
    <header className='header'>
      <figure className='header__logo-container'>
        <Link to="/">
          <img src={logo} alt="logo icon" className='header__logo' />
        </Link>
      </figure>
      <button
        className={btnMobile ? "header__btn-mobile" : "hidden"}
        onClick={() => handleMobileMenu(true)}>
        <img src={menu} alt="menu icon" className='header__menu-icon' />
      </button>
      <button
        className={btnClose ? "header__btn-mobile" : "hidden"}
        onClick={() => handleMobileMenu(false)}>
        <img src={close} alt="close icon" className='header__close-icon' />
      </button>
      <section className={mobileMenu ? "header__mobile-menu" : "hidden"}>
        <nav className="header__nav-container">
          <Nav handleMobileMenu={handleMobileMenu} desktopMenu={desktopMenu} />
        </nav>
      </section>
      <section className={desktopMenu ? "header__desktop-menu" : "hidden"}>
        <Nav handleMobileMenu={handleMobileMenu} desktopMenu={desktopMenu} />
      </section>
    </header>
  )
}

export default Header