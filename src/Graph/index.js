module.exports = class Graph {
	constructor(v) {
		this.vertices = v;
		this.edges = 0;
		this.adj = Array.from({
			length: v
		}).map(() => []);
	}

	addEdge(v, w) {
		let adj = this.adj;

		adj[v].push(w);
		adj[w].push(v);

		this.edges++;
	}

	showGraph() {
		let adj = this.adj;

		adj = adj.map((arr, i) => {
			return `${i} => ${arr.join(',')}`
		})

		return adj.join('\n');
	}

	// 深度优先
	dfs(v) {
		const res = [];
		const cycli = [];
		const mark = new Map();

		let cur = v;
		while (typeof cur === 'number') {
			if (!mark.has(cur)) {
				let arr = Array.from(this.adj[cur]);
				cycli.push(...arr.reverse());
				res.push(cur);

				mark.set(cur, true);
			}

			cur = cycli.pop();
		}

		return res.toString();
	}

	// 广度优先
	bfs(v) {
		const res = [];
		const cycli = [];
		const mark = new Map();

		let cur = v;
		while (typeof cur === 'number') {
			if (!mark.has(cur)) {
				cycli.push(...this.adj[cur]);
				res.push(cur);

				mark.set(cur, true);
			}

			cur = cycli.shift();
		}

		return res.toString();
	}
}