const questions = {
  "easy": [
      "https://leetcode.com/problems/two-sum",
      "https://leetcode.com/problems/reverse-integer",
      "https://leetcode.com/problems/palindrome-number",
      "https://leetcode.com/problems/roman-to-integer",
      "https://leetcode.com/problems/longest-common-prefix",
      "https://leetcode.com/problems/valid-parentheses",
      "https://leetcode.com/problems/merge-two-sorted-lists",
      "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
      "https://leetcode.com/problems/remove-element",
      "https://leetcode.com/problems/implement-strstr",
      "https://leetcode.com/problems/search-insert-position",
      "https://leetcode.com/problems/maximum-subarray",
      "https://leetcode.com/problems/length-of-last-word",
      "https://leetcode.com/problems/plus-one",
      "https://leetcode.com/problems/add-binary",
      "https://leetcode.com/problems/sqrtx",
      "https://leetcode.com/problems/climbing-stairs",
      "https://leetcode.com/problems/remove-duplicates-from-sorted-list",
      "https://leetcode.com/problems/merge-sorted-array",
      "https://leetcode.com/problems/binary-tree-inorder-traversal",
      "https://leetcode.com/problems/same-tree",
      "https://leetcode.com/problems/symmetric-tree",
      "https://leetcode.com/problems/maximum-depth-of-binary-tree"
  ],
  "medium": [
      "https://leetcode.com/problems/add-two-numbers",
      "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      "https://leetcode.com/problems/longest-palindromic-substring",
      "https://leetcode.com/problems/zigzag-conversion",
      "https://leetcode.com/problems/string-to-integer-atoi",
      "https://leetcode.com/problems/container-with-most-water",
      "https://leetcode.com/problems/integer-to-roman",
      "https://leetcode.com/problems/3sum",
      "https://leetcode.com/problems/3sum-closest",
      "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
      "https://leetcode.com/problems/4sum",
      "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
      "https://leetcode.com/problems/generate-parentheses",
      "https://leetcode.com/problems/swap-nodes-in-pairs",
      "https://leetcode.com/problems/divide-two-integers",
      "https://leetcode.com/problems/next-permutation",
      "https://leetcode.com/problems/search-in-rotated-sorted-array",
      "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array",
      "https://leetcode.com/problems/valid-sudoku",
      "https://leetcode.com/problems/count-and-say",
      "https://leetcode.com/problems/combination-sum",
      "https://leetcode.com/problems/combination-sum-ii",
      "https://leetcode.com/problems/multiply-strings",
      "https://leetcode.com/problems/jump-game-ii",
      "https://leetcode.com/problems/permutations",
      "https://leetcode.com/problems/permutations-ii",
      "https://leetcode.com/problems/rotate-image",
      "https://leetcode.com/problems/group-anagrams",
      "https://leetcode.com/problems/powx-n",
      "https://leetcode.com/problems/spiral-matrix"
  ],
  "hard": [
      "https://leetcode.com/problems/median-of-two-sorted-arrays",
      "https://leetcode.com/problems/regular-expression-matching",
      "https://leetcode.com/problems/merge-k-sorted-lists",
      "https://leetcode.com/problems/reverse-nodes-in-k-group",
      "https://leetcode.com/problems/substring-with-concatenation-of-all-words",
      "https://leetcode.com/problems/longest-valid-parentheses",
      "https://leetcode.com/problems/sudoku-solver",
      "https://leetcode.com/problems/first-missing-positive",
      "https://leetcode.com/problems/trapping-rain-water",
      "https://leetcode.com/problems/wildcard-matching",
      "https://leetcode.com/problems/n-queens",
      "https://leetcode.com/problems/n-queens-ii",
      "https://leetcode.com/problems/permutation-sequence",
      "https://leetcode.com/problems/valid-number",
      "https://leetcode.com/problems/text-justification",
      "https://leetcode.com/problems/edit-distance",
      "https://leetcode.com/problems/minimum-window-substring",
      "https://leetcode.com/problems/largest-rectangle-in-histogram",
      "https://leetcode.com/problems/maximal-rectangle",
      "https://leetcode.com/problems/scramble-string",
      "https://leetcode.com/problems/distinct-subsequences",
      "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii",
      "https://leetcode.com/problems/binary-tree-maximum-path-sum",
      "https://leetcode.com/problems/word-ladder-ii",
      "https://leetcode.com/problems/word-ladder"
  ]
};

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // redirect
    const targetUrl = details.url;
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