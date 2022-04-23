//utility logic


//business logic
// let num = [0998445533334452];
// let ccArr = num.split("");
// let revArr = ccArr.reverse(); 
// let intArr = [];
// ccArr.forEach(function(element) {
//   intArr.push(parseInt(element));
// });

let modified = [];
for (let i = 0; i < intArr.length; i++) {
  if (isOdd([i]) === false) {
    modified.push(parseInt(intArr[i]));
  } else
    modified.push(parseInt(intArr[i] * 2));

    let modifiedArr = []
modified.forEach(function(element){
  let stringElement = element.toString()
  if (stringElement.length > 1){
  modifiedArr.push(parseInt(stringElement[0])+parseInt(stringElement[1]))
  } else {
  modifiedArr.push(element)
  }
});
let sumModArray = parsInt(0)
modifiedArr.forEach(function(element){
  sumModArray += element; 
})
console.log(modifiedArr +"modifiedArr")
let sumString = sumModArray.toString()
if (parseInt(sumString[-1]) === 0) {
  return "This Number is Valid"
} else {
  return "This Number is not Valid"
  }
}

//UI logic
$(document).ready(function() {
  $("#cc-validator").submit(function(event) {
    event.preventDefault();
    let ccnum = $("#ccnum").val();
  });
  $("#valid").show();
});