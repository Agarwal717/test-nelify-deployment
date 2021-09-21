let player = videojs('mv', {
	autoplay: '',
	controls: true});

let totalTime = 0;
let tempTotalTime = 0;
let startTime = 0;
let timeup = false;
let duration = 0;
const preview = 10;

player.on('pause', function () {
  console.log("paused")
  if (timeup == true) {
  		player.pause();
  		player.currentTime(1);
	}
  startTime = player.currentTime();
  totalTime += tempTotalTime;
});

player.on('play', function () {
  if (timeup == true) {
  		player.pause();
  		player.currentTime(1);
	}
  duration = player.duration()
  startTime = player.currentTime();
  console.log("Start time");
  console.log(Math.floor(duration))
});

player.on('timeupdate', function () {
  if (timeup == true) {
  		player.pause();
  		player.currentTime(1);
	}
  if (player.paused()) {
    return;
  }
  let currentTime = player.currentTime();
  tempTotalTime = currentTime - startTime;
  let tmptotalTime = totalTime + tempTotalTime;
  let playbackRate = tmptotalTime;
  console.log("Seconds Viewed " + Math.floor(playbackRate) + ' seconds');
  console.log("Remaining " + Math.floor(duration - playbackRate) + ' seconds');
  // console.log("testold - " + Math.floor(tempTotalTime) + ' %');
  if ((playbackRate) > 10148) {
  		timeup = true
  		player.pause();
  		player.currentTime(1);

  }

});
player.ready(function(){
player.src({
    // 'src': 'https://cdn3.wowza.com/1/dEVxZllNMUpRUExK/WEhpaFdn/dash/live/manifest.mpd',
    'src': 'http://169.254.123.111:1935/testvod/mp4:test-video.mp4/manifest.mpd',
    'type': 'application/dash+xml',
    'keySystemOptions': [
        {
            'name': 'com.widevine.alpha',
            'options':{
                'serverURL' : 'https://widevine-dash.ezdrm.com/proxy?pX=02B455'
            }
        },
        {
            'name': 'com.microsoft.playready',
            'options':{
                'serverURL' : 'https://playready.ezdrm.com/cency/preauth.aspx?pX=E6A7EC'
                
            }
        }
		]
	});
})
player.play();