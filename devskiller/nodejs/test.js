const Jasmine = require('jasmine');
const reporters = require('jasmine-reporters');
const jasmine = new Jasmine();

process.env.TZ = 'Europe/Warsaw'

var junitReporter = new reporters.JUnitXmlReporter({
    savePath: __dirname,
    consolidateAll: true,
    filePrefix: "test-results"
});
jasmine.env.addReporter(junitReporter);

jasmine.loadConfig({
  spec_dir: 'test',
  spec_files: ['**/*[sS]pec.js'],
  // helpers: ['helpers/**/*.js'],
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false
});

console.log(`Using Jasmine version: ${jasmine.jasmine.version}`)

jasmine.execute();
