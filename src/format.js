const prettier = require("prettier/standalone")
const plug = [require("prettier/parser-babel")]


function format(code) {
    return prettier.format(code, {
        parser: "babel",
        plugins: plug
    })
}

module.exports = format