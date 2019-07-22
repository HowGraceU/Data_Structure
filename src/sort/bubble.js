module.exports = function () {
	const arr = this;
	const len = arr.length;

	const iLen = len - 1;
	for (let i = 0; i < iLen; i++) {
		const jLen = iLen - i;
		for (let j = 0; j < jLen; j++) {
			if (arr[j] > arr[j + 1]) {
				this.swap(j, j + 1);
			}
		}
	}
}