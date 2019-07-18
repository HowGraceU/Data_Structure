module.exports = class Gather extends Set {
	constructor(arr) {
		super(arr);
	}

	display() {
		let arr = Array.from(this);

		return arr.toString();
	}

	// 交集
	static intersect(set1, set2) {
		let arr1 = Array.from(set1);
		let arr2 = Array.from(set2);

		return new this(arr1.filter(item => arr2.includes(item)));
	}

	// 并集
	static union(set1, set2) {
		let arr1 = Array.from(set1);
		let arr2 = Array.from(set2);

		return new this(arr1.concat(arr2));
	}

	// 补集
	static complementary(set1, set2) {
		let arr1 = Array.from(set1);
		let arr2 = Array.from(set2);

		return new this(arr2.filter(item => !arr1.includes(item)));
	}

	// 差集
	static difference(set1, set2) {
		return this.complementary(this.intersect(set1, set2), this.union(set1, set2));
	}
}