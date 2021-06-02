let questions = {};
let targetUrl = '';

/*
Description: on install, load the leetcode urls into questions
 */
chrome.runtime.onInstalled.addListener(function (details) {
  fetch(chrome.extension.getURL('./questions/questions.json'))
    .then((resp) => resp.json())
    .then(function (jsonData) {
        questions = jsonData;
  });
});

/*
Description: listen for webrequests and redirect them to leetcode
 */
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // redirect
    targetUrl = details.url;
    let leetcode = "https://leetcode.com/problems/two-sum";
    if (targetUrl.includes("chess.com") || targetUrl.includes("netflix.com") || targetUrl.includes("twitch.tv")){
      leetcode = questions.hard[Math.floor(Math.random() * questions.hard.length)];
    } else {
      let combined = questions.easy.concat(questions.medium);
      leetcode = combined[Math.floor(Math.random() * combined.length)];
    }

    return {redirectUrl: leetcode};
  },
  {
    urls: ["*://*.facebook.com/*", "*://*.instagram.com/*", "*://*.chess.com/*", "*://*.netflix.com/*", "*://*.twitch.tv/*"],
    types: ['main_frame', 'sub_frame']
  },
  ["blocking"]
);