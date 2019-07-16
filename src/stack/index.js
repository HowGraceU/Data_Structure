module.exports = class Stack {
	constructor() {
		this.store = [];

		Object.defineProperty(this, 'top', {
			get() {
				return this.store.length;
			}
		})
	}

	push(el) {
		return this.store.push(el);
	}

	pop() {
		return this.store.pop();
	}

	peek() {
		return this.store[this.top - 1];
	}
	
	clear() {
		return this.store = [];
	}
}