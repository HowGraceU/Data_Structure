const {
	join
} = require('path');
listPath = join(__dirname, '..', '..', 'src', 'graph');
const Graph = require(listPath);
const assert = require('assert')

describe('图基本功能测试', function () {
	it('基本功能测试', done => {
		const graph = new Graph(7);
		graph.addEdge(0, 1);
		graph.addEdge(0, 2);
		graph.addEdge(0, 3);
		graph.addEdge(1, 4);
		graph.addEdge(2, 5);
		graph.addEdge(4, 6);

		let edgs = [
			[1, 2, 3],
			[0, 4],
			[0, 5],
			[0],
			[1, 6],
			[2],
			[4]
		]

		console.log(edgs.map((arr, i) => `${i} => ${arr.join(',')}`).join('\n'));

		assert.equal(graph.showGraph(), edgs.map((arr, i) => `${i} => ${arr.join(',')}`).join('\n'));

		assert.equal(graph.dfs(0), '0,1,4,6,2,5,3');		

		assert.equal(graph.bfs(0), '0,1,2,3,4,5,6');

		done();
	});
})