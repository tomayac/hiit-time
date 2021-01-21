const getTopWindow = (currentWindow) => {
  if (currentWindow.parent === currentWindow) {
    return currentWindow;
  }
  try {
    // A pseudo read operation so it throws in case where the app is embedded in
    // a cross-origin iframe.
    currentWindow.parent.location.origin.toUpperCase();
  } catch {
    return currentWindow;
  }
  return getTopWindow(currentWindow.parent);
};

export default getTopWindow;
