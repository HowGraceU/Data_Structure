const {
	join
} = require('path');
listPath = join(__dirname, '..', '..', 'src', 'ListNode');
const ListNode = require(listPath);
const assert = require('assert')

describe('链表基本功能测试', function () {
	it('基本功能测试', done => {
		const listNode = new ListNode(1);

		let node2 = listNode.insert(2, 1);
		let node3 = listNode.insert(3, 2);
		let node4 = listNode.insert(4, 3);

		assert.equal(listNode.display(), '1 => 2 => 3 => 4');

		assert.equal(listNode.find(3), node3);
		assert.equal(listNode.find(5), false);
		assert.equal(listNode.findPrevious(2), listNode.head);
		assert.equal(listNode.findPrevious(5), false);

		let node2_5 = listNode.insert(2.5, 2);
		let node6 = listNode.insert(6, 5);
		assert.equal(listNode.display(), '1 => 2 => 2.5 => 3 => 4');

		listNode.remove(3);
		assert.equal(listNode.display(), '1 => 2 => 2.5 => 4');

		done();
	});
})