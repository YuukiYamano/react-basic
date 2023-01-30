import logo from './logo.svg';
import { Article } from './components';
import './App.css';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Article 
        title={'Test Title'}
        content ={'Test Content'}
        />

        <TextInput
        
        />

      </header>
    </div>
  );
}

export default App;
