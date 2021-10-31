var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);
player.on(
  'timeupdate',
  _.throttle(() => {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000),
);
setTime();
function setTime() {
  const time = localStorage.getItem('videoplayer-current-time');
  if (time) {
    player.setCurrentTime(time);
    localStorage.removeItem('videoplayer-current-time');
  }
}
window.addEventListener('DOMContentLoaded', setTime);
