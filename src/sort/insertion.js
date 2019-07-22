module.exports = function () {
	const arr = this;
	const len = arr.length;

	for (let i = 1; i < len; i++) {
		let item = arr[i];

		let j = i - 1;
		for (; j >= 0; j--) {
			if (arr[j] > item) {
				arr[j + 1] = arr[j];
			} else {
				break;
			}
		}

		arr[j + 1] = item;
	}
}