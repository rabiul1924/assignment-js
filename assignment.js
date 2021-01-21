# assignment-js
// 1 number is kilometerToMeter
//1 kilometer = 1000 meter

function kilometerToMeter (kilometer) {
  const meter = kilometer/0.001;
  return meter;
}
var fifthMeter = kilometerToMeter(5);
console.log(fifthMeter);

var firstMeter = kilometerToMeter(1);
console.log(firstMeter);

// 2 number is budgetCalculator
//watch value is 50
//phone value is 100
//laptop value is 500

function budgetCalculater (watch, phone, laptop) {
  var result = (watch*50) + (phone*100) + (laptop*500);
  return result;
}
var sum = budgetCalculater(1, 2, 5);
console.log(sum);

var sumSecond = budgetCalculater(5, 3, 2);
console.log(sumSecond);


// 3 number is hotelCost
//First 10 days every day have to pay 100
//After 10days another 10 every days have to pay 80
//Lastly daily have to pay 50


function hotelCost (depth) {
  var rent = 0;
  if (depth <= 10){
    rent = depth * 100;
  }
  else if (depth <= 20) {
    var firstTenDays = 10 * 100;
    var remaining = depth - 10;
    var nextTenDays = remaining * 80;
    rent = firstTenDays + nextTenDays;
  }
  else {
    var firstTenDays = 10 * 100;
    var nextTenDays = 10 * 80;
    var remaining = depth - 20;
    var lastDays = remaining * 50;
    rent = firstTenDays + nextTenDays + lastDays;
  }
  return rent;
}

var count = hotelCost(11);
console.log(count);

var countSecondTime = hotelCost(22);
console.log(countSecondTime);




// 4 number is megaFriend
//Found the LargestName 

function megaFriend(array) {
  var longestWord = "";

  array.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

var word = megaFriend(["Rahim", "Saad", "Mehad", "Rabiul", "Rashida", "Rasel", "Karim"]);
console.log(word); 

