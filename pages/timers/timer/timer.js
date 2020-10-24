import Page from '/page.js';
import '/components/human-duration/human-duration.js';

const page = new Page({
  data: {

  },

  eventHandlers: {
    setsInput(e) {
      page.setData({sets: parseInt(e.target.value, 10)});
    },

    activeInput(e) {
      page.setData({active: parseInt(e.target.value, 10)});
    },

    restingInput(e) {
      page.setData({resting: parseInt(e.target.value, 10)});
    },
  },

  onShow() {

  },
});
