import { NavLink } from "react-router-dom"
import "./nav.scss"

const Nav = ({handleMobileMenu}) => {
    const menu = [
        {
            path: "/",
            name: "Inicio"
        },
        {
            path: "habilidades",
            name: "Habilidades"
        },
        {
            path: "proyectos",
            name: "Proyectos"
        },
        {
            path: "contacto",
            name: "Contacto"
        }
    ]

    return (
        <ul className="header__nav-list">
            {
                menu.map((item, i) => (
                    <li className="header__nav-item" key={i}>
                        <NavLink to={item.path}
                        className="header__link"
                        onClick={()=> handleMobileMenu(false)}>{item.name}</NavLink>
                        <hr className={`header__parting-line hr-${i}`}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default Nav