module.exports = function bucket(arr = this) {
	const len = arr.length;

	let max = 0;
	for (let i = 0; i < len; i++) {
		max = Math.max(max, arr[i]);
	}

	const interval = 20;
	const BUCKET_NUM = Math.floor(max / interval);
	const buckets = new Array(BUCKET_NUM);

	for (let i = 0; i < len; i++) {
		let item = arr[i];
		let index = Math.floor(item / interval);
		if (!buckets[index]) {
			buckets[index] = new ListNode(item);
		} else {
			buckets[index].insert(item);
		}
	}

	for (let i = 0, j = 0; i <= BUCKET_NUM; i++) {
		let bucket = buckets[i];

		if (bucket) {
			let listNode = bucket.head;
			while (listNode) {
				arr[j] = listNode.data;

				listNode = listNode.next;
				j++;
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