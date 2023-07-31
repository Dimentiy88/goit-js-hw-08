import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playbackTimeKey = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(playbackTimeKey, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player
  .setCurrentTime(localStorage.getItem(playbackTimeKey))
  .catch(function (error) {
    console.error(error);
  });
