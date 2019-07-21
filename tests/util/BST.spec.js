const {
	join
} = require('path');
listPath = join(__dirname, '..', '..', 'src', 'BST');
const BST = require(listPath);
const assert = require('assert')

describe('二叉树基本功能测试', function () {
	it('基本功能测试', done => {
		const bst = new BST(50);
		const node_25 = bst.insert(25);
		bst.insert(15);
		bst.insert(30);
		bst.insert(30);
		bst.insert(35);
		bst.insert(32);
		bst.insert(34);
		const node_55 = bst.insert(55);
		bst.insert(53);
		bst.insert(54);
		bst.insert(75);
		bst.insert(67);
		bst.insert(70);

		assert.equal(bst.inOrder(), '15,25,30,32,34,35,50,53,54,55,67,70,75');
		assert.equal(bst.find(50), bst.root);
		assert.equal(bst.find(25), node_25);
		assert.equal(bst.find(55), node_55);
		assert.equal(bst.find(72), false);

		assert.equal(bst.getMin().show(), 15);
		assert.equal(bst.getMax().show(), 75);

		bst.remove(15);
		assert.equal(bst.inOrder(), '25,30,32,34,35,50,53,54,55,67,70,75');

		bst.remove(30);
		assert.equal(bst.inOrder(), '25,32,34,35,50,53,54,55,67,70,75');

		assert.equal(bst.remove(58), false);

		bst.remove(55);
		assert.equal(bst.inOrder(), '25,32,34,35,50,53,54,67,70,75');

		bst.remove(35);
		assert.equal(bst.inOrder(), '25,32,34,50,53,54,67,70,75');

		bst.remove(50);
		assert.equal(bst.inOrder(), '25,32,34,53,54,67,70,75');

		done();
	});
})