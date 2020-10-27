import Page from '../../../page.js';
import '../../../components/human-duration/human-duration.js';

// eslint-disable-next-line no-unused-vars
const page = new Page({
  eventHandlers: {
    nameInput(e) {
      const value = e.target.value;
      if (value.length) {
        page.setData({ name: value });
      }
    },

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
      const timers = (await page.getPageData('timers')).timers;
      const data = page.getData();
      const timer = {
        sets: data.sets,
        active: data.active,
        resting: data.resting,
        name: data.name,
      };
      timers[page.getData().index] = timer;
      page.setPageData('timers', { timers: timers });
      page.setPageData('workout', {
        activeTimer: {
          sets: data.sets,
          active: data.active,
          resting: data.resting,
          name: data.name,
        },
        sets: data.sets,
        active: data.active,
        resting: data.resting,
        name: data.name,
      });
      window.top.history.back();
      page.setData(null);
    },

    cancel() {
      window.top.history.back();
    },
  },
});
