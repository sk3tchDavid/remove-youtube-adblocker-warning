let checked = false;
let intervalId = null;

function startBackgroundScripts() {
  checked = true;
  
  if (!intervalId && checked) {
    intervalId = setInterval(function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        const currentUrl = tab.url;
        if (currentUrl.includes("watch?v=")) {
          const newUrl = currentUrl.replace(/watch\?v=/g, "embed/");
          chrome.tabs.create({ url: newUrl });
        }
      });
    }, 1000); //1s
  }
}

function stopBackgroundScripts() {
  checked = false;
  
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.startBackground) {
    startBackgroundScripts();
  } else if (request.stopBackground) {
    stopBackgroundScripts();
  } else if (request.getBackgroundStatus) {
    sendResponse({ backgroundStatus: checked });
  }
});
