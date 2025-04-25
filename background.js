chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "showNotification") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "favicon.png",
      title: "VSP Page Refreshed",
      message: message.text,
      priority: 2,
    });
  }
});
