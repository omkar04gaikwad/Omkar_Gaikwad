import './App.css';
import Navbar from './components/Navbar/Navbar'
import Aboutme from './components/Aboutme/Aboutme'
import Profile from './components/Profile/profile'
import Skills from './components/Skills/Skills';
import Workex from './components/workexperience/workex';
import Projects from './components/Projects/Project';
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import SocialLinks from './components/SocialLinks/SocialLinks'
function App() {
  return (
    <>
    <Navbar 
    />
      <div className='container'>
        <Profile />
        <Aboutme />
        <Skills />
        <Workex />
        <Projects />
        <SocialLinks />
        <ContactMe />
    </div>
    <Footer />
    </>
  );
}

export default App;
