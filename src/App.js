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
	<!-- <script src="node_modules/video.js/dist/video.js"></script> -->
	<!-- <script src="//vjs.zencdn.net/7.10.2/video.min.js"></script> -->
	<!-- <script src="dash.js-4.0.1/dist/dash.all.min.js"></script> -->
	<script src="https://unpkg.com/video.js/dist/video.js"></script>
	<!-- <script src="videojs-dash.min.js"></script> -->
	<script src="https://unpkg.com/videojs‐contrib‐dash/dist/videojs‐dash.js"></script>
	<script>
	var player = videojs('example-video');
	player.src({ src: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8', type: 'application/x-mpegURL'});
	player.play();
      </header>
    </div>
  );
}

export default App;
