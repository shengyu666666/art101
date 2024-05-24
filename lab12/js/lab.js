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
    text: "A Gryffindor values bravery, daring, chivalry, and courage. They are generally heroic, determined, and self-sacrificing. But they are also reckless, arrogant, and often act before they think."
  },
  {
    title: "Hufflepuff",
    text: "A Hufflepuff values hard work, dedication, patience, loyalty, and fair play. They are generally kind-hearted, diligent, and reliable. But they are also the underestimated house and many Potterheads treat being sorted into Hufflepuff like being an ordinary and unremarkable wizard."
  },
  {
    title: "Ravenclaw",
    text: "A Ravenclaw values intelligence, wit, wisdom, and creativity. They are generally clever, knowledgeable, and curious. But they are also proud, pedantic, and can be overly competitive in academic pursuits."
  },
  {
    title: "Slytherin",
    text: "A Slytherin values ambition, cunning, leadership, and resourcefulness. They are generally ambitious, determined, and goal-oriented. But they are also the most disliked house due to their dark reputation, and many Potterheads treat being sorted into Slytherin like becoming an evil wizard in training."
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