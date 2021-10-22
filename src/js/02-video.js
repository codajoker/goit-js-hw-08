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

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
