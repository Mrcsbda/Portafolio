import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import "./layout.scss"
import { useState } from 'react'

const Layout = () => {
  const [menuMobileActive, setMenuMobileActive] = useState(false)
  return (
    <div className={`layout ${menuMobileActive ? "layout__fixed" : ""}`}>
      <Header setMenuMobileActive={setMenuMobileActive}/>
      <Outlet />
    </div>
  )
}

export default Layout