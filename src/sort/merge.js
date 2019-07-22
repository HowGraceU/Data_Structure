/**
 * 合并左数组和右数组，返回从小到大排列的新数组
 * @param {array} left 
 * @param {array} right 
 * @returns {array}
 */
function merge(left, right) {
	let res = [];
	let len = left.length + right.length;

	for (let i = 0, j = 0, k = 0; i < len; i++) {
		if (typeof left[j] !== 'number') {
			res.push(right[k]);
			k++
		} else if (typeof right[k] !== 'number') {
			res.push(left[j]);
			j++
		} else if (left[j] < right[k]) {
			res.push(left[j]);
			j++
		} else {
			res.push(right[k]);
			k++
		}
	}

	return res;
}

module.exports = function sort(arr = this) {
	const len = arr.length;
	if (len < 2) {
		return arr
	};

	const halfLen = Math.ceil(len / 2);
	const leftArr = arr.slice(0, halfLen);
	const rightArr = arr.slice(halfLen);

	return merge(sort(leftArr), sort(rightArr));
}