const fs = require("fs")

function interpret(code) {
    return code
        .replace(/\$(.*)\s*=\s*(.*)\s*\->\s*\{\s*(.*)\s*\}/gim, "let $1 = ($2) => {\n $3 \n}")
        .replace(/import\s(.*)\sas(.*)/gim, "const $2 = require(\"$1\")")
        .replace(/puts\s(.*)/gim, 'console.log($1);')
        .replace(/System\.(.*)/gim, 'console.$1;')
        .replace(/def\s(.*)\(\s*(.*)\s*\)\s*\{\s*(.*)\s*\}/gim, "function $1 ($2) { $3 }")
        .replace(/\$(.*)\s*=\s*(.*)/gim, "var $1 = $2")
        .replace(/#\s*(.*)/gim, "// $1")
        .replace(/from\s+(.*)\s+import\s+(.*)/gim, "const { $2 } = require('$1')")
        .replace(/pubmodule\s+(.*)/gim, "module.exports = {\n$1\n}")
        .replace(/(.*).count/gim, "$1.length")
        .replace(/(.*).eq\s*\(\s*(.*)\s*\)/gim, "$1 === $2")
        .replace(/if\s+(.*)\s*\{\s*(.*)\s*\}/gim, "if ($1) {\n$2\n}")
        .replace(/while\s+(.*)\s*\{\s*(.*)\s*\}/gim, "while ($1) {\n$2\n}")
        .replace(/for\s+(.*)\s*\{\s*(.*)\s*\}/gim, "for ($1) {\n$2\n}")
        .replace(/elif\s+(.*)\s*\{\s*(.*)\s*\}/gim, "else if ($1) {\n$2\n}")
        .trim()
}

let file = process.argv[2]
let out = process.argv[3]
if (!file) throw "Error";
fs.readFile(file, {
    encoding: "utf-8",
    flag: "r"
}, (err, data) => {
    if (err) throw err;

    fs.writeFile(out, interpret(data), () => {
        console.log("succes");
    })
})
