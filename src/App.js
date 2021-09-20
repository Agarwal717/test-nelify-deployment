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
        
	<video id=example-video width=600 height=300 muted autoplay="muted" class="video-js vjs-default-skin" controls> </video>

	<!-- <script src="video.js"></script> -->
	<link href="https://unpkg.com/video.js/dist/video-js.min.css" rel="stylesheet">
	
      </header>
    </div>
  );
}

export default App;
