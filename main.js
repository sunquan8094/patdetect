const fs = require("fs");
const ls = require("ls");
const https = require("https");
const Discogs = require("disconnect").Client;

var str = process.argv[2];

var contents = {};
contents.regexps = [];
ls("./*", {type: 'file'}, /regexps_.*json/, function(file) {
  contents.regexps.push(JSON.parse(fs.readFileSync(file.file, 'utf8')));
});

var config = JSON.parse(fs.readFileSync('settings.json', 'utf8'));

var retval = [];
var funk_q = [];

var r = 0;

for (r = 0; r < contents.regexps.length; r++) {
  if (str.charCodeAt(0) >= contents.regexps[r].start.charCodeAt(0) && str.charCodeAt(0) <= contents.regexps[r].end.charCodeAt(0)) {
    break;
  }
}

if (r == contents.regexps.length) {
  console.log("No matches found.");
  return;
}

for (var p = 0; p < contents.regexps[r].patterns.length; p++) {
  if (str.match(new RegExp("^" + contents.regexps[r].patterns[p].pattern + "$"))) {
    retval.push(contents.regexps[r].patterns[p].type["en-US"]);
    funk_q.push(contents.regexps[r].patterns[p].func);
  }
}

if (retval.length == 0) {
  console.log("No matches found.");
}
else {
  console.log("Chances are this string could be one of the following:");
  for (var g = 0; g < retval.length; g++) {
    console.log("- " + retval[g]);
    if (funk_q[g] !== "0")
    {
      eval(funk_q[g].data);
      eval("function func(str,cb) { " + funk_q[g].func + " }");
      eval("var cb = " + funk_q[g].cb + ";");
      func(str, cb);
    }
  }
}
