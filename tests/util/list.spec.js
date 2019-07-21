const {
	join
} = require('path');
listPath = join(__dirname, '..', '..', 'src', 'list');
const List = require(listPath);
const assert = require('assert')

describe('列表基本功能测试', function () {
	it('append 函数测试', done => {
		const list = new List();

		list.append(1);
		list.append(2);
		list.append(3);
		assert.equal(list.currPos, 0);
		assert.equal(list.getElement(), 1);
		list.next()
		assert.equal(list.currPos, 1);
		assert.equal(list.getElement(), 2);
		list.next()
		assert.equal(list.currPos, 2);
		assert.equal(list.getElement(), 3);
		assert.equal(list.find(2), 1);
		assert.equal(list.length, 3);
		assert.equal(list.toString(), '1,2,3');
		done();
	});

	it('remove 函数测试', done => {
		const list = new List();

		list.append(1);
		list.append(2);
		list.append(3);

		list.remove(2)
		assert.equal(list.getElement(), 1);
		list.next()
		assert.equal(list.getElement(), 3);
		assert.equal(list.find(2), -1);
		assert.equal(list.length, 2);
		assert.equal(list.toString(), '1,3');

		assert.equal(list.remove(4), false);
		assert.equal(list.toString(), '1,3');
		done();
	});

	it('clear 函数测试', done => {
		const list = new List();

		list.append(1);
		list.append(2);
		list.append(3);

		list.clear();

		assert.equal(list.length, 0);
		assert.equal(list.toString(), '');
		done();
	});

	it('insert 函数测试', done => {
		const list = new List();

		list.append(1);
		list.append(2);
		list.append(3);

		list.insert(2, 4);

		list.insert(4, 5);
		list.insert(6, 7);

		assert.equal(list.length, 5);
		assert.equal(list.toString(), '1,2,4,5,3');
		done();
	});

	it('prev next 函数测试', done => {
		const list = new List();

		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);

		list.next();
		assert.equal(list.getElement(), 2);
		list.next();
		assert.equal(list.getElement(), 3);
		list.front();
		assert.equal(list.getElement(), 1);
		list.end();
		assert.equal(list.getElement(), 4);
		list.prev();
		assert.equal(list.getElement(), 3);
		done();
	});

	it('moveTo 函数测试', done => {
		const list = new List();

		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);

		list.next();
		assert.equal(list.getElement(), 2);
		list.moveTo(4);
		assert.equal(list.getElement(), 4);
		list.moveTo(1);
		assert.equal(list.getElement(), 2);
		done();
	});

	it('contains 函数测试', done => {
		const list = new List();

		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);

		assert.equal(list.contains(2), true);
		assert.equal(list.contains(4), true);
		assert.equal(list.contains(6), false);
		done();
	});
})