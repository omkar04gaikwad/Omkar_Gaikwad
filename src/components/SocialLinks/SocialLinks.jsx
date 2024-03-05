import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import './SocialLinks.css';

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/gaikwadromkar',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/omkar04gaikwad/Omkar_Gaikwad',
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'https://drive.google.com/drive/folders/17t9KSx4QmClUnVBUZ1vOMTd1YLUxiUFu?usp=sharing',
      download: true,
    }
  ];

  return (
    <div className='social-links-container lg:flex flex-col'>
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={`social-link-item bg-gradient-orange`}
          >
            <a
              href={href}
              className="social-link"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
