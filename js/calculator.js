var settings= prompt("Which calculator do you what to use? Pick a number : 1- Basic, 2- Advanced, 3-BMI calculator and 4-Trip calculator.");
//1-Basic, 2-Advanced,3-BMI,4-Trip
var number1;
var number2;
var operation;
var errorcode = "Please enter a valid code!";

if(settings=="1"||settings =="2"){
  number1 = parseInt(prompt("Please enter the first number. "));
  number2 = parseInt(prompt("Please enter the second number. "));

  switch (settings) {
      //Basic
    case "1" :
      operation = prompt("What do you want to do with these 2 numbers? Pick a number: 1-Addition, 2-Multiplication, 3-Division or 4-Subtraction.");
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

      //Advanced
    case "2" :
      operation = prompt("What do you want to do with these 2 numbers? Pick a number: 1-Power, 2-square root");
      switch (operation) {
        case "1":
          alert(number1+" to the power of "+ number2+ " is "+ Math.pow(number1,number2)+".");
          break;
        case "2":
          alert("Square root of "+number1 +" is "+ Math.sqrt(number1)+", and the square root of "+number2+" is "+ Math.sqrt(number2));
          break;
        default:
        alert(errorcode);
      }
      break;

        default:
          alert(errorcode);
          break;

      }
}
else if(settings=="3" || settings=="4"){
  switch (settings) {
    //BMI CALC
    case "3":
      settings= prompt("Please select the method you wish to calculate your BMI. 1-Imperial, 2-Metric.");
      switch (settings) {
        case "1":
          //1- weight lb,2-height in
          number1 = parseInt(prompt("Please enter your weight in pounds(lb)."));
          number2 = parseInt(prompt("Please enter your height in inches(in)"));
          alert("Your BMI score is "+ (number1*703)/Math.pow(number2,2) + ".");
          break;
        case "2":
          //1- weight kg,2-height m
          number1 = parseInt(prompt("Please enter your weight in Kilograms(kg)."));
          number2 = parseInt(prompt("Please enter your height in meters(m)"));
          alert("Your BMI score is "+ number1/Math.pow(number2,2)+ ".");

          break;
        default:
          alert(errorcode);
          break;
        }
        break;
      
    case "4":
      var distance = prompt("Please enter the distance to be travelled(miles).");
      var efficiency= prompt("Please enter the fuel efficiency(mpg).");
      var cost = prompt("Please enter cost per gallon (£/Gallon).");
      var speed = prompt("Please enter the speed you will be travevling at(mph).");
      var limit = 60;
      var totalCost;
      var fuel;
      var wastedFuel;
      var ineffective;
      // time

      var time = "Your trip will take " +(distance/speed)+ " hours, ";
      if(speed>0 && speed <=limit){
        fuel =(distance/efficiency);
      }else{
        ineffective = (speed-limit)*2;
        wastedFuel = distance/ineffective;
        fuel =(distance/efficiency);//effective fuel
        fuel = Math.round(fuel + wastedFuel);//total fuel
      }
      totalCost= " and will cost £" + (cost*fuel)+" .";
      alert(time+totalCost);
      break;

    default:
      alert(errorcode);
      break;
      }
}else {
  alert(errorcode);
}
