import Page from '/page.js';
import '/components/human-duration/human-duration.js';

const page = new Page({
  data: {
    timers: [
      { sets: 1, active: 5, resting: 5 },
      { sets: 2, active: 10, resting: 5 },
      { sets: 10, active: 40, resting: 20 },
      { sets: 10, active: 30, resting: 30 },
    ],
  },

  eventHandlers: {
    edit(e) {

      page.newPage({
        src: '/pages/timers/timer/timer.html',
        target: 'timer',
        data: page.getData().timers[e.target.dataset.index],
      });
    },

    delete(e) {
      console.log(e)
    },

    new(e) {
      console.log(e)
    },
  },

  onShow() {},
});
