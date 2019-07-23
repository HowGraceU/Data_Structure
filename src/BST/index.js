module.exports = class BST {
	constructor(data) {
		this.root = new Node(data);
	}

	insert(data) {
		let current = this.root;

		while (true) {
			if (current.data === data) {
				return false;
			}

			if (data > current.data) {
				if (current.right) {
					current = current.right;
				} else {
					let node = new Node(data);
					current.right = node;
					return node;
				}
			} else {
				if (current.left) {
					current = current.left;
				} else {
					let node = new Node(data);
					current.left = node;
					return node;
				}
			}
		}
	}

	heap() {
		let current = this.root;
		let order = [];
		let res = [];

		while (order.length || current) {
			if (current) {
				order.push(current);
				current = current.left;
			} else {
				current = order.pop();
				res.push(current.data);
				current = current.right;
			}
		}

		return res;
	}
	// 中序遍历
	inOrder() {
		return this.heap.toString();
	}

	getMin(root = this.root) {
		let min = root;

		while (min.left) {
			min = min.left;
		}

		return min;
	}

	getMax(root = this.root) {
		let max = root;

		while (max.right) {
			max = max.right;
		}

		return max;
	}

	findPre(data) {
		let previous = null;
		let current = this.root;
		let direction;

		if (current.data === data) {
			return {
				previous: null
			};
		}

		while (current && current.data !== data) {
			if (current.data > data) {
				previous = current;
				current = previous.left;
				direction = 'left';
			} else {
				previous = current;
				current = previous.right;
				direction = 'right';
			}
		}

		if (current) {
			return {
				previous,
				direction
			};
		} else {
			return false;
		}
	}

	find(data) {
		let {
			previous,
			direction
		} = this.findPre(data);

		if (previous === undefined) {
			return false;
		}

		if (previous === null) {
			return this.root;
		}

		return previous[direction];
	}

	remove(data) {
		let {
			previous,
			direction
		} = this.findPre(data);

		if (previous === undefined) {
			return false;
		}

		let current = previous ? previous[direction] : this.root;

		if (!current.left && !current.right) {
			previous[direction] = null;
		} else if (!current.left) {
			previous && (previous[direction] = current.right);
			current.right = null;
		} else if (!current.right) {
			previous && (previous[direction] = current.left);
			current.left = null;
		} else {
			let replaceData = this.getMax(current.left).show();
			this.remove(replaceData);
			current.data = replaceData;
		}
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	show() {
		return this.data;
	}
}