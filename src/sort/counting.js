module.exports = function counting(arr = this) {
	let len = arr.length;
	let max = 0;

	let countArr = [];
	for (let i = 0; i < len; i++) {
		let item = arr[i];

		if (!countArr[item]) {
			countArr[item] = 0;
		}
		countArr[item]++;

		max = Math.max(max, item);
	}

	for (let i = 0, j = 0; i <= max; i++) {
		let count = countArr[i];
		if (count) {
			while (count--) {
				arr[j] = i;
				j++
			}
		}
	}
}