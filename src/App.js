import logo from './logo.svg';
import Article from './components/Article';
import './App.css';

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
          title={'test title1'}
          content={'test content1'}
        />
        <Article 
          title={'test title2'}
          content={'test content2'}
        />
        <Article 
          title={'test title3'}
          content={'test content3'}
        />
        
      </header>
    </div>
  );
}

export default App;
