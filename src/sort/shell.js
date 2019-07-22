/**
 * 动态获取希尔增量
 * @param {number} N 数组长度
 * @returns {array} 希尔增量
 */
function getGaps(N) {
	const gaps = [];
	let h = 1;

	while (h < N * 3) {
		gaps.unshift(h);
		h = 3 * h + 1;
	}

	return gaps;
}

module.exports = function () {
	const arr = this;
	const len = arr.length;
	const gaps = getGaps(len);

	for (let i = 0, gapLen = gaps.length; i < gapLen; i++) {
		let gap = gaps[i];

		for (let j = gap; j < len; j++) {
			let item = arr[j];

			let k = j - gap;
			for (; k >= 0; k -= gap) {
				if (arr[k] > item) {
					arr[k + gap] = arr[k];
				} else {
					break;
				}
			}
			arr[k + gap] = item;
		}
	}
}