import Page from '../page.js';

// eslint-disable-next-line no-unused-vars
const page = new Page({
  eventHandlers: {
    back: (e) => {
      e.preventDefault();
      window.parent.history.back();
    },
  },
});
