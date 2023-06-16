import Player from '@vimeo/player';
const throttle = require('lodash.throttle')
const videoPlayer = document.querySelector("#vimeo-player")
const framePlayer = new Player(videoPlayer)

const onPlay = () => framePlayer.getCurrentTime().then(function(seconds) {
    localStorage.setItem("videoplayer-current-time", seconds)
    
}).catch(function(error) {
   
});
let savedSetting;
let parsedSetting
if(localStorage.getItem("videoplayer-current-time") !== null){
     savedSetting =localStorage.getItem("videoplayer-current-time")
parsedSetting = JSON.parse(savedSetting)
}


framePlayer.on("timeupdate", throttle(onPlay,1000))

framePlayer.setCurrentTime(parsedSetting).catch(function(error){
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
}})