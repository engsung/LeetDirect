let questions = {};
let targetUrl = '';

/*
On install, load the leetcode urls intro questions
 */
chrome.runtime.onInstalled.addListener(function (details) {
  fetch(chrome.extension.getURL('./questions/questions.json'))
    .then((resp) => resp.json())
    .then(function (jsonData) {
        questions = jsonData;
  });
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // redirect
    targetUrl = details.url;
    let leetcode = "https://leetcode.com/problems/two-sum";
    if (targetUrl.includes("facebook.com")){
      leetcode = questions.hard[Math.floor(Math.random() * questions.hard.length)];
    } else {
      let combined = questions.easy.concat(questions.medium);
      leetcode = combined[Math.floor(Math.random() * combined.length)];
    }

    return {redirectUrl: leetcode};
  },
  {
    urls: ["*://*.facebook.com/*", "*://*.instagram.com/*"],
    types: ['main_frame', 'sub_frame']
  },
  ["blocking"]
);