import Page from '/page.js';
import '/components/human-duration/human-duration.js';

// eslint-disable-next-line no-unused-vars
const page = new Page({
  data: {
    timers: [
      { sets: 1, active: 5, resting: 5, name: 'Ultra short' },
      { sets: 2, active: 10, resting: 5, name: 'Short' },
      { sets: 10, active: 30, resting: 30, name: 'Regular' },
      { sets: 10, active: 40, resting: 20, name: 'Hard' },
    ],
  },

  eventHandlers: {
    edit(e) {
      const index = parseInt(e.target.dataset.index, 10);
      page.newPage({
        src: '/pages/timers/timer/timer.html',
        target: 'timer',
        data: {
          ...page.getData().timers[index],
          index: index,
        },
      });
    },

    delete(e) {
      if (!confirm('Do you really want to delete the timer?')) {
        return;
      }
      const index = parseInt(e.target.dataset.index, 10);
      const timers = page.getData().timers;
      timers.splice(index, 1);
      page.setData({ timers: timers });
    },

    new(e) {
      const length = page.getData().timers.length;
      page.newPage({
        src: '/pages/timers/timer/timer.html',
        target: 'timer',
        data: {
          sets: 1,
          active: 1,
          resting: 1,
          index: length,
        },
      });
    },
  },

  onShow() {
    // Prefetch timer page.
    if (
      document.head.querySelectorAll('link[rel="prefetch"][href*="timer."]')
        .length
    ) {
      return;
    }
    ['html', 'css', 'js'].forEach((extension) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `/pages/timers/timer/timer.${extension}`;
      if (extension !== 'html') {
        link.as = extension === 'css' ? 'style' : 'script';
      }
      document.head.appendChild(link);
    });
  },
});
