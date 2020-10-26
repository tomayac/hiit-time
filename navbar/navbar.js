import Page from '/page.js';

const page = new Page({
  eventHandlers: {
    back: () => parent.history.back(),
  },
});
