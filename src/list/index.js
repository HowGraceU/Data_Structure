module.exports = class List {
	constructor() {
		this.pos = 0;
		this.store = [];

		Object.defineProperty(this, 'size', {
			get() {
				return this.store.length;
			}
		})
	}

	// 在列表末尾添加元素
	append(el) {
		return this.store.push(el);
	}

	// 从列表中删除
	remove(el) {
		let index = this.store.indexOf(el);
		if (index !== -1) {
			this.store.splice(index, 1);
		}

		return false;
	}

	// 情况列表所有元素
	clear() {
		this.pos = 0;
		this.store = [];
	}

	// 查找元素
	find(el) {
		return this.store.indexOf(el);
	}

	// 返回列表字符串形式
	toString() {
		return this.store.toString();
	}

	// 在现有元素后插入
	insert(preEL, insertEl) {
		let preIndex = this.find(preEL);
		if (preIndex !== -1) {
			this.store.splice(preIndex + 1, 0, insertEl);
			return true;
		}

		return false;
	}

	// 从列表的当前位置移动到第一个位置
	front() {
		this.pos = 0;
	}

	// 从列表的当前位置移动到最后一个位置
	end() {
		this.pos = this.size - 1;
	}

	// 将当前位置后移一位
	next() {
		this.pos = Math.min(this.pos + 1, this.size - 1);
	}

	// 将当前位置前移一位
	prev() {
		this.pos = Math.max(this.pos - 1, 0);
	}

	// 返回列表个数
	get length() {
		return this.size;
	}

	// 返回列表当前位置
	get currPos() {
		return this.pos;
	}

	// 将当前位置移动到指定位置
	moveTo(index) {
		this.pos = Math.max(0, Math.min(this.size - 1, index)) ;
	}

	// 显示当前的元素
	getElement() {
		return this.store[this.pos];
	}

	// 返回列表是否包含该元素
	contains(el) {
		return this.store.includes(el);
	}
}