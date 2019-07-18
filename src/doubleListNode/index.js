module.exports = class ListNode {
	constructor(head) {
		this.head = new Node(head);
	}

	find(item) {
		let current = this.head;

		while (current && current.el !== item) {
			current = current.next;
		}

		if (current) {
			return current;
		}
		return false;
	}

	findPrevious(item) {
		let current = this.find(item);

		if (current) {
			return current.previous;
		}

		return false;
	}

	findNext(item) {
		let current = this.find(item);

		if (current) {
			return current.next;
		}

		return false;
	}

	insert(newEl, item) {
		let current = this.find(item);
		let nextNode = current.next;

		if (current) {
			let node = new Node(newEl);
			current.next = node;
			node.next = nextNode;
			node.previous = current;

			if (nextNode) {
				nextNode.previous = node;
			}

			return node;
		} else {
			return false;
		}
	}

	remove(item) {
		let current = this.find(item);
		let pre = current.previous;
		let next = current.next;

		pre.next = next;
		if (next) {
			next.previous = pre;
		}

		current.previous = null;
		current.next = null;
	}

	display() {
		let items = [];
		let current = this.head;

		while (current && current.el) {
			items.push(current.el);
			current = current.next;
		}

		return items.join(' <=> ');
	}
}

class Node {
	constructor(el) {
		this.el = el;
		this.previous = null;
		this.next = null;
	}
}