const BTS = require('../BST');

module.exports = function heap(arr = this) {
	const bts = new BTS(arr[0]);

	for(let i = 1, len = arr.length; i < len; i++) {
		bts.insert(arr[i]);
	}

	return bts.heap();
}