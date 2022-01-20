//utility logic


//business logic
let num = "0998445533334452";
let ccArr = num.split("");
let revArr = ccArr.reverse();
//loop using for, forEach, map, 
let newArr = [];
ccArr.forEach(function(element) {
  newArr.push(parseInt(element));
});

//UI logic