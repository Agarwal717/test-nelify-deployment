import logo from './logo.svg';
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

      </header>
    </div>
  );
}

var foo = function(){
  var button = document.createElement('button');
  button.innerHTML = 'click me';
  button.onclick = function(){
    alert('here be dragons');return false;
  };
  // where do we want to have the button to appear?
  // you can append it to another element just by doing something like
  // document.getElementById('foobutton').appendChild(button);
  document.body.appendChild(button);
};

export default App;
