module.exports = function () {
	const arr = this;
	const len = arr.length;

	const iLen = len - 1;
	for (let i = 0; i < iLen; i++) {
		let min = arr[i];
		let minIndex = i;

		for (let j = i + 1; j < len; j++) {
			if (arr[j] < min) {
				min = arr[j];
				minIndex = j;
			}
		}

		if (minIndex !== i) {
			this.swap(i, minIndex);
		}
	}
}