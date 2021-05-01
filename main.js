const args = process.argv.slice(2); // pull command line args and cut off the file locations of node and main.js

if (args.length == 0) { // if there are no args then just print out a message saying that
	console.log("No numbers to wordify");
}
else { // else start building string s to print out
	var i; // i keeps track of where we are in args and s stores all the information we want to print out
	var s = num_to_word(parseInt(args[0])); // wordify the first number for formatting reasons. We don't want the preceding comma in this one
	for (i = 1; i < args.length; i++) {
		s = s.concat("," + num_to_word(parseInt(args[i]))); // loop through args and do the same to all other numbers then concat the results to s
	}
	console.log(s); // print out s
}


function num_to_word(n) {
	if (Number.isNaN(n)) { // if the command line arg was not a number just print that out
		return "Not A Number";
	}
	var words = ""; // will store the words as we build them
	while (n > 0) {
		var single_digit = Math.floor(n % 10); // take the ones digit of n
		switch (single_digit) {  // switch it to the word version
			case 0:
				words = "Zero".concat(words);
				break;
			case 1:
				words = "One".concat(words);
				break;
			case 2:
				words = "Two".concat(words);
				break;
			case 3:
				words = "Three".concat(words);
				break;
			case 4:
				words = "Four".concat(words);
				break;
			case 5:
				words = "Five".concat(words);
				break;
			case 6:
				words = "Six".concat(words);
				break;
			case 7:
				words = "Seven".concat(words);
				break;
			case 8:
				words = "Eight".concat(words);
				break;
			case 9:
				words = "Nine".concat(words);
				break;
		}
		n = Math.floor(n / 10); // remove the ones digit and repeat until we have handled all digits
	}
	return words; // return answer
}