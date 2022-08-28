import './App.css';
import Contact from './Containers/ContactMe/Contact';
import Home from './Containers/Home/Home';
import Testimonial from './Containers/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
}

export default App;