import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import "./layout.scss"
import { useState } from 'react'

const Layout = () => {
  const [menuMobileActive, setMenuMobileActive] = useState(false)
  return (
    <>
      <Header setMenuMobileActive={setMenuMobileActive}/>
      <Outlet />
    </>
  )
}

export default Layout