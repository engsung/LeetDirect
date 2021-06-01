chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // redirect
    const targetUrl = details.url;
    if (targetUrl.includes("facebook.com")){
      return {redirectUrl: 'https://leetcode.com/problems/first-missing-positive/'};
    }
    return {redirectUrl: 'https://youtube.com/'};
  },
  {
    urls: ["*://*.facebook.com/*", "*://*.instagram.com/*"],
    types: ['main_frame', 'sub_frame']
  },
  ["blocking"]
);