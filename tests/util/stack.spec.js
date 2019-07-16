const {
	join
} = require('path');
listPath = join(__dirname, '..', '..', 'src', 'stack');
const Stack = require(listPath);
const assert = require('assert')

describe('栈基本功能测试', function () {
	it('基本功能测试', done => {
		const stack = new Stack();

		stack.push(1);
		assert.equal(stack.top, 1);
		stack.push(2);
		assert.equal(stack.top, 2);
		stack.push(3);
		assert.equal(stack.top, 3);
		stack.push(4);
		assert.equal(stack.top, 4);

		assert.equal(stack.peek(), 4);

		stack.pop();
		assert.equal(stack.top, 3);
		assert.equal(stack.peek(), 3);

		stack.pop();
		assert.equal(stack.top, 2);
		assert.equal(stack.peek(), 2);

		stack.clear();
		stack.push(3);
		assert.equal(stack.top, 1);
		assert.equal(stack.peek(), 3);

		done();
	});
})