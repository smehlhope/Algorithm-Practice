// Print 1-255
// Write a program (sets of instructions) that would print all the numbers from 1 to 255.
for (var i = 0; i <= 255; i++) {
	console.log(i);
};
 

// Print odd numbers between 1-255
// Write a program (sets of instructions) that would print all the odd numbers from 1 to 255.
for (var i = 0; i <= 255; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
};
 

// Print Sum
// Write a program that would print the numbers from 0 to 255 but this time, 
// it would also print the sum of the numbers that have been printed so far. 
// For example, your output should be something like this:
// New number: 0 Sum: 0
// New number: 1 Sum: 1
// New Number: 2 Sum: 3
// New number: 3 Sum: 6
// New Number: 255 Sum: ___.
// Do NOT use an array to do this exercise.
var sum = 0;  
for (var i = 0; i <= 255; i++) {
	sum = sum + i;
	console.log("New number: " + i + " Sum: " + sum);
};

 

// Iterating through an array
// Given an array X, say [1,3,5,7,9,13], write a program that would iterate through each member 
// of the array and print each value on the screen.  Being able to loop through each member of the 
// array is extremely important.
function iterPrint(arr) {
	for (var i =0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};
iterPrint(arr);
 

// Find Max
// Write a program (sets of instructions) that takes any array and prints the maximum value 
// in the array. Your program should also work with a given array that has all negative numbers 
// (e.g. [-3, -5, -7]), or even a mix of positive numbers, negative numbers and zero.
function findMax(arr) {
	var max = x[0]
	for (var i = 0; i < arr.length, i++) {
		if (x[i] > max) {
			max = x[i];
		}
		console.log(max);
};
 

// Get Average
// Write a program that takes an array, and prints the AVERAGE of the values in the array. 
// For example for an array [2, 10, 3], your program should print an average of 5. Again, make sure
// you come up with a simple base case and write instructions to solve that base case first, 
// then test your instructions for other complicated cases. 
// You can use a count function with this assignment.
function findAvg(arr) {
	var sum = 0;
	var divisor = 0;
	var avg = 0;
	for (var i = 0; i < arr.length; i++) {
		divisor++;
		sum += arr[i];
		avg = sum/divisor;
	}
	console.log(avg);
}

function fdAvg(arr) {
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
 average = sum / arr.length
 console.log(average);
}
 

// Array with Odd Numbers
// Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. 
// When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255].
function oddNumbers() {
    var num = 1;
    var Y =[];
    for (var num = 1; num <= 255; num++) {
        if (num % 2 !== 0) {
            Y.push(num);
        }
    }
}
oddNumbers();
 
 function oddNums() {
  var num = 0;
  var y = [];
  for (var num=1; num <=255; i=i+2) {
    Y.push(num);
  }
 }
 oddNums();

// Greater Than y
// Write a program that takes an array and returns the number of values in that array whose 
// value is greater than a given value y. For example if array = [1, 3, 5, 7] and y = 3, after your 
// program is run it will print 2 (since there are two values in the array that are greater than 3).
function greaterY(arr,Y) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > Y) {
			count++;
		}
	}
    console.log(count);
}
 greaterY([1, 3, 5, 7], 3);


// Square the values
// Given any array x, say [1, 5, 10, -2], create an algorithm (sets of instructions) that multiplies 
// each value in the array by itself.  When the program is done, the array x should have values 
// that have been squared, say [1, 25, 100, 4].
function squaredValue(arr) {
	var sqrArr = [];
	for (var i = 0; i < arr.length; i++) {
		var sqd = arr[i] * arr[i];
		sqrArr.push(sqd);
	}
	return sqrArr;
}
squaredValue([1, 5, 10, -2]);
 

// Eliminate Negative Numbers
// Given any array x, say [1, 5, 10, -2], create an algorithm that replaces any 
// negative number with the value of 0.  When the program is done, x should 
// have no negative values, say [1, 5, 10, 0].
function noNeg(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
    return arr;
}
console.log(noNeg([1, 5, 10, -2]));

 

// Max, Min, and Average 
// Given any array x, say [1, 5, 10, -2], create an algorithm that prints the maximum number 
// in the array, the minimum value in the array, and the average of the values in the array. 
function maxMinAvg(arr) {
   var arrnew = [];
   var max = 0;
   var min = 0;
   var avg = 0;    
   var sum = 0;
  var divisor = 0;
   for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      max = arr[0];
    } else if (arr[i] > max) {
      max = arr[i];
    };
    if (i === 0) {
      min = arr[0];
    } else if ( arr[i] < min) {
      min = arr[i];
    };
    divisor++;
    sum += arr[i];
    avg = sum/divisor;
   }
   return [max, min, avg];
 }
 console.log(maxMinAvg([1, 5, 10, -2]));

 function mma(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  sum = sum + arr[0];
  for (var i = 1; i< arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
    var avg = sum/arr.length;
  }
  return [max, min, avg];
 }
 

// Shifting the values in the array
// Given any array x, say [1, 5, 10, 7, -2], create an algorithm that shifts each number 
// by one to the front.  For example, when the program is done, an x of [1, 5, 10, 7, -2] 
// should become [5, 10, 7, -2, 0].
 function swapfirstlast (arr) {
    var firstnum = arr.shift();
    var lastnum = arr.pop();
    arr.unshift(lastnum);
    arr.push(firstnum);
   return arr; 
}
console.log(swapfirstlast([1, 5, 10, 7, -2]));
 
// Shift all values of a given array up one place and replace the last number with 0.
 function move(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    //arr.length - 1 because otherwise would get an error since there is nothing past the last 
    // number. So, you'll "manuall" set the last array value to 0
    arri] = arr[i+1];
  }
  arr[arr.length-1] = 0;
 }


// Number to string
// Write a program that takes an array of numbers and replaces any negative number with the string 
// 'Dojo'.  For example if array x is initially [-1, -3, 2], after your program is done that array 
// should be ['Dojo', 'Dojo', 2].
function numToStr(arr) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
          arr[i] = "Dojo";
      } 
  }
  return arr; 
}
console.log(numToStr([-1, -3, 2]));