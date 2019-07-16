module.exports = class Queue {
	constructor() {
		this.store = [];

		Object.defineProperty(this, 'length', {
			get() {
				return this.store.length;
			}
		})
	}

	enqueue(el) {
		return this.store.push(el);
	}

	dequeue() {
		return this.store.shift();
	}

	front() {
		return this.store[0];
	}

	back() {
		return this.store[this.length - 1];
	}

	toString() {
		return this.store.join('\n');
	}

	empty() {
		return this.store.length === 0;
	}
}