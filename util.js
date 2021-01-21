const INDEX = 'index';

const getTopWindow = (currentWindow) => {
  if (currentWindow.name === INDEX || currentWindow.parent === currentWindow) {
    return currentWindow;
  }
  return getTopWindow(currentWindow.parent);
};

export default getTopWindow;
