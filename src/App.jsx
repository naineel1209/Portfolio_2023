
import About from './components/About';
import ConnectForm from './components/ConnectForm';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      <ConnectForm />
    </div>
  )
}

export default App
