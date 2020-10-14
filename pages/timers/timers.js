import Page from '/page.js';

new Page({
  data: {
    timers: [
      { sets: 1, active: 5, resting: 5 },
      { sets: 2, active: 10, resting: 5 },
      { sets: 10, active: 40, resting: 20 },
      { sets: 10, active: 30, resting: 30 },
    ],
  },

  onShow() {},
});
