module.exports = function radix(arr = this) {
	const len = arr.length;
	let max = 0;

	for (let i = 0; i < len; i++) {
		max = Math.max(max, arr[i]);
	}

	let place = 1;
	while (max = Math.floor(max / 10)) {
		place++;
	}

	for (let i = 1; i <= place; i++) {

		const radixArr = new Array(10);
		let mod, div;
		for (let j = 0, mod = 10 ** i, div = 10 ** (i - 1); j < len; j++) {
			let item = arr[j];
			let base = Math.floor(item % mod / div);

			if (!radixArr[base]) {
				radixArr[base] = new ListNode(item);
			} else {
				radixArr[base].insert(item);
			}
		}

		for (let k = 0, l = 0; k < 10; k++) {
			let _radix = radixArr[k];

			if (_radix) {
				let listNode = _radix.head;
				while (listNode) {
					arr[l] = listNode.data;

					listNode = listNode.next;
					l++;
				}
			}
		}
	}
}

class ListNode {
	constructor(data) {
		this.head = new Node(data);
	}

	insert(data) {
		let current = this.head;
		let newNode = new Node(data);
		if (current.data > data) {
			newNode.next = current;
			this.head = newNode;
			return;
		}

		while (current.next && current.next.data < data) {
			current = current.next;
		}

		newNode.next = current.next;
		current.next = newNode;
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}