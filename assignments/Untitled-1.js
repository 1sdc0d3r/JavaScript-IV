let revStr = [];
function reverseString(str) {
  str.split("");
  for (let i = 0; i < str.length; i++) {
    revStr.unshift(str[i]);
    // console.log(revStr);
  }
  revStr = revStr.join("");
  //   console.log(revStr);
}

reverseString("hello"); // "olleh"
console.log(revStr);
