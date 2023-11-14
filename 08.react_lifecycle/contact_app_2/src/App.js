import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className='container'>
      <h1>연락처 App</h1>
      <div className='contact-box'>
        <ContactForm/>
        <ContactList/>
      </div>
    </div>
  );
}

export default App;
