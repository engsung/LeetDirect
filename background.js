chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // redirect
    if (details.url.startsWith('http://facebook.com/')) {
      return {redirectUrl: 'https://leetcode.com/problems/first-missing-positive/'};
    }
  },
  {urls: ["*://*.facebook.com/*"]},
  ["blocking"]
);