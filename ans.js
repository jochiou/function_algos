// question 1
console.log("=============Start question 1==============");
function sigma(num){
    // YOUR CODE HERE
	let ans = 0;
	for(let num1 = 1; num1 <= num; num1++){
		ans += num1;
	}
	return ans;
}
var sum = sigma(5);
console.log(sum);


// question 2
console.log("=============Start question 2==============");
function greaterThanY(arr, y){
    // YOUR CODE HERE
	let counter = 0;
	for(let index = 0; index < arr.length; index++){
		if(arr[index] > y){
			counter++;
		}	
	}
	return counter;
}
var result = greaterThanY([1,6,8,3,5,2], 4);
console.log(result);


// question 3
console.log("=============Start question 3==============");
function shiftLeft(arr){
    // YOUR CODE HERE
	for(let index = 0; index < arr.length; index++){
		if(index == arr.length -1){
			arr[index] = 0;
			return arr;
		}else{
			arr[index] = arr[index+1];
		}
	}
	return arr;
}
var resultArr = shiftLeft([1,2,3,4,5]);
console.log(resultArr);


// question 4
console.log("=============Start question 4==============");
let testCase1 = [sigma(10), sigma(1), sigma(0), sigma(-10)];
let testCase2 = [greaterThanY([5,6,7,8,9,10], 4), greaterThanY([5,6,7,8,9,10], 12), greaterThanY([1,6,8,3,5,2], -5), greaterThanY([-2,-6,-8,-3,-5,-2], -4), greaterThanY([], 5)];
let testCase3 = [shiftLeft([1,-7,2,-5,8,7,-11,10]), shiftLeft(["hello","hi","yo","wazzup"]), shiftLeft([1,2]), shiftLeft([1]), shiftLeft([])];
let testCase4 = [];

function testCase(testcase1, testcase2, testcase3, testcase4){
	console.log("Test case results for question 1");
	for(let index = 0; index < testcase1.length; index++){
		console.log(testcase1[index]);
	}

	console.log("Test case result for question 2");
	for(let index = 0; index < testcase2.length; index++){
                console.log(testcase2[index]);
        }

	console.log("Test case result for question 3");
	for(let index = 0; index < testcase3.length; index++){
                console.log(testcase3[index]);
        }
}
testCase(testCase1, testCase2, testCase3, testCase4);

