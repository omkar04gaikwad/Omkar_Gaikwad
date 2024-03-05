import React from 'react';
import "./MobileNav.css";
import { Link } from 'react-scroll'
import { MdDownload } from 'react-icons/md'
const MobileNav = ({ isOpen, toggleMenu}) => {
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

const handleDemoUrl = () => {
    window.open(
        "https://drive.google.com/drive/folders/17t9KSx4QmClUnVBUZ1vOMTd1YLUxiUFu?usp=sharing",
        '_blank')
}
return (
    <>
    <div
        className = {`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>
            <div className='mobile-menu-container'>
            <img className='logo' src="./assets/images/logo.png" alt=''/>

            <ul>
            {links.map(({ id, link, name })=>(
                    <li key={id}
                    className='menu-item'>
                        <Link to={link} smooth={true} duration={400}>{name}</Link>
                    </li>
                ))}
                
                    <button  className="contact-btn" onClick={() => handleDemoUrl()}>Resume <MdDownload size={30}/></button>
            </ul>
        </div>
    </div>
    </>
    
  )
}

export default MobileNav