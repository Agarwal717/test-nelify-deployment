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
        <a href='linkhref.html' id='mylink'>click me</a>

        <script type="text/javascript">

        var myLink = document.getElementById('mylink');

        myLink.onclick = function(){

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "fetch_stream.js."; 
            document.getElementsByTagName("head")[0].appendChild(script);
            return false;

        }


        </script>

      </header>
    </div>
  );
}

export default App;
