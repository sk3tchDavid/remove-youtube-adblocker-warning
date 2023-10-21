function removeCssSelector() {
  
    const element = document.querySelector('tp-yt-paper-dialog.style-scope');
  
    if (element) {
      element.remove();
    }
  }
  setInterval(removeCssSelector, 100);