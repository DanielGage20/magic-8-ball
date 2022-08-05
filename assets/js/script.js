 //* Generates a random answer when user asks a question

 function questionButton() {
  prompt ("What do you want to know?");
  window.alert(answer);
}

 let randomNumber = Math.floor(Math.random() * 12);
 let answer = '';

 switch (randomNumber) {
  case 0:
    answer = 'Most likely!';
    break;
    case 1:
      answer = 'Good Luck!';
      break;
      case 2:
      answer = '100% yes';
      break;
      case 3:
      answer = 'The future is yours!';
      break;
      case 4:
      answer = 'I better not tell you now!';
      break;
      case 5:
      answer = 'Highly doubtful!';
      break;
      case 6:
      answer = 'Pick another route!';
      break;
      case 7:
      answer = 'Slim chance!';
      break;
      case 8:
      answer = 'It is all upto you!';
      break;
      case 9:
      answer = 'The future is yours!';
      break;
      case 10:
      answer = 'Not happening, sorry!';
      break;
      case 11:
      answer = 'Try another question!';
      break;
 }
 
console.log(answer);

