setInterval(() => {
  window.location.reload();
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage({
      type: "showNotification",
      text: `Page refreshed at ${new Date()}, with url: ${window.location}`,
    });
  }
}, 1000 * 60 * 60 * 2);
