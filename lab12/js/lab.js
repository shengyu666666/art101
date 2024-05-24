// index.js - purpose and description here
// Lab 12: Conditionals
// Author: Your Name
// Yu Sheng <ysheng15@ucsc.edu>
// Date:
// 24 May 2024
// Constants

const housesArray = [
  {
    title: "Gryffindor",
    text: "Gryffindor values bravery, daring, nerve, and chivalry."
  },
  {
    title: "Hufflepuff",
    text: "A Hufflepuff values hard work, dedication, patience, loyalty, and fair play. They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor."
  },
  {
    title: "Ravenclaw",
    text: "A Ravenclaw values intelligence, knowledge, and wit. The nerds of Hogwarts, but in the best way. They don't need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They're pretty cool and most Potterheads don't mind being sorted into Ravenclaw."
  },
  {
    title: "Slytherin",
    text: "A Slytherin values ambition, cunning, and resourcefulness. They are sly and clever in every way. They don't need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones."
  }
];

function sortingHat(str) {
  let len = str.length;
  let mod = len % 4;
  return housesArray[mod];
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var newText = `<h2>The Sorting Hat has sorted you into ${house.title}!</h2><p>${house.text}</p >`;
  document.getElementById("output").innerHTML = newText;
});