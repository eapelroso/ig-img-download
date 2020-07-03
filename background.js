browser.contextMenus.create({
  id: "download-image",
  title: "Download IG image"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "download-image") {
    browser.tabs.executeScript({
      file: "ig-img-download.js"
    });
  }
});
