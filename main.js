const args = process.argv.slice(2);
console.log("These are the given args: " + args);

if (args.length > 0) {
	console.log(num_to_word(parseInt(args[0])));
}
else {
	console.log("No numbers to wordify");
}


function num_to_word(n) {
	var words = "";
	while (n > 0) {
		var single_digit = Math.floor(n % 10);
		console.log("single_digit: " + single_digit + ", n: " + n);
		switch (single_digit) {
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
		n = Math.floor(n / 10);
	}
	return words;
}