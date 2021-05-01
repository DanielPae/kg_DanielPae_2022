const args = process.argv.slice(2);

if (args.length == 0) {
	console.log("No numbers to wordify");
}
else {
	var i;
	var s = num_to_word(parseInt(args[0]));
	for (i = 1; i < args.length; i++) {
		s = s.concat("," + num_to_word(parseInt(args[i])));
	}
	console.log(s);
}


function num_to_word(n) {
	var words = "";
	while (n > 0) {
		var single_digit = Math.floor(n % 10);
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