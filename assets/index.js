import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const button = document.getElementById('play');
button.onclick = () => player.tooglePlay();

const buttonMute = document.getElementById('muted');
buttonMute.onclick = () => player.toogleMute();
