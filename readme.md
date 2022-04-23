# _Credit Card Validator_

#### By _**Jessica Baker & Marisa Edgar**_ 

#### _Credit Card Validator_

## Technologies Used

* GIT
* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

## Description

DESCRIBE

## Setup/Installation Requirements

* Go to _https://github.com/jessb-epicodus/credit-card-validator.git_
* Cone this repository to your desktop (or other desired location)
* Navigate to the top level of the directory called _credit-card-validator_
* Open the index.html file in your browser
* _This is not yet published._

## Tests & Expected Outcomes
Test / objective: Split string into an array of substrings as the new array without changing thee original string; "0998445533334452"
Code: 
let num = "0998445533334452";
const ccArr = num.split("");
Expected outcome: ["0", "9", "9", "8"...]

Test / objective: Reverse the order of the elements in the array & create value with the number; "0998445533334452"
Code: ccArr.reverse();
Expected outcome: ["2", "5", "4", "4"...]

Test / objective: Change numbers into intigers.
Code: 
let newArr = [];
ccArr.forEach(function(element) {
  newArr.push(parseInt(element));
Expected outcome: [2, 5, 4, 4...]

Test / objective: If element is odd, double it and move to new array
Code: 
let modified = [];
  for (let i = 0; i < numArr.length; i++) {
    if (isOdd([i]) === false)
      modified.push(parseInt(numArr[i]));
    else
      modified.push(parseInt(numArr[i] * 2));
  }
Expected outcome: 

Test / objective: Takes elements in modified array and if its length is greater than one add both and push the sum to the array & if less equal to 1 push to new array as is
Code: 
let modifiedArr = []
modified.forEach(function(element){
  let stringElement = element.toString()
  if (stringElement.length > 1){
  modifiedArr.push(parseInt(stringElement[0])+parseInt(stringElement[1]))
  }else {
  modifiedArr.push(element)
  }
});
Expected outcome: 

Test / objective: Sum all the elements in the modified array pushed to sumString and if it is divisible by 10 return true
Code: 
let sumOfArray = parsInt(0)
modifiedArr.forEach(function(element){
  sumOfArray += element; 
})
console.log(modifiedArr +"modifiedArr")
let sumString = sumOfArray.toString()
console.log(sumString[-1])
if (parseInt(sumString[-1]) === 0) {
  return "This Number is Valid"
} else {
  return "This Number is not Valid"
  }
}
Expected outcome: 

## Known Bugs

* No known issues

## License

If you run into any issues or have questions, ideas or concerns contact: _<jessb-epicodus@gmail.com>_

Copyright (c) _Jan 2022_