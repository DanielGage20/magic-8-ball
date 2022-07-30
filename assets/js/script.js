 // Generates a random answer when user asks a question

 const answers = [];
answers[0]= "Most likely!";
answers[1]= "Good luck!";
answers[2]= "100% yes!";
answers[3]= "The future is yours!";
answers[4]= "I better not tell you now!";
answers[5]= "Highly doubtful!";
answers[6]= "Pick another route!";
answers[7]= "Slim chance!";
answers[8]= "It's all upto you!";
answers[9]= "The future is yours!";
answers[10]= "Not happening, sorry!";
answers[11]= "Try another question!";

function questionButton() {
  var userAdjective = prompt("What's on your mind?");
  const random = Math.random() * answers.length;
};

console.log(questionButton);
console.log(random, answers[random]);


