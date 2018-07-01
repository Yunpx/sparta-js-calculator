# sparta-js-calculator

Your task is to write a command line calculator application that has two settings, basic and advanced.
- First you will need to ask the user for which calculator they want to use
- Then you will need to ask the user for the numbers to operate on.
- Then you need to work out what to do with the numbers, depending on what operation they choose.

Basic:
 - Additon
 - Multiplication
 - Division
 - Subtraction

 Advanced:
 - Power
 - Square root



 ### Bonus task
 - Add some additional functionality
 Add the following calculator feature into your app.

BMI Calculator
 Calculate the BMI when given the height and weight - the user should be able to choose between the imperial and the metric system

 ### SUPER Bonus task
 Add the following calculator feature into your app.
 Trip Calculator

This feature asks the user for four inputs; distance, fuel efficiency (mpg), cost per gallon, speed and it will give you the time and price of your journey.

Example output: "Your trip will take 3.5 hours and cost £255.33."
Note: For every 1 MPH over 60 MPH, reduce the the MPG by 2 MPG (i.e. a car that normally gets 30 mpg would only get 28 mpg if its speed were 61 mph. Yes this gets silly at high speed where mpg goes to zero or gets negative)

------------------------------------------------------

## Solution
I have used  `switch` and provided an easy interface to allow the users to enter numbers and operations with ease.

This is my layout for switch
![layout](referencePics\MyDiagram.jpg)

### Basic and Advanced Calculator
For the first 2 tasks they are pretty straight forward. Setting the numbers and select operations would give you back the result.

### BMI calculator
I have used these two functions for this task.
###### Imperial method
![Imperial](referencePics\bmiformula-imperial.png)

###### Metric method
![Metric](referencePics\bmiformula-metric.png)

From http://www.whathealth.com/bmi/formula.html.

### Trip calculator

I have created a lot of variables for this part, to avoid confusion.

Time = Distance / Speed.

For the fuel cost, there are 2 types of consumption, one is wasted, another is effective-Fuel efficiency. To my understanding, I have separated Fuel consumption into initial fuel consumption(Fuel needed to maintain speed) and change in the fuel as speed increase.

For example:
> If the car is has a fuel efficiency at 30mpg, and it's efficiency will decrease when its speed increases over 60mph, every 1mph increase = 2mpg decrease.

>So at speed over 60mph, the inefficiency will be increasing at 2mpg per 1mph.
```javascript
Inefficiency = (Speed-60)*2
```
> fuel cost would be
```javascript
wastedFuel = distance/ineffective
effectiveFuel = distance/efficiency
totalFuel = effectiveFuel + ineffectiveFuel
```
### Issues
Can't check for NaN input.
