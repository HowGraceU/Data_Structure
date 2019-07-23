module.exports = function quick(arr = this, start = 0, end = arr.length - 1) {
	if (end - start < 1) {
		return;
	}

	const pivot = arr[start];
	let flag = true; // 为真从右边找
	let left = start;
	let right = end;

	while (left !== right) {
		if (flag) {
			if (arr[right] < pivot) {
				arr[left] = arr[right];
				left++;
				flag = !flag;
			} else {
				right--;
			}
		} else {
			if (arr[left] > pivot) {
				arr[right] = arr[left];
				right--;
				flag = !flag;
			} else {
				left++;
			}
		}
	}

	arr[left] = pivot;

	quick(arr, start, left - 1);
	quick(arr, left + 1, end);
}