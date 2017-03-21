const fs = require("fs");
const ls = require("ls");

var contents = {};
contents.regexps = [];
ls("./*", {type: 'file'}, /regexps_.*json/, function(file) {
  contents.regexps.push(JSON.parse(fs.readFileSync(file.file, 'utf8')));
});

process.stdout.write("# PatDetect Project\n");
process.stdout.write("This project aims to enumerate all of the world's commonly used string patterns.\n\n");

process.stdout.write("## Project Dependencies\n");
process.stdout.write("- [Discogs API](https://www.discogs.com/developers/)\n");
process.stdout.write("- [ZipCodeAPI.com](https://www.zipcodeapi.com/)\n\n");

process.stdout.write("## Contributing\n");
process.stdout.write("Please do not edit the README.md file yourself. ");
process.stdout.write("The only things I shall see in the PRs submitted to me will be appropriate ");
process.stdout.write("edits to the `regexp_*.json` files. ");
process.stdout.write("All other edits will be reviewed on a case-by-case basis.\n\n");

process.stdout.write("## Contact Information\n");
process.stdout.write("- Email: sunquan8094 dot gmail dot com\n\n");

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
