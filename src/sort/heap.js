// 构建查询二叉树，但是会把数组种相同的元素忽略
// const BTS = require('../BST');

// function heap(arr = this) {
// 	const bts = new BTS(arr[0]);

// 	for(let i = 1, len = arr.length; i < len; i++) {
// 		bts.insert(arr[i]);
// 	}

// 	return bts.heap();
// }

//大顶堆排序
function adjustHeap(arr, root, end) {
	for (let i = root; i < end;) {
		let left = i * 2 + 1;
		let right = i * 2 + 2;
		let max = i;

		if (left < end && arr[left] > arr[max]) {
			max = left;
		}

		if (right < end && arr[right] > arr[max]) {
			max = right;
		}

		if (i !== max) {
			arr.swap(max, i);
			i = max;
		} else {
			return;
		}
	}
}

module.exports = function heap(arr = this) {
	let len = arr.length;
	for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
		adjustHeap(arr, i, len - 1)
	}

	for (let i = len; i > 1; i--) {
		this.swap(0, i - 1);

		adjustHeap(arr, 0, i - 1);
	}
}