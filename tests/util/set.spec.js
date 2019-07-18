const {
	join
} = require('path');
listPath = join(__dirname, '..', '..', 'src', 'set');
const Gather = require(listPath);
const assert = require('assert')

describe('集合基本功能测试', function () {
	it('基本功能测试', done => {
		const set1 = new Gather([1, 2, 3, 4, 4]);
		const set2 = new Gather([2, 4, 6, 7]);

		assert.equal(set1.display(), '1,2,3,4');

		let intersect = Gather.intersect(set1, set2);
		assert.equal(intersect.display(), '2,4');

		let union = Gather.union(set1, set2);
		assert.equal(union.display(), '1,2,3,4,6,7');

		let complementary = Gather.complementary(set1, new Gather([1, 2, 3, 4, 5, 6]));
		assert.equal(complementary.display(), '5,6');

		let difference = Gather.difference(set1, set2);
		assert.equal(difference.display(), '1,3,6,7');

		done();
	});
})