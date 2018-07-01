var settings= prompt("Which calculator do you what to use? Pick a number : 1- Basic, 2- Advanced.");
//1-Basic, 2-Advanced,3-BMI,4-Trip
var number1;
var number2;
var operation;
var result;

switch (settings) {
  //Basic
  case "1" :
    number1 = parseInt(prompt("Please enter the first number. "));
    number2 = parseInt(prompt("Please enter the second number. "));
    operation = prompt("What do you want to do with these 2 numbers? Pick a number: 1-Addition, 2-Multiplication, 3-Division or 4-Subtraction.");

    // operation=operation;
    alert(operation );
    // Pick a number: 1-Addition, 2-Multiplication, 3- Division, 4-Subtraction
    switch (operation) {
      case "1":
        operation = "+";
        alert(number1+" "+operation+" "+number2 +" = "+ (number1+number2));
        break;
      case "2":
        operation = "*";
        alert(number1+" "+operation+" "+number2 +" = "+ number1*number2);
        break;
      case "3":
        operation = "/";
        alert(number1+" "+operation+" "+number2 +" = "+number1/number2);
        break;
      case "4":
        operation = "-";
        alert(number1+" "+operation+" "+number2 +" = "+number1-number2);
        break;
      default:
      alert("Please enter a valid operation listed in the question.");
      break;
    }
    break;

  case "2" :
    alert("hello")
    break;

  case "3" :
    alert("hello")
    break;

  case "4" :
    alert("hello")
    break;

  default:
    alert("Please enter a valid code.");
    break;

}
