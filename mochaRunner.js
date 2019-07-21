const Mocha = require('mocha');
const {join} = require('path');

let mocha = new Mocha({
		reporter: 'mochawesome',
    reporterOptions: {
        reportDir: './docs/customReportFilename',
        // quiet: true
		}
});

mocha.addFile(join('tests', 'util', 'list.spec.js'));
mocha.addFile(join('tests', 'util', 'stack.spec.js'));
mocha.addFile(join('tests', 'util', 'queue.spec.js'));
mocha.addFile(join('tests', 'util', 'listNode.spec.js'));
mocha.addFile(join('tests', 'util', 'doubleListNode.spec.js'));
mocha.addFile(join('tests', 'util', 'set.spec.js'));
mocha.addFile(join('tests', 'util', 'BST.spec.js'));
mocha.addFile(join('tests', 'util', 'graph.spec.js'));
mocha.run(() => {
    process.exit();
})