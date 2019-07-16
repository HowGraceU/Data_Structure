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
mocha.run(() => {
    process.exit();
})