const {
	join
} = require('path');
listPath = join(__dirname, '..', '..', 'src', 'queue');
const Queue = require(listPath);
const assert = require('assert')

describe('队列基本功能测试', function () {
	it('基本功能测试', done => {
		const queue = new Queue();

		assert.equal(queue.empty(), true);

		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		assert.equal(queue.toString(), 
`1
2
3`);

		queue.dequeue();
		assert.equal(queue.toString(), 
`2
3`);
		assert.equal(queue.length, 2) 

		queue.enqueue(5);
		assert.equal(queue.front(), 2);
		assert.equal(queue.toString(), 
`2
3
5`);
		assert.equal(queue.back(), 5);

		assert.equal(queue.empty(), false);

		done();
	});
})