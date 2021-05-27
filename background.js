// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//       "id": "sampleContextMenu",
//       "title": "Sample Context Menu",
//       "contexts": ["selection"]
//     });
//   });
  
// //   // This will run when a bookmark is created.
// // chrome.bookmarks.onCreated.addListener(function() {
// // // do something
// // });

// chrome.runtime.onMessage.addListener(function(message, sender, reply) {
//     chrome.runtime.onMessage.removeListener(event);
// });

// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : 'https://www.google.com/'}]});

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});