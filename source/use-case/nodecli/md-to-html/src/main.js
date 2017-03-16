const program = require("commander");
const fs = require("fs");
const marked = require("marked");

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, "utf8", (err, file) => {
    if (err) {
        console.error(err.toString());
        process.exit(err.code);
        return;
    }
    const html = marked(file);
    console.log(html);
});
