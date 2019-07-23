const bubble = require('./bubble.js');
const selection = require('./selection.js');
const insertion = require('./insertion.js');
const shell = require('./shell.js');
const merge = require('./merge.js');
const quick = require('./quick.js');
const heap = require('./heap.js');

class randomArr extends Array {
	constructor(num) {
		super(num);

		this.fill().forEach((item, index, arr) => {
			arr[index] = this.randomNum();
		})
	}

	randomNum() {
		return parseInt(10000 * Math.random());
	}

	swap(i, j) {
		const arr = this;
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}

randomArr.prototype.bubble = bubble;
randomArr.prototype.selection = selection;
randomArr.prototype.insertion = insertion;
randomArr.prototype.shell = shell;
randomArr.prototype.merge = merge;
randomArr.prototype.quick = quick;
randomArr.prototype.heap = heap;

module.exports = randomArr;