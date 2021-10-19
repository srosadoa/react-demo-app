import './App.scss';
import { ContactForm } from './components/contact-form/ContactForm';
import { Gallery } from './components/gallery/Gallery';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
          <Route exact path='/contact-form'>
            <ContactForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
