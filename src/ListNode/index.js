module.exports = class ListNode {
	constructor(head) {
		this.head = new Node(head);
	}

	find(item) {
		let head = this.head;
		if (head.el === item) {
			return head;
		}

		let pre = this.findPrevious(item);

		if (pre) {
			return pre.next;
		}

		return false;
	}

	findPrevious(item) {
		let current = this.head;
		let next = current.next;

		while (next && next.el !== item) {
			current = next;
			next = current.next;
		}

		if (next && next.el === item) {
			return current;
		}

		return false;
	}

	insert(newEl, item) {
		let findNode = this.find(item);

		if (findNode) {
			let node = new Node(newEl);
			node.next = findNode.next;
			findNode.next = node;
			return node;
		} else {
			return false;
		}
	}

	remove(item) {
		let pre = this.findPrevious(item);
		let next = pre.next.next;

		pre.next = next;
	}

	display() {
		let items = [];
		let current = this.head;

		while(current && current.el) {
			items.push(current.el);
			current = current.next;
		}

		return items.join(' => ');
	}
}

class Node {
	constructor(el) {
		this.el = el;
		this.next = null;
	}
}