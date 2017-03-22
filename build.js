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

process.stdout.write("## Getting Started\n");
process.stdout.write("In order to run the application, you will need a file called `settings.json` and valid credentials for the above dependencies. ");
process.stdout.write("Please refer to the the above links for instructions on obtaining credentials. Please also note that any applicable limits will be enforced by the hosts.\n");
process.stdout.write("I have put `settings.json` in the `.gitignore` file for obvious reasons, ");
process.stdout.write("so here is a workaround I strongly advise that you follow: \n\n");

process.stdout.write("1. Copy `settings_template.json` into a file called `settings.json`.\n");
process.stdout.write("2. Fill in the blanks accordingly.\n");
process.stdout.write("3. Execute it within the bounds of the limits by executing `node main.js <query>` in your command line interface.\n\n");

process.stdout.write("## Contributing\n");
process.stdout.write("Please do not edit the README.md file yourself. ");
process.stdout.write("The only things I shall see in the PRs submitted to me will be appropriate ");
process.stdout.write("edits to the `regexp_*.json` files. ");
process.stdout.write("All other edits will be reviewed on a case-by-case basis.\n\n");

process.stdout.write("## Contact Information\n");
process.stdout.write("- Email: sunquan8094 dot gmail dot com\n\n");

process.stdout.write("## In-person Demonstrations\n");
process.stdout.write("As I have yet to make a public release, I am willing to do in-person demonstrations. ");
process.stdout.write("If you just so happen to be on the island of O'ahu in Hawaii and would like to see this in action, feel free to email me to arrange a demonstration date and time. Location is negotiable as long as it is on the island.\n\n");

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
