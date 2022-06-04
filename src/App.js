import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavChallenge from './components/NavChallenge';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      < NavChallenge/>
      <Profile/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
