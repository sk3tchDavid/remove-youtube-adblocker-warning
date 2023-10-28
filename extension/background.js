setInterval(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      const currentUrl = tab.url;
      if (currentUrl.includes("watch?v=")) {
        const newUrl = currentUrl.replace(/watch\?v=/g, "embed/");
        chrome.tabs.update(tab.id, { url: newUrl });
      }
    });
  }, 1000); //1s
  