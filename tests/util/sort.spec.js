const {
	join
} = require('path');
listPath = join(__dirname, '..', '..', 'src', 'sort');
const randomArr = require(listPath);
const assert = require('assert');

describe('排序算法测试', function () {
	it('随机数组基本功能测试', done => {
		let arr = new randomArr(100);

		assert.equal(arr.length, 100);

		let allNum = arr.every(item => {
			return typeof item === 'number' && 0 < item && item < 1000;
		});
		assert.equal(allNum, true);

		done();
	});

	it('冒泡排序基本功能测试', done => {
		let count = 10;
		while (count--) {
			let arr = new randomArr(100);
			let forkArr = Array.from(arr).sort((a, b) => a - b);

			arr.bubble();
			assert.equal(arr.toString(), forkArr.toString());
		}

		done();
	});

	it('冒泡排序时间测试', done => {
		let count = 10000;
		while (count--) {
			new randomArr(100).bubble();
		}

		done();
	});

	it('选择排序基本功能测试', done => {
		let count = 10;
		while (count--) {
			let arr = new randomArr(100);
			let forkArr = Array.from(arr).sort((a, b) => a - b);

			arr.selection();
			assert.equal(arr.toString(), forkArr.toString());
		}

		done();
	});

	it('选择排序时间测试', done => {
		let count = 10000;
		while (count--) {
			new randomArr(100).selection();
		}

		done();
	});

	it('插入排序基本功能测试', done => {
		let count = 10;
		while (count--) {
			let arr = new randomArr(100);
			let forkArr = Array.from(arr).sort((a, b) => a - b);

			arr.insertion();
			assert.equal(arr.toString(), forkArr.toString());
		}

		done();
	});

	it('插入排序时间测试', done => {
		let count = 10000;
		while (count--) {
			new randomArr(100).insertion();
		}

		done();
	});
})