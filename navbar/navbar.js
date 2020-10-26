import Page from '/page.js';

const page = new Page({
  eventHandlers: {
    back: (e) => {
      e.preventDefault();
      parent.history.back();
    },
  },
});
