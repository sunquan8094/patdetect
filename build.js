const fs = require("fs");

var contents = {};
contents.regexps = [];
contents.regexps.push(JSON.parse(fs.readFileSync('regexps_hangeul.json', 'utf8')));
contents.regexps.push(JSON.parse(fs.readFileSync('regexps_hanzi.json', 'utf8')));
contents.regexps.push(JSON.parse(fs.readFileSync('regexps_numbers.json', 'utf8')));
contents.regexps.push(JSON.parse(fs.readFileSync('regexps_roman_upper.json', 'utf8')));

process.stdout.write("# PatDetect Project\n");
process.stdout.write("\n");
process.stdout.write("This project aims to enumerate all of the world's commonly used string patterns.\n");

process.stdout.write("## Table of Contents\n");
for (var o = 0; o < contents.regexps.length; o++) {
  process.stdout.write((o+1) + ". [" + contents.regexps[o].range_title + "](#" + contents.regexps[o].range_title_slug + ")\n");
}

for (var r = 0; r < contents.regexps.length; r++) {
  process.stdout.write("\n");
  process.stdout.write("## " + contents.regexps[r].range_title + "\n");
  for (var p = 0; p < contents.regexps[r].patterns.length; p++) {
    process.stdout.write("- " + contents.regexps[r].patterns[p].type["en-US"] + ": `/" +  contents.regexps[r].patterns[p].pattern + "/`\n");
  }
}
