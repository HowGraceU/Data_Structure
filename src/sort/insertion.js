module.exports = function () {
	const arr = this;
	const len = arr.length;

	for (let i = 1; i < len; i++) {
		let item = arr[i];

		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] > item) {
				this.swap(j, j + 1);
			} else {
				break;
			}
		}
	}
}