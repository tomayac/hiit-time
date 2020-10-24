import Page from '/page.js';
import '/components/human-duration/human-duration.js';

const page = new Page({
  data: {},

  eventHandlers: {
    setsInput(e) {
      const value = parseInt(e.target.value, 10);
      if (value > 0) {
        page.setData({ sets: value });
      }
    },

    activeInput(e) {
      const value = parseInt(e.target.value, 10);
      if (value > 0) {
        page.setData({ active: value });
      }
    },

    restingInput(e) {
      const value = parseInt(e.target.value, 10);
      if (value > 0) {
        page.setData({ resting: value });
      }
    },

    async save() {
      const timers = (await page.getGlobalData('timers')).timers;
      const data = page.getData();
      const timer = {
        sets: data.sets,
        active: data.active,
        resting: data.resting,
      };
      timers[page.getData().index] = timer;
      page.setGlobalData('timers', { timers: timers });
      page.setGlobalData('workout', {
        activeTimer: {
          sets: data.sets,
          active: data.active,
          resting: data.resting,
        },
        sets: data.sets,
        active: data.active,
        resting: data.resting,
      });
      parent.history.back();
      page.setData(null);
    },

    cancel() {
      parent.history.back();
    },
  },

  onShow() {},
});
