/**
 * 合并左数组和右数组，返回从小到大排列的新数组
 * @param {array} left 
 * @param {array} right 
 * @returns {array}
 */
// function merge(left, right) {
// 	let res = [];
// 	let len = left.length + right.length;

// 	for (let i = 0, j = 0, k = 0; i < len; i++) {
// 		if (typeof left[j] !== 'number') {
// 			res.push(right[k]);
// 			k++
// 		} else if (typeof right[k] !== 'number') {
// 			res.push(left[j]);
// 			j++
// 		} else if (left[j] < right[k]) {
// 			res.push(left[j]);
// 			j++
// 		} else {
// 			res.push(right[k]);
// 			k++
// 		}
// 	}

// 	return res;
// }

// function sort(arr = this) {
// 	const len = arr.length;
// 	if (len < 2) {
// 		return arr
// 	};

// 	const halfLen = Math.ceil(len / 2);
// 	const leftArr = arr.slice(0, halfLen);
// 	const rightArr = arr.slice(halfLen);

// 	return merge(sort(leftArr), sort(rightArr));
// }

module.exports = function merge(arr = this, left = 0, right = arr.length, temp = []) {
	if (right - left < 2) {
		return;
	};

	const middle = left + Math.ceil((right - left) / 2);
	merge(arr, left, middle, temp);
	merge(arr, middle, right, temp);

	let i = left,
		j = middle,
		index = left;
	while (i < middle || j < right) {
		if (i >= middle) {
			temp[index++] = arr[j++];
		} else if (j >= right) {
			temp[index++] = arr[i++];
		} else if (arr[i] > arr[j]) {
			temp[index++] = arr[j++];
		} else {
			temp[index++] = arr[i++];
		}
	}

	for (i = left; i < right; i++) {
		arr[i] = temp[i];
	}
}