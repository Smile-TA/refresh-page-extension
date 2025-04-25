setInterval(() => {
  window.location.reload();
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage({
      type: "showNotification",
      text: `Page refreshed at ${new Date()}, with url: ${window.location}`,
    });
  }
}, 2000);
