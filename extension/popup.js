document.addEventListener('DOMContentLoaded', function() {
    const toggleBlocker = document.getElementById('toggleBlocker');
    
    chrome.runtime.sendMessage({ getBackgroundStatus: true }, function(response) {
      toggleBlocker.checked = response.backgroundStatus;
    });
  
    toggleBlocker.addEventListener('change', function() {
      const isBlockerEnabled = toggleBlocker.checked;
  
      if (isBlockerEnabled) {
        chrome.runtime.sendMessage({ startBackground: true });
      } else {
        chrome.runtime.sendMessage({ stopBackground: true });
      }
    });



  });
  