import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import 'material-symbols';
import { MdDownload } from 'react-icons/md'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const handleDemoUrl = () => {
      window.open(
          "https://drive.google.com/drive/folders/17t9KSx4QmClUnVBUZ1vOMTd1YLUxiUFu?usp=sharing",
          '_blank')
  }
    const links = [
            {
                id: 1,
                link: "aboutme",
                name: "About Me"
              },
              {
                id: 2,
                link: "skills",
                name: "Skills"
              },
              {
                id: 3,
                link: "workexperience",
                name: "WorkExperience"
              },
              {
                id: 4,
                link: "project",
                name: "Project"
              },
              {
                id: 5,
                link: "contactme",
                name: "Contact Me"
              }
    ]

    return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <nav className='nav-wrapper'>
        <div className='nav-content'>
          <Link to={'profilediv'} smooth={true} duration={400} offset={-80}><img className='logo' src="./assets/images/logo.png" alt=''/></Link>
            <ul>
                {links.map(({ id, link, name })=>(
                    <li key={id}
                    className='menu-item'>
                        <Link to={link} smooth={true} duration={400} offset={-130}>{name}</Link>
                    </li>
                ))}
                    <button  className="contact-btn" onClick={() => handleDemoUrl()}>Resume <MdDownload size={20}/></button>
            </ul>
            <button class="menu-btn" onClick={toggleMenu}>
            <span class={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
                {openMenu ? "Close" : "Menu"}
            </span>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar