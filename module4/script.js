
var names = ["anilgupta", "jai", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byePrint(names[i]);
  } else {
    helloPrint(names[i]);
  }
}

function byePrint(name) {
  console.log("Hello" + " " + name);
}


function helloPrint(name) {
  console.log("Good Bye" + " " + name);
}


  



