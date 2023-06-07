import Player from '@vimeo/player';
const throttle = require('lodash.throttle')
const videoPlayer = document.querySelector("#vimeo-player")
const framePlayer = new Player(videoPlayer)

const onPlay = () => framePlayer.getCurrentTime().then(function(seconds) {
    localStorage.setItem("videoplayer-current-time", seconds)
    console.log(seconds)
}).catch(function(error) {
   
});
const savedSetting =localStorage.getItem("videoplayer-current-time")
const parsedSetting = JSON.parse(savedSetting)

framePlayer.on("timeupdate", throttle(onPlay,1000))

framePlayer.setCurrentTime(parsedSetting)