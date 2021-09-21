const player = videojs('videoPlayer', {
	autoplay: 'muted',
	controls: true,
  fluid: true
});

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
  if ((playbackRate) > 1148) {
  		timeup = true
  		player.pause();
  		player.currentTime(1);

  }

});