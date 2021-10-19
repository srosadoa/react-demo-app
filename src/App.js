import './App.scss';
import { ContactForm } from './components/contact-form/ContactForm';
import { Gallery } from './components/gallery/Gallery';

function App() {
  return (
    <>
      <h1>Rick and Morty</h1>
      <Gallery />
      <ContactForm />
    </>
  );
}

export default App;
